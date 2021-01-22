import React, { Component } from 'react'
import image from './animal.png'
import Button from './button';
import NavBar from '../../NavBar/NavBar';
import axios from 'axios'
class QuoteBox extends Component{
constructor(props){
    super(props)

    this.state = {quote: ""}

 }
 


componentDidMount(){
 axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
 .then(res => {
  console.log(res);
  //this.setState({quote: res.data.text});
  })
  
}
getNext = (ev) =>{
  ev.preventDefault()
  axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
  .then(res => {
    console.log(res);
    this.setState({quote: res.data.text});
    })
}


render(){
const content = this.state.quote
//const filteredContent = String(content).replace(/(<\w>)|(<\/\w>)| (&#\d{4})/gm, "").replace(/(;)/g,"'")
 console.log(content)

 const background = {
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  overflow: 'hidden',
  height: 1050
};

 return(
   <div>
   <NavBar/>
  <div style={ background}>

    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cats Api</title>
    <style dangerouslySetInnerHTML={{__html: "\n    .img {\n      width: 30%;\n    }\n\n  " }} />

    <div className="head text-center">
      <h1>Cat's Facts</h1>      
    <React.Fragment>

    <h2>A little inspiration for the day</h2>
      <div className='outerQuoteBox'>
        <div className='innerQuoteBox'>
            <p>{content}</p><br/><br/>
        </div>
        <Button  getNext={this.getNext} />
    </div>
 </React.Fragment>        </div>
</div>
</div>


  //  <React.Fragment>

  //   </React.Fragment>)
 );
   }
  };
export default QuoteBox;