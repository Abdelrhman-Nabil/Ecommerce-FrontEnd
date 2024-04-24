import { createContext,useState,useCallback, useEffect } from "react";

export const AuthContext=createContext({
    isLoggedIn: false,
    userId:null,
    token:null,
  login: () => {},
  logout: () => {}
})
let logOutTimer;
export const AuthProvider=({children})=>{

  const[token,setToken]=useState(false)
  const[userId,setUserId]=useState(null)
  const[tokenExpirationDate,setTokenExpirationDate]=useState();

  const login = useCallback((uid,token,expirationData) => {
    setToken(token);
    const tokenExpirationDate= expirationData || new Date(new Date().getTime() + 1000 *60 * 60 )
    setTokenExpirationDate(tokenExpirationDate)
    setUserId(uid)
    localStorage.setItem("userData", JSON.stringify({userId:uid,token:token,expiration:tokenExpirationDate.toISOString()}))

  },
   []);
  
  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setTokenExpirationDate(null)
    localStorage.removeItem('userData');
    localStorage.removeItem('userCart');
  }, []);

  useEffect(()=>{
    if(token && tokenExpirationDate){
      const reminingTime=tokenExpirationDate.getTime() - new Date().getTime();
      logOutTimer=setTimeout(logout,reminingTime);
    }else{
      clearTimeout(logOutTimer);
    }
  },[logout,token,tokenExpirationDate])
const value={isLoggedIn:!!token ,token:token,login,logout,userId}
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}