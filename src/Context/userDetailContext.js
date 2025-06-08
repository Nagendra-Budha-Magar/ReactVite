import { createContext } from "react";
const UserDetailContext = createContext({
  userDetails: null,
  setUserDetails: () => {},
});

export default UserDetailContext;
