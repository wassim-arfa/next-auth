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
