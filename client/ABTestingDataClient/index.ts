import { AnalyticsEvent, MonitoringDataClient } from "../../context/types";
import { ABTestingTypes } from "./types";

export class ABTestingDataClient implements MonitoringDataClient {
    constructor(key: string) {
        this.key = key;
        console.log('Created  ABTestingDataClient', { key });
    }

    name = 'ABTesting';
    key = '';

    async init(): Promise<void> {
        console.log('Initialized ', this.name, this.key);
    }

    async logEvent(event: AnalyticsEvent) {
        const timestamp = Date.now();
        console.log(`Using ${this.key} event logged`, { event, timestamp });
    }

    async logException(exception: unknown, context?: any) {
        console.log(`Using ${this.key} exception logged`, { exception });
    }
}

export const createABTestingDataClient = (key: ABTestingTypes) => {
    return new ABTestingDataClient(key);
};
