import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SideBar from './components/SideBar';
import FavoritesPage from './components/FavoritesPage';

function App() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
