import {AddButtonMain, AddButtonIcon, AddButtonLabel, AddCardItems} from './AddButton.Style';

type addButton = {
  icon: React.ReactNode;
  label: String
}

const AddButton = (props: addButton) => {
  const {icon, label} = props
  return ( 
    <>
      <AddButtonMain>
          <AddCardItems>
            <AddButtonIcon>{icon}</AddButtonIcon>
            <AddButtonLabel> {label}</AddButtonLabel>
          </AddCardItems>
      </AddButtonMain>
    </> 
  );
}
 
export default AddButton;


