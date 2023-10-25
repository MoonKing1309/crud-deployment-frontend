import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/nav';
import { HashRouter,Routes,Route } from 'react-router-dom';
import CreateStudent from './components/createStudent';
import StudentList from './components/studentList';
import EditStudent from './components/editStudent'
function App() { 
  return (
    <div className='container'>
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<CreateStudent/>}></Route>
          <Route path="/create-student" element={<CreateStudent/>}></Route>
          <Route path="/student-list" element={<StudentList/>}></Route>
          <Route path='/edit-student/:id' element={<EditStudent/>}></Route>
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
