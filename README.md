# react-notes-amplified

code from course `https://amplify.aws/learn/courses/Fullstack-for-Frontend-Developers-e7319`

--------------

- You have to upgrade `Amplify UI` to latest version while syncing from `figma`.
- While initializing model `Note`, make sure to deploy it, and make sure it has these auto-generated properties: `createdAt`, `updatedAt` 
- after `amplify pull ...` you have to:
  * run `amplify codegen models` to generate `src/models`.
  * rum `amplify codegen statements` to generate `src/graphql`
  * rum `amplify codegen types` to generate `src/API.ts`

