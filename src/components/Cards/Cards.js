import React, { useState } from 'react';
import Card from '../Card/Card';
import fakeData from '../../fakeData/Data (1).json';
import BookForm from '../BookForm/BookForm';
import ReturnForm from '../ReturnForm/ReturnForm';

const Cards = () => {
    // const [cards, setCards] = useState([]);
    // useEffect(() => {
    //     const url = `https://drive.google.com/file/d/1T-9YNTGoxHAmgccnWI20rptaUVl3OwaK/view`;
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setCards(data))
    // }, [])
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }

    const [returnModalIsOpen, setReturnIsOpen] = useState(false);
    function openReturnModal() {
        setReturnIsOpen(true);
    }
    function closeReturnModal() {
        setReturnIsOpen(false);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            {/* <h3>cards</h3>
            <p>There are {fakeData.length} cards.</p> */}
            <div className="m-5">
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
                    <th scope="col">Price</th>
                    </tr>
                    </thead>
                {
                    fakeData.map(card => <Card card={card}></Card>)
                }
                </table>
            </div>
            <div className="d-flex justify-content-end">
                <button onClick={openModal} type="button" className="btn btn-primary mr-5">Book</button>
                <button onClick={openReturnModal} type="button" className="btn btn-info mr-5">Return</button>
                <BookForm modalIsOpen={modalIsOpen} closeModal={closeModal}></BookForm>
                <ReturnForm returnModalIsOpen={returnModalIsOpen} closeReturnModal={closeReturnModal}></ReturnForm>
            </div>
            <br />
            <br />
        </div>
    );
};

export default Cards;