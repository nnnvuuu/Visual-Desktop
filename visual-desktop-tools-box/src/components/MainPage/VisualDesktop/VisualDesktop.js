
import React, {useEffect,useState} from 'react';
import Desktop from '../images/Desktop.png';
import ImageMapper from 'react-image-mapper';


//console.log("In VD", dark)

//Calculating Current Window width
const getWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

function useCurrentWitdh() {
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWidth(getWidth())
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return width;
}


export default function VisualDesktop (){
  let width = useCurrentWitdh();
  console.log(width);

  const MAP = {

    name: "my-map",
    areas: [
      { name: "Google", shape: "poly", coords: [640,350,1290,350,1290,810 ,640,810],  href : '/Weather' , strokeColor:"blue",},
      { name: "Timer", shape: "poly", coords: [1425,800,1570,800,1563,890,1433,890],  href:'/Timer' ,strokeColor:"purple",   },
      { name: "Calculator", shape: "poly", coords: [1520,900,1595,885,1720,960,1630,1000], strokeColor:"yellow", href:'/Calculator'  },
      { name: "Cat", shape: "poly", coords: [1570,350,1730,370,1700,450,1540,450],  href:'/Cat' ,strokeColor:"brown",   },
      { name: "Radio", shape: "poly", coords: [820,820,585,820,585,930,820,930], strokeColor:"brown", href:'/Radio'},
      { name: "ToDoList", shape: "poly", coords: [1570,350,1730,370,1700,450,1540,450],  href:'/ToDoList' ,strokeColor:"green", coords: [1200,980,1270,925,1420,1000,1330,1100]  },
      { name: "Calendar", shape: "poly", coords: [190,500,430,500,430,800,190,800], strokeColor:"blue", href:'/Calendar'},
      { name: "Stocks", shape: "poly", coords: [475,742,570,742,570,900,475,900], strokeColor:"green", href:'/Stocks'},
      { name: "Stocks", shape: "poly", coords: [0,1100,275,1120,350,1400,0,1400], strokeColor:"grey", href:'/News'},
      { name: "WPMTest", shape: "poly", coords: [785,925,1150,925,1150,980,785,980], strokeColor:"blue", href:'/WPMTest'},
      { name: "DrawingBoard", shape: "poly", coords: [1260,850,1430,870,1350,920,1200,885], strokeColor:"red", href:'/DrawingBoard'},
      { name: "Weather", shape: "poly", coords: [1650,25,1870,25,1860,200,1640,200],  href : '/Weather' , strokeColor:"yellow",},
      { name: 'Lyrics', shape: 'poly', coords: [90, 400, 330, 400, 330, 700, 90, 700], href: '/LyricFinder', strokeColor: 'yellow' },

      // more to be add: checklist.. calender... ...etc
    ]
  }
  return(
          <ImageMapper src={Desktop} className="img-fluid"  map={MAP} width={width} imgWidth={1920}/>

  );
}
