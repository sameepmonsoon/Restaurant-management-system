import {
  AddButtonMain,
  AddButtonIcon,
  AddButtonLabel,
  AddCardItems,
} from "./ActionButton.Style";
import { ActionButtonProps } from "../../Types/Components/ActionButtonTypes";

const ActionButton = (props: ActionButtonProps) => {
  const { icon, label, disableColor, ...rest } = props;
  return (
    <>
      {label && (
        <AddButtonMain {...rest} disableColor={disableColor}>
          <AddCardItems>
            <AddButtonIcon>{icon}</AddButtonIcon>
            <AddButtonLabel> {label}</AddButtonLabel>
          </AddCardItems>
        </AddButtonMain>
      )}
    </>
  );
};

export default ActionButton;
