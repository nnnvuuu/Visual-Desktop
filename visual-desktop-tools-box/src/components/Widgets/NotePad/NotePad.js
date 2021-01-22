import React, { Component } from 'react';
import './NotePad.css';
import  {Col,Row,Button } from 'react-bootstrap';
import Paginations from './Paginations';
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import NavBar from '../../NavBar/NavBar';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import DeleteImg from './images/delete.png';
import PostImg from './images/post.png';
import SaveImg from './images/save.png';
export default class NotePad extends Component {
  constructor(props){
    super();
    this.state ={
      notes:[],
      currentPage:1,
      postsPerPage:5,
    };
  }

  componentDidMount() {
    //...
  }

  render(){
      //Get current posts
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPost = this.state.notes.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => this.setState({
      currentPage: pageNumber
    })
    
    return(
        <div>
          <NavBar/>
         {/* < Container fluid > */}
         <Row  className={"topAppBox"}>
             <Col xs={1} sm={2} md={2} lg={2}/>
             <Col xs={4} sm={2} md={2} lg={2}>
              <Button  variant="dark" >
                 <Image src ={PostImg} className={" img-fluid buttonImg"}/>
              </Button>
            </Col>

            <Col xs={4} sm={2} md={2} lg={2}>
              <Button variant="dark">
                 <Image src ={SaveImg} className={" img-fluid buttonImg"}/>
              </Button>
            </Col>

              <Col xs={3} sm={2} md={2} lg={2}>
              <Button variant="dark"> 
                 <Image src ={DeleteImg} className={" img-fluid buttonImg"}/>
              </Button>
              </Col>

              {/* <Col lg={9}/> */}
         </Row>

          <Row >
            <Col xs={4} sm={4} md={4} lg={3} className={"leftColumn"}> 
              <Col md={12}>
                  <h2 className={"titleFont"}>hi</h2>
                  <h5 className={"dateFont"}>yesterday</h5>
                  <p className={"contentFont"}>yeyesterdayyeysterday</p>
              </Col>
              <hr></hr>

              <Col md={12}>
                  <h2 className={"titleFont"}>hi</h2>
                  <h5 className={"dateFont"}>yesterday</h5>
                  <p className={"contentFont"}>yeyesterdayyeysterday</p>
              </Col>
              <hr></hr>


              <Col md={12}>
                  <h2 className={"titleFont"}>hi</h2>
                  <h5 className={"dateFont"}>yesterday</h5>
                  <p className={"contentFont"}>yeyesterdayyeysterday</p>
              </Col>
              <hr></hr>
              
              <Col md={12}>
                  <h2 className={"titleFont"}>hi</h2>
                  <h5 className={"dateFont"}>yesterday</h5>
                  <p className={"contentFont"}>yeyesterdayyeysterday</p>
              </Col>
              <hr></hr>

              <Col md={12}>
                  <h2 className={"titleFont"}>hi</h2>
                  <h5 className={"dateFont"}>Yesterday</h5>
                  <p className={"contentFont"}>this homework is about how to</p>
              </Col>
              <hr></hr>

              <Col md={12}>
                <Paginations 
                   postsPerPage={this.state.postsPerPage} 
                   totalPosts = {this.state.totalPosts}
                   paginate ={paginate}
                   currentPage = {this.state.currentPage}
                   />
              </Col>   
            </Col>
            
            <Col xs={8} sm={8} md={8} lg={9} className={"rightColumn"}>
             {/* adkjaidjhaiodhiasadkjaidjhaiodhiasadkjaidjhaiodhiasadkjaidjhaiodhiasadkjaidjhaiodhiasadkjaidjhaiodhiasadk */}

             <Form>
               <Form.Control as="textarea" id="textarea" rows={30} />
             </Form>


            </Col>
          </Row>

          {/* </Container> */}

        </div>
    );
  }

}