
export interface MenuItem {
  id?: number;
  label?: string;
  icon?: string;
  link?: string;
  permission?: string;
  expanded?: boolean;
  subItems?: MenuItem[];
  isTitle?: boolean;
  badge?: any;
  parentId?: number;
}
