import { StyleSheet } from 'react-native';
import { Colors } from '../../utils';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.control.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -40,
        backgroundColor: 'white',
        width: 84,
        height: 84,
        borderRadius: 84 / 2,
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        fontStyle: 'normal',
        fontSize: 18,
        lineHeight: 18,
        textAlign: 'center',
    },
    subtitle: {
        fontFamily: 'Montserrat-Regular',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 17,
        textAlign: 'center',
        marginTop: 12,
        marginBottom: 16,
    },
    buttonText: {
        marginTop: 48,
    },
});

export default styles;