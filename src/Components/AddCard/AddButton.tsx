import {AddButtonMain, AddButtonIcon, AddButtonLabel} from './AddButton.Style';

type addButton = {
  icon: React.ReactNode;
  label: String
}

const AddButton = (props: addButton) => {
  const {icon, label} = props
  return ( 
    <>
      <AddButtonMain>
          <AddButtonIcon>{icon}</AddButtonIcon>
          <AddButtonLabel> {label}</AddButtonLabel>
      </AddButtonMain>
    </> 
  );
}
 
export default AddButton;


