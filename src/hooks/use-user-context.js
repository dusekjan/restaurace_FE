import { useContext } from 'react';
import UserContext from '../context/user';

export default function useUserContext() {
  return useContext(UserContext);
}
