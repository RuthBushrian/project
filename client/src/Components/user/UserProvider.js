import { useState, useEffect } from "react";
import { Get } from "../../Hooks/fetchWithHook";
import UserContext from './UserContext';
//import { getUser } from '../../services/user';


const UserProvider = ({ children, userId }) => {

    const [user, setUser] = useState({});
    // const { data, error, refetch } =userId!=''?Get(`officer/${userId}`):null;
    const { data, error, refetch } =Get(`officer/${userId}`);

    useEffect(() => {
        if (userId) {
            refetch()
            // Get(`officer/${userId}`).then(user => {
            //     console.log(user);
            //     setUser(user.data)
            //     localStorage.setItem("user", JSON.stringify(user.data))
            // }
            // );
        }
    }, [userId]);

    useEffect(() => {
        console.log({ data });
        if (data) {
            setUser(data)
            localStorage.setItem("user", JSON.stringify(data))
        }
    }, [data])

    return (
        <UserContext.Provider value={{ user, refetch }}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;