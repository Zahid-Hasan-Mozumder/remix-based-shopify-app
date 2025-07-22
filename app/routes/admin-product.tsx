import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { session } = await authenticate.admin(request);
  
  // Get any query parameters from Shopify
  const url = new URL(request.url);
  const resourceId = url.searchParams.get("id");
  
  return json({
    resourceId,
    shop: session.shop,
  });
};

export default function AdminExtension() {
  const { resourceId, shop } = useLoaderData<typeof loader>();
  
  return (
    <div>
      <h1>Admin Product Extension</h1>
      <p>Shop: {shop}</p>
      {resourceId && <p>Resource ID: {resourceId}</p>}
      {/* Your extension UI here */}
    </div>
  );
}