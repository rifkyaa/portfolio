import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Rifkyyy</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about"
                            className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href="#portfolio"
                            className='footer__link'>Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials"
                            className='footer__link'>Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/rfkyyyyy/" className='footer__social-link' target="_blank">
                        <i class="uil uil-instagram"></i>
                    </a>
                    <a href="https://github.com/rifkyaa" className='footer__social-link' target="_blank">
                        <i class="uil uil-github-alt"></i>
                    </a>
                    <a href="#" className='footer__social-link' target="_blank">
                        <i class="uil uil-twitter"></i>
                    </a>
                    <a href="https://web.facebook.com/rifkyandriansyah.anggela" className='footer__social-link' target="_blank">
                        <i class="uil uil-facebook-f"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; rifkyandriansyah. All rigths reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer