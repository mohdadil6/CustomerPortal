import React from 'react';
import './Home.css';
function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    <div className="section full-height over-hide px-4 px-sm-0">
     
        <div className="row full-height justify-content-center">
          <div className="col-lg-10 col-xl-8 align-self-center padding-tb">
            <div className="section mx-auto text-center slider-height-padding">
              <input
                className="checkbox frst"
                type="radio"
                id="slide-1"
                name="slider"
                defaultChecked="checked"
              />
              <label htmlFor="slide-1" />
              <input
                className="checkbox scnd"
                type="radio"
                name="slider"
                id="slider-2"
              />
              <label htmlFor="slider-2" />
              <input
                className="checkbox thrd"
                type="radio"
                name="slider"
                id="slider-3"
              />
              <label htmlFor="slider-3" />
              <input
                className="checkbox foth"
                type="radio"
                name="slider"
                id="slider-4"
              />
              <label htmlFor="slider-4" />
              <ul>
                <li>
                  <span>MALE GOOFY FACE</span>
                </li>
                <li>
                  <span>TOY PIG</span>
                </li>
                <li>
                  <span>SHY PORTRAIT</span>
                </li>
                <li>
                  <span>SKATEBOARD FACE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    	<div class="section-fluid-main">
		<div class="section-row">
			<div class="section-col">
				<p>Contrary to popular belief, Lorem Ipsum is not <a href="#" class="hover-target img-1">simply random text</a>. It has roots in a piece of classical <a href="#" class="hover-target img-2">Latin literature</a> from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in <a href="#" class="hover-target img-3">Virginia</a>, looked up one of the more obscure <a href="#" class="hover-target img-4">Latin words</a>, consectetur, from a Lorem Ipsum passage.</p>
			</div>
		</div>

		
	<div class='cursor' id="cursor"></div>
	<div class='cursor2' id="cursor2"></div>
	<div class='cursor3' id="cursor3"></div> 
	</div>

    </div>
  );
}

export default Home;
