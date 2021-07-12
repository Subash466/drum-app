import React, { Component } from 'react'
import DrumPad from './DrumPad'

class Drum extends Component {
  render() {
    const sounds=[{
      name:"bass drum",
      href:"http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Hard%204%20on%20the%20Floor-15774-Free-Loops.com.mp3"
     },
     {
     name:"snare drum",
     href:"http://www.denhaku.com/r_box/sr16/sr16sd/rim2cntr.wav"
     },
     {
     name:"drum beat",
     href:"http://www.schaack-audio.com/audio/2.mp3"
     },
     {
     name:"snare drum fill",
     href:"http://cd.textfiles.com/cdaction/cdaction47b/BEAT2000/SOUNDS/SFX/SNROLL_4.WAV"
     },
     {
     name:"drum track",
     href:"http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Nu%20DnB%20Loop%202-15801-Free-Loops.com.mp3"
     },
     {
     name:"drum track",
     href:"http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Hard%20Simple%20Beat-2163-Free-Loops.com.mp3"
     },
     {
     name:"drum track",
     href:"http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Double%20Bass%20Kicks-6312-Free-Loops.com.mp3"
     },{
     name:"drum track cymbals",
     href:"http://trxcymbals.com/wp-content/uploads/2015/05/16-inch-Hi-Hats-DRK-BRT.mp3",
     }];


    return (
      <div className="container">
        <div className="display">
          
        {sounds.map((sound,index)=>{
        return(
        <DrumPad
        key={index} 
        name={sound.name}
        src={sound.href}
        />
       
        )})}
        </div>
      </div>
      )
  }
}

export default Drum
