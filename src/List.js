import React from 'react';
import Card from './Card';

function List(props) {
  return (<Card title = {props.store.allCards.a.title} content={props.store.allCards.a.content} />)
}

export default List;
