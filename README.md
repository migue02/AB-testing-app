# RacketPal Miguel Morales Rodriguez Assignment

## Code the frontend part in React-Native or ReactJs (bonus points for React-Native) of the two variations (control and test), including:

### The A/B test mechanism

-   To control the A/B test I've created `ABTesting` context. The context has this type:
    -   `export type ABTestingContextType = {popupUserData?: PopUpUserData,shouldPopupBeShown: () => boolean; }`
    -   Where `popupUserData` is the data retrieved from the backend which allows us to know:
        -   **totalShown**: Times the popup has been shown to the user.
        -   **lastDate**: Last date the popup was shown.
        -   **hasUserFeedback**: If the user rated the app or if the user gave feedback.
        -   **installationDate**: Date the user installed the app.
        -   **type**: ABTesting type for this user.
    -   And `shouldPopupBeShown` is a function that check using the above values, if this user should receive a rate us popup. The logic is split to check A(test) logic or B(control) logic depending on the **type** value obtained form the Backend.
-   This `ABTesting` context with its provider, can be used with the `useABTesting` hook, in order to get `popupUserData` and/or `shouldPopupBeShown`
-   `useABTesting` has been used in the Home page, where is triggered the first time the page is shown, and checks if the PopUp has to be shown. If it has to be shown then it will display it.

### Tracking events so we can measure the results. Tracking the user is one of the most important parts of our app, the events are helping us make more informed decisions when we want to build something new.

-   To track events I've created the `MonitoringData` context. This context is a scalable component where you can add as many monitoring clients as you wish. It's an abstract component where it doesn't matter which data each client is using.
-   The first time you setup the `MonitoringData` context you have to pass the clients you want to use. With the array of clients (check `createABTestingDataClient` and its type) this context will initialise all of them just once. This initialisation inside the provider will call the `init` function of all clients of the passed array. This is done like this because usually monitoring clients has to somehow initialise the client with a specific key or extra configuration options.
-   `MonitoringData` has several functions that will allow the app to send events (events and exceptions)
    -   **triggerMonitoringEvent**: When this function is called, all clients will trigger its own `logEvent` function.
    -   **logMonitoringException**: When this function is called, all clients will trigger its own `logException` function.
-   To use te monitoring context you will just simply have to:
    -   `const { triggerMonitoringEvent } = useMonitoring();`
    -   `triggerMonitoringEvent(event: AnalyticsEvent);`
    -   When `triggerMonitoringEvent` is called it will execute all `logEvent` function for all clients added.
    -   In this particular case please check `logEvent` of `client/ABTestingDataClient/index.ts` file.

This app only has one client: **ABTestingDataClient**

-   I've only added console.logs in order to see all events that are happening in the app.
-   In a real world scenario the client should setup in the `init` function a used in `logEvent` and `logException` to send to the backend the data.
-   I've created some utils function to get the data needed per each event, please check `utils/events.ts` file.

## Highlight the required backend information. Will be great if you can also draw a flow of the whole feature

-   About the events sent to the Backend I've already explained them:
    -   This app only has one client: **ABTestingDataClient**
        -   I've only added console.logs in order to see all events that are happening in the app.
        -   In a real world scenario the client should setup in the `init` function a used in `logEvent` and `logException` to send to the backend the data.
        -   I've created some utils function to get the data needed per each event, please check `utils/events.ts` file.
-   The other things to mention about the backend would be:
    -   I'm assuming we can get this data from the user:
        -   **totalShown**: Times the popup has been shown to the user.
        -   **lastDate**: Last date the popup was shown.
        -   **hasUserFeedback**: If the user rated the app or if the user gave feedback.
        -   **installationDate**: Date the user installed the app.
        -   **type**: ABTesting type for this user.
    -   I'm assuming we have the loggedUser already saved (something like react-query) and we don't need to call the backend every time we want to get the logged used:
        -   `getLoggedUser` in `/utils/backend.ts` file.
    -   I'm assuming every time the logEvent is called the data will be updated.
    -   This is the data that should be updated per event:
        -   **RATING**:
            -   hasUserFeedback: from false to true
            -   _stars_: stars entered by the user
            -   _feedback_: feedback text by the user
            -   lastDate: to Date.now()
            -   totalShown: totalShown + 1
                > Note: _stars_ and _feedback_ are not returned to the app because we don't need them, but they live in the backend.
        -   **REMIND_LATER**:
            -   lastDate: to Date.now()
            -   totalShown: totalShown + 1
        -   **MODAL_CLOSED**:
            -   lastDate: to Date.now()
            -   totalShown: totalShown + 1
        -   **GO_TO_RATE_STORE**:
            -   hasUserFeedback: from false to true
            -   lastDate: to Date.now()
            -   totalShown: totalShown + 1
        -   **GO_ON_GET_FEEDBACK**:
            -   hasUserFeedback: from false to true
            -   lastDate: to Date.now()
            -   totalShown: totalShown + 1

## Highlight any missing specs and any assumptions you had to make

All assumptions I've made about the backend are added to the above sections.
I assumed this way of showing the popup:

-   In the Home page check if the popup has to be shown
    -   If it has to be shown wait 1 second so it's not shown as soon as the page is shown.
    -   If it hasn't to be shown don't show it
-   The fake user will have assigned to him/her one specific testing type based on this function `getRandomABTesting`
    -   In order to see both implementations I've added two buttons so you can see both popups and test the way the events are sent.

## Todo

-   Create tests specially for the two contexts:
    -   ABTesting
    -   MonitoringData
-   Add exception cases
-   Add comments
-   Refactor the use of fonts
-   Refactor how the types are specified, maybe too spread in the code
