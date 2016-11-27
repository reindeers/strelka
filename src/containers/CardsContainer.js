import React from 'react';
import Card from './../components/Card'

export default class CardsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isAllCards: false, sliceNumber: 2};
    }
    handleClick() {
        this.setState({isAllCards: true, sliceNumber: this.props.data.length});
        document.getElementsByClassName('cards')[0].setAttribute("class", "cards cards_all");
    }
    render() {

    return (
          <section className="cards">
              {this.state.isAllCards ? null : (<article className="card__description">
                  <h1>Онлайн-курсы</h1>
                  <p>Наши курсы — практические, они помогают в формировании образа мышления у горожанина, и формирования спроса на городские инициативы.</p>
                  <a href="#" onClick={(e) => this.handleClick(e)}>Посмотреть все курсы</a>
              </article>)}

              { this.props.data.slice(0, this.state.sliceNumber).map((number, index) =>
                  <Card key={index}
                            value={number} data = {number}/>
              )}
          </section>
        )
    }
}
