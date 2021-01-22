import React, { Component,Fragment } from 'react';
import ReactPlayer from 'react-player/youtube'
import {
  Link,
} from "react-router-dom";
import './Radio.css'


class Classical extends React.Component {
  
  render ()
   {
    return (  
      
      <div className='player-wrapper'>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=hlWiI4xVXKY'
        className='react-player'
        playing={true}
        width='100%'
        height='90%'
      />

<Link to="Jazz">
     <button class="button" type="button">
          Next
     </button>
 </Link>

 <Link to="Radio">
     <button class="button" type="button">
          Previous
     </button>
 </Link>      

    </div>
    )
  }
}export default Classical;





