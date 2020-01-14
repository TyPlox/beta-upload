// Menu
export interface Menu {
  path?: string;
  title?: string;
  type?: string;
  megaMenu?: boolean;
  megaMenuType?: string; // small, medium, large
  image?: string;
  children?: Menu[];
}

export const MENUITEMS: Menu[] = [
	{
		path: '/', title: 'inicio', type: 'link'
	},
	{
		path: '/home/left-sidebar/collection/all', title: 'tours', type: 'link'
	},
	{
		path: '/pages/about-us', title: 'sobre nosotros', type: 'link'
	},
]