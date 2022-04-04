import { hasUnreliableEmptyValue } from '@testing-library/user-event/dist/utils';
import React from 'react';

function Hello(props){
    return (
  
         < h1>Name: {props.name} And Age:{props.age}</h1>

    );
}

export default Hello;