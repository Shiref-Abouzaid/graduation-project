import { useAuthStore } from '@/stores/auth';
import { handleError } from 'vue';

export const fetchWrapper = {
  get: request('GET'),
  post: request('POST'),
  put: request('PUT'),
  delete: request('DELETE')
};


function request(method: string) {
  return (url: string, body?: object | FormData) => {
    const requestOptions: any = {
      method,
      headers: authHeader(url)
    };

    // Determine if the body is FormData or JSON
    if (body) {
      if (body instanceof FormData) {
        requestOptions.body = body;
        // Do not set Content-Type for FormData; the browser will handle it automatically
      } else {
        requestOptions.headers['Content-Type'] = 'application/json';
        requestOptions.headers['Accept'] = 'application/json';
        requestOptions.headers['Access-Control-Allow-Origin'] = '*';
        requestOptions.body = JSON.stringify(body);
      }
    }

    let urlHandled;
    if (!url.startsWith('/')) {
      urlHandled = url;
    } else {
      urlHandled = `${import.meta.env.VITE_API_URL}${url}`;
    }

    return fetch(urlHandled, requestOptions).then(handleResponse);
  };
}
// helper functions

function authHeader(url: string) {
  // return auth header with jwt if user is logged in and request is to the api url
  const { user, token } = useAuthStore();

  const isLoggedIn = !!user?.token;

  

  if (isLoggedIn) {
    return { Authorization: `Bearer ${user.token}` };
  } else if (token) {  // this for only first load
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}

function handleResponse(response: any) {

  return response.text().then((text: string) => {

    const data = text && JSON.parse(text);


    if (!response.ok) {
      const { user, logout } = useAuthStore();
      if ([401, 403].includes(response.status) && user) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        logout();
      }

      const error = data
      return Promise.reject(error);
    }

    return data;
  });
}
