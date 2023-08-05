import React from 'react';
import '../Main.css';
import './HeroSection.css';
import '../common/Button.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function HeroSection({ isAuthenticated }) {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      {/* <img src="/images/home2.jpg"/> */}
      <h1>ClubManager</h1>
      <p>Discover and Connect with College Clubs in a Snap!</p>
      <div className='hero-btns'>
        <Link to="/profile" >
        <button className='btn btns btn--outline btn--large' >
          GET STARTED
        </button>
        </Link>
        {!isAuthenticated && (
          <Link to="/sign-up" >
            <button className='btn btns btn--primary btn--large' >
              REGISTER YOUR CLUB <i className='far fa-play-circle' />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(HeroSection)