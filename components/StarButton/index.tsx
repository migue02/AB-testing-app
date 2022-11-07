import { GestureResponderEvent, TouchableOpacity, Text } from 'react-native';
import React, { FC } from 'react';
import { FontAwesome } from '@expo/vector-icons';

interface IProps {
    onPress: (event: GestureResponderEvent) => void;
    filled: boolean;
    color: string;
    size?: number;
}

const StarButton: FC<IProps> = (props) => {
    const { size = 32, filled = false, color, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={{ width: 32, height: 32 }}>
            <FontAwesome
                name={filled ? 'star' : 'star-o'}
                size={size}
                color={color}
            />
        </TouchableOpacity>
    );
};

export default StarButton;
