import { useState } from 'react';
import { VscEyeClosed, VscEye } from 'react-icons/vsc';

export const useIconToggle = () => {
  const [visible, setVisible] = useState(false);
  const inputType = visible ? 'text' : 'password';
  const Iсon = visible ? <VscEyeClosed /> : <VscEye />;
  const onShow = () => {
    setVisible(!visible);
  };

  return [visible, inputType, Iсon, onShow];
};
