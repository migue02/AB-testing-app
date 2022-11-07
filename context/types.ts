import { ReactNode } from "react";

export interface MonitoringDataClient {
    name: string;
    key: string;

    init(): void;
    logEvent(event: AnalyticsEvent): void;
    logException(exception: unknown, context?: any): void;
}

export type AnalyticsEvent = {
    user?: string;
    text?: string;
    payload?: any;
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