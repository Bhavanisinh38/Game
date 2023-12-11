import React, { useState }  from 'react';
import { Helmet } from "react-helmet-async";

// Images Common File
import * as Img from '../../components/Img';
import walletgrapics from '../../img/wallet.webp';
import QRcode from '../../img/qr.png';
import capture from '../../img/icons/capture.png';

// Design File
import Commonlayout from "./Commonlayout";


export default function PageWallet() {

    // Screen section Tabbing Js
    const [addWlmoney, setAddWlmoney] = useState('mainscreen');
    const [amibSection, setAmibSection] = useState('QRCode');

    const handleaddmoneycancel = ()=>{
        setAddWlmoney("mainscreen");
    };

    const handleaddWlmoney = (addWlmoneyId) => {
        setAddWlmoney(addWlmoneyId);
    };

    const handleAmibSection = (AmibSectionId) => {
        setAmibSection(AmibSectionId);
    };
    

    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileSelect = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    };

    const preventDefault = (e) => {
        e.preventDefault();
    };

    const deleteFile = (index) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles.splice(index, 1);
        setSelectedFiles(updatedFiles);
    };

    const showFileUploadInput = selectedFiles.length === 0;

  return (
    <Commonlayout>
        
    <Helmet>
        <title>Wallet | Game</title>
    </Helmet>

    {/* --- Profile Bx Start --- */}
    <div className='amib-inner-item'>

        {/* --- Mainscreen Section --- */}
        <div className={`amib-900-width ${addWlmoney === 'mainscreen' ? '' : 'd-none'} `} id="mainscreen">
            <div className="amib-i-header">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                </svg>
                Wallet
            </div>

            <div className="amib-item amib-item-bg-none p-0 rounded-0">
                <form action="">
                    <div className="wallet-amount-bx">
                        <div className="wab-data-bx">
                            <div className="wdb-money">$99,99,999</div>
                            <div className="wdb-lable">Current wallet ballance</div>
                        </div>

                        <div className="wallet-amount-btns">
                            <button className="add-money-btn" type="button" onClick={() => handleaddWlmoney('addmoney')}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                Add money
                            </button>
                            <button className="add-money-btn withdrawal-btn" type="button" onClick={() => handleaddWlmoney('withdrawalmoney')}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                </svg>
                                Withdrawal
                            </button>
                        </div>

                        <img className="walletgrapics" src={walletgrapics} alt="walletgrapics" />
                    </div>
                </form>

                
                <div className="amib-i-header mt-4 pt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                    All transitions history
                </div>

                <div className="custom-table-responsive">
                    <table className="custom-table">

                        <thead>
                            <tr>
                                <th>Transitions</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>
                                    <div className="ct-data-outer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                        </svg>
                                        <div className="ct-data-bx">
                                            <div className="ct-lable">Wallet To Bank Account</div>
                                            <div className="ct-date">06/12/23</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="ct-data-bx">
                                        <div className="ct-amount-lable">Processing...</div>
                                        <div className="ct-amount">$5000</div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className="ct-data-outer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                        </svg>
                                        <div className="ct-data-bx">
                                            <div className="ct-lable">Bet amount $5000</div>
                                            <div className="ct-date">06/12/23</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="ct-data-bx ct-less">
                                        <div className="ct-amount-lable">Lost</div>
                                        <div className="ct-amount">- $5000</div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className="ct-data-outer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                        </svg>
                                        <div className="ct-data-bx">
                                            <div className="ct-lable">Bet amount $5000</div>
                                            <div className="ct-date">06/12/23</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="ct-data-bx ct-added">
                                        <div className="ct-amount-lable">Win 2x</div>
                                        <div className="ct-amount">+ $10000</div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className="ct-data-outer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                        </svg>
                                        <div className="ct-data-bx">
                                            <div className="ct-lable">Wallet To Bank Account</div>
                                            <div className="ct-date">06/12/23</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="ct-data-bx ct-less">
                                        <div className="ct-amount-lable">Withdrawal</div>
                                        <div className="ct-amount">- $5,000</div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className="ct-data-outer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                        </svg>
                                        <div className="ct-data-bx">
                                            <div className="ct-lable">Wallet To Bank Account</div>
                                            <div className="ct-date">06/12/23</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="ct-data-bx ct-less">
                                        <div className="ct-amount-lable">Withdrawal</div>
                                        <div className="ct-amount">- $5,000</div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className="ct-data-outer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                                        </svg>
                                        <div className="ct-data-bx">
                                            <div className="ct-lable">Bank Account To Wallet</div>
                                            <div className="ct-date">06/12/23</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="ct-data-bx ct-added">
                                        <div className="ct-amount-lable">Deposit</div>
                                        <div className="ct-amount">+ $20,000</div>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                        
                    </table>
                </div>

            </div>

        </div>

        {/* --- Addmoney Section --- */}
        <div className={`amib-900-width ${addWlmoney === 'addmoney' ? '' : 'd-none'} `} id="addmoney">

            <div className="amib-i-header">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add money to wallet

                <div className='amib-i-cancel' onClick={handleaddmoneycancel}>Cancel</div>
            </div>

            <div className="amib-item pb-2">
                <div className="amib-inner-tabbx commonscrollbarhide mt-4 mt-md-0">
                    <div className={`ait-link ${amibSection === 'QRCode' ? 'active' : ''}`} onClick={() => handleAmibSection('QRCode')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                        </svg>
                        Scan Qr Code
                    </div>
                    <div className={`ait-link ${amibSection === 'bankdetail' ? 'active' : ''}`} onClick={() => handleAmibSection('bankdetail')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                        </svg>
                        Bank Detail
                    </div>
                </div>

                <div className='amib-loadmoney-bx'>

                    <div className={`amib-i-tab ${amibSection === 'QRCode' ? 'active' : ''}`} id="QRCode">
                        <div className="amib-i-sublable">Scan the QR code and submit the transaction ID you got after making the payment</div>
                        <div className='loadmoney-data-bx'>
                            <img src={QRcode} alt="QRcode" />
                        </div>
                    </div>

                    <div className={`amib-i-tab ${amibSection === 'bankdetail' ? 'active' : ''}`} id="bankdetail">
                        <div className="amib-i-sublable">Scan the QR code and submit the transaction ID you got after making the payment</div>
                        <div className="loadmoney-data-bx">

                            <div className="row mx-0">
                                <div className="col-md-12 col-sm-6 ldb-data-item">Account Name:
                                    <span>Game</span>
                                </div>

                                <div className="col-md-12 col-sm-6 ldb-data-item">Bank Name:
                                    <span>Kotak Mahindra Bank</span>
                                </div>

                                <div className="col-md-12 col-sm-6 ldb-data-item">Branch:
                                    <span>Satellite Branch</span>
                                </div>

                                <div className="col-md-12 col-sm-6 ldb-data-item">Account Number:
                                    <span>0801199708011997</span>
                                </div>

                                <div className="col-md-12 col-sm-6 ldb-data-item">IFSC Code:
                                    <span>KKBK08011997</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="amib-i-tab active mt-md-0 mt-4">
                        <form action="" className="ps-md-4">

                            <div className="row mx-md-0">

                                <div className="col-12">
                                    <div className="signinup-group">
                                        <div className="group__label">Transaction ID</div>
                                        <input type="text" placeholder="Enter transaction id"/>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="signinup-group">
                                        <label className="group__label">Attach payment screenshot</label>
                                        {showFileUploadInput && (
                                            <>
                                            <label htmlFor="fileupload" className="fileupload" onDrop={handleDrop} onDragOver={preventDefault}>
                                                <img className="feud-img" src={capture} alt="Payment screenshot" />
                                                <div className="feud-lable">Drag a photo or <span>Browse</span></div>
                                            </label>
                                            <input hidden type="file" name="fileupload" id="fileupload" accept="image/*" onChange={handleFileSelect} />
                                            </>
                                        )}

                                        <ol className="fileupload-list">
                                            {selectedFiles.map((file, index) => (
                                                <li className="fileupload-item filstn  mt-0 mb-4" key={index}>
                                                    {file.type.startsWith('image/') && (
                                                        <>
                                                            <img src={URL.createObjectURL(file)} alt={file.name} />
                                                            <span className="clear-input-icon" onClick={() => deleteFile(index)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"></path>
                                                                </svg>
                                                            </span>
                                                        </>
                                                    )}
                                                </li>
                                            ))}
                                        </ol>

                                    </div>
                                </div>

                            </div>

                            <div className="amib-save-btn-bx mt-1">
                                <button type="button" className="common-submit-btn">Submit</button>
                                <div className="lsb-loader-btn">
                                    <img src={Img.loading} alt="Please wait" />Please wait ....
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

        {/* --- Withdrawalmoney Section --- */}
        <div className={`amib-576-width ${addWlmoney === 'withdrawalmoney' ? '' : 'd-none'} `} id="withdrawalmoney">

            <div className="amib-i-header">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
                Withdrawal money
                <div className='amib-i-cancel' onClick={handleaddmoneycancel}>Cancel</div>
            </div>

            <div className="amib-item pb-2">
                <form action="">

                    <div className="row">

                        <div className="col-sm-12">
                            <div className="signinup-group">
                                <div className="group__label">Amount</div>
                                <input type="text" placeholder="Enter amount"/>
                            </div>
                        </div>

                    </div>

                    <div className="signinup-group-nots">
                        <span>Please note:</span>
                        <p>Withdrawal amount will be transferred to your bank account after admin approval.</p>
                    </div>

                    <div className="amib-save-btn-bx mt-1">
                        <button type="button" className="common-submit-btn">Submit</button>
                        <div className="lsb-loader-btn">
                            <img src={Img.loading} alt="Please wait" />Please wait ....
                        </div>
                    </div>

                </form>
            </div>

        </div>

    </div>
    {/* --- Profile Bx End --- */}

    </Commonlayout>

    
  );
};
