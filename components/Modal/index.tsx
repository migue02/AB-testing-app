import React, { FC, ReactNode } from 'react';
import { Modal as RNModal, View } from 'react-native';
import { styles } from './styles';

interface IProps {
    isVisible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode;
}

const Modal: FC<IProps> = (props) => {
    const { isVisible, setVisible, children } = props;

    return (
        <RNModal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                setVisible(!isVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>{children}</View>
            </View>
        </RNModal>
    );
};

export default Modal;
