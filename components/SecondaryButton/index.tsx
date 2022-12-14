import React, { FC } from 'react';
import Button from '../Button';
import { Colors } from '../../utils';
import styles from './styles';
import { IButton } from '../Button/types';

const SecondaryButton: FC<IButton> = (props) => {
    const { text, onPress, marginTop, width } = props;

    return (
        <Button
            text={text}
            backgroundColor={Colors.secondaryButton.backgroundColor}
            textStyle={styles.text}
            onPress={onPress}
            height={36}
            marginTop={marginTop}
            width={width}
        />
    );
};

export default SecondaryButton;
