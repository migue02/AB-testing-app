import { ABTestingTypes } from "./ABTestingDataClient/types";

export const getRandomABTesting = (): ABTestingTypes => Math.random() > 0.5 ? 'test' : 'control';
