import { LightningElement, wire, api } from 'lwc';
import getContactList from '@salesforce/apex/LearningController.getContactList';
import { FlowAttributeChangeEvent } from 'lightning/flowSupport';

export default class ListContacts extends LightningElement {
    @api outputContactSelected;
    @api accountId;
    contactlist;

    columns = [
        { label: 'First Name', fieldName: 'FirstName' },
        { label: 'Last Name', fieldName: 'LastName' },
        { label: 'Email', fieldName: 'Email', type: 'email' },
        { label: 'Phone', fieldName: 'Phone' }
    ];
    @wire(getContactList)
    wiredContact({ data, error }) {
        this.contactlist = data;
    }

    handleRowSelection = event => {
        var selectedRows = event.detail.selectedRows;
        this.dispatchEvent(new FlowAttributeChangeEvent('outputContactSelected', selectedRows[0]));
        console.log(selectedRows[0]);
    }


}