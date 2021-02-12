import React from 'react';

import Card from '../card/Card';
import './CardListStyle.css';

// CardList components only thinks about rendering monster cards
const CardList = (props) => {
  return (
    <div className='card-list'>
      {/* {console.log(props.monsters)} */}
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
