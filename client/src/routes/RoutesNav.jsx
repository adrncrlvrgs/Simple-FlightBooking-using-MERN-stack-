import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../sections/main';

const RoutesNav = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </Router>
  );
};

export default RoutesNav;
