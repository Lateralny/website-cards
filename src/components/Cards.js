import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
            <CardItem
              src='images/img-9.jpg'
              text='CO TO NAIAD'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='PROJEKTY'
              path='/services'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Problemy klimatyczne'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Ceny B2B'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Nasze rozwiązanie'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Projects'
              path='/sign-up'
            />
      </div>
    </div>
  );
}

export default Cards;
