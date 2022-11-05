import React, { FC } from 'react';
import Button from '../Button';
import { Colors } from '../../utils';
import styles from './styles';
import { IButton } from '../Button/types';

const LinkButton: FC<IButton> = (props) => {
    const { text, onPress, marginTop, width } = props;

    return (
        <Button
            text={text}
            backgroundColor={Colors.linkButton.backgroundColor}
            textStyle={styles.text}
            onPress={onPress}
            height={36}
            marginTop={marginTop}
            width={width}
        />
    );
};

export default LinkButton;
