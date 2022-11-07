import { Image, Text, View } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';
import TextButton from '../../components/TextButton';
import StarButtons from '../../components/StarButtons';
import Form from '../../components/Form';
import { Colors } from '../../utils';

const Control = () => {
    const [stars, setStars] = useState(-1);

    const handleSelectedStar = (index: number) => {
        setStars(index);
    };

    const onSubmit = (text: string) => {
        console.log({ text });
    };

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <FontAwesome5
                    name="edit"
                    size={46}
                    color={Colors.secondaryColor}
                />
            </View>
            <Text style={styles.title}>Enjoying RacketPal?</Text>
            <Text style={styles.subtitle}>
                Tap a star to rate it on the App store
            </Text>
            <StarButtons onSelectedStar={handleSelectedStar} />
            {Boolean(stars > -1 && stars < 3) ? (
                <Form onSubmit={onSubmit} />
            ) : (
                <TextButton
                    text="Remind me later"
                    isUpperCase
                    onPress={() => console.log('pressed')}
                    {...styles.buttonText}
                />
            )}
        </View>
    );
};

export default Control;
