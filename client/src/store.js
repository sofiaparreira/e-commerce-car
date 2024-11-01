// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/authReducer'; // Importe os reducers que você criou

const store = configureStore({
  reducer: {
    auth: authReducer, // O nome 'auth' será o identificador para esse pedaço do estado
  },
});

export default store;
