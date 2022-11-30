import { useState } from 'react';
import './App.css';
import Down from './down.svg';
import Up from './up.svg';

function App({
    faqs,
    multipleOpen=true,
    defaultOpen=null,
    downSvg,
    upSvg,
  }) {
  
  //initial setup
  const initialFaqState = Array(faqs.length).fill(false);
  if (defaultOpen !== null) {
    initialFaqState[defaultOpen] = !initialFaqState[defaultOpen];
  }
  const downIcon = downSvg || Down;
  const upIcon = upSvg || Up;
  const [faqState, setFaqState] = useState(initialFaqState);
  let calculatedFaqState;

  const changeFaqState = (index) => { 
    calculatedFaqState = faqState;
    
    if (multipleOpen) {
      // multiple faqs open at a time
      calculatedFaqState[index] = !calculatedFaqState[index];
    } else {
      // one faq open at a time only
      const openedFaq = calculatedFaqState.findIndex(state => state);
      if (openedFaq !== index) {
        calculatedFaqState[openedFaq] = !calculatedFaqState[openedFaq];
        calculatedFaqState[index] = !calculatedFaqState[index]
      } else {
        calculatedFaqState[index] = !calculatedFaqState[index];
      }
    }

    // setting final faqState
    setFaqState([...calculatedFaqState]);
  }
  return (
    <div className="faqContainer">
      {
        faqs.map((item, index) => {
          return (
            <div className="faqItem" key={index}>
              <div className="faqQuestion" onClick={() => changeFaqState(index)}>
                <p>{item.question}</p>
                <img 
                  src={faqState[index] ? upIcon : downIcon}
                  alt="faqIcon"
                  className="faqIcon"
                />
              </div>
              {faqState[index] && <p className="faqAnswer">{item.answer}</p>}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
