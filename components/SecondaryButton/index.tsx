import React, { FC } from 'react';
import Button from '../Button';
import { Colors } from '../../utils';
import styles from './styles';

interface IProps {
    text: string;
}

const SecondaryButton: FC<IProps> = (props) => {
    const { text } = props;

    return (
        <Button
            text={text}
            backgroundColor={Colors.secondaryButton.backgroundColor}
            textStyle={styles.text}
            height={36}
        />
    );
};

export default SecondaryButton;
