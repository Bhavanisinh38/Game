import React, { useState } from 'react';

export default function PageGamebtn() {

    // Input Field js
    const [isbetShow, setisbetShow] = useState(true);
    const [betValue, setbetValue] = useState('');

    const handlebetChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        setisbetShow(value === '');
        setbetValue();
    };


    const handlebetClear = () => {
        setbetValue("");
        setisbetShow(true)
    };
 
  return (

    <>
      <div className="gamesreen-common-bx">

        <div className="gcb-heading">Stake Selector</div>

        <form className="form-white">
          <div class="row">
            <div class="col-12">

                <div class="signinup-group sgri">
                  <input type="number" value={betValue}  onChange={handlebetChange} placeholder="Enter bet amount" />
                  <span className="clear-input-icon" hidden={isbetShow} onClick={handlebetClear}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                  </span>
                </div>

                <div className="beting-btns-group">
                  <div className="beting-btn">20</div>
                  <div className="beting-btn">50</div>
                  <div className="beting-btn">100</div>
                  <div className="beting-btn">500</div>
                  <div className="beting-btn">1000</div>
                  <div className="beting-btn">5000</div>
                </div>

                <div className="beting-place_take-btns"> 
                  <button type="submit">Place a bet</button>
                  <button type="submit" disabled>Take Winnings</button>
                </div>

              </div>
            </div>
        </form>

      </div>
    </>

  );
};
