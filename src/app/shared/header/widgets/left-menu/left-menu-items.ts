// Menu
export interface Menu {
  path?: string;
  title?: string;
  type?: string;
  megaMenu?: boolean;
  children?: Menu[];
}

export const MENUITEMS: Menu[] = [
	{
		title: 'Enlaces Rápidos', type: 'sub', megaMenu: true, children: [
	      { 
	      	title: 'Columna 1',  type: 'link', children: [
		      	{ path: '/home/left-sidebar/collection/all', title: 'Paquetes',  type: 'link' }
	      	]
	      },
	      { 
	      	title: 'Columna 2',  type: 'link', children: [
		      	{ path: '/pages/about-us', title: 'Sobre Nosotros',  type: 'link' }
	      	]
	      },
	    ]
	},
]