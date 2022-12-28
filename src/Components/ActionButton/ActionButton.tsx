import {AddButtonMain, AddButtonIcon, AddButtonLabel, AddCardItems} from './ActionButton.Style';


const ActionButton = (props: ActionButtonProps) => {
  const {icon, label} = props
  return ( 
    <>
      <AddButtonMain >
          <AddCardItems >
            <AddButtonIcon>{icon}</AddButtonIcon>
            <AddButtonLabel> {label}</AddButtonLabel>
          </AddCardItems>
      </AddButtonMain>
    </> 
  );
}
 
export default ActionButton;


