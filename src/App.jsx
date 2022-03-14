import React from 'react';
import { useSelector } from 'react-redux';
import { Home } from './pages/Home/Home'
import Header from './shared/Header/Header';
import { Spinner } from './Spinner/Spinner'

import Popup from './shared/Popup/Popup';

function App() {

  const loading = useSelector((state) => state.loading);
  const modalData = useSelector((state) => state.modalData);

  return (
    <div className="global-container">
      {modalData.length === 1 ? <Popup /> : null}
      <div className="container">
        <Header />
        {loading ? <Spinner /> : <Home />}
      </div>
    </div>
  );
}
export default App;

