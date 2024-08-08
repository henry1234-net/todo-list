
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignUp from './Components/LoginSignUp';
import SuccessPage from './Components/successPage';

function App() {
  return (
    <Router basename='https://henry1234-net.github.io/todo-list'>
      <Routes>
        <Route path="/" element={<LoginSignUp />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
