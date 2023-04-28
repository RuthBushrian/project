import React, {useContext} from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import {useNavigate} from "react-router-dom"
import UserContext from "./user/UserContext";
import { Get } from '../Hooks/fetchData';


export default function Menu() {


    const user = useContext(UserContext);
    console.log(user);
    const navigate = useNavigate();
    const items = [
        {label: 'פתיחת תיק', icon: 'pi pi-fw pi-folder-open'
        , command:()=>{navigate("/openfile")}
    },
        {label: 'תיקים', icon: 'pi pi-fw pi-folder'
        ,command:()=>{navigate("/AllFiles")}
    },
        { label: 'דאשבורד', icon: 'pi pi-fw pi-chart-line',
        command:()=>{navigate("/Dashboard")}
    },
        { label: '  הגדרות ', icon: 'pi pi-fw pi-cog'
        ,command:()=>{navigate("/Setting")}
    },
    { label: '  צור קשר ', icon: 'pi pi-send'
    ,command:async()=>
    {
        const manager = (await Get(`manager/${user.idofficer}`)).data
        window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${manager.mail}`);
    }
}
    ];
    const items1 = [
        {label: user.name, icon: 'pi pi-user'
    }]
    return (
<div class="card"style={{marginBottom: "25px"}}>
    <div class="flex card-container indigo-container">
        <div class="flex-1 "> 
        <TabMenu model={items}/>
        </div>
        <div class="flex-1 ">
            <TabMenu model={items1} dir='ltr'defaultChecked></TabMenu>
        </div>
    </div>
</div>

    )

}