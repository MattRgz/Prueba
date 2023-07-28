import './styles/App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './views/Main';
import Login from './views/Login';
import Register from './views/Register'
import {UsersContextProvider} from './context/UserContext';
import Error404 from './views/Error404';
import LoginOut from './components/LogOut';

function App() {
  return (
    <UsersContextProvider>
      <div className='App'>
        <BrowserRouter>
         <Routes>
            <Route path='*' element = {<Error404/>}/>
            <Route exact path ='/' element={<Main/>}/>
            <Route exact path ='/login' element={<Login/>}/>
            <Route exact path ='/register' element={<Register/>}/>
            <Route exact path ='/logout' element={<LoginOut/>}/>
         </Routes>
        </BrowserRouter>
      </div>
    </UsersContextProvider>
  );
}

export default App;
