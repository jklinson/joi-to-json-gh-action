const UserSchema = require('./schema/user');

const user = {
    first_name: 'John',
    last_name: 'Doe',
    email: "john.doe@example.com",
    phone_number: '0000000000'
}

module.exports = {
    userValidation: (user) => {
        return UserSchema.validate(user);
    }
}