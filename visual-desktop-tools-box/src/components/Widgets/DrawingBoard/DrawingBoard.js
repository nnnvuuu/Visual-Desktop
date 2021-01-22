import React,{Component,Fragment,useRef}from 'react';
import CanvasDraw from "react-canvas-draw";
import {Container, Col, Row,Button, Form} from 'react-bootstrap';
import { SketchPicker } from 'react-color';
import { saveAs } from 'file-saver';
var FileSaver = require('file-saver');


export default class DrawingBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brushRadius : 5,
      brushColor: '#000000',
      displayColorPicker: false,
    //  images : []
    //  eraser:false,
     
    }
   this.ref = React.createRef();
   //const canvasRef = useRef(null);
    
  }
  handleExport = () =>{
    console.log("w");
    let canvas = document.getElementsByTagName('canvas');
    let localImages = []
    for(let c of canvas) {
      localImages.push(c.toDataURL())
    }
    // this.setState({
    //   images : localImages
    // })
    if(localImages!=null){
      FileSaver.saveAs(localImages[1], "image.png");
      
    }
  }

  // handleEraser = () => {
  //   if(this.state.eraser == false){
  //     this.setState({eraser:true})
  //   }
  //   else{
  //   this.setState({eraser:false})
  //   }
  //   console.log(this.state.eraser);
  // }
   
  handleBrushRadius = e =>{
    this.setState({brushRadius:e.target.value});
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChangeComplete = color => {
    this.setState({ brushColor: color.hex });
  };

  render(){
  
  
    const popover = {
      // margin: "0",
      // position: "absolute",
      // top: "50%",
      // left: "50%",
      display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "20%",

    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }
  //  var zz =<img src={this.state.images[1]}/>
  //  console.log(zz);
  //  zz.toDataURL();
  // if(this.state.images[1]!=null){
  //   FileSaver.saveAs(this.state.images[1], "image.png");
    
  // }
  
  return (
    <div>
      <h1 className="text-center">Drawing Board</h1>  
      <Container className="text-center ">
        <Row>
          <Col>
            <Button 
             onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
            }}
            >
                Save
            </Button>
            <Button  
            onClick={() => {
            this.loadableCanvas.loadSaveData(
              localStorage.getItem("savedDrawing")
              
           
            );
          }}
          >
                Load
            </Button>
            <Button  
            onClick={() => {
              this.saveableCanvas.undo();
            }}
            >
                Undo
            </Button>
              <Button
               onClick={() => {
              this.saveableCanvas.clear();
              }}
            >
                Clear
            </Button>
          </Col>
        </Row>
            
 
       
       <Form>
         <Form.Group as={Row}>
           <Form.Label column sm="10" >
           Brush radius
           </Form.Label>
           <Col sm="4">
             <Form.Control 
             placeholder="Enter brush radius here" 
             onChange = {this.handleBrushRadius}/>
           </Col>
         </Form.Group>
       </Form>

          <Col>
           <Button 
           className="text-center" 
           onClick={this.handleExport}
          >
                Export
            </Button>
         </Col>
      
         {/* <Form>
        <Form.Check 
          type="switch"
          id="custom-switch"
          label="Eraser"
          className="mt-3"
          onClick={this.handleEraser}
        />
      </Form> */}
     
  

       <button onClick={ this.handleClick} className="text-center mt-4">Pick Color</button>
       { this.state.displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleClose } />
          <SketchPicker 
           color={ this.state.brushColor }
           onChangeComplete={ this.handleChangeComplete}
          />
        </div> : null }
      <hr/>

      </Container>  

    

        <CanvasDraw 
         ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
         hideGrid
        canvasWidth={"100%"}
        canvasHeight={800}
        lazyRadius={0}
      

        brushColor = {this.state.brushColor}
        brushRadius={this.state.brushRadius}
       

        />

        <CanvasDraw
        
          disabled
          // hideGrid
          canvasWidth={"100%"}
          canvasHeight={800}
       
          ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
          saveData={localStorage.getItem("savedDrawing")}
        />
    </div>
  );
};

}

