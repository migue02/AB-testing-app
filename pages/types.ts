import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
export interface IModalViewProps {
    navigation: NativeStackNavigationProp<RootStackParamList, "ABTesting">
    closeModal?: () => void;
}

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ABTestingProps = NativeStackScreenProps<RootStackParamList, 'ABTesting'>;