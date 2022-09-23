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

function AppRoutingOne() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My fist Task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second Task'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?', logged)
  }, [])

  return (
    <BrowserRouter>
      <div>
        <aside>
          <Link to='/'>|| HOME |</Link>
          <Link to='about'>| ABOUT |</Link>
          <Link to='faqs'>| FAQs |</Link>
          <Link to= 'taskList' id='1'>| Task 1 |</Link>
          <Link to='task' id='2'>| Task 2 |</Link>
          <Link to='any404'>| Not Existing Route |</Link>
          <Link to='login'>| Login ||</Link>
        </aside>

        <main>
          <Routes> 
            <Route exact path='/' element={<HomePage></HomePage>} />
            <Route exact path='online-state' element={ <Statepage></Statepage> } />
            <Route path='login' element= { <Loginpage></Loginpage> }>
              {
                  logged ? 
                    () => {
                      alert('You are logged in. Redirecting to home...')
                      return (<Navigate to='/'/>)
                    }
                  :
                  () => {
                    return (<Loginpage></Loginpage>)
                  }
              }
            </Route>
            <Route path='about' element={ <Aboutpage></Aboutpage> } />
            <Route path='faqs' element={ <Aboutpage></Aboutpage> } />
            <Route path='profile' element={ <Profilepage></Profilepage> }>
              {
                logged ? 
                <Profilepage />
                :
                () => {
                  alert('You must be logged in. Redirecting to login...')
                  return (<Navigate to='/login'/>)
                }
              }
            </Route>
            <Route path='tasks' element={ <Taskspage></Taskspage> } />
            <Route 
              exact
              path='task/:id'
              render = {
                ({match}) => (<Taskdetailpage task={taskList[match.params.id-1]} />)
              }
              >

            </Route>
            {/* 404 - Page No Found */}
            <Route path='any404' element={<Notfoundpage/>}  />
          </Routes>
        </main>

      </div>

    </BrowserRouter>
  );
}

export default AppRoutingOne;
