export type AlertModalTypes = {
  title: string | any;
  description?: string | any;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteItem: React.Dispatch<React.SetStateAction<boolean>>;
  deleteItem?: boolean;
};
