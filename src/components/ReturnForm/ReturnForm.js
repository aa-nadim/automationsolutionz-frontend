import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

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
        console.log(data);
        setSelectedProduct(data);
    };
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
                    <input name="name"  {...register("name",{ required: true })} placeholder="A product's name" />
                    {errors.name && <span className="error">Name is required</span>}
                    <input type="submit" />
                </form>
                </div>
                
                
            </Modal>
        </div>
    );
};

export default ReturnForm;