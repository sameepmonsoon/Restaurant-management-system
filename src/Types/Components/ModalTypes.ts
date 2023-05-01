export type AlertDeleteModalTypes = {
  title: string | any;
  description?: string | any;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteItem: React.Dispatch<React.SetStateAction<boolean>>;
  deleteItem: boolean;
};
export type AddNewModalTypes = {
  title: string | any;
  edit?: boolean;
  content?: string | any;
  setAddMenuModal: React.Dispatch<React.SetStateAction<boolean>>;
  setNewItem?: React.Dispatch<React.SetStateAction<boolean>>;
  addItem?: boolean;
  children?: JSX.Element;
  footerButtons?: JSX.Element;
};
