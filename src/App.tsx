import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import ClinicsPage from './pages/ClinicsPage';
import DoctorsPage from './pages/DoctorsPage';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <div className="App position-relative">
      <BrowserRouter>
        <Header />
        <div className="body">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/news" element={<NewsPage />}></Route>
            <Route path="/doctors" element={<DoctorsPage />}></Route>
            <Route path="/clinics" element={<ClinicsPage />}></Route>
            {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
