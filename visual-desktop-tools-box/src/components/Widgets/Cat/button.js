import React, { Component } from 'react'

export class Button extends Component {
 render() {
  return (
   <React.Fragment>
    <button onClick={this.props.getNext} className='nextBtn' 
      type='button'>Next</button>
    </React.Fragment>
   )
 }
}

export default Button