import axios from 'axios';
import authService, { API_URL } from '../src/features/auth/authService';

jest.mock("../__mocks__/authService");
const { login } = authService;



test('Login user with correct informations', async () => {
    const user = {email: "test@test.hr", password: "123"};
    
    login(user).then(res => {
        expect(res).toBe({})
    })

    /* const user = {email: "test@test.hr", password: "123"};

    axios.post.mockResolvedValueOnce(user);
    const result = await authService.login(user);

    expect(axios.post).toHaveBeenCalledWith(`${API_URL}login`, user);
    expect(result).toEqual(user); */
});