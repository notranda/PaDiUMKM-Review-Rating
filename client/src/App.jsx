// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ViewReviews from './pages/ViewReviews';
import AddReviews from './pages/AddReviews';
import ReviewForm from './pages/ReviewForm';
import './App.css';
import PopUpSuccess from './components/PopUpSuccess';
import PopUpUlasan from './components/PopUpUlasan';
import PopUpStar from './components/PopUpStar';
import PopUpReceive from './components/PopUpReceive';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AddReviews />} />
        <Route path="/add-review" element={<AddReviews />} />
        <Route path="/form-review" element={<ReviewForm />} />
        <Route path="/view" element={<ViewReviews />} />
        <Route path="/popup" element={<PopUpSuccess />} />
        <Route path="/popupul" element={<PopUpUlasan />} />
        <Route path="/popuprat" element={<PopUpStar />} />
        <Route path="/popuprec" element={<PopUpReceive />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
