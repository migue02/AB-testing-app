import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';
import { ABTestingProvider, useABTesting } from '.';
import { getRandomABTesting } from '../../client/utils';
import { PopUpUserData } from '../../utils';

describe('<ABTestingProvider />', () => {
    const TestingComponent = () => {
        const { shouldPopupBeShown } = useABTesting();
        const shown = shouldPopupBeShown();

        return shown ? <Text>OK</Text> : <Text>FAIL</Text>;
    };
    const cases: [{ name: string; shown: boolean }, PopUpUserData][] = [
        [
            { name: 'Has to be shown', shown: true },
            {
                totalShown: 0,
                lastDate: Date.now(),
                hasUserFeedback: false,
                installationDate: Date.now(),
                type: getRandomABTesting(),
            },
        ],
        [
            { name: 'TotalShown > 3', shown: false },
            {
                totalShown: 3,
                lastDate: Date.now(),
                hasUserFeedback: false,
                installationDate: Date.now(),
                type: getRandomABTesting(),
            },
        ],
        [
            { name: 'Shown', shown: true },
            {
                totalShown: 2,
                lastDate: Date.now(),
                hasUserFeedback: false,
                installationDate: Date.now(),
                type: getRandomABTesting(),
            },
        ],
    ];
    cases.forEach(([{ name, shown }, popupUserData]) => {
        test(name, async () => {
            await render(
                <ABTestingProvider popupUserData={popupUserData}>
                    <TestingComponent />
                </ABTestingProvider>
            );
            expect(screen.getByText(shown ? 'OK' : 'FAIL')).toBeDefined();
        });
    });
});
