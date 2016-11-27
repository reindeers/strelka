import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isPlaying: false};
    }
    handleClick() {
          this.setState({isPlaying: true});
          document.getElementsByClassName('header__video')[0].setAttribute("class", "header__video header__video_visible");
    }
    render() {
        return (
            <section className="menu">
                <video className="header__video" playsInline autoPlay muted loop>
                    <source src="/1.mp4" type="video/mp4" />
                </video>
                <nav className="menu__navigation">
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
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {this.state.isPlaying ?
                        null :
                        (<div className="menu__header">
                            <h1>Онлайн-школа городских предпринимателей</h1>
                            <button className="menu__start_button">Начать обучение</button>
                            <button className="menu__play_button" onClick={(e) => this.handleClick(e)}>go</button>
                            <span>Посмотреть видео</span>
                        </div>)
                    }
                    {this.state.isPlaying ? null : (<p className="menu__counter">0</p>)}
                </ReactCSSTransitionGroup>
            </section>
        );
    }
}
