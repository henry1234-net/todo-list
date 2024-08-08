
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import LoginSignUp from './Components/LoginSignUp';
import SuccessPage from './Components/successPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={<LoginSignUp />} />
        <Route path="/success" Component={<SuccessPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
