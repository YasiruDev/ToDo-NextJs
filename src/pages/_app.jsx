import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/styles.css';

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
};

export default App;
