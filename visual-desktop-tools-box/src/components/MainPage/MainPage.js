
import React from 'react';
import NavBar from '../NavBar/NavBar';
import VisualDesktop from './VisualDesktop/VisualDesktop';
import VisualTools from './VisualTools/VisualTools';



export default function MainPage (){
  return(
    <div>
      <NavBar/>
      <VisualDesktop/>
      <VisualTools/>
   </div>
  );
}