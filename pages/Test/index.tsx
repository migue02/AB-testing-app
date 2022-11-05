import { Image, Text, View } from 'react-native';
import React from 'react';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import LinkButton from '../../components/LinkButton';

const Test = () => {
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
            <LinkButton
                text="Not yet? Give us feedback"
                onPress={() => console.log('pressed')}
                {...styles.buttonLink}
            />
        </View>
    );
};

export default Test;
