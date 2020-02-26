import React from 'react';
function Portfolio(){
    return (
      <div id="portfolio" className="section">
        <div className="container">
          <div className="row">
            <div className="heading">
              <h2>PORTFOLIO</h2>
            </div>
            <div className="filter">
              <ul id="filters">
                <li>
                  <a href="#" data-filter="*" className="current">
                    ALL
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".apps">
                    Apps
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".me">
                    Me
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".websites">
                    Websites
                  </a>
                </li>
              </ul>
            </div>
            <div className="itemsContainer">
              <ul className="items">
                <li className="apps col-xs-6 col-sm-4 col-md-3 col-lg-3">
                  <div className="item">
                    <img src="img/portfolio/thumbnails/dog-square.jpeg" />

                    <div className="icons">
                      <a
                        href="img/portfolio/dog.jpeg"
                        title="View image"
                        className="openButton"
                        data-fancybox
                        data-caption="This is a cute dog"
                      >
                        <i className="fa fa-search"></i>
                      </a>

                      <a href="" target="_blank" classNames="projectLink">
                        <i className="fa fa-link"></i>
                      </a>
                    </div>

                    <div className="imageOverlay"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );

}
export default Portfolio;