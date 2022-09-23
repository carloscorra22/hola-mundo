import { useEffect  } from 'react';

import { BrowserRouter , Route, Routes, Link, Navigate } from 'react-router-dom';

import HomePage from './pages/home/HomePage.jsx';
import Statepage from './pages/home/StatePage.jsx';

import Notfoundpage from './pages/404/notFoundPage.jsx';
import Aboutpage from './pages/about-faqs/AboutPage.jsx';
import Profilepage from './pages/profile/ProfilePage.jsx';
import Taskspage from './pages/tasks/TasksPage.jsx';
import Taskdetailpage from './pages/tasks/TaskDetailPage.jsx';
import Loginpage from './pages/auth/loginPage.jsx';
import DashBoard from './pages/dashborad/DashBoard.jsx';

function AppRoutingFinal() {

  let loggedIn = true;

  return (
 <div>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={
            loggedIn ? 
            (<Navigate to={'dashboard'}/>):
            (<Navigate to={'login'}/>)
          }>          
        </Route>

        <Route path='login' element={<Loginpage></Loginpage>} />

        <Route exact path='dashboard' element={
            loggedIn ? 
            (<DashBoard></DashBoard>):
            (<Navigate to={'/'}/>)
          }>
        </Route>

        <Route element={<Notfoundpage></Notfoundpage>}/>
      </Routes>
    </BrowserRouter>
 </div>
 
 )
}

export default AppRoutingFinal;
