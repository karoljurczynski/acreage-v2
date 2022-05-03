interface MenuItemProps {
  title?: string;
  active?: boolean;
  icon: string;
  navigateTo: string;
}
interface MenuItemWrapperProps {
  active?: boolean;
  onClick: () => void;
  title?: string;
}