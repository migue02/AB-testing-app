import { View } from 'react-native';
import React, { FC, useState } from 'react';
import StarButton from '../StarButton';
import { Colors } from '../../utils';
import styles from './styles';

interface IProps {
    nStars?: number;
    onSelectedStar?: (index: number) => void;
}

const StarButtons: FC<IProps> = (props) => {
    const { nStars = 5, onSelectedStar } = props;
    const [starsFilled, setStarsFilled] = useState(-1);

    const onPress = (index: number) => {
        setStarsFilled(index);
        onSelectedStar?.(index);
    };

    return (
        <View style={styles.container}>
            {[...Array(nStars)].map((_, i) => (
                <StarButton
                    key={`StarButton_${i}`}
                    filled={i <= starsFilled}
                    onPress={() => onPress(i)}
                    color={Colors.secondaryColor}
                />
            ))}
        </View>
    );
};

export default StarButtons;
