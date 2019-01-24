import React from 'react';
import './footer.css';

class FooterContent extends React.Component {
    render() {
        return (
            <footer className="footer-content">
                <ul className="footer-content__row">
                    <li className="list-item list-item__link">
                        <a
                            className="link item-link list-item__link-1"
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        {/*  */}
                        </a>
                    </li>
                    <li className="list-item list-item__link">
                        <a
                            className="link item-link list-item__link-2"
                            href="https://vk.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        {/*  */}
                        </a>
                    </li>
                    <li className="list-item list-item__link">
                        <a
                            className="link item-link list-item__link-3"
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        {/*  */}
                        </a>
                    </li>
                    <li className="list-item list-item__link">
                        <a
                            className="link item-link list-item__link-4"
                            href="https://mail.ru"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        {/*  */}
                        </a>
                    </li>
                    <li className="list-item list-item__link">
                        <a
                            className="link item-link list-item__link-5"
                            href="https://odnoklassniki.ru"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        {/*  */}
                        </a>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default FooterContent;
