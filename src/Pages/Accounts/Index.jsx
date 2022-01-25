import React from 'react';
import './Index.css'
import ViewTransactionsButton from '../../Components/ViewTransactionsButton/Index';
import { Link } from 'react-router-dom';

function Accounts() {
    return (
        <main className='accounts'>

            <div className='accounts-header'>
                <h1>Welcome back<br/>Tony Jarvis!</h1>
                <button className='accounts-header-button'>Edit Name</button>
            </div>

            <h2 className='sr-only'>Accounts</h2>

            <section className='accounts-account'>
                <div className='accounts-account-content'>
                    <h3 className='accounts-account-content-title'>Argent Bank Checking (x8349)</h3>
                    <p className='accounts-account-content-amount'>$2,082.79</p>
                    <p className='accounts-account-content-description'>Available Balance</p>
                </div>
                <ViewTransactionsButton/>
            </section>

            <section className='accounts-account'>
                <div className='accounts-account-content'>
                    <h3 className='accounts-account-content-title'>Argent Bank Savings (x6712)</h3>
                    <p className='accounts-account-content-amount'>$10,928.42</p>
                    <p className='accounts-account-content-description'>Available Balance</p>
                </div>
                <ViewTransactionsButton/>
            </section>

            <section className='accounts-account'>
                <div className='accounts-account-content'>
                    <h3 className='accounts-account-content-title'>Argent Bank Credit Card (x8349)</h3>
                    <p className='accounts-account-content-amount'>$184.30</p>
                    <p className='accounts-account-content-description'>Current Balance</p>
                </div>
                <ViewTransactionsButton/>
            </section>

        </main>
    );
}

export default Accounts;
