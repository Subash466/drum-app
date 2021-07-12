import React, { Component } from 'react'

export class DrumPad extends Component {
  handleClick = () =>{
    this.audio.play()
    this.audio.currentTime=0;
  }
render() {
  return(
      <div className="drumpad" onClick={this.handleClick}>
        <p className="title" id="a">{this.props.name}</p>
        <audio src={this.props.src} ref={ref=>this.audio = ref} id=""></audio>
      </div>
    
    )
  }
}

export default DrumPad
