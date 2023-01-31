export type DashboardButtonTypes = {
  icon: React.ReactNode | null;
  title: String | null;
  location: boolean;
  onClick?: () => void;
  disableTransition?: boolean;
};
