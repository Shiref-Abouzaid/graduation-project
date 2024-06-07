// icons
import {
  UsergroupAddOutlined,
  UserAddOutlined
} from '@ant-design/icons-vue';

export interface menu {
  header?: string;
  title?: string;
  icon?: object;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'Bisas' },
  {
    title: 'Visas',
    icon: UsergroupAddOutlined,
    to: '/visas',
  },
  {
    title: 'Add',
    icon: UserAddOutlined,
    to: '/visas/add',
  },


];

export default sidebarItem;
