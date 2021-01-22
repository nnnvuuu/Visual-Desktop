import React, { Component,Fragment } from 'react';
import ReactPlayer from 'react-player/youtube'
import {
  Link,
} from "react-router-dom";
import './Radio.css'


class Radio extends React.Component {
  
  render ()
   {
    return (  
      
      <div className='player-wrapper'>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=thP5XYhnbCs'
        className='react-player'
        playing={true}
        width='100%'
        height='90%'
      />

<Link to="Classical">
     <button class="button" type="button">
          Next
     </button>
 </Link>

 <Link to="Piano">
     <button class="button" type="button">
          Previous
     </button>
 </Link>      

    </div>
    )
  }
}export default Radio;





