import React,{createContext,useEffect,useState} from 'react'
import { auth } from './Firebase/Config';
import { onAuthStateChanged,signOut,signInAnonymously } from 'firebase/auth';

export const AuthContext = createContext();
const AuthContextMainProvider = ({children}) => {
    const [CurrentUser,setCurrentUser] = useState(null); 

    const signout = async () => {
      try {
        await signOut(auth);
      } catch (error) {
        console.error(error.message);
      }
    };

    

    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      setCurrentUser(user)
    })
    
    return unsubscribe;
    
    },[auth])
    
    
    const contextValue = {CurrentUser,setCurrentUser,signout}
      return (
        <AuthContext.Provider value={contextValue}>
          {children}
          </AuthContext.Provider>
      )
    }

export default AuthContextMainProvider