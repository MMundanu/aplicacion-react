import React from 'react';
import ContentRowTop from './contentRowTop';
import Footer from './footer';
import TopBar from './topBar';

const ContentWrapper = () => {
    return (
        <div id="content-wrapper" classname="d-flex flex-column">
            <div id='content'>
              <TopBar />
              <ContentRowTop />
            </div>
           <Footer />
            
        </div>
    );
}

export default ContentWrapper;
