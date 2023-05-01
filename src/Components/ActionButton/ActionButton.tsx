import {
  AddButtonMain,
  AddButtonIcon,
  AddButtonLabel,
  AddCardItems,
} from "./ActionButton.Style";
import { ActionButtonProps } from "../../Types/Components/ActionButtonTypes";

const ActionButton = (props: ActionButtonProps) => {
  const { icon, label, disableColor, forMenuSubcat, forMenuCat, ...rest } =
    props;
  return (
    <>
      {label && (
        <AddButtonMain
          {...rest}
          disableColor={disableColor}
          forMenuSubcat={forMenuSubcat}
          forMenuCat={forMenuCat}>
          <AddCardItems forMenuCat={forMenuCat}>
            <AddButtonIcon
              forMenuSubcat={forMenuSubcat}
              forMenuCat={forMenuCat}>
              {icon}
            </AddButtonIcon>
            <AddButtonLabel
              forMenuSubcat={forMenuSubcat}
              forMenuCat={forMenuCat}>
              {label}
            </AddButtonLabel>
          </AddCardItems>
        </AddButtonMain>
      )}
    </>
  );
};

export default ActionButton;
