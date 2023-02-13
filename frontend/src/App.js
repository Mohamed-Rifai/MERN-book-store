import { Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/login' element={<LoginPage/>} />
     </Routes>    
    </div>
  );
} 

export default App;
