import React from 'react';
import HeaderContainer from './HeaderContainer';
import CardsContainer from './CardsContainer';
import PlaceholderMenu from './../components/PlaceholderMenu'

export default class MainContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {isHide: false, oldScroll: 0, isHidePlaceholder: true};
  }
  handleClick() {
        this.setState({isPlaying: true});
        document.getElementById('bgvid').setAttribute("class", "bgvid_visible");
  }
  handleOnScroll() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled >= 100 && !this.state.isHide) {
        this.setState({isHide: true});
        document.getElementsByClassName('cards')[0].scrollIntoView();
        //document.getElementsByClassName('menu')[0].setAttribute("class", "menu menu_invisible");
    }

        console.log(this.state.oldScroll);

    if (scrolled-this.state.oldScroll > 0) {

      this.setState({oldScroll: scrolled});
    }
    if (scrolled > 100 && this.state.isHide && (scrolled-this.state.oldScroll <= -10)) {
      console.log(scrolled-this.state.oldScroll <= -10);
        this.setState({isHidePlaceholder: false});
        //document.getElementsByClassName('menu')[0].setAttribute("class", "menu");
    }
    console.log(scrolled + 'px');
  }
  componentDidMount() {
      document.addEventListener('scroll', () => this.handleOnScroll());
  }
  render() {
    return (
      <div className="container">
          {this.state.isHidePlaceholder ? null : (<PlaceholderMenu/>)}
          <HeaderContainer/>
          <CardsContainer data = {[{img: '1.jpg', header1: 'Экскурсии как бизнес', header2: 'Новый курс о том, как стать независимым гидом и проводить экскурсии'},
          {img: '1.jpg', header1: 'Экскурсии как бизнес', header2: 'Новый курс о том, как стать независимым гидом и проводить экскурсии'},
          {img: '1.jpg', header1: 'Экскурсии как бизнес', header2: 'Новый курс о том, как стать независимым гидом и проводить экскурсии'},
          {img: '1.jpg', header1: 'Экскурсии как бизнес', header2: 'Новый курс о том, как стать независимым гидом и проводить экскурсии'}]}
/>
      </div>
    );
  }
}
