import { AnalyticsEvent } from "../../context/types";
import { ABTestingTypes } from "./types";

export const getSelectedABTesting = (): ABTestingTypes => Math.random() > 0.5 ? 'test' : 'control';

export const getAnalyticsEvent = (): AnalyticsEvent => {
    return {}
}