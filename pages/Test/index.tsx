import { Image, Text, View } from 'react-native';
import React, { FC } from 'react';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import TextButton from '../../components/TextButton';
import { IModalViewProps } from '../types';
import { openRacketPalInStore } from '../../utils';

const Test: FC<IModalViewProps> = (props) => {
    const { closeModal } = props;
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
                onPress={() => {
                    closeModal?.();
                    openRacketPalInStore();
                }}
                {...styles.button}
            />
            <TextButton
                text="Not yet? Give us feedback"
                onPress={() => closeModal?.()}
                {...styles.buttonLink}
            />
        </View>
    );
};

export default Test;
