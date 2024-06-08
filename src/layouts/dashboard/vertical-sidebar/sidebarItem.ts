// icons
import {
  AppstoreOutlined,
  SkinOutlined
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
    title: 'Categories',
    icon: AppstoreOutlined,
    to: '/categories',
  },
  {
    title: 'Products',
    icon: SkinOutlined,
    to: '/products',
  },


];

export default sidebarItem;
