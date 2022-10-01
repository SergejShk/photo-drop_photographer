import axios from 'axios';

axios.defaults.baseURL =
  'https://q7jgr6jylg.execute-api.eu-west-2.amazonaws.com/dev';

export const saveToken = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

type Credentials = {
  email: string;
  password: string;
};

export const logInApi = async (creadentials: Credentials) => {
  const { data } = await axios.post('/login', creadentials);
  saveToken.set(data.token);

  return data;
};
