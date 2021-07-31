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

const BookPrice = ({bookPriceModalIsOpen, closeBookPriceModal, selectedProduct}) => {
    let totalDays = 0;
    let totalRent;

    if(selectedProduct !== null) {
        let yearsFrom = parseInt(selectedProduct.fromdate.slice(-4));
        let monthsFrom = parseInt(selectedProduct.fromdate.slice(3,5));
        let daysFrom = parseInt(selectedProduct.fromdate.slice(0,2));

        let yearsTo = parseInt(selectedProduct.todate.slice(-4));
        let monthsTo = parseInt(selectedProduct.todate.slice(3,5));
        let daysTo = parseInt(selectedProduct.todate.slice(0,2));

        if(daysFrom > daysTo){
            daysTo = daysTo + 30;
            monthsTo = monthsTo - 1;
        }
        if(monthsFrom > monthsTo){
            monthsTo = monthsTo + 12;
            yearsTo = yearsTo - 1;
        }
        totalDays = 365*(yearsTo-yearsFrom)+30*(monthsTo-monthsFrom)+(daysTo-daysFrom);
        
        let code = selectedProduct.name.slice(-2);
        let selectedProductIndex;
        for(let i=0;i<fakeData.length;i++){
            if(fakeData[i].code === code){
                selectedProductIndex = i;break;
            }
        }
        
        totalRent = totalDays*fakeData[selectedProductIndex].price;

    }

    
    return (
        <div>
            <Modal
                isOpen={bookPriceModalIsOpen}
                onRequestClose={closeBookPriceModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>
                    <h2>Book a product</h2>
                </div>
                <div>
                    <p>Your estimated price is ${totalRent}.</p>
                    <p>Do you want to procedure?</p>
                </div>
            </Modal>
        </div>
    );
};

export default BookPrice;