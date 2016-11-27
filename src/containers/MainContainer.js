import React from 'react';
import HeaderContainer from './HeaderContainer';
import CardsContainer from './CardsContainer';
import PlaceholderMenu from './../components/PlaceholderMenu'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isHide: false, oldScroll: 0, isHidePlaceholder: true};
    }
    handleOnScroll() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled >= 100 && !this.state.isHide) {
            this.setState({isHide: true});
            document.getElementsByClassName('cards')[0].scrollIntoView();
        }

        let isScrollDown = scrolled - this.state.oldScroll > 0;
        if (isScrollDown) {
            this.setState({oldScroll: scrolled});
        }

        let isScrollUpWithDuration10 = scrolled - this.state.oldScroll <= -10;
        if (scrolled > 100 && this.state.isHide && (isScrollUpWithDuration10)) {
            //скрывать placeholder-меню
        }
        if (scrolled <= 100  && this.state.isHide ){
            this.setState({isHide: false, oldScroll: 0, isHidePlaceholder: true});
        }
    }
    componentDidMount() {
        document.addEventListener('scroll', () => this.handleOnScroll());
    }
    render() {
      let data = [{img: '/1.jpg', header1: 'Экскурсии как бизнес', header2: 'Новый курс о том, как стать независимым гидом и проводить экскурсии'},
                  {img: '/1.jpg', header1: 'Экскурсии как бизнес', header2: 'Новый курс о том, как стать независимым гидом и проводить экскурсии'},
                  {img: '/1.jpg', header1: 'Экскурсии как бизнес', header2: 'Новый курс о том, как стать независимым гидом и проводить экскурсии'},
                  {img: '/1.jpg', header1: 'Экскурсии как бизнес', header2: 'Новый курс о том, как стать независимым гидом и проводить экскурсии'}];
      return (
        <div className="container">
            {this.state.isHidePlaceholder ? null : (<PlaceholderMenu/>)}
            {this.state.isCardAll ? null : (<HeaderContainer/>)}
            <CardsContainer data = {data} />
        </div>
      );
    }
}
