### NEXTJS SETUP
Start a project from scratch with create-next-app.
```sh
create-next-app storybook --use-npm
npm install --save-dev typescript @types/react @types/node
touch tsconfig.json
npm run dev
```
this will start NextJS, which will automagically recognize our newly created `tsconfig.json` and inject a valid configuration.
rename a `/pages/_app.js` & `/pages/index.js` file into `/pages/_app.tsx` & `/pages/index.tsx`

### TAILWINDCSS SETUP
Install the TailwindCSS library and some useful PostCSS polyfills
```sh
npm install --save-dev tailwindcss postcss-preset-env
```
Generate a `tailwind.config.js` file
```sh
npx tailwind init
```
Edit `tailwind.config.js` file
```sh
module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```
Create `postcss.config.js` to configure PostCSS in a minimal way, like the following
```sh
module.exports = {
  plugins: [
    "tailwindcss", 
    "postcss-preset-env"
  ]
};
```
Edit `/styles/globals.css` and populate it using the postcss-import-friendly `@import` directives (instead of using `@tailwind`)
```sh
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```
Make sure `/styles/globals.css` is imported inside `/pages/_app.tsx`
```sh
import "../styles/globals.css"; // <- applied everywhere in the NextJS application scope
```
