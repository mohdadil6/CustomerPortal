import React, { useEffect } from 'react';
import './Nopage.css';
import $ from 'jquery';

/* global jQuery */
function Nopage() {
  useEffect(() => {
    // Parallax
    function scrollBanner() {
      $(document).on('scroll', function () {
        var scrollPos = $(this).scrollTop();
        $('.parallax-fade-top').css({
          'top': scrollPos / 2 + 'px',
          'opacity': 1 - scrollPos / 700,
        });
        $('.parallax-00').css({
          'top': scrollPos / -3.5 + 'px',
        });
        $('.parallax-01').css({
          'top': scrollPos / -2.8 + 'px',
        });
        $('.parallax-top-shadow').css({
          'top': scrollPos / -2 + 'px',
        });
      });
    }
    scrollBanner();

    // Page cursors
    document.getElementsByTagName('body')[0].addEventListener('mousemove', function (n) {
      t.style.left = n.clientX + 'px';
      t.style.top = n.clientY + 'px';
      e.style.left = n.clientX + 'px';
      e.style.top = n.clientY + 'px';
      i.style.left = n.clientX + 'px';
      i.style.top = n.clientY + 'px';
    });
    var t = document.getElementById('cursor'),
      e = document.getElementById('cursor2'),
      i = document.getElementById('cursor3');
    function n(t) {
      e.classList.add('hover');
      i.classList.add('hover');
    }
    function s(t) {
      e.classList.remove('hover');
      i.classList.remove('hover');
    }
    s();
    for (var r = document.querySelectorAll('.hover-target'), a = r.length - 1; a >= 0; a--) {
      o(r[a]);
    }
    function o(t) {
      t.addEventListener('mouseover', n);
      t.addEventListener('mouseout', s);
    }

    // Scroll back to top
    $(document).ready(function () {
      var offset = 300;
      var duration = 400;
      jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
          jQuery('.scroll-to-top').addClass('active-arrow');
        } else {
          jQuery('.scroll-to-top').removeClass('active-arrow');
        }
      });
      jQuery('.scroll-to-top').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
      });

      /* Hero Case study images */

      $('.case-study-name:nth-child(1)').on('mouseenter', function () {
        $('.case-study-name.active').removeClass('active');
        $('.case-study-images li.show').removeClass('show');
        $('.case-study-images li:nth-child(1)').addClass('show');
        $('.case-study-name:nth-child(1)').addClass('active');
      });
      $('.case-study-name:nth-child(2)').on('mouseenter', function () {
        $('.case-study-name.active').removeClass('active');
        $('.case-study-images li.show').removeClass('show');
        $('.case-study-images li:nth-child(2)').addClass('show');
        $('.case-study-name:nth-child(2)').addClass('active');
      });
      $('.case-study-name:nth-child(3)').on('mouseenter', function () {
        $('.case-study-name.active').removeClass('active');
        $('.case-study-images li.show').removeClass('show');
        $('.case-study-images li:nth-child(3)').addClass('show');
        $('.case-study-name:nth-child(3)').addClass('active');
      });
      $('.case-study-name:nth-child(4)').on('mouseenter', function () {
        $('.case-study-name.active').removeClass('active');
        $('.case-study-images li.show').removeClass('show');
        $('.case-study-images li:nth-child(4)').addClass('show');
        $('.case-study-name:nth-child(4)').addClass('active');
      });
      $('.case-study-name:nth-child(1)').trigger('mouseenter');
    });
  });

    return (<>
        <div className="shadow-title parallax-top-shadow">work</div>
    <div
      className="section-parallax parallax-00"
      style={{
        backgroundImage:
          'url("http://www.ivang-design.com/svg-load/parallax/parallax-0.png")'
      }}
    />
    <div
      className="section-parallax parallax-01"
      style={{
        backgroundImage:
          'url("http://www.ivang-design.com/svg-load/parallax/parallax-01.png")'
      }}
    />
    <div className="section full-height">
      <div className="section-title-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center parallax-fade-top">
              <p>we do magic</p>
              <h1>
                chase your
                <br />
                passion
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section full-height z-bigger">
      <ul className="case-study-wrapper">
        <li className="case-study-name">
          <a href="#" className="hover-target">
            light
          </a>
        </li>
        <li className="case-study-name">
          <a href="#" className="hover-target">
            flare
          </a>
        </li>
        <li className="case-study-name">
          <a href="#" className="hover-target">
            nature
          </a>
        </li>
        <li className="case-study-name">
          <a href="#" className="hover-target">
            fire
          </a>
        </li>
      </ul>
      <ul className="case-study-images">
        <li>
          <div className="img-hero-background">
            <img
              src="http://www.ivang-design.com/svg-load/parallax/light.jpg"
              alt=""
            />
          </div>
          <div className="hero-number-back">01</div>
          <div className="hero-number">01</div>
          <div className="hero-number-fixed">04</div>
          <div className="case-study-title">graphic design, interaction</div>
        </li>
        <li>
          <div className="img-hero-background">
            <img
              src="http://www.ivang-design.com/svg-load/parallax/flare.jpg"
              alt=""
            />
          </div>
          <div className="hero-number-back">02</div>
          <div className="hero-number">02</div>
          <div className="case-study-title">advertising, art direction</div>
        </li>
        <li>
          <div className="img-hero-background">
            <img
              src="http://www.ivang-design.com/svg-load/parallax/nature.jpg"
              alt=""
            />
          </div>
          <div className="hero-number-back">03</div>
          <div className="hero-number">03</div>
          <div className="case-study-title">photography, retouching</div>
        </li>
        <li>
          <div className="img-hero-background">
            <img
              src="http://www.ivang-design.com/svg-load/parallax/fire.jpg"
              alt=""
            />
          </div>
          <div className="hero-number-back">04</div>
          <div className="hero-number">04</div>
          <div className="case-study-title">photography, advertising</div>
        </li>
      </ul>
    </div>
    <div className="section padding-top-bottom over-hide background-dark z-bigger-2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <a href="#" className="hover-target">
              <div className="project-link-wrap">
                <p>let's talk</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Scroll back to top
================================================== */}
    <div className="scroll-to-top hover-target" />
    {/* Page cursor
================================================== */}
    <div className="cursor" id="cursor" />
    <div className="cursor2" id="cursor2" />
    <div className="cursor3" id="cursor3" />
    {/* Link to page
================================================== */}
    <a
      href="https://themeforest.net/user/ig_design/portfolio"
      className="link-to-portfolio hover-target"
      target="”_blank”"
    />
          </>  );
          }

export default Nopage;
