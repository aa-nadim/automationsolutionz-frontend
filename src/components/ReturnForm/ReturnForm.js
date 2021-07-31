import React, { useState } from 'react';
import './ReturnForm.css';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import fakeData from '../../fakeData/Data (1).json';
import ReturnPrice from './ReturnPrice/ReturnPrice';

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

const ReturnForm = ({returnModalIsOpen, closeReturnModal}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const onSubmit = data => {
        setSelectedProduct(data);
    };
    const [returnPriceModalIsOpen, setReturnPriceIsOpen] = useState(false);
    function openReturnPriceModal() {
        setReturnPriceIsOpen(true);
    }
    function closeReturnPriceModal() {
        setReturnPriceIsOpen(false);
    }
    let prductNameAndCode = fakeData[0].name.concat('/',fakeData[0].code);
    return (
        <div>
            
            <Modal
                isOpen={returnModalIsOpen}
                onRequestClose={closeReturnModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2>Return a product</h2>
                <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Write a product's name excetly same the damo products(product's name/code)..</p>
                    <div className="mt-3 d-flex justify-content-between">
                        <h5>Product Name</h5>
                        <input className="productName" name="name" defaultValue={prductNameAndCode} {...register("name",{ required: true })}  placeholder="Case sensitive" />
                    </div>
                    
                    <div className="mt-3 d-flex justify-content-end">
                        <input onClick={openReturnPriceModal} type="submit"/>
                        <ReturnPrice returnPriceModalIsOpen={returnPriceModalIsOpen} closeReturnPriceModal={closeReturnPriceModal} selectedProduct={selectedProduct}></ReturnPrice>
                    </div>
                </form>
                </div>
                
                
            </Modal>
        </div>
    );
};

export default ReturnForm;