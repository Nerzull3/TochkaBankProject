import React, { Component } from 'react';
import './App.css';
import MainInfo from '../main_info_about_user/info_about_user';
import Payment from '../payment';
import InfoAboutCompany from '../info_about_company/info_about_company';
import FooterContent from '../footer/footer';
import AuthWindow from '../authorization_window/authorisation_window';
import AdminPanel from '../admin_panel/admin_panel';

class App extends Component {
    state = {
        authorized: false
    };

    render() {
        return (
            <div className="main-wrapper">
                {!this.state.authorized ?
                <div>
                    <AuthWindow />
                    <FooterContent />
                </div> :
                <main className="main-content">
                    {/* <AdminPanel /> */}
                    <MainInfo />
                    <hr className="decoration-line" />
                    <Payment />
                    <hr className="decoration-line" />
                    <InfoAboutCompany />
                    <FooterContent />
                </main>
                }
            </div>
        );
    }
}

export default App;
