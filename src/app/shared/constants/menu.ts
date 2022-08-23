import { environment } from "@environment";
import { MenuItem } from "@shared/interfaces/menu.model";
import { ValidRoles } from "@shared/interfaces/valid-roles.interfaces";
import LST from '@shared/utils/local-storage';


const MENU: MenuItem[] = [
  {
    label: 'Inicio',
    icon: 'home',
    link: '/app/inicio'
  }
];

export const menu =():MenuItem[]=>{

  const {roles} = LST.get<{roles:ValidRoles[]}>(environment.userData,{roles:[]});

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
