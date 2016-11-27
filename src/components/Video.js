import React from 'react';

export default class Menu extends React.Component {
    render() {
      let isPlaying = this.props.play;

      if (isPlaying) {


      return (
                <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" playsInline autoPlay muted loop>
                    <source src="/1.mp4" type="video/mp4" />
                </video>
      )
    } else {
      return null;
    }
    }
}
