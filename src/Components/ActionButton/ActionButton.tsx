import {AddButtonMain, AddButtonIcon, AddButtonLabel, AddCardItems} from './ActionButton.Style';
import { ActionButtonProps } from '../../Types/Components/ActionButtonTypes';


const ActionButton = (props: ActionButtonProps) => {
  const {icon, label,...rest} = props
  return ( 
    <>
      <AddButtonMain {...rest}>
          <AddCardItems >
            <AddButtonIcon>{icon}</AddButtonIcon>
            <AddButtonLabel> {label}</AddButtonLabel>
          </AddCardItems>
      </AddButtonMain>
    </> 
  );
}
 
export default ActionButton;


