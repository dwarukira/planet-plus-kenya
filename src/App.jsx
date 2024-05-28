import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import { Homepage, BlogContentPage, GalleryPage, MainPage, PartnersPage, } from './pages';
import ProductPage from './pages/ProductPage';


function App() {
  const { loading, data, error } = useFetch('http://localhost:1337/api/blogs?populate=*');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>

      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/partners' element={<PartnersPage />} />
        <Route path='/blogs' element={<Homepage blogs={data} />} />
        <Route path='/blog/:id' element={<BlogContentPage blogs={data} />} />
        <Route path='/gallery' element={<GalleryPage />} />
      </Routes>

    </div>
  );
}

export default App;