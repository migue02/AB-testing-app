import { Image, Text, View } from 'react-native';
import React, { FC, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';
import TextButton from '../../components/TextButton';
import StarButtons from '../../components/StarButtons';
import Form from '../../components/Form';
import { Colors, openRacketPalInStore } from '../../utils';
import { useMonitoring } from '../../context/MonitoringData';
import { IModalViewProps } from '../types';
import {
    getRatingEvent,
    getRemindMeLaterEvent,
} from '../../client/ABTestingDataClient/utils';

const Control: FC<IModalViewProps> = (props) => {
    const [stars, setStars] = useState(-1);
    const { triggerMonitoringEvent } = useMonitoring();
    const { closeModal } = props;

    const handleSelectedStar = (index: number) => {
        setStars(index);
        if (index >= 3) {
            closeModal?.();
            triggerMonitoringEvent(getRatingEvent(index));
            openRacketPalInStore();
        }
    };

    const onSubmit = (text: string) => {
        triggerMonitoringEvent(getRatingEvent(stars, text));
        closeModal?.();
    };

    const onRemindMeLater = () => {
        triggerMonitoringEvent(getRemindMeLaterEvent());
        closeModal?.();
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
                    onPress={onRemindMeLater}
                    {...styles.buttonText}
                />
            )}
        </View>
    );
};

export default Control;
