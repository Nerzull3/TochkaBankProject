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
            case 'cardNumber':
                this.state.cardNumberValid = this.validateCardNumber(value);
                break;
            case 'cardIssueDate':                
                this.state.cardIssueDateValid = this.validateCardIssueDate(value);
                break;
            case 'cardCVC':
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