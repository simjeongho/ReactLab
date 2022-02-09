import { useDispatch } from 'react-redux';
import AuthService from 'src/auth/auth-service';

const authService = new AuthService();
const UseLoginForm = (id: string, password: string) => {
    const dispatch = useDispatch();

    const login = async () => {
        const data = {
            id: id,
            password: password,
        };

        try{
            const{status,
            data:{}} = await authService.login(data);
        }
    }
}