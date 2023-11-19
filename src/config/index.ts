export const SERVER_HOSTNAME =
  import.meta.env.VITE_SERVER_HOSTNAME ?? 'localhost';
export const SERVER_PORT =
  parseInt(import.meta.env.VITE_SERVER_PORT, 10) || 4000;

export const SERVER_URL = `http://${SERVER_HOSTNAME}:${SERVER_PORT}`;

export const AUTH0_DOMAIN = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
export const AUTH0_CLIENT_ID = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;
export const AUTH0_CALLBACK_URL = import.meta.env
  .VITE_REACT_APP_AUTH0_CALLBACK_URL;
export const AUTH0_SECRET_KEY = import.meta.env.VITE_REACT_APP_AUTH0_SECRET_KEY;
