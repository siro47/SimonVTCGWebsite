export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  onlyMobile?: boolean;
  submenu?: Menu[];
};
