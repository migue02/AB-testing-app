import React, { createContext, FC, useContext, useEffect } from 'react';
import {
    AnalyticsEvent,
    MonitoringDataContextType,
    MonitoringDataProviderType,
} from './../types';

const contextDefaults: MonitoringDataContextType = {
    clients: [],
    triggerMonitoringEvent: (_) => {},
    logMonitoringException: (_) => {},
};

const MonitoringDataContext =
    createContext<MonitoringDataContextType>(contextDefaults);

export const MonitoringDataProvider: FC<MonitoringDataProviderType> = ({
    clients,
    children,
}) => {
    useEffect(() => {
        clients.forEach((client) => client.init());
    }, []);

    const triggerMonitoringEvent = (event: AnalyticsEvent) => {
        clients.forEach((client) => client.logEvent(event));
    };

    const logMonitoringException = (exception: unknown, context?: any) => {
        clients.forEach((client) => client.logException(exception, context));
    };

    return (
        <MonitoringDataContext.Provider
            value={{
                clients,
                triggerMonitoringEvent,
                logMonitoringException,
            }}
        >
            {children}
        </MonitoringDataContext.Provider>
    );
};

export const useMonitoring = () => useContext(MonitoringDataContext);
