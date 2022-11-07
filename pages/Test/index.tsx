import { Image, Text, View } from 'react-native';
import React from 'react';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import TextButton from '../../components/TextButton';
<<<<<<< Updated upstream

const Test = () => {
=======
import { TestProps } from '../types';
import { openRacketPalInStore } from '../../utils';

const Test: FC<TestProps> = (props) => {
    const { closeModal, onGiveFeedback } = props;
>>>>>>> Stashed changes
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: 'https://via.placeholder.com/246x80' }}
            />
            <Text style={styles.title}>Enjoying RacketPal?</Text>
            <Text style={styles.subtitle}>
                Your App Store review greatly helps spread the word and grow the
                racket sports community!
            </Text>
            <PrimaryButton
                text="Rate us"
                onPress={() => console.log('pressed')}
                {...styles.button}
            />
            <TextButton
                text="Not yet? Give us feedback"
<<<<<<< Updated upstream
                onPress={() => console.log('pressed')}
=======
                onPress={() => onGiveFeedback()}
>>>>>>> Stashed changes
                {...styles.buttonLink}
            />
        </View>
    );
};

export default Test;
