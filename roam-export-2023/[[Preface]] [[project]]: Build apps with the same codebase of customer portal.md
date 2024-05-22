- [Shared](https://docs.google.com/document/d/1iTeKwBI6-KdmstsAsnhNx_HHFYd9keDbue9lubnJPIc/edit) [[Ben Cheng]]
- Related to [[[[Preface]] [[product]]: Customer Portal]]
- Start to explore the framework
    - {{[[DONE]]}}  Working on installing [solito](https://solito.dev) with a blank next.js 👏🏼 finished on [[February 1st, 2023]]
        - The tutorial is not from a ground up.
        - Need to do so from ground up, so I look into the codebase of blank repo in the [example of solito](https://github.com/nandorojo/solito/tree/master/create-solito-app)
            - [[nodejs]] has a [workspace](https://docs.npmjs.com/cli/v9/using-npm/workspaces?v=true) concept for monorepo
- {{[[DONE]]}} Add to build and deploy on [EAS](https://expo.dev) 👏🏼 finished on [[February 6th, 2023]]
    - It is very easy to build and deploy apps 
        - with just 99USD per year I can outsource CI/CD to it.
            - sounds legit
            - need to see what is the trade-off
        - `eas build --local` to try stuff in local
            - need to set up everything
            - But the credential still need to get from remote
- {{[[DONE]]}} Able to add a new blank screen
    - New terminology: [[tree shaking]]
        - https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking
        - Basically means dead code from libraries is removed and the bundle size will be smaller in build time.
    - https://solito.dev/guides/new-route
        1. Create a new screen in the common `packages/app/` folder for both react-native and nextjs to call
            - Create a file at `packages/app/features/XXX/screen.tsx`
                - `export function XXXScreen() { ... }` to export the screen
        2. create an import in nextjs folder `apps/next/pages`
            - `export { XXXScreen as default } from 'app/features/settings/screen'`
        3. create a `Stack.Screen` in React Native side by adding related code in `packages/app/navigation/native/index.tsx`
            - Copy and change the code already in it will be fine. 3 parts:
                - import the screen
                - add to the `const Stack`
                - add to the `export function Native Navigation() {}`
        4. create a native "linking by adding XXX to `packages/app/provider/navigation/index.tsx`
            - add to the `config.screens` key in the `linking` parameter of `NavigationContainer`
        5. create Link href='/xxx' OR `router.push('/xxx')` if we use `solito/router`
- {{[[DONE]]}}  Run and build the nextJS app successfully once after putting customer-portal codebase to the folder of `app/next`
    - Cannot be built with the following error
        - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2FWZEzGt0eFu.34.39.png?alt=media&token=d0de3d61-b607-4144-9d80-f2b4620d8be4)
            - Can't resolve 'fs'
            - Tried to use `tsconfig.json` workaround with no avail ❌
                - ```javascript
  webpack: (config, { isServer }) => {
    if (!isServer) {
        // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
        config.resolve.fallback = {
            fs: false,
            "ts-node": false,
            module: false
        }
    }```
            - NextJS 13 has moved to a new compiler [swc](https://swc.rs/) instead of [babel](https://babeljs.io/) , which render [lingui/marco](https://lingui.dev/guides/typescript) not working 🤦🏼‍♂️
                - https://github.com/lingui/js-lingui/issues/1224
                - [Solution](https://github.com/lingui/swc-plugin/pull/10/files#diff-a2f08614ff582eb938072e6687452bf026189b2639d5ff9d4feb1a625951e2d0)
    - NextJS 13 has a different behavior of `<Link>`
        - [Solution](https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor)
    - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2FbWJyPKV3W_.52.35.png?alt=media&token=0526f7d2-dac4-4db1-b81f-02c5792737bc)
- {{[[DONE]]}}  Migrate `login` to the shared folder. 👏🏼 finished on [[March 13th, 2023]]
    - {{[[DONE]]}}  Really formulate the steps to migrate the UI components 👏🏼 finished on [[February 24th, 2023]]
        - #decision 
            - we choose to recreate the UI because the "translation effort is too big for now
    - {{[[ARCHIVED]]}}  Migrate `Button` to the shared folder
        - One of the uncertainty is that whether we can use mui in material ui. Asked the creator if we can use `mui/material` in our `packages/app` 
            - Not successful
                - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2FqIaVw_YZ99.56.03.png?alt=media&token=31fe0ff8-2dba-412d-b478-6a0732ba7611)
                - The `MuiButtonBase` cannot be used in react-native
            - Thanks to the author of solito.dev [[Fernando Rojo]]
                - https://solito.dev/recipes/tree-shaking
                - We can use file with extension like `.native.ts` or `.ios.ts` or `.android.ts` or `.web.ts` to specify the specific code for specific platforms
    - {{[[DONE]]}}  Formulate Migration Steps 👏🏼 finished on [[February 7th, 2023]]
        - Luckily we do a wrapper around the UI components already, but I can foresee most of the codebase may not be the same.
        - {{[[DONE]]}}  migrate all `app/next/components` to `packages/app/components`
        - {{[[DONE]]}}  Redirect `pages` in NextJS to use those components instead
        - {{[[DONE]]}}  Migrate `login.js` logics from `pages` to `packages/app/screen` 👏🏼 finished on [[February 10th, 2023]]
        - {{[[DONE]]}}  Rename all file from `abc.js` to `abc.web.js` 👏🏼 finished on [[February 16th, 2023]]
        - {{[[DONE]]}}  Create `.native.js` for components that is used by `login.js` 👏🏼 finished on [[February 16th, 2023]]
            - We can choose to no-op OR {{[[DONE]]}}  Ultimately really need to choose a UI Kit to merge the look and feel mobile and web 👏🏼 finished on [[February 24th, 2023]]
        - {{[[DONE]]}}  Create RN Navigation to `login.js` 👏🏼 finished on [[February 16th, 2023]]
    - {{[[DONE]]}}  Ultimately really need to choose a UI Kit to merge the look and feel mobile and web 👏🏼 finished on [[February 24th, 2023]]
        - Choices
            - [React Native Paper](https://callstack.github.io/react-native-paper/index.html)
            - [Tamagui](https://tamagui.dev/docs/intro/introduction)
            - [Dripsy](https://www.dripsy.xyz/)
        - #decision
            - We have chosen [React Native Paper](https://callstack.github.io/react-native-paper/index.html) for a few reason
                - I choose [Tamagui](https://tamagui.dev/docs/intro/introduction) to test out  has not been a fit for the current project and team
                    - [Tamagui](https://tamagui.dev/docs/intro/introduction) API is very different from the MUI
                        - Team has a big learning curve
- {{[[DONE]]}}  Style?
- {{[[DONE]]}}  Babel Macro for translation with lingui.dev 👏🏼 finished on [[February 16th, 2023]]
    - #frontend-bullshit use `npm` instead of `yarn`
- {{[[DONE]]}}  react-query? 👏🏼 finished on [[February 21st, 2023]]
    - https://blog.logrocket.com/react-query-state-management-react-native/
    - Hypothesis: There is no code change for it.
        - The hypothesis is right but the building steps are different.
    - React-query is putting a wrapper in `_app.js` and override `fetch` API for it.
    - {{[[DONE]]}} Transform `process.env.WHATEVER` in NextJS side to compiled bundled string in  👏🏼 finished on [[February 21st, 2023]]
        - ```javascript
module.exports = function (api) {
  return {
    //......
    plugins: [
      'macros',
      'react-native-reanimated/plugin',
      "inline-dotenv", //MUST COME BEFORE transform-inline-environment-variables
      ["transform-inline-environment-variables", {"include": [
          "NEXT_PUBLIC_PREFACE_API_URL"
        ]}],
    ]
  }```
        - Also #frontend-bullshit the clear cache in expo !== to clear cache in babel, to clear cache in babel I need to add / remove a line of `console.log('blah');`
- {{[[DONE]]}}  Storage? 👏🏼 finished on [[February 21st, 2023]]
    - [React Native Async Storage Doc](https://react-native-async-storage.github.io/async-storage/docs/install/)
- {{[[DONE]]}}  Deeplink?  👏🏼 finished on [[February 21st, 2023]]
    - https://solito.dev/recipes/deep-linking
    - As long as we use React Navigation, the deep linking will be working.
- {{[[ARCHIVED]]}}  Notification??
    - https://docs.expo.dev/push-notifications/faq/
    - https://docs.expo.dev/versions/latest/sdk/notifications/
    - https://developer.mozilla.org/en-US/docs/Web/API/Push_API
    - 
-  Stripe checkout?
    - Use Tree shaking to create native specific stripe checkout flow.
- Safe Area is mobile specific screen space that is different
    - https://reactnavigation.org/docs/handling-safe-area
- {{[[ARCHIVED]]}}  Change Vercel config to fit in the monorepo pattern
- {{[[ARCHIVED]]}}  Test out Expo App store 
- {{[[ARCHIVED]]}}  Test out App store summit criteria
- {{[[ARCHIVED]]}}  Demo App for [[[[Preface]] [[project]]: Build apps with the same codebase of customer portal]] for tomorrow Leadership team meeting
    - {{[[DONE]]}}  Really formulate the steps to migrate the UI components 👏🏼 finished on [[February 24th, 2023]]
        - #decision 
            - we choose to recreate the UI because the "translation effort is too big for now
    - {{[[DONE]]}}  Recreate `login.js` in a solito way 👏🏼 finished on [[March 13th, 2023]]
        - UI Architecture
            - Dependency tree of main UI libraries
                - React-Native (React Native Web)
                    - React Native Reanimated (For Animation)
                        - Moti (For more declarative animation)
                    - Dripsy (For style and responsiveness)
                    - React Native Paper (For UI kit)
        - {{[[DONE]]}}  Keyboard will be blocking the TextInput 👏🏼 finished on [[February 24th, 2023]]
            - Used a custom solution to hide the hero image with a good enough animation
            - Alternatively we can use `<KeyboardAvoidingView>`
        - {{[[DONE]]}} For iOS / Android to jump to the next `TextInput` in the soft keyboard 👏🏼 finished on [[February 27th, 2023]]
            - ```javascript
TouchableWithoutFeedback, Keyboard.dismiss, returnKeyType="next", autoCapitalize="none", onSubmitEditing={}, createRef() vs useRef(), RNTextInput vs RNPTextInput```
        - {{[[DONE]]}}  Route to `/home` and create a logout button 👏🏼 finished on [[March 1st, 2023]]
        - {{[[DONE]]}}  SplashScreen and route to `/home` if logged in, `/login` if otherwise 👏🏼 finished on [[March 13th, 2023]]
        - {{[[DONE]]}}  Custom Fonts 👏🏼 finished on [[February 27th, 2023]]
            - We can do static fonts but not variable fonts.
- {{[[DONE]]}}  Looking for ways to do font and color in theme level of react native paper and dripsy 👏🏼 finished on [[March 10th, 2023]]
    - https://github.com/expo/google-fonts
- {{[[ARCHIVED]]}}  Build a new login page and share among web and mobile
    - A lot of build problems
    - https://loom.com/share/75d2dab1e1a44cf0a99375d5160fe92c
        - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2FjTNwszN0nO.14.19.png?alt=media&token=49907c66-ff99-4c22-a55f-d2abf9c3a41d)
    - {{[[video]]: https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2FaWFURXs-rs.mp4?alt=media&token=84d3e14e-eebf-4918-bf98-8a458bef9ffb}}
    - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2F5itwYS6aT3.11.40.png?alt=media&token=3d7324cc-761a-4d07-b834-3389799fe340)
    - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2F6z_X0ePXOL.35.53.png?alt=media&token=245fe211-f45d-4929-afae-51d9adb174f4)
    - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2F7LXbLsuEZ5.37.07.png?alt=media&token=2242ed71-4946-4e7c-8fec-7e1f3c0ec208)
    - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2FgBbDzQ0Hyt.04.03.png?alt=media&token=fa246ae9-ebbe-4b08-a6b7-ec309d44a2f0)
    - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2FLi6orY3C9Z.04.03.png?alt=media&token=17ef77f3-6b4b-48c2-b617-ce3b2e40c42c)
    - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2FH2VgQ968LY.54.47.png?alt=media&token=a4e98bb9-e445-43fd-ae16-bc96eb6a3f62)
    - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2FxD_9bge9Pv.04.03%20(1).png?alt=media&token=cf4a51f8-93e8-42f4-85ae-83854675c040)
    - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2F33n_IC7Bqc.09.34.png?alt=media&token=a5d64928-7391-445d-bf5f-3e750b209b8e)
    - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2FwT6188xU3j.45.50.png?alt=media&token=4bdc8b85-394b-4597-84a0-55c24d3d7d3b)
    - https://github.com/nandorojo/solito/blob/master/example-monorepos/with-expo-router/apps/next/pages/_app.tsx <---- this is the key
    - {{[[video]]: https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaChaanTengv3%2FJbZDGGHr2a.mp4?alt=media&token=a2d56dc8-5319-4bc4-8bfa-47f35c0e8596}}
