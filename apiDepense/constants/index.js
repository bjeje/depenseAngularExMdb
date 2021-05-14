module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
    },
    forbiddenResponse: {
        message: "You don't have permission!",
    },
    endMonthMessage: {
        END_MONTH_CREATED: 'End month Created Successfully',
        END_MONTH_FETCHED: 'End month Fetched Successfully',
        END_MONTH_UPDATED: 'End month Updated Successfully',
        END_MONTH_DELETED: 'End month Deleted Successfully',
        END_MONTH_NOT_FOUND: 'End month Not Found'
    },
    spentMessage: {
        SPENT_CREATED: 'Spent Created Successfully',
        SPENT_FETCHED: 'Spent Fetched Successfully',
        SPENT_UPDATED: 'Spent Updated Successfully',
        SPENT_DELETED: 'Spent Deleted Successfully',
        SPENT_NOT_FOUND: 'Spent Not Found'
    },
    incomeMessage: {
        INCOME_CREATED: 'Income Created Successfully',
        INCOME_FETCHED: 'Income Fetched Successfully',
        INCOME_UPDATED: 'Income Updated Successfully',
        INCOME_DELETED: 'Income Deleted Successfully',
        INCOME_NOT_FOUND: 'Income Not Found'
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
