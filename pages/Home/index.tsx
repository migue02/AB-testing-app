import { View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import SecondaryButton from '../../components/SecondaryButton';
import Modal from '../../components/Modal';
import Test from '../Test';
import Control from '../Control';
import useVisibleModal from '../../hooks/useModal';

const Home = () => {
    const [selectedModal, setSelectedModal] = useState<'test' | 'control'>();
    const [isModalVisible, setModalVisible, toggle] = useVisibleModal(false);

    return (
        <View style={styles.container}>
            <PrimaryButton
                text="Test modal"
                onPress={() => {
                    setSelectedModal('test');
                    toggle();
                }}
            />
            <SecondaryButton
                text="Control modal"
                onPress={() => {
                    setSelectedModal('control');
                    toggle();
                }}
            />
            <Modal
                isVisible={isModalVisible}
                handleClose={() => setModalVisible(false)}
                hasCloseButton={selectedModal === 'test'}
            >
                {selectedModal === 'control' ? <Control /> : <Test />}
            </Modal>
        </View>
    );
};

export default Home;
