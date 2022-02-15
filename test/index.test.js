const index = require('../src/index');

describe('Validate user', () => {
    it('should return an error if the user is not valid', () => {
        const user = {
            email: 'test',
            last_name: 'test',
            first_name: 'John',
            phone_number: '0000000000',
        };
        const { error } = index.userValidation(user);
        expect(error).toBeDefined();
        expect(error).toEqual(expect.objectContaining({message: '"email" must be a valid email'}));
    });

    it('should return no error if the user is valid', () => {
        const user = {
            email: 'test@test.com',
            last_name: 'test',
            first_name: 'John',
            phone_number: '0000000000',
        };
        const { error } = index.userValidation(user);
        expect(error).toBeUndefined();
    });
});
