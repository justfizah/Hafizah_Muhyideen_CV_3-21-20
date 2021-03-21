import React, { useState } from 'react';
import ReactDOM  from 'react-dom';

import './index.css';

const Home = () => (
    <div className="container">
        <header className="main_header"><span>X</span></header>
        <div className="main_icon"><span>icon</span></div>
        <div className="main_content">
            <h1>So what gives?</h1>
            <ul className="main_content_list">
                <li>
                    <span className="number">1</span>
                    <p className="content">
                        Answer a few simple questions about your business
                    </p>
                </li>
                <li>
                    <span className="number">2</span>
                    <p className="content">
                        Browse through specially curated qoutes
                    </p>
                </li>
                <li>
                    <span className="number">3</span>
                    <p className="content">
                        Select your quote-of-choice and receive your policy instantly
                    </p>
                </li>
            </ul>
        </div>
        <button className="main_button">Get Started</button>
        <footer className="footer">
            <span className="footer_icon">icon</span>
            <span>Powered by Blitz</span>
        </footer>
    </div>
)

const Header = () => (
    <header className="header">
        <div>
            <span className="header-icon">Icon</span>
            <span className="header-name">Umbrella Hub</span>
        </div>
        <span className="header-close">X</span>
    </header>
)

const Footer = () => (
    <div className="main-footer">
        <span className="main-footer_page-number">2/7</span>
        <div>
            <span className="main-footer_icon">I</span>
            <span className="main-footer_icon">I</span>
        </div>
    </div>
)

const Wrapper = () => (
    <div className="wrapper">
        <Header />
        <div className="main-pages">
            <FirstPage />
            <SecondPage />
            <FifthPage />
            <SixPage />
            <SevenPage />
        </div>
        <Footer />
    </div>
)

const FirstPage = (props) => (
    <div className="container first-page-container">
        <div className="first-page-title">
            <span className="number">1</span>
            <h2>What type of insurance are you looking for?</h2>
        </div>
        <div>
            <div className="first-page-content">
                <span className="first-page-content-icon">
                    icon
                </span>
                <div className="first-page-content-detail">
                    <p>Professional Liability</p>
                    <span>Errors and Omissions (EandO insurance) </span>
                </div>
            </div>
            <div className="first-page-content">
                <span className="first-page-content-icon">
                    icon
                </span>
                <div className="first-page-content-detail">
                    <p>General Liability</p>
                    <span>Help mitigate against loss (CGL insurance)</span>
                </div>
            </div>
            <div className="first-page-content">
                <span className="first-page-content-icon">
                    icon
                </span>
                <div className="first-page-content-detail">
                    <p>Business Owner's Policy</p>
                    <span>The complete package (BOP)</span>
                </div>
            </div>
            <div className="first-page-content">
                <span className="first-page-content-icon">
                    icon
                </span>
                <div className="first-page-content-detail">
                    <p>Cyber</p>
                    <span>Internet-based risks (CLIC)</span>
                </div>
            </div>
        </div>
    </div>
)

const SecondPage = () => (
    <div className="container second-page-container">
        <div className="first-page-title">
            <span className="number">2</span>
            <h2>What's the name of your business?</h2>
        </div>
        <div className="second-page">
            <input type="text" value="Hoop Heaven" />
            <button>OK <span>icon</span></button>
        </div>
    </div>
)

const FifthPage = () => (
    <div className="container fifth-page">
        <div className="first-page-title">
            <span className="number">5</span>
            <div>
            <h2>Do you do your own design?</h2>
            <p className="fifth-page-p">Does your business provide design services?</p>
            </div>
        </div>
        <div className="first-page-content">
            <span className="first-page-content-icon">
                icon
            </span>
            <div className="first-page-content-detail">
                <p>Yes</p>
                <span>We do design in-house</span>
            </div>
        </div>
        <div className="first-page-content">
            <span className="first-page-content-icon">
                icon
            </span>
            <div className="first-page-content-detail">
                <p>No</p>
                <span>We're gonna need some assistance</span>
            </div>
        </div>
    </div>
)

const SixPage = () => (
    <div className="container six-page">
        <div className="first-page-title">
            <span className="number">6</span>
            <h2>Include building coverage?</h2>
        </div>
        <div className="first-page-content">
            <span className="first-page-content-icon">
                icon
            </span>
            <div className="first-page-content-detail">
                <p>Yes</p>
            </div>
        </div>
        <div className="first-page-content">
            <span className="first-page-content-icon">
                icon
            </span>
            <div className="first-page-content-detail">
                <p>No</p>
            </div>
        </div>
    </div>
)

const SevenPage = () => (
    <div className="container seven-page-container">
        <div className="first-page-title">
            <span className="number">7</span>
            <h2>When did your business begin?</h2>
        </div>
        <div className="seven-page">
            <div>
                <input type="text" value="Hoop Heaven" />
                <span>Icon</span>
            </div>
            <button>OK <span>icon</span></button>
        </div>
        <button className="main_button">Get Quotes</button>
    </div>
)

const OrderPage = () => (
    <div className="container">
        <div className="main_icon"><span>icon</span></div>
        <div className="main_content">
            <h2>So what gives?</h2>
            <p>We dove deep</p>
        </div>
        
    </div>
)

const Container = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }
    return (
        <div>
            <Wrapper />
        </div>
    )
}


ReactDOM.render(
    <Container />,
    document.querySelector('#root')
)
