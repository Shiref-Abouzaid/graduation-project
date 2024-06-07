const MainRoutes = {
  path: '/main',
  meta: {
    requiresAuth: true
  },
  redirect: '/main',
  component: () => import('@/layouts/dashboard/DashboardLayout.vue'),
  children: [
    {
      name: 'Visas',
      path: '/visas',
      component: () => import('@/views/pages/visas.vue')
    },
    {
      name: 'Add Visa',
      path: '/visas/add',
      component: () => import('@/views/pages/addVisa/index.vue')
    },
    {
      name: 'View Visa',
      path: '/visas/:id',
      component: () => import('@/views/pages/visa/[id].vue')
    },

  ]
};

export default MainRoutes;
