module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
    },
    spentMessage: {
        SPENT_CREATED: 'Spent Created Successfully',
        SPENT_FETCHED: 'Spent Fetched Successfully',
        SPENT_UPDATED: 'Spent Updated Successfully',
        SPENT_DELETED: 'Spent Deleted Successfully',
        SPENT_NOT_FOUND: 'Spent Not Found'
    },
    userMessage: {
        SIGNUP_SUCCESS: 'Signup Success',
        LOGIN_SUCCESS: 'Login Success',
        DUPLICATE_EMAIL: 'User already exist with given email',
        USER_NOT_FOUND: 'User not found',
        INVALID_PASSWORD: 'Incorrect Password',
        USER_FETCHED: 'User Fetched Successfully',
        USER_UPDATED: 'User Updated Successfully',
        USER_DELETED: 'User Deleted Successfully'
    },
    requestValidationMessage: {
        BAD_REQUEST: 'Invalid fields',
        TOKEN_MISSING: 'Token missing from header'
    },
    databaseMessage: {
        INVALID_ID: 'Invalid Id'
    }
}
