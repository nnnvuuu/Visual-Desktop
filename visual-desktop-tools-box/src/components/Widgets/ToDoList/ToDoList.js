import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./ToDoList.css"
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../../NavBar/NavBar';
import Pdf from 'react-to-pdf';
import {connect} from 'react-redux';
import {getTodos, addTodos,deleteTodos} from '../../../redux/actions/todosAction';
import PropTypes from 'prop-types';


const ToDoList = (props) => {
    

    const[toDoList, handleToDoList] = useState([]);
    const[input, setInput] = useState('');
    const [backgroundColor, setBackgroundColor] = useState(['#FFFFFF']);

    const handleSubmit = (e) => {
        e.preventDefault();
        const {isAuthenticated,user } =  props.auth;
        if(isAuthenticated == false){
            return;
        }
        //  addToDo(input);
        const newTodo = {
            taskName: input,
            _user:`${user._id}`
            // status:backgroundColor
        }
      
        props.getTodos();
        // console.log(input);
        // console.log(`${user._id}`);
        
      props.addTodos(newTodo);
      console.log(".");
      props.getTodos();
    //   handleToDoList('');
        
    };

  

    //adding task operation
    // const addToDo = (text) => {
    //     if(text !== ''){
    //         const updatedToDoList = [...toDoList, {text}];
    //         handleToDoList(updatedToDoList);
    //     }
    // };

    //delete task operation
    const deleteToDo = (id) => {
      
            props.deleteTodos(id);
            
    };

    //cursor defaults to the form
    const inputRef = useRef(null)


//  const {isAuthenticated,user } =  props.auth;
//  console.log(user._id.toString());
//  console.log(`${user._id}`);
    useEffect(() => {
        // handleToDoList(props.getTodos());  
      
      props.getTodos();
    //   console.log(user);
    // props.addTodos();
    // children.addTodos();                                                                                                             
        inputRef.current.focus();
    },[]);
    

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //change colors

    const addBackgroundColor = (index,color) =>{
        console.log(index);
        console.log(color);    
     
    let colors = [...backgroundColor];
        colors[index] = color;
        setBackgroundColor(colors);

        //    console.log("index 0 = " + backgroundColor[0]);
        //    console.log("index 1 = " + backgroundColor[1]);
        //    console.log("index 2 = " + backgroundColor[2]);
        //    console.log("index 3 = " + backgroundColor[3]);
    }
    const updateBackgroundColor = (index) =>{
        console.log(index);   
     
    let colors = [...backgroundColor];
        colors.splice(index, 1)
        setBackgroundColor(colors);
    }

    const onChangeHandler = e =>{
        setInput(e.target.value);
    }

    const [currentIndex, setCurrentIndex] = useState();

    const editColorHandler = (props) =>{
        setCurrentIndex(props);
    }
    
   const combineHandler = (props) =>{
        handleShow();
        editColorHandler(props);
    }
    const ref = React.createRef();

   
    const {todos} = props.todos;
    console.log(todos);
    // console.log(todos);
    return (
        <div>
            <NavBar/>
                

                <Container className="Interface">
                        <h1 className="title">To-Do List</h1>
                    <header>
                        <form id="todo-form" >
                            <input value={input} onChange={onChangeHandler} type="text" placeholder="Enter Task" ref={inputRef}/>
                            <Button type="submit" variant="dark" onClick={handleSubmit}>Add</Button>
                            {/* <Pdf targetRef={ref} filename="to_do_list.pdf">
                    {({ toPdf }) => <Button className="downloadButton" variant="outline-dark" size="sm" onClick={toPdf}>Convert to PDF</Button>} */}
                {/* </Pdf> */}

                        </form>
                        
                    </header>
                      
                 
                    <Container ref={ref}>
                    {
                            // taskName
                            todos.map((todo) => (
                            <div key={todo._id}>
                                <span className="task" >{todo.taskName}
                                </span>
                            
                                <Button onClick={() =>  deleteToDo(todo._id) } variant="danger" size="sm">Delete</Button>
                              
                            </div>
                        ))
                    }   
                    </Container>
                </Container>
        </div>
    );
}
ToDoList.propTypes = {
    getTodos: PropTypes.func.isRequired,
    addTodos: PropTypes.func.isRequired,
    todos: PropTypes.object.isRequired,
    deleteTodos:PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    // status: PropTypes.object.isRequired,
}
 
const mapStateToProps = (state) => ({
    todos: state.todos,
    auth: state.auth,
    
    // status: state.status,
})

export default connect(mapStateToProps, { getTodos,addTodos,deleteTodos })(ToDoList);