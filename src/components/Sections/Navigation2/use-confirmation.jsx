import { useState } from "react";

const noop = () => {};

const initialConfirmState = {
  isOpen: false,
  hasConfirmed: false,
  proceed: noop,
  cancel: noop,
};

export const useConfirm = () => {
  const [confirm, setConfirm] = useState(initialConfirmState);

  const onConfCustomPromptrm = () => {
    const promise = new Promise((resolve, reject) => {
      setConfirm((prevState) => ({
        ...prevState,
        isOpen: true,
        proceed: resolve,
        cancel: reject,
      }));
    });

    return promise.then(
      () => {
        setConfirm({ ...confirm, isOpen: false, hasConfirmed: true });
        return true;
      },
      () => {
        setConfirm({ ...confirm, isOpen: false });
        return false;
      }
    );
  };

  const resetConfirmation = () => setConfirm(initialConfirmState);

  return {
    ...confirm,
    onConfirm,
    resetConfirmation,
  };
};
