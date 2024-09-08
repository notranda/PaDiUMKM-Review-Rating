import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { ThemeProvider } from './context/ThemeContext';
// import About from './components/About';
// import Help from './components/Help';
// import Media from './pages/Media';
// import Contact from './pages/Contact';
// import Navbar from './Navbar/Navbar';
// import Login from './components/Login';
import Footer from './components/Footer';
import Header from './components/Header';
import ViewReviews from './pages/ViewReviews';
import './App.css';
import AddReviews from './pages/AddReviews';
import ReviewForm from './pages/ReviewForm';

function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  const handleLogin = () => setIsLogIn(true);
  const handleLogout = () => setIsLogIn(false);
  return (
    // <ThemeProvider>
    <Router>
      <Header
        isLogIn={isLogIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route path="/" element={<ViewReviews />} />
        <Route path="/add-review" element={<AddReviews />} />
        <Route path="/form-review" element={<ReviewForm />} />
        {/* <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
