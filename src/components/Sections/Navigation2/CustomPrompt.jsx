import { useCallback } from "react";
import { useBlocker } from "./use-blocker.jsx";
import { useConfirm } from "./use-confirmation.jsx";
import { Confirm } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const CustomPrompt = ({ when = true, message }) => {
  const {
    isOpen,
    proceed,
    cancel,
    onConfirm,
    hasConfirmed,
    resetConfirmation
  } = useConfirm();

  let blocker = useCallback(
    async (tx) => {
      if (await onConfirm()) {
        resetConfirmation();
        tx.retry();
      }
    },
    [resetConfirmation, onConfirm]
  );

  useBlocker(blocker, when && !hasConfirmed);

  return (
    <Confirm
      open={isOpen}
      onCancel={cancel}
      onConfirm={proceed}
      content={message}
    />
  );
};

export default CustomPrompt;
