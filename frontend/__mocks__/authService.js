const login = () => {
    return Promise.resolve({ data: { email: 'test@test.hr', name: 'Testo Testović' } })
};

exports.login = login;