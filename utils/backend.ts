import { ABTestingTypes } from "../client/ABTestingDataClient/types";
import { getRandomABTesting } from "../client/utils";

const fakeBackend = async (user?: string) => {
    return new Promise(resolve => setTimeout(resolve, 4000));
}

/**
 * totalShown - Times the popup has been shown to the user
 * lastDate - Last date the popup was shown
 * hasUserFeedback - If the user rated the app or if the user gave feedback
 * installationDate - Date the user installed the app
 * type - ABTesting type
*/
export type PopUpUserData = {
    totalShown: number,
    lastDate: number,
    hasUserFeedback: boolean,
    installationDate: number;
    type: ABTestingTypes,
}

export const getLoggedUser = () => 'user';

export const getPopupUserData = async (): Promise<PopUpUserData> => {
    await fakeBackend(getLoggedUser());
    return {
        totalShown: 0,
        lastDate: Date.now(),
        hasUserFeedback: false,
        installationDate: Date.now(),
        type: getRandomABTesting()
    };
}
