import { Component } from 'react';

class Validation extends Component {
    render() {
        return;
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => {this.validateField(name, value)});
    }

    validateField() {}

    validateCardNumber(value) {
        return /\d{16}/.test(value);
    }

    validateCardIssueDate(value) {
        const matched = /(\d{2})\/(\d{2})/g.exec(value);
        if (matched) {
            const [month, year] = [parseInt(matched[1]), parseInt('20' + matched[2])];
            const monthIsInRange = 0 < month && month < 13;
            const yearNow = parseInt(new Date().getFullYear());
            const isValidData = year > yearNow || (year === yearNow && month >= parseInt(new Date().getMonth()));

            return monthIsInRange && isValidData;
        }

        return false;
    }

    validateCardCVC(value) {
        return /\d{3}/.test(value);
    }

    validateSum(value) {
        return /\d{4,5}/.test(value) && 1000 <= parseInt(value) && parseInt(value) <= 75000;
    }

    validateMail(value) {
        return /.+@\w+\.(ru|com)/.test(value) || value.length === 0;
    }

    validatePayer(value) {
        return /\d{10}|\d{12}/.test(value);
    }

    validateBIK(value) {
        return /\d{9}/.test(value);
    }

    validateAccountNumber(value) {
        return /\d{20}/.test(value);
    }

    validatePhone(value) {
        return /\+7\d{10}/.test(value);
    }

    setVAT(index) {
        switch (index) {
            case 1:
                this.setState({VATtype: 'НДС 18%'});
                break;
            case 2:
                this.setState({VATtype: 'НДС 10%'});
                break;
            case 3:
                this.setState({VATtype: 'Без НДС'});
                break;
            default:
                break;
        }
    }

    cleanFields() {
        this.setState({
            payer: '',
            bik: '',
            accountNumber: '',
            VATtype: '',
            sum: ''
        });
    }
}

export default Validation;