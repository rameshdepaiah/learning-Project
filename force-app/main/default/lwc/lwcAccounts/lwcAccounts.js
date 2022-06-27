import { api, LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Account from '@salesforce/schema/Account';

import Account_NAME from '@salesforce/schema/Account.Name';
import AccountNumber from '@salesforce/schema/Account.AccountNumber';

export default class LwcAccounts extends LightningElement {
    @api recordId;

    // @wire(getRecord, { recordId: '$recordId', fields: [Account_NAME, AccountNumber] })
    // account;


    // get name() {
    //     return this.account.data.fields.Name.value;
    // }

    // get AccountNumber() {
    //     return this.account?.data?.fields.AccountNumber.value;
    // }


    //Rule
    //1. no hardcoding of id's
}