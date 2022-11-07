
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
export interface IModalViewProps {
    closeModal?: () => void;
}
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export interface TestProps extends IModalViewProps {
    onGiveFeedback: () => void;
}