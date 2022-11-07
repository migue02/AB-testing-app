import { ReactNode } from "react";

export type EventTypes = 'RATING' | 'REMIND_LATER';
export interface MonitoringDataClient {
    name: string;
    key: string;

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

export type ContextType = {
    clients: MonitoringDataClient[];
    triggerMonitoringEvent: (event: AnalyticsEvent) => void;
    logMonitoringException: (exception: any, context?: any) => void;
};

export type MonitoringDataProviderType = {
    clients: MonitoringDataClient[];
    children: ReactNode;
};