import React from 'react';
import { render, screen } from '@testing-library/react-native';

import PrimaryButton from '../PrimaryButton';

const primaryButtonText = 'Testing primary button';
describe('<PrimaryButton />', () => {
    beforeEach(() => {
        render(
            <PrimaryButton
                text={primaryButtonText}
                onPress={() => console.log('After pressing value')}
                testID="primary"
            />
        );
    });
    it('Text defined on button text', async () => {
        expect(screen.getByText(primaryButtonText)).toBeDefined();
    });
});
