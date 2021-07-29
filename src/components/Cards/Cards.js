import React from 'react';
import Card from '../Card/Card';
import fakeData from '../../fakeData/Data (1).json';

const Cards = () => {
    return (
        <div>
            <h3>cards</h3>
            <p>There are {fakeData.length} cards.</p>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Code</th>
                    <th scope="col">Availability</th>
                    <th scope="col">Need to Repair</th>
                    <th scope="col">Durability</th>
                    <th scope="col">Mileage</th>
                    </tr>
                    </thead>
                {
                    fakeData.map(card => <Card card={card}></Card>)
                }
                </table>
        </div>
    );
};

export default Cards;