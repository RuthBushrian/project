import { useState, useEffect } from "react";
import { Get } from "../../Hooks/fetchData";
import UserContext from './UserContext';
//import { getUser } from '../../services/user';


const UserProvider = ({ children, userId }) => {

    const [user, setUser] = useState({});

    useEffect(() => {
        if (userId) {
            Get(`officer/${userId}`).then(user => {
                console.log(user);
                setUser(user.data)
                localStorage.setItem("user", JSON.stringify(user.data))
            }
            );
        }
    }, [userId]);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;