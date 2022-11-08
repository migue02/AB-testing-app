import { ReactNode } from "react";
import { ABTestingTypes } from "../client/ABTestingDataClient/types";
import { PopUpUserData } from "../utils";

export type EventTypes = 'RATING' | 'REMIND_LATER' | 'MODAL_CLOSED' | 'GO_TO_RATE_STORE' | 'GO_ON_GET_FEEDBACK';
export interface MonitoringDataClient {
    key: ABTestingTypes;

    init(): void;
    logEvent(event: AnalyticsEvent): void;
    logException(exception: unknown, context?: any): void;
}

export type AnalyticsEvent = {
    type: EventTypes
    date: string;
    user: string;
};

export type AnalyticsRatingsEvent = AnalyticsEvent & {
    stars: number;
    text?: string;
};

export type MonitoringDataContextType = {
    clients: MonitoringDataClient[];
    triggerMonitoringEvent: (event: AnalyticsEvent) => void;
    logMonitoringException: (exception: any, context?: any) => void;
};

export type ABTestingContextType = {
    popupUserData?: PopUpUserData;
    shouldPopupBeShown: () => boolean;
};

export type GenericProviderType = {
    children: ReactNode;
};

export type MonitoringDataProviderType = GenericProviderType & {
    clients: MonitoringDataClient[];
};

export type ABTestingProviderType = GenericProviderType & {
    popupUserData?: PopUpUserData;
};
