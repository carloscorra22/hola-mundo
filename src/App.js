import logo from './logo.svg';
import './App.css';
import Saludos from './components/pure/saludos';
import SaludosF from './components/pure/saludosF';
import TaskListComponent from './components/container/task_list.jsx'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TaskListComponent></TaskListComponent>
{/*       <Saludos name="jose"></Saludos> */}
{/*         <SaludosF name="jorge"></SaludosF> */}
      </header>
    </div>
  );
}

export default App;
