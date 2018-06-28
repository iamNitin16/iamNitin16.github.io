import React, { Component } from 'react';
import Particles from 'react-particles-js';

class ParticlesBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {particles: {}};
  }

  componentWillMount() {
    fetch("../../config/bubble-particles-config.json").then((resp) => resp.json()).then((particles) => {
      this.setState({
        particles: particles
      });
    });
  }

  render() {

    return (
      <div>
        <Particles className="particles"
          params={this.state.particles}
        />
        <div>
          <span className="description">
            Hello, I am Nitin!
          </span>
        </div>
      </div>
    );
  }
}

export default ParticlesBackground;
