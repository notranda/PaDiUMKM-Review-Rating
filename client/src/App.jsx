// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ViewReviews from './pages/ViewReviews';
import AddReviews from './pages/AddReviews';
import ReviewForm from './pages/ReviewForm';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AddReviews />} />
        <Route path="/add-review" element={<AddReviews />} />
        <Route path="/form-review" element={<ReviewForm />} />
        <Route path="/viewreviews" element={<ViewReviews />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
