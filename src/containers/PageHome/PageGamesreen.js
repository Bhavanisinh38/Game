import React, { useEffect, useState, useCallback, useRef } from 'react';

// Images Common File
import giplanelg from "../../img/aitplane/giplanelg.png";

export default function PageGamesreen() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameEnd, setIsGameEnd] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [rotationAngle, setRotationAngle] = useState(-30);
  const [waiting, setWaiting] = useState(false);
  const [winIndicatorShow, setWinIndicatorShow] = useState(false);
  const [winCounter, setWinCounter] = useState(1);
  const GSBX = document.querySelector('.gi-step-bx');

  const WinCounterIntervalRef = useRef(null);

  const startGame = useCallback(() => {
    setIsGameStarted(true);
    setWinIndicatorShow(true);

    const maxTimeout = 10000;
    const minTimeout = 0;
    const randomTimeout = Math.floor(Math.random() * (maxTimeout - minTimeout + 1) + minTimeout);

    const timeoutId = setTimeout(() => {
      setIsGameEnd(true);

      setTimeout(() => {
        setIsGameStarted(false);
        setIsGameEnd(false);
      }, 5000);
      
      setTimeout(() => {
        setCountdown(10);
        setWinCounter(1);
      }, 4000);

      setTimeout(() => {
        setWinIndicatorShow(false);
        setWaiting(true);
      }, 2000);
      
      setTimeout(() => {
        clearInterval(WinCounterIntervalRef.current);
        GSBX.classList.remove('hidesomestpe');
      }, 0);


    }, randomTimeout);

    return () => clearTimeout(timeoutId);
  }, [GSBX]);

  const updateRotation = useCallback(() => {
    setRotationAngle((prevAngle) => (prevAngle - 30) % 360);
  }, []);

  useEffect(() => {
    WinCounterIntervalRef.current = setInterval(() => {
      if (isGameStarted === true) {
        setWinCounter((prevWinCounter) => prevWinCounter + 0.01);
      } else {
        clearInterval(WinCounterIntervalRef.current);
      }
    }, 70);

    return () => clearInterval(WinCounterIntervalRef.current);
  }, [isGameStarted, isGameEnd]);

  useEffect(() => {
    if (isGameEnd === false && countdown >= 0) {
      setWaiting(false);

      const countdownInterval = setInterval(() => {
        if (countdown > 0) {
          setCountdown((prevCountdown) => prevCountdown - 1);
          updateRotation();
          if (countdown === 4) {
            GSBX.classList.add('hidesomestpe');
          }
        } else {
          clearInterval(countdownInterval);
          startGame();
          updateRotation();
          setRotationAngle(-30);
        }
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [isGameEnd, countdown, GSBX, startGame, updateRotation]);

  return (
    <>
      <section className={`gamesreen-main-bx ${isGameStarted ? 'game-start' : ''} ${isGameEnd ? 'game-end' : ''}`}>
        <div className="container-lg px-0">
          <div className="gamesreen-bx">
            <div className="gamesreen-inner">

              <div className="gi-airplane-bx">
                <div className="gi-img-item gi-airplane"></div>
                <div className="gi-img-item crash-img"></div>
                <img src={giplanelg} alt="" />
              </div>

              <div className="gi-mountains-bx">
                <div className="gi-mountain gim-5"></div>
                <div className="gi-mountain gim-4"></div>
                <div className="gi-mountain gim-3"></div>
                <div className="gi-mountain gim-2"></div>
                <div className="gi-mountain gim-1"></div>
              </div>

              <div className="dots dots-x"></div>
              <div className="dots dots-y"></div>

              <div className="gi-countdown-bx">
                <div className="gi-countdown">{countdown}</div>
                <div className='gi-step-indicator'></div>
                <div className="gi-step-bx" style={{ transform: `rotate(${rotationAngle}deg)` }}>
                  <div className="gi-step-item"></div>
                  <div className="gi-step-item"></div>
                  <div className="gi-step-item"></div>
                  <div className="gi-step-item"></div>
                  <div className="gi-step-item"></div>
                  <div className="gi-step-item"></div>
                  <div className="gi-step-item"></div>
                  <div className="gi-step-item"></div>
                  <div className="gi-step-item"></div>
                  <div className="gi-step-item"></div>
                  <div className="gi-step-item lastgsi"></div>
                </div>
              </div>

              <div className={`gi-waiting ${waiting ? "active" : " "}`}>
                <div className="gi-waiting-img">
                  <div className="gi-wi-airplane"></div>
                  <div className="gi-wi-after"></div>
                </div>
                <div className="gi-wi-text">waiting for you to place your first bet...</div>
              </div>

              <div className={`gi-win-indicator ${winIndicatorShow ? "active" : ""} `}>{winCounter.toFixed(2)}X</div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
