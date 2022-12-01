import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Faq from './Faq';
import {faqs} from './metaData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Faq 
      faqs={faqs}
      multipleOpen
      defaultOpen={0}
    />
  </React.StrictMode>
);

