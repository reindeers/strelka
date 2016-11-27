import React from 'react';

export default class Menu extends React.Component {
    render() {
      return (
        <article id={this.props.uId} className="card__course">
        <div className="s_wrapper">
          <div className="wrapper">
          <img src="/1.jpg" />
        </div>
            <h1>{this.props.data.header1}</h1>
            <h2>{this.props.data.header2}</h2>
            </div>
        </article>
      )
    }
}
