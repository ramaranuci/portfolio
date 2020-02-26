import React from 'react';

function Skills(){
    return (
      <div id="skills" className="skillsSection section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>TECHNICAL SKILLS</h2>
              <p>My proficiency in each skill (drag to scroll)</p>
            </div>

            <div className="owl-carousel owl-theme">
              <div className="skill">
                <span className="chart" data-percent="60">
                  <span className="percent">60</span>
                  <canvas height="152" width="152"></canvas>
                </span>
                <h4>PHP</h4>
                <p>Used in most of my web based projects</p>
              </div>

              <div className="skill">
                <span className="chart" data-percent="30">
                  <span className="percent">30</span>
                  <canvas height="152" width="152"></canvas>
                </span>
                <h4>React</h4>
                <p>A new skill I am learning</p>
              </div>

              <div className="skill">
                <span className="chart" data-percent="15">
                  <span className="percent">15</span>
                  <canvas height="152" width="152"></canvas>
                </span>
                <h4>Angular</h4>
                <p>A new skill I am learning</p>
              </div>

              <div className="skill">
                <span className="chart" data-percent="90">
                  <span className="percent">90</span>
                  <canvas height="152" width="152"></canvas>
                </span>
                <h4>HTML</h4>
                <p>Used in most of my web based projects</p>
              </div>
              <div className="skill">
                <span className="chart" data-percent="40">
                  <span className="percent">40</span>
                  <canvas height="152" width="152"></canvas>
                </span>
                <h4>PostgreSQL</h4>
                <p>Used in most of my web based projects</p>
              </div>

              <div className="skill">
                <span className="chart" data-percent="40">
                  <span className="percent">40</span>
                  <canvas height="152" width="152"></canvas>
                </span>
                <h4>MySQL</h4>
                <p>Used in most of my web based projects</p>
              </div>
              <div className="skill">
                <span className="chart" data-percent="30">
                  <span className="percent">30</span>
                  <canvas height="152" width="152"></canvas>
                </span>
                <h4>Oracle</h4>
                <p>A new skill I am learning</p>
              </div>
              <div className="skill">
                <span className="chart" data-percent="40">
                  <span className="percent">40</span>
                  <canvas height="152" width="152"></canvas>
                </span>
                <h4>Python</h4>
                <p>A new skill I am learning</p>
              </div>
              <div className="skill">
                <span className="chart" data-percent="50">
                  <span className="percent">50</span>
                  <canvas height="152" width="152"></canvas>
                </span>
                <h4>C#</h4>
                <p>Used in some of my projects</p>
              </div>
              <div className="skill">
                <span className="chart" data-percent="50">
                  <span className="percent">50</span>
                  <canvas height="152" width="152"></canvas>
                </span>
                <h4>Java</h4>
                <p>Used in some of my projects</p>
              </div>
              <div className="skill">
                <span className="chart" data-percent="60">
                  <span className="percent">60</span>
                  <canvas height="152" width="152"></canvas>
                </span>
                <h4>Javascript</h4>
                <p>Used in most of my web based projects</p>
              </div>
              <div className="skill">
                <span className="chart" data-percent="15">
                  <span className="percent">15</span>
                  <canvas height="152" width="152"></canvas>
                </span>
                <h4>Flask</h4>
                <p>A new skill I am learning</p>
              </div>
              <div className="skill">
                <span className="chart" data-percent="15">
                  <span className="percent">15</span>
                  <canvas height="152" width="152"></canvas>
                </span>
                <h4>Django</h4>
                <p>A new skill I am learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );


}
export default Skills;

