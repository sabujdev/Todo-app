import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calender from './Pages/Calender/Calender';
import CompletedTask from './Pages/CompletedTask/CompletedTask';
import Todo from './Pages/Todo/Todo';
import Navbar from './Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer'

function App() {
  return (
    <div className="App h-screen">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todo' element={<Todo></Todo>}></Route>
        <Route path='/completed' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
    <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
