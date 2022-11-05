import { View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import Modal from '../../components/Modal';
import Test from '../Test';

const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <PrimaryButton
                text="Rate us"
                onPress={() => setModalVisible(!modalVisible)}
            />
            <Modal
                isVisible={modalVisible}
                setVisible={setModalVisible}
                hasCloseButton
            >
                <Test />
            </Modal>
        </View>
    );
};

export default Home;
