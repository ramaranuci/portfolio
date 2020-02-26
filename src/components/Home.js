import React from 'react';
function Home() {
    return (
     
    
      <div id="slides">
        <div className="overlay"></div>

        <div className="slides-container">
          <img src="img/slide1.jpg" alt="" />
          <img src="img/slide02.jpeg" alt="" />
          <img src="img/slide03.jpeg" alt="" />
        </div>
        <div className="titleMessage">
          <div className="heading">
            <p className="main">Reinaldo Amarán</p>
            <p className="sub typed"></p>
          </div>
        </div>

        <nav className="slides-navigation">
          <a href="#" className="next"></a>
          <a href="#" className="prev"></a>
        </nav>
      </div>
      
    );
  }
  
  export default Home;

