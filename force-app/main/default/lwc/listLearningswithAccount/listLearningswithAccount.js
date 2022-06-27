import { LightningElement, wire } from 'lwc';
import getLearningswithAccounts from "@salesforce/apex/LearningController.getLearningswithAccounts";

export default class ListLearningswithAccount extends LightningElement {
    learningrecords;
    error;
    @wire(getLearningswithAccounts)
    wireLearningAccounts({ data, error }) {
        if (data) {
            this.learningrecords = data;

        }
        else if (error) {
            this.error = error;
        }
    }
    get hasrecords() {
        console.log(this.learningrecords);
        return this.learningrecords && this.learningrecords.length > 0
    }

    handleClick(event) {
        alert('Received Parent: ' + event.detail)
    }

}