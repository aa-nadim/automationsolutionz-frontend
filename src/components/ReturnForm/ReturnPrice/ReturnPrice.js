import React, { useState } from 'react';
import Modal from 'react-modal';
import fakeData from '../../../fakeData/Data (1).json';

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

const ReturnPrice = ({returnPriceModalIsOpen, closeReturnPriceModal, selectedProduct}) => {
    let totalRent;

    if(selectedProduct !== null) {
        let code = selectedProduct.name.slice(-2);
        let selectedProductIndex;
        for(let i=0;i<fakeData.length;i++){
            if(fakeData[i].code === code){
                selectedProductIndex = i;break;
            }
        }
        
        totalRent = fakeData[selectedProductIndex].price;

    }

    
    return (
        <div>
            <Modal
                isOpen={returnPriceModalIsOpen}
                onRequestClose={closeReturnPriceModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>
                    <h2>Return a product</h2>
                </div>
                <div>
                    <p>Your estimated price is ${totalRent}.</p>
                    <p>Do you want to procedure?</p>
                </div>
            </Modal>
        </div>
    );
};

export default ReturnPrice;