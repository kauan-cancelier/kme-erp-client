class UserModel {
    constructor(user = {}) {
        this.id = {
            value: user.id || '',
            label: 'Id'
        };
        this.name = {
            value: user.name || '',
            required: true,
            label: 'Nome'
        };
        this.email = {
            value: user.email || '',
            required: true,
            label: 'Email'
        };
        this.cpf = {
            value: user.cpf || '',
            label: 'CPF'
        };
        this.phone_number = {
            value: user.phone_number || '',
            label: 'Telefone'
        };
        this.password = {
            value: user.password || '',
            required: true,
            label: 'Senha'
        };
        this.confirm_password = {
            value: user.confirm_password || '',
            required: true,
            label: 'Confirmação da senha'
        };
        this.job_title = {
            value: user.job_title || '',
            label: 'Cargo'
        };
    }

    serialize() {
        return {
            id: this.id.value,
            name: this.name.value,
            email: this.email.value,
            cpf: this.cpf.value,
            phoneNumber: this.phone_number.value,
            password: this.password.value,
            jobTitle: this.job_title.value,
        };
    }
}

export default UserModel;
