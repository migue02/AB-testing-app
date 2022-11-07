import { AnalyticsEvent, AnalyticsRatingsEvent } from "../../context/types";
import { getLoggedUser } from "../../utils/backend";
import { ABTestingTypes } from "./types";

export const getSelectedABTesting = (): ABTestingTypes => Math.random() > 0.5 ? 'test' : 'control';

const getCommonEventValues = (): { date: string, user: string } => {
    return {
        date: Date.now().toString(),
        user: getLoggedUser(),
    }
}

export const getRatingEvent = (stars: number, text?: string): AnalyticsRatingsEvent => {
    return {
        type: 'RATING',
        stars,
        text,
        ...getCommonEventValues(),
    }
}

export const getRemindMeLaterEvent = (): AnalyticsEvent => {
    return {
        type: 'REMIND_LATER',
        ...getCommonEventValues(),
    }
}