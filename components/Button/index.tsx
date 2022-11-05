import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import React, { FC } from 'react';
import styles from './styles';

interface IProps {
    text: string;
    backgroundColor: string;
    textStyle: TextStyle;
    height?: number;
}

const Button: FC<IProps> = (props) => {
    const {
        text,
        backgroundColor,
        textStyle,
        height = styles.button.height,
    } = props;

    return (
        <TouchableOpacity style={{ ...styles.button, backgroundColor, height }}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;
