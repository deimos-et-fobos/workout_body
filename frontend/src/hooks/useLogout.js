import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext()

  const logout = async () => {
    //  remove user from localStorage
    localStorage.removeItem('user')
    dispatch({type: 'LOGOUT'})
  }

  return  {logout}
} 