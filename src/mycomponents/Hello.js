import { hasUnreliableEmptyValue } from '@testing-library/user-event/dist/utils';
import React from 'react';

function Hello(props){
    function DoThis(){
        alert("Button is Clicked")
    }
    return (
        <div>
            <button onClick={DoThis}>click me</button>
         < h1>Name: {props.name} And Age:{props.age}</h1>
        </div>

    );
}

export default Hello;