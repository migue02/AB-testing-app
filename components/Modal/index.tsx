import React, { FC, ReactNode } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useMonitoring } from '../../context/MonitoringData';
import { getCloseModalEvent } from '../../utils';

interface IProps {
    children: ReactNode;
    handleClose?: () => void;
    hasCloseButton?: boolean;
}

const Modal: FC<IProps> = (props) => {
    const { children, handleClose, hasCloseButton } = props;
    const { triggerMonitoringEvent } = useMonitoring();

    const handleCloseButton = () => {
        triggerMonitoringEvent(getCloseModalEvent());
        handleClose?.();
    };

    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                {hasCloseButton && (
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={handleCloseButton}
                    >
                        <Ionicons name="close" size={24} color="black" />
                    </TouchableOpacity>
                )}
                {children}
            </View>
        </View>
    );
};

export default Modal;
