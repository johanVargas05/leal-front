import { MenuItem } from "@shared/interfaces/menu.model";


const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Inicio',
    icon: 'home',
    link: '/app/home'
  },

];

export const menu =():MenuItem[]=>{
  return MENU;
}
