import React from 'react';
import { Modal , Input , message } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
    toggleAddNewClient , 
    setClientName , 
    setClientCompany , 
    setClientEmail , 
    setClientContact , 
    setClientAddress 
} from '../../redux/wizard/wizard.actions';
import { 
    selectAddNewClient , 
    selectClientName , 
    selectClientCompany , 
    selectClientEmail , 
    selectClientContact , 
    selectClientAddress 
} from '../../redux/wizard/wizard.selectors';

import './add-new-client.styles.scss';

const { TextArea } = Input;

const AddNewClient = ({ 
    addNewClient , 
    toggleAddNewClient , 
    clientName , 
    clientCompany , 
    clientEmail , 
    clientContact , 
    clientAddress , 
    setClientName ,
    setClientCompany , 
    setClientEmail , 
    setClientContact , 
    setClientAddress
    }) => {

    const handleSubmit = async event => {

        event.preventDefault();

        message.success('Successfully Add new Client');
        toggleAddNewClient();
        
    }

    return (
        <Modal
            title="Add New Client"
            centered
            visible={addNewClient}
            onOk={toggleAddNewClient}
            onCancel={toggleAddNewClient}
            className="addNewClentModal"
        >
            <form onSubmit={handleSubmit} className="d-flex flex-wrap row">

                <div className="form-group col-md-6 col-12">
                    <Input 
                        placeholder="Name"
                        onChange={ (e) => setClientName(e.target.value) }
                        value={clientName}
                    />
                </div>

                <div className="form-group col-md-6 col-12">
                    <Input 
                        placeholder="Company Name" 
                        onChange={ (e) => setClientCompany(e.target.value) }
                        value={clientCompany}
                    />
                </div>

                <div className="form-group col-md-6 col-12">
                    <Input 
                        placeholder="E mail"
                        type="email"
                        onChange={ (e) => setClientEmail(e.target.value) }
                        value={clientEmail}
                    />
                </div>

                <div className="form-group col-md-6 col-12">
                    <Input 
                        placeholder="Contact Number"
                        type="tel"
                        onChange={ (e) => setClientContact(e.target.value) }
                        value={clientContact}
                    />
                </div>

                <div className="form-group col-12">
                    <TextArea 
                        placeholder="Address"
                        onChange={ (e) => setClientAddress(e.target.value) }
                        value={clientAddress}
                    />
                </div>

                <div className="form-group col-12">
                    <input 
                        type="submit" 
                        value="Add New"
                        className="btn submitBtn"
                    />
                </div>

            </form>
        </Modal>
    )
};

const mapStateToProps = createStructuredSelector({
    addNewClient : selectAddNewClient,
    clientName: selectClientName,
    clientCompany: selectClientCompany,
    clientEmail: selectClientEmail,
    clientContact: selectClientContact,
    clientAddress: selectClientAddress,
});

const mapDispatchToProps = dispatch => ({
    toggleAddNewClient : () => dispatch(toggleAddNewClient()),
    setClientName : (clientName) => dispatch(setClientName(clientName)), 
    setClientCompany : (clientCompany) => dispatch(setClientCompany(clientCompany)), 
    setClientEmail : (clientEmail) => dispatch(setClientEmail(clientEmail)), 
    setClientContact : (clientContact) => dispatch(setClientContact(clientContact)), 
    setClientAddress : (clientAddress) => dispatch(setClientAddress(clientAddress)),
}); 

export default connect(mapStateToProps , mapDispatchToProps)(AddNewClient);