import React from 'react';
import ContentWrapper from './components/contentWrapper';
import SideBar from './components/sideBar';
import './stilo.css'
function Web(){
  return (
    <div id='wrapper'>
      <SideBar />
      <ContentWrapper />
    </div>
  )

}
export default Web;