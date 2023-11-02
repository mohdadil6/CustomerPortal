import React, { useEffect } from 'react';
import './Media.css';
import useCustomCursor from './useCustomCursor.js';


function Media(){
  
  return (
    <div>
      <h1>Welcome to Media</h1>

      <div className="section-fluid-main1">
        <div className="section-row1">
          <div className="section-col1">
            <p>
              Contrary to popular belief, Lorem Ipsum is not{" "}
              <a href="#" className="hover-target img-1">
                simply random text
              </a>
              . It has roots in a piece of classical{" "}
              <a href="#" className="hover-target img-2">
                Latin literature
              </a>{" "}
              from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in{" "}
              <a href="#" className="hover-target img-3">
                Virginia
              </a>
              , looked up one of the more obscure{" "}
              <a href="#" className="hover-target img-4">
                Latin words
              </a>
              , consectetur, from a Lorem Ipsum passage.
            </p>
          </div>
        </div>

        <div className="cursor" id="cursor" />
        <div className="cursor2" id="cursor2" />
        <div className="cursor3" id="cursor3" />
      </div>
    </div>
  );
}

export default Media;
