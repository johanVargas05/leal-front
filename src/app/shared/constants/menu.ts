import { environment } from "@environment";
import { MenuItem } from "@shared/interfaces/menu.model";



const MENU: MenuItem[] = [
  {
    label: 'Inicio',
    icon: 'home',
    link: '/app/inicio'
  },
  {
    label: 'Finanzas',
    isTitle: true
  },
  {
    label: 'Billetera',
    icon: 'credit-card',
    link: '/app/billetera'
  }
];

export const menu =():MenuItem[]=>{

  const {roles} = JSON.parse(localStorage.getItem(environment.userData) ||'') ;

 return MENU.filter(itemMenu=>{
    const permissions = itemMenu.permission;
    if(itemMenu.hasOwnProperty('permission') && permissions){
      for (let i = 0; i < roles.length; i++) {
        const element = roles[i];
        return permissions.includes(element);
      }
    };

    return itemMenu;

  });

}
