import { StyleSheet } from 'react-native';
import { Colors } from '../../utils';

const styles = StyleSheet.create({
    text: {
        color: Colors.linkButton.color,
        fontFamily: 'Montserrat-Regular',
        textDecorationLine: 'underline',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.24,
        textAlign: 'center'
    }
});

export default styles;