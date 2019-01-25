import Validation from './validation';
import userInfo from '../database/users';

class RequestPaymentValidation extends Validation {
    state = {
        payer: userInfo.requisites.ИНН ? userInfo.requisites.ИНН : '',
        bik: userInfo.requisites.БИК ? userInfo.requisites.БИК : '',
        accountNumber: '',
        VATtype: 'НДС 18%',
        sum: '',
        phone: userInfo.phoneNumber ? userInfo.phoneNumber : '',
        mail: userInfo.email ? userInfo.email : '',

        payerValid: userInfo.requisites.ИНН ? true : false,
        bikValid: userInfo.requisites.БИК ? true : false,
        accountNumberValid: false,
        VATtypeValid: true,
        sumValid: false,
        phoneValid: false,
        mailValid: false,

        formValid: false
    };

    validateField(field, value) {
        switch(field) {
            case 'payer':
                this.state.payerValid = this.validatePayer(value);
                break;
            case 'bik':
                this.state.bikValid = this.validateBIK(value);
                break;
            case 'accountNumber':
                this.state.accountNumberValid = this.validateAccountNumber(value);
                break;
            case 'VATtype':
                this.state.VATtypeValid = true;
                break;
            case 'sum':
                this.state.sumValid = this.validateSum(value);
                break;
            case 'phone':
                this.state.phoneValid = this.validatePhone(value);
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
            formValid: this.state.payerValid && this.state.bikValid && this.state.accountNumberValid &&
                        this.state.VATtypeValid && this.state.sumValid
        })
    }

    cleanFields() {
        super.cleanFields();
        this.setState({
            phone: '',
            mail: ''
        });
    }
}

export default RequestPaymentValidation;