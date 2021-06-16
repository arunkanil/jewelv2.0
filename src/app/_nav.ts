import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    role: ""
  },
  {
    name: 'Agents',
    url: '/telecaller/agents',
    icon: 'icon-note',
    role: "TELE_CALLER"
  },
  {
    name: 'Customers',
    url: '/telecaller/customers',
    icon: 'icon-basket-loaded',
    role: "TELE_CALLER"
  },
  {
    name: 'Verification',
    url: '/kpcaller/verification',
    icon: 'icon-cursor',
    role: "KP_CALLER"
  },
  {
    name: 'Assigned',
    url: '/kpcaller/assigned',
    icon: 'icon-cursor',
    role: "KP_CALLER"
  },
  {
    name: 'DNF',
    url: '/kpcaller/dnf',
    icon: 'icon-cursor',
    role: "KP_CALLER"
  },
  {
    name: 'Verified List',
    url: '/manager/verified_list',
    icon: 'icon-phone',
    role: "MANAGER"
  },
  {
    name: 'Customers',
    url: '/manager/customers',
    icon: 'icon-basket-loaded',
    role: "MANAGER"
  },
];
