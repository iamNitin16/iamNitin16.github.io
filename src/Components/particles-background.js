import React, { Component } from 'react';
import particles from '../../config/default-particles-config.json';
import Particles from 'react-particles-js';

class ParticlesBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {particles: {}};
  }

  componentWillMount() {
    this.setState({
      particles: particles
    })
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
