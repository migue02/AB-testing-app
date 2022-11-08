import { AnalyticsEvent, AnalyticsRatingsEvent } from '../context/types';
import { getLoggedUser } from './backend';

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

export const getCloseModalEvent = (): AnalyticsEvent => {
    return {
        type: 'MODAL_CLOSED',
        ...getCommonEventValues(),
    }
}

export const getGoToRateOnStoreEvent = (): AnalyticsEvent => {
    return {
        type: 'GO_TO_RATE_STORE',
        ...getCommonEventValues(),
    }
}

export const getOnGetFeedbackEvent = (): AnalyticsEvent => {
    return {
        type: 'GO_ON_GET_FEEDBACK',
        ...getCommonEventValues(),
    }
}
