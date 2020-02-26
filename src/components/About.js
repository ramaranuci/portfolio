import React from 'react';
function About() {
    return (
      <div id="about" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div
                className="LI-profile-badge"
                data-version="v1"
                data-size="large"
                data-locale="es_ES"
                data-type="vertical"
                data-theme="dark"
                data-vanity="reinaldo-amarán-032676153"
              >
                <a
                  className="LI-simple-link"
                  href="https://uy.linkedin.com/in/reinaldo-amar%C3%A1n-032676153?trk=profile-badge"
                >
                  Reinaldo Amarán
                </a>
              </div>
            </div>

            <div className="col-md-7">
              <h4>My name is Reinaldo Amarán</h4>

              <p>
                Hi there! I'm Reinaldo Amarán from Montevideo, Uruguay.
                I currently work as a IT Support Specialist at{" "}
                <a href="https://portal.ute.com.uy/">UTE</a>. I have some years
                experience creating software, for both myself, and for clients.
                I have experience programming in many different languages such
                as C#, Java, PHP and Python.
              </p>
              <p>
                I'm graduate of the University of Informatics Sciences of Cuba (
                <a href="https://www.uci.cu/">UCI</a>) in 2015. From my third
                year until the end of the degree I completed an internship in
                the LPS Aplicativos SIG project, belonging to{" "}
                <a href="https://www.uci.cu/investigacion-y-desarrollo/grupos-de-investigacion/grupo-de-investigacion-procesamiento-digital-de">
                  GEYSED
                </a>{" "}
                (Center for Geoinformatics and Digital Signals) . In this
                project I completed my degree thesis, CRUD Generator for the LPS
                APLICATIVOS SIG. After graduating I was working at the
                International Institute of Journalism (
                <a href="https://periodismojosemarti.wordpress.com">IIPJM</a>)
                and later in the telecommunications company of Cuba (
                <a href="http://www.etecsa.cu/">Etecsa</a>). After a while I
                decided to move to Uruguay where I am currently working in the
                Administration Company National Electric Power Plant and
                Transmission (<a href="https://portal.ute.com.uy/">UTE</a>).
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
