import React from 'react';
import Card from './../components/Card';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class CardsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isAllCards: false, sliceNumber: 2}; //sliceNumber - по-умолчанию выводить только две карточки на просмотр
    }
    handleClick() {
        this.setState({isAllCards: true, sliceNumber: this.props.data.length});
        document.getElementsByClassName('cards')[0].style.position = "absolute";
        document.getElementsByClassName('cards')[0].setAttribute("class", "cards cards_all");
    }
    render() {
        return (
              <section className="cards">
                  {this.state.isAllCards ?
                        null :
                        (<ReactCSSTransitionGroup
                              transitionName="example"
                              transitionEnterTimeout={500}
                              transitionLeaveTimeout={500}>

                              <article className="card__description">
                                  <h1>Онлайн-курсы</h1>
                                  <p>Наши курсы — практические, они помогают в формировании образа мышления у горожанина, и формирования спроса на городские инициативы.</p>
                                  <a href="#" onClick={(e) => this.handleClick(e)}>Посмотреть все курсы</a>
                              </article>
                              
                          </ReactCSSTransitionGroup>)
                    }

                   {this.props.data.slice(0, this.state.sliceNumber).map((number, index) =>
                      <Card key={index}
                            value={number}
                            data = {number}
                      />
                  )}
              </section>
        )
    }
}
