import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
export interface IModalViewProps {
    navigation: NativeStackNavigationProp<RootStackParamList, "ABTesting">
}

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ABTestingProps = NativeStackScreenProps<RootStackParamList, 'ABTesting'>;