import { View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import SecondaryButton from '../../components/SecondaryButton';
import Modal from '../../components/Modal';
import Test from '../Test';
import Control from '../Control';

const Home = () => {
    const [selectedModal, setSelectedModal] = useState<'test' | 'control'>();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <PrimaryButton
                text="Test modal"
                onPress={() => {
                    setSelectedModal('test');
                    setModalVisible(!modalVisible);
                }}
            />
            <SecondaryButton
                text="Control modal"
                onPress={() => {
                    setSelectedModal('control');
                    setModalVisible(!modalVisible);
                }}
            />
            <Modal
                isVisible={modalVisible}
                setVisible={setModalVisible}
                hasCloseButton={selectedModal === 'test'}
            >
                {selectedModal === 'control' ? <Control /> : <Test />}
            </Modal>
        </View>
    );
};

export default Home;
