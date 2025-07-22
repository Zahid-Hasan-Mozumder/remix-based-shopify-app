# Shopify App using Remix and Shopify CLI

This project is a custom Shopify App built using **Remix**, **TypeScript**, and the **Shopify CLI**. It includes steps to initialize the app, set up a development environment, create extensions, and configure custom actions within the Shopify admin.

---

## 🛠️ Requirements

- [Shopify Partner Account](https://partners.shopify.com/)
- Development store under your Partner account
- Node.js & npm installed
- Shopify CLI installed globally

---

## 🚀 Getting Started

### 1. Create Shopify Partner Account

1. Visit [Shopify Partners](https://partners.shopify.com/) and sign up.
2. Go to `Stores`.
3. Create a **Development Store** by selecting the option “Create for a client”.

---

### 2. Install Shopify CLI

```bash
npm install -g @shopify/cli @shopify/app
```

### 3. Create a New Shopify App using Remix

```bash
shopify app init
```
When prompted:

1. Select 'Build a Remix app'

2. Select TypeScript for the language

3. Choose 'Create it as a new app'

4. Name your app (e.g., my-shopify-app)

5. Move into the app folder:

```bash
cd my-shopify-app
```

### 4. Create a New Extension

```bash
shopify app generate extension
```

### 5. Run Your App Locally

```bash
shopify app dev
```

### 6. Configure Extension Target and URL

In your extension's shopify.extension.toml file:

```bash
target = "admin.product-details.action.link"
url = "/admin-product-management"
```
Here, the url will define what will be the view for the action in 'admin-product-management.tsx' file.

To change the name of the action, visit 'action_folder/locales/en.default.json'
