import React, { createContext, FC, useContext } from 'react';
import { daysBetweenDates, hoursBetweenDates } from '../../utils';
import { ABTestingContextType, ABTestingProviderType } from './../types';

const contextDefaults: ABTestingContextType = {
    shouldPopupBeShown: () => false,
};

const ABTestingContext = createContext<ABTestingContextType>(contextDefaults);

export const ABTestingProvider: FC<ABTestingProviderType> = ({
    children,
    popupUserData,
}) => {
    const shouldControlPopupBeShown = (): boolean => {
        if (!popupUserData) {
            return false;
        }

        const { totalShown, lastDate } = popupUserData;
        if (totalShown >= 3) {
            return false;
        } else if (lastDate) {
            return hoursBetweenDates(new Date(lastDate), new Date()) < 24;
        }

        return true;
    };

    const shouldTestPopupBeShown = (): boolean => {
        if (!popupUserData) {
            return false;
        }

        const { lastDate, installationDate } = popupUserData;

        const daysSinceInstallation = daysBetweenDates(
            new Date(installationDate),
            new Date()
        );
        const daysSinceLastShownPopup = daysBetweenDates(
            new Date(lastDate),
            new Date()
        );
        const isFirstMonthSinceInstallation = daysSinceInstallation <= 30;

        if (isFirstMonthSinceInstallation) {
            return daysSinceLastShownPopup < 7;
        } else {
            return daysSinceLastShownPopup < 30;
        }
    };

    const shouldPopupBeShown = (): boolean => {
        if (!popupUserData) {
            return false;
        }

        const { type, hasUserFeedback } = popupUserData;

        if (hasUserFeedback) {
            return false;
        }

        if (type === 'test') {
            return shouldTestPopupBeShown();
        } else if (type === 'control') {
            return shouldControlPopupBeShown();
        }

        return false;
    };

    return (
        <ABTestingContext.Provider
            value={{
                popupUserData,
                shouldPopupBeShown,
            }}
        >
            {children}
        </ABTestingContext.Provider>
    );
};

export const useABTesting = () => useContext(ABTestingContext);
