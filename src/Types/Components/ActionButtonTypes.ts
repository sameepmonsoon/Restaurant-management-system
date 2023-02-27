export type ActionButtonProps = {
  icon: React.ReactNode;
  label?: String;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  disableColor?: boolean;
  forMenuSubcat?: boolean;
  forMenuCat?: boolean;
};
