const MainRoutes = {
  path: '/main',
  meta: {
    requiresAuth: true
  },
  redirect: '/main',
  component: () => import('@/layouts/dashboard/DashboardLayout.vue'),
  children: [
    {
      name: 'Categories',
      path: '/categories',
      component: () => import('@/views/pages/categories.vue')
    },
    {
      name: 'Add Category',
      path: '/category/add',
      component: () => import('@/views/pages/category/index.vue')
    },
    {
      name: 'Category view',
      path: '/category/:id',
      component: () => import('@/views/pages/category/[id].vue')
    },

    //products
    {
      name: 'Products',
      path: '/products',
      component: () => import('@/views/pages/products.vue')
    },
    {
      name: 'Add Product',
      path: '/products/add',
      component: () => import('@/views/pages/product/index.vue')
    },
    {
      name: 'Produc view',
      path: '/products/:id',
      component: () => import('@/views/pages/product/[id].vue')
    },

    //orders
    {
      name:'Orders',
      path:'/orders',
      components:()=>import('@/views/pages/orders.vue')
    }

  ]
};

export default MainRoutes;
