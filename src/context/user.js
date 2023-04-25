import { createContext, useState, useCallback } from 'react';
import { makeRequest } from "../utils/requests";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});

  const fetchUser = useCallback(async () => {
    const res = await makeRequest("/user/");
    if (res["json_status"] <= 299) {
      setUser(res.data)
    } else {
      setUser({})
    }
  }, []);

  const valueToShare = {
    user,
    fetchUser
  };

  return (
    <UserContext.Provider value={valueToShare}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider };
export default UserContext;
