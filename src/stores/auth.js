import { defineStore } from 'pinia';
import { router } from '@/router';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';

const baseUrl = `${import.meta.env.VITE_API_URL}/auth/login`;

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    user: JSON.parse(localStorage.getItem('user')),
    token:null,
    email:'',
    returnUrl: null
  }),
  actions: {



    async login(email, password) {
     
      this.user = {
        email:email,
      }
      localStorage.setItem('user', JSON.stringify({
        email:email,
        token:'Basic MTExODA3NjU6NjAtZGF5ZnJlZXRyaWFs'
      }));
      this.token = 'Basic MTExODA3NjU6NjAtZGF5ZnJlZXRyaWFs' // this for only first load
      this.email = email;
      router.push(this.returnUrl || '/categories');
      return;
      const user = await fetchWrapper.post(`${import.meta.env.VITE_API_URL}/account/login`, { email, password });

      // update pinia state
      this.user = user;
      user.data.email = email;
      // store user details and jwt in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user.data));
      this.token = user.data.token // this for only first load
      this.email = email;
      // redirect to previous url or default to home page
      router.push(this.returnUrl || '/visas');
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      router.push('/auth/login');
    }
  }
});
