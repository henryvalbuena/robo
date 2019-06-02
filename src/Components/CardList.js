import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((ele, idx) => {
                    return (
                        <Card 
                        key={idx} 
                        id={ele.id} 
                        name={ele.name} 
                        email={ele.email}/>
                    );
                })
            }
        </div>
    );
}

export default CardList;