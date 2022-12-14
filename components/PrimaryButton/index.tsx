import React, { FC } from 'react';
import Button from '../Button';
import { Colors } from '../../utils';
import styles from './styles';
import { IButton } from '../Button/types';

const PrimaryButton: FC<IButton> = (props) => {
    const { text, onPress, marginTop, width, testID } = props;

    return (
        <Button
            testID={testID || 'primary'}
            text={text}
            backgroundColor={Colors.primaryButton.backgroundColor}
            textStyle={styles.text}
            onPress={onPress}
            marginTop={marginTop}
            width={width}
        />
    );
};

export default PrimaryButton;
