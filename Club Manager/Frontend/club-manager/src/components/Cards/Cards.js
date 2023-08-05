import React from 'react';
import './Cards.css';
import CardItem from './CardItem.js';
function Cards() {
  return (
    <div className='cards'>
      <h1 className='text-3xl font-bold underline'>Check out Recent Club activities!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.yourstory.com/cs/wordpress/2017/01/RVCE-Solar-Car-Team.jpg'
              text='STUDENTS OF RV COLLEGE OF ENGINEERING BUILD SOLAR-POWERED CAR'
              label='Go Green! Go Clean'
              path='/services'
            />
            <CardItem
              src='images/BMSCE-car-club.jpg'
              text='On 10th February, 2023, all the #boschlers came together to share their passion for making two wheelers safer, smarter, greener, and more adventurous for the motor world.'
              label='AutoMobile'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/PES-cultural-club.jpg'
              text='Two of the cultural clubs from PESU ECC participated in the Revels Fest @ Manipal Institute of Technology (MAHE)'
              label='Cultural'
              path='/services'
            />
            <CardItem
              src='images/uvce-impetus.jpg'
              text='Hack A Maze was conducted as a part of IMPETUS 23.O At UVCE'
              label='Techinal'
              path='/services'
            />
            <CardItem
              src='images/jain-sports.jpg'
              text='Jain Deemed to be University, Organized Sports Events'
              label='Sports'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;