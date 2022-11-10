import { TouchableOpacity, Text } from 'react-native';
import React, { FC } from 'react';
import styles from './styles';
import { IGenericButton } from './types';

const Button: FC<IGenericButton> = (props) => {
    const {
        text,
        backgroundColor,
        textStyle,
        height = styles.button.height,
        width = 'auto',
        marginTop = 0,
        onPress,
        testID,
    } = props;

    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                backgroundColor,
                height,
                width,
                marginTop,
            }}
            onPress={onPress}
            testID={testID + '-button'}
        >
            <Text testID={testID + '-text'} style={textStyle}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
