import { ValidRoles } from "./valid-roles.interfaces";

export interface MenuItem {
  id?: number;
  label?: string;
  icon?: string;
  link?: string;
  permission?: ValidRoles[];
  expanded?: boolean;
  subItems?: MenuItem[];
  isTitle?: boolean;
  badge?: any;
  parentId?: number;
}
