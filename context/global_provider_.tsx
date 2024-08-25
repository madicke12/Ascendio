import { getCurrnetUser } from '@/lib/appwrite'
import {createContext , useContext ,useEffect,useState} from 'react'


interface GlobalContextProps {
    isLoggedin: boolean;
    isLoading: boolean;
    User: any;
    setUser: any;
    setisLoading: any;
    setisLoggedin: any;
}
export const useGlobalContext = () => useContext(GlobalContext)
const GlobalContext = createContext({} as GlobalContextProps)


export const GLobalprovider = ({children}:any) => {
    const [isLoggedin, setisLoggedin] = useState(false)
    const [isLoading, setisLoading] = useState(true)
    const [User, setUser] = useState(null)


    useEffect(() => {
        const getter = async () => {
        const user = await getCurrnetUser();
        return user;
        }
        const user =  getter();
        if(!user){
            setisLoggedin(false);
            setUser(null);
        }
        if(user){
            setisLoggedin(true);
            setUser(user);
        }
    }, [User])
    return (
        <GlobalContext.Provider value={{
            isLoggedin,
            isLoading,
            User,
            setUser,
            setisLoading,
            setisLoggedin
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

