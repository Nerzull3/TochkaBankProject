import Validation from './validation';

class AnyBankValidation extends Validation {
    state = {
        cardNumber: '',
        cardIssueDate: '',
        cardCVC: '',
        sum: '',
        comment: '',
        mail: '',

        cardNumberValid: false,
        cardIssueDateValid: false,
        cardCVCValid: false,
        sumValid: false,
        mailValid: true,
        formValid: false
    };

    validateField(field, value) {
        switch(field) {
            case 'card-number':
                this.state.cardNumberValid = this.validateCardNumber(value);
                break;
            case 'card-issue-date':                
                this.state.cardIssueDateValid = this.validateCardIssueDate(value);
                break;
            case 'card-cvc':
                this.state.cardCVCValid = this.validateCardCVC(value);
                break;
            case 'sum':
                this.state.sumValid = this.validateSum(value);
                break;
            case 'mail':
                this.state.mailValid = this.validateMail(value);
                break;
            default:
                break;
        }
        this.validateForm();
    }

    validateForm() {
        this.setState({
            formValid: this.state.cardNumberValid && this.state.cardIssueDateValid &&
                        this.state.cardCVCValid && this.state.sumValid && this.state.mailValid
        });
    }
}

export default AnyBankValidation;