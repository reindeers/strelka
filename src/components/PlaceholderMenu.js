import React from 'react';

export default class Menu extends React.Component {
    render() {
      return (
            <nav className="menu__navigation placeholderMenu__navigation">
                <ul className="menu__navigation_list">
                    <li className="menu__navigation-item_logo">vector</li>
                    <li>Курсы</li>
                    <li>Материалы</li>
                    <li>Проекты</li>
                    <li>Партнерство</li>
                    <li>О школе</li>
                    <li className="menu__navigation-item_sign-in">Войти</li>
                    <li className="menu__navigation-item_sign-up">Зарегистрироваться</li>
                </ul>
            </nav>
      )
    }
}
