import React from "react";
import "./homePage.css";
import backend_icon from "../img/backend-img.png";
import frontend_icon from "../img/frontend-img.png";
import fullstack_icon from "../img/fullstack-img.png";
import uiux_icon from "../img/ui-ux.png";

import decs_icon from "../img/images-removebg-preview (2).png";

import facebook from "../img/facebook.png";
import insta_icon from "../img/insta.png";
import twiter_icon from "../img/twiter.png";

const HomePage = () => {
    return (
        <div>
            <div className="HomePage_header_block">
                <h1>Добро пожаловать в Pixel Forge</h1>
                <img
                    className="header_img"
                    src="https://assets-global.website-files.com/5a9ee6416e90d20001b20038/64f58e8cf7b1f3b2c5723431_Edisons-broken-bulb.svg"
                    alt=""
                />
            </div>
            <div className="header__info_block">
                <p>
                    Независимо от того, начинаете ли вы новичок или ведете
                    крупный бизнес, наша команда опытных инженеров готова
                    предоставить качественные управляемые ИТ-услуги и
                    техническую поддержку. Мы предлагаем пакеты услуг,
                    адаптированные к потребностям вашей организации, чтобы вы
                    могли сосредоточиться на самом важном – ведении своего
                    бизнеса! Наши специалисты службы поддержки сводят к минимуму
                    время простоя, обеспечивая при этом быстрое решение любых
                    проблем, давая вам уверенность в том, что ваша
                    технологическая инфраструктура всегда в надежных руках.
                </p>
            </div>
            <h2
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "30px",
                }}>
                Our Services
            </h2>
            <div className="homePage_services">
                <ul className="homePage_services_list">
                    <div className="homePage_services_item">
                        <img src={backend_icon} alt="" />
                        <h3>backend</h3>
                        <div className="homePage_services_description">
                            <p>
                                Наша команда состоит из опытных
                                backend-разработчиков с глубоким пониманием
                                технологий с индивидуальный подходом,
                                надежностью , производительностью и
                                Масштабируемостью
                            </p>
                        </div>
                        <button className="order_btn">order</button>
                    </div>
                    <div className="homePage_services_item">
                        <img src={frontend_icon} alt="" />
                        <h3>frontend</h3>
                        <div className="homePage_services_description">
                            <p>
                                Наша команда дизайнеров и разработчиков создает
                                уникальные и привлекательные пользовательские
                                интерфейсы, скорость разработки, тестирование и
                                адаптивность
                            </p>
                        </div>
                        <button className="order_btn">order</button>
                    </div>
                    <div className="homePage_services_item">
                        <img src={fullstack_icon} alt="" />
                        <h3>fullstack</h3>
                        <div className="homePage_services_description">
                            <p>
                                Наша команда обладает глубокими знаниями и
                                опытом в области как frontend, так и backend
                                разработки, что позволяет нам предоставлять
                                полноценные технологические стеки для наших
                                клиентов
                            </p>
                        </div>
                        <button className="order_btn">order</button>
                    </div>
                    <div className="homePage_services_item">
                        <img src={uiux_icon} alt="" />
                        <h3>ui/ux</h3>
                        <div className="homePage_services_description">
                            <p>
                                Наша команда дизайнеров создает инновационные и
                                креативные дизайн-концепции, отражающие
                                уникальные характеристики вашего бренда и
                                приложения
                            </p>
                        </div>
                        <button className="order_btn">order</button>
                    </div>
                </ul>
            </div>

            <div className="order_block">
                <div className="order_block_left_block">
                    <h2>заказать сайчас</h2>
                    <input
                        type="text"
                        className="order_inp"
                        placeholder="имя"
                    />
                    <input
                        type="text"
                        className="order_inp"
                        placeholder="фамилия"
                    />
                    <input
                        type="text"
                        className="order_inp"
                        placeholder="номер телефона"
                    />
                    <input
                        type="text"
                        className="order_inp"
                        placeholder="email"
                    />
                    <button className="order_btn">order</button>
                </div>
                <div className="order_block_right_block">
                    <img
                        src="https://images.pexels.com/photos/3970396/pexels-photo-3970396.jpeg?cs=srgb&dl=pexels-mudassir-ali-3970396.jpg&fm=jpg"
                        alt=""
                    />
                </div>
            </div>

            <div className="footer_info">
                <div className="footer_info_center">
                    <div className="footer_info_left">
                        <h2>немного о нас</h2>
                        <p>
                            инновационная IT-компания в Кыргызстане,
                            специализирующаяся на создании современных и
                            функциональных веб-сайтов. Мы стремимся
                            предоставлять клиентам высококачественные решения,
                            соответствующие последним тенденциям в
                            веб-разработке.
                        </p>
                    </div>
                    <div className="footer_info_right">
                        <img src={decs_icon} alt="" />
                    </div>
                </div>
            </div>

            <footer class="dark-footer">
                <div class="footer-logo">
                    <h2>Pixel Forge</h2>
                </div>
                <div class="contact-info">
                    <h2>Контактная информация</h2>
                    <p>Email: keepa3003@gmail.com</p>
                    <p>Телефон: +996 500 200 100</p>
                </div>

                <div class="social-links">
                    <h2>Мы в социальных сетях</h2>
                    <div className="social-links_icons">
                        <a href="#" target="_blank">
                            <img
                                src={facebook}
                                alt=""
                                className="contact_icon"
                            />
                        </a>
                        <a href="#" target="_blank">
                            <img
                                src={twiter_icon}
                                alt=""
                                className="contact_icon"
                            />
                        </a>
                        <a href="#" target="_blank">
                            <img
                                src={insta_icon}
                                alt=""
                                className="contact_icon"
                            />
                        </a>
                    </div>
                </div>

                <div class="payment-options">
                    <h2>Способы оплаты</h2>
                    <img src="visa.png" alt="Visa" />
                    <img src="mastercard.png" alt="MasterCard" />
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
