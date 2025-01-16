To resolve this issue, ensure your Tailwind CSS configuration (`tailwind.config.js` in Next.js) correctly specifies the paths to your components.  This ensures PurgeCSS considers the classes used within those components.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Key improvements:**

-   **Explicit Component Paths:** The `content` array explicitly includes `'./components/**/*.{js,ts,jsx,tsx}'`, ensuring components are scanned for Tailwind classes.
-   **Comprehensive File Extensions:**  It supports `.js`, `.ts`, `.jsx`, and `.tsx` files.  Adjust as needed for your project's setup. 

If the issue persists, consider using `@apply` directives or manually adding necessary styles. Make sure you have the latest versions of Tailwind, PurgeCSS and Next.js.