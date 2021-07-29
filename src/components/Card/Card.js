import React from 'react';
import { useState } from 'react';

const Card = (props) => {
    const { availability, code, durability, max_durability, mileage, minimum_rent_period, name, needing_repair, price } = props.card;
    let [count, setCount] = useState(1);
    
    return (
            <tbody>
                <tr>
                <th scope="row">{count || setCount(count++)}</th>
                <td>{name}</td>
                <td>{code}</td>
                <td>{availability}</td>
                <td>{needing_repair}</td>
                <td>{durability}</td>
                <td>{mileage}</td>
                </tr>
            </tbody>
        
    );
};

export default Card;