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
      name: 'Add Visa',
      path: '/category/add',
      component: () => import('@/views/pages/category/index.vue')
    },
    {
      name: 'View Visa',
      path: '/category/:id',
      component: () => import('@/views/pages/category/[id].vue')
    },

  ]
};

export default MainRoutes;
