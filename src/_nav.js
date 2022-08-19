export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
  },
  {
    component: 'CNavTitle',
    name: 'Theme',
  },
  {
    component: 'CNavItem',
    name: 'Colors',
    to: 'colors',
    icon: 'cil-drop',
  },
  {
    component: 'CNavItem',
    name: 'Typography',
    to: '/typography',
    icon: 'cil-pencil',
  },
  {
    component: 'CNavTitle',
    name: 'Components',
  },
  {
    component: 'CNavGroup',
    name: 'Base',
    to: '/base',
    icon: 'cil-puzzle',
    items: [],
  },
  {
    component: 'CNavGroup',
    name: 'Buttons',
    to: '/buttons',
    icon: 'cil-cursor',
    items: [],
  },
  {
    component: 'CNavGroup',
    name: 'Icons',
    to: '/icons',
    icon: 'cil-star',
    items: [],
  },
  {
    component: 'CNavGroup',
    name: 'Notifications',
    to: '/notifications',
    icon: 'cil-bell',
    items: [],
  },
  {
    component: 'CNavItem',
    name: 'Widgets',
    to: '/widgets',
    icon: 'cil-calculator',
    badge: {
      color: 'primary',
      text: 'NEW',
      shape: 'pill',
    },
  },
  {
    component: 'CNavTitle',
    name: 'Extras',
  },
  {
    component: 'CNavGroup',
    name: 'Pages',
    to: '/pages',
    icon: 'cil-star',
    items: [],
  },
  {
    component: 'CNavItem',
    name: 'Documentation',
    to: '/documentation',
    icon: 'cil-file',
  },
  {
    component: 'CNavItem',
    name: 'Try CoreUIPRO',
    to: '/CoreUIPRO',
    icon: 'cil-layers',
  },
]
