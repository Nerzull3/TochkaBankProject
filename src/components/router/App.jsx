import React, { Component } from 'react';
import './App.css';
import MainInfo from '../main_info_about_user/info_about_user';
import Payment from '../payment';
import InfoAboutCompany from '../info_about_company/info_about_company';
import FooterContent from '../footer/footer';

class App extends Component {
    // state = {users: []};

//     componentDidMount() {
//         fetch('/users')
//             .then(res => res.json())
//             .then(users => this.setState({ users }));
//   }
    render() {
        return (
            <div className="main-wrapper">
                <main className="main-content">
                    <MainInfo />
                    <hr className="decoration-line" />
                    <Payment />
                    <hr className="decoration-line" />
                    <InfoAboutCompany />
                    <FooterContent />
                </main>
            </div>
        );
    }
}

export default App;
