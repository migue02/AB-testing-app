import { useState } from 'react';

const useModal = (defaultVisibility?: boolean) => {
  const [modalVisible, setModalVisible] = useState(Boolean(defaultVisibility));
  const toggle = () => setModalVisible(!modalVisible)

  return [modalVisible, setModalVisible, toggle] as [boolean, React.Dispatch<React.SetStateAction<boolean>>, () => void];
};

export default useModal;
