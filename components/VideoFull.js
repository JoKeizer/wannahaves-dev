import React from 'react';
import ReactDOM from 'react-dom';

class VideoFull extends React.Component {
  componentDidMount() {
    var element = ReactDOM.findDOMNode(this);
    window.MusePlayer({
        container: element,
        video: this.props.video,
    });
  }

  render() {
    return <div class="muse-ai-player"></div>
  }
}

export default VideoFull;