import { Button, Image, Text, View } from 'react-native';
import React, { FC } from 'react';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import TextButton from '../../components/TextButton';
import { IModalViewProps } from '../types';
import {
    getGoToRateOnStoreEvent,
    getOnGetFeedbackEvent,
    openRacketPalInStore,
} from '../../utils';
import { useMonitoring } from '../../context/MonitoringData';
import Modal from '../../components/Modal';

const Test: FC<IModalViewProps> = (props) => {
    const { navigation } = props;
    const { triggerMonitoringEvent } = useMonitoring();

    return (
        <Modal hasCloseButton>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://via.placeholder.com/246x80' }}
                />
                <Text style={styles.title}>Enjoying RacketPal?</Text>
                <Text style={styles.subtitle}>
                    Your App Store review greatly helps spread the word and grow
                    the racket sports community!
                </Text>
                <PrimaryButton
                    text="Rate us"
                    onPress={() => {
                        triggerMonitoringEvent(getGoToRateOnStoreEvent());
                        navigation.goBack();
                        openRacketPalInStore();
                    }}
                    {...styles.button}
                />
                <TextButton
                    text="Not yet? Give us feedback"
                    onPress={() => {
                        triggerMonitoringEvent(getOnGetFeedbackEvent());
                        navigation.navigate('ContactUS');
                        // navigation.goBack();
                    }}
                    {...styles.buttonLink}
                />
            </View>
        </Modal>
    );
};

export default Test;
