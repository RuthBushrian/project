import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import OpenFile from './Components/file/openFile';
import { File } from './Components/file/file';
import AllFiles from './Components/file/allFiles';
import Login from './Components/login';
import { useNavigate, useLocation } from "react-router-dom"
import Menu from './Components/menu';
import Dashboard from './Components/dashboard';
import Setting from './Components/setting';
import UserProvider from "./Components/user/UserProvider";
import { useEffect, useState } from 'react'
import EmailLink from './Components/EmailLink';
function App() {

  const navigate = useNavigate();

  const location = useLocation().pathname;

  const [userId, setUserId] = useState('');

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem("user")
    if (!userFromLocalStorage) return;
    const parsedUser = JSON.parse(userFromLocalStorage)
    console.log({ parsedUser });
    setUserId(parsedUser.idofficer)
  }, []);

  // useEffect(() => {

  //  }, [userId])

  const setUserIdCallback = (id) => {
    setUserId(id);
  }

  return (<>
    <UserProvider userId={userId}>
      {console.log(userId)}

      <div className="App" dir="rtl" style={{ fontFamily: 'Segoe UI' }}>
        {userId === '' ? <Login setUserId={setUserIdCallback}></Login> : <><Menu></Menu><Routes>

          {/* <Route exact path='/' element={<Home />}></Route> */}
          <Route exact path='/' element={<Login setUserId={setUserIdCallback}></Login>}></Route>
          {/* <Route exact path='/' element={< AllFiles />}></Route> */}
          <Route exact path='/OpenFile' element={< OpenFile />}></Route>
          <Route exact path='/File' element={<div>< OpenFile /></div>}></Route>

          <Route exact path='/AllFiles' element={< AllFiles />}></Route>
          {/* <Route exact path='/Login' element={< Login />}></Route> */}
          <Route exact path='/Dashboard' element={< Dashboard />}></Route>
          <Route exact path='/Setting' element={< Setting />}></Route>
          <Route exact path='/Home' element={< Home />}></Route>
          <Route exact path='/Concat' element={< EmailLink />}></Route>

        </Routes></>}

      </div>
    </UserProvider>

  </>
  );
}

export default App;
