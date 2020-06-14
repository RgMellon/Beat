import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import { authorize, refresh } from 'react-native-app-auth';
import authConfig from '../config/authSpotifyConfig';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/axios';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const accessToken = await AsyncStorage.getItem('@Beat:token');

      if (accessToken) {
        setData(accessToken);
        api.defaults.headers.Authorization = `Bearer ${accessToken}`;
      }

      setLoad(false);
    }

    loadStorageData();
  }, [AsyncStorage]);

  const signIn = useCallback(async () => {
    try {
      const { accessToken } = await authorize(authConfig);

      await AsyncStorage.setItem('@Beat:token', accessToken);

      setLoad(false);
      setData(accessToken);

      api.defaults.headers.Authorization = `Bearer ${accessToken}`;
    } catch (error) {
      alert('oops looks like something went wrong');
    }
    // const response = await api.post('sessions', {
    //   email,
    //   password,
    // });
    // const { token, user } = response.data;
    // await AsyncStorage.multiSet([
    //   ['@GoBarber:token', token],
    //   ['@GoBarber:user', JSON.stringify(user)],
    // ]);
    // setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@GoBarber:token', '@GoBarber:user']);
  }, []);

  api.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      if (401 === error.response.status) {
        setData(null);
        await AsyncStorage.removeItem('@Beat:token');
      } else {
        return Promise.reject(error);
      }
    },
  );

  return (
    <AuthContext.Provider value={{ signIn, signOut, data, load }}>
      {children}
    </AuthContext.Provider>
  );
};
