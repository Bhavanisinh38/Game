import React from 'react';

// Images Common File
import * as Img from '../../components/Img';

export default function PageGamehistory() {

  return (
    <>
    <div className="gamesreen-common-bx gs-table-radius p-0">
      <div className="gs-table-heading-bx">
        <div className="gs-table-heading-item">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg> History
        </div>
      </div>

      <div className="custom-table-responsive gs-table-responsive ctr-scrollbar">
        <table className="custom-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Bet</th>
                    <th>Odds</th>
                    <th>Win</th>
                    <th>Crash</th>
                </tr>
            </thead>

            <tbody>
            
              <tr>
                  <td>13/12/2023</td>
                  <td>11:03 AM</td>
                  <td>$5000</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
              </tr>
              
              <tr className="win-game">
                  <td>13/12/2023</td>
                  <td>11:03 AM</td>
                  <td>$5000</td>
                  <td>2X</td>
                  <td>$10000</td>
                  <td>3.00X</td>
              </tr>
            
              <tr className="lost-game">
                  <td>13/12/2023</td>
                  <td>11:03 AM</td>
                  <td>$5000</td>
                  <td>-</td>
                  <td>-</td>
                  <td>3.00X</td>
              </tr>

              <tr className="win-game">
                  <td colspan="6">
                    <div className="empty-div-bx p-0" style={{minHeight:"100%"}}>
                        <img className="empty-img" src={Img.empty} alt="Data is not available" />
                        <div className="empty-sub-heading mt-2">You haven't placed any bets yet</div>
                    </div>
                  </td>
              </tr>

            </tbody>
        </table>
      </div>
    </div>
    </>
  );
};
