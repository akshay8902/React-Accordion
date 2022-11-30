import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {faqs} from './metaData';
import Down from './down2.svg';
import Up from './up2.svg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
      faqs={faqs}
      // multipleOpen
      // defaultOpen={2}
      downSvg={Down}
      upSvg={Up}
    />
  </React.StrictMode>
);

