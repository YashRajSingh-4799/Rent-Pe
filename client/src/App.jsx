import { Route, Routes } from 'react-router-dom';
import './App.css'
import Indexpage from './Components/Indexpage';
import Loginpage from './Components/Loginpage';
import Layout from './Components/Layout';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={<Indexpage />} />
      <Route path="/login" element={<Loginpage />} />
        </Route>
    </Routes>
  );
}
  
export default App
