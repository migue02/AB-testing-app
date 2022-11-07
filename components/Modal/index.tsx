import React, { FC, ReactNode } from 'react';
import { Modal as RNModal, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

interface IProps {
    isVisible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode;
    hasCloseButton?: boolean;
}

const Modal: FC<IProps> = (props) => {
    const { isVisible, setVisible, children, hasCloseButton } = props;

    return (
        <RNModal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                setVisible(!isVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {hasCloseButton && (
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setVisible(!isVisible)}
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
