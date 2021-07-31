import React, { useState } from 'react';
import './BookForm.css';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import fakeData from '../../fakeData/Data (1).json';
import BookPrice from './BookPrice/BookPrice';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const BookForm = ({modalIsOpen, closeModal}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const onSubmit = data => {
        setSelectedProduct(data);
    };

    const [bookPriceModalIsOpen, setBookPriceIsOpen] = useState(false);
    function openBookPriceModal() {
        setBookPriceIsOpen(true);
    }
    function closeBookPriceModal() {
        setBookPriceIsOpen(false);
    }
    let prductNameAndCode = fakeData[0].name.concat('/',fakeData[0].code);
    return (
        <div>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2>Book a product</h2>
                <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Write a product's name excetly same the damo products(product's name/code)..</p>
                    <div className="mt-3 d-flex justify-content-between">
                        <h5>Product Name</h5>
                        <input className="productName" name="name" defaultValue={prductNameAndCode} {...register("name",{ required: true })}  placeholder="Case sensitive" />
                    </div>
                    <p>please enter a date '00/00/0000' this formate</p>
                    <div className="mt-3 d-flex justify-content-between">
                        <h5>From</h5>
                        <input className="dateFrom" name="fromdate" defaultValue={"29/08/2021"} {...register("fromdate",{ required: true })}   placeholder="please enter a date '00/00/0000' this formate"/>
                        <h5>To</h5>
                        <input className="dateTo" name="todate" defaultValue={"31/08/2021"}  {...register("todate",{ required: true })} placeholder="please enter a date '00/00/0000' this formate"/>
                    </div>
                    <div className="mt-3 d-flex justify-content-end">
                        <input onClick={openBookPriceModal} type="submit"/>
                        <BookPrice bookPriceModalIsOpen={bookPriceModalIsOpen} closeBookPriceModal={closeBookPriceModal} selectedProduct={selectedProduct}></BookPrice>
                    </div>
                </form>
                </div>
            </Modal>
        </div>
    );
};

export default BookForm;