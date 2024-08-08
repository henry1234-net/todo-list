
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import LoginSignUp from './Components/LoginSignUp';
import SuccessPage from './Components/successPage';

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" Component={<LoginSignUp />} />
        <Route path="/success" Component={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
