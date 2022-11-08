import React, { FC, ReactNode } from 'react';
import { Modal as RNModal, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useMonitoring } from '../../context/MonitoringData';
import { getCloseModalEvent } from '../../utils';

interface IProps {
    children: ReactNode;
    isVisible: boolean;
    handleClose: () => void;
    hasCloseButton?: boolean;
}

const Modal: FC<IProps> = (props) => {
    const { children, isVisible, handleClose, hasCloseButton } = props;
    const { triggerMonitoringEvent } = useMonitoring();

    const handleCloseButton = () => {
        handleClose();
        triggerMonitoringEvent(getCloseModalEvent());
    };

    return (
        <RNModal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                handleClose();
            }}
        >
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
        </RNModal>
    );
};

export default Modal;
