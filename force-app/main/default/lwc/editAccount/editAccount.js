import { LightningElement, api } from 'lwc';

export default class EditAccount extends LightningElement {
    @api account;

    handleClick() {

        const selectedEvent = new CustomEvent('selected', { detail: this.account.Name });

        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }
}