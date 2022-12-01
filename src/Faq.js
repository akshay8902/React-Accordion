import { useState } from 'react';
import Down from './down.svg';
import Up from './up.svg';

function Faq({
    faqs,
    multipleOpen=true,
    defaultOpen=null,
    onClick=function(){},
    downSvg=undefined,
    upSvg=undefined,
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
    onClick();
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
              {faqState[index] && (item?.template 
                ? <div dangerouslySetInnerHTML={{__html: item.template}} className="faqTemplate"></div>
                : <p className="faqAnswer">{item.answer}</p>
              )}
            </div>
          )
        })
      }
    </div>
  );
}

export default Faq;
