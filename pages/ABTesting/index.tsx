import { View } from 'react-native';
import React, { FC } from 'react';
import styles from './styles';
import Modal from '../../components/Modal';
import Test from '../Test';
import Control from '../Control';
import useVisibleModal from '../../hooks/useModal';
import { ABTestingProps } from '../types';

const ABTesting: FC<ABTestingProps> = (props) => {
    const [isModalVisible, , toggle] = useVisibleModal(true);
    const { route, navigation } = props;
    const { type } = route.params;

    return (
        <View style={styles.container}>
            <Modal
                isVisible={isModalVisible}
                handleClose={() => toggle()}
                hasCloseButton={type === 'test'}
            >
                {type === 'control' ? (
                    <Control closeModal={() => toggle()} />
                ) : (
                    <Test
                        onGiveFeedback={() => {
                            toggle();
                            navigation.navigate('ContactUS');
                        }}
                        closeModal={() => toggle()}
                    />
                )}
            </Modal>
        </View>
    );
};

export default ABTesting;
