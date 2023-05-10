import React, { useContext } from 'react';
import './a.css'
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from "react-router-dom"
import UserContext from "./user/UserContext";
import { Get } from '../Hooks/fetchData';
import { Avatar } from 'primereact/avatar';
import { Dropdown } from 'primereact/dropdown';


export default function Menu() {


  const { user } = useContext(UserContext);
  console.log(user);
  const navigate = useNavigate();
  console.log(`http://localhost:4321/officer/image/${user.path}/${user.type}`)

  const items = [
    {
      label: 'פתיחת תיק', icon: 'pi pi-fw pi-folder-open'
      , command: () => { navigate("/openfile") }
    },
    {
      label: 'תיקים', icon: 'pi pi-fw pi-folder'
      , command: () => { navigate("/AllFiles") }
    },
    {
      label: 'דאשבורד', icon: 'pi pi-fw pi-chart-line',
      command: () => { navigate("/Dashboard") }
    },
    {
      label: '  הגדרות ', icon: 'pi pi-fw pi-cog'
      , command: () => { navigate("/Setting") }
    },
    {
      label: '  צור קשר ', icon: 'pi pi-send'
      , command: async () => {
        const manager = (await Get(`manager/${user.idofficer}`)).data
        window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${manager.mail}`);
      }
    },
    {
      label: ' ', disabled:true, style:{width:"55%"}
    },
    {
      label: <div className='grid'><div className='col-6' style={{marginTop:"25px"}}>{user.name}</div><div className='col-6'>
        <Avatar  image={`http://localhost:4321/officer/image/${user.path}/${user.type}`} size="xlarge" shape="circle" /></div></div>,
 command: () => { navigate("/Setting") }
    }
  ];

  return (
    <div style={{ display: 'flex' }}>

      <div className="card" style={{ marginBottom: "25px", flex: 1}}>
        <div className="flex card-container indigo-container text-800" style={{"backgroundColor":"yellow"}}>
          <div className="flex-1 bg-blue-800 text-blue-900">
            <TabMenu  model={items} className="bg-blue-800 "/>
          </div>
        </div>
      </div>
      {/* <div style={{ padding: '10px' }}>
        <h3>{user.name}</h3>
      </div> */}
    </div>

  )

}