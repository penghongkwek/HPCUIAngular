import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
    {state: 'dashboard', type: 'link' , name: 'Dashboard', icon: 'dashboard' },
    {state: 'workspace', type: 'link' , name: 'Workspace', icon: 'desktop_mac' },
    {state: 'jobs', type: 'link' , name: 'Jobs', icon: 'grid_on' },
    {state: 'user', type: 'link' , name: 'User Account', icon: 'account_box' },
];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

}
