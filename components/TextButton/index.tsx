import React, { FC } from 'react';
import Button from '../Button';
import { Colors } from '../../utils';
import styles from './styles';
import { ITextButton } from '../Button/types';
import { TextStyle } from 'react-native';

const TextButton: FC<ITextButton> = (props) => {
    const {
        text,
        onPress,
        marginTop,
        width,
        isUnderline = false,
        isUpperCase = false,
    } = props;

    const extraStyles: TextStyle = {
        textDecorationLine: isUnderline ? 'underline' : 'none',
        textTransform: isUpperCase ? 'uppercase' : 'none',
    };

    return (
        <Button
            text={text}
            backgroundColor={Colors.textButton.backgroundColor}
            textStyle={{ ...styles.text, ...extraStyles }}
            onPress={onPress}
            height={20}
            marginTop={marginTop}
            width={width}
        />
    );
};

export default TextButton;
