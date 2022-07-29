import { useState } from "react"; 
import Button from '../../components/Button/Button';
import Input from '../../components/input/input';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Signup = () => {
    const [email, setEmail] = useState("");
    const [emailConf, setEmailconf] = useState("");
    const [senha, setSenha ] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { signup } = useAuth();

    const handleSignup = () => {
        
        if(!email | !emailConf | !senha){
            setError("Preencha todos os campos!");
            return;
        }else if(email !== emailConf){
            setError("Os e-mails não são iguais!");
            return;
        }
        const res = signup(email, senha);
        if(res) {
            setError(res);
            return;
        }
        alert("Usuário cadastrado com sucesso!");
        navigate("/");

    };

    return(
        <C.Container>
            <C.Label>SISTEMA DE LOGIN</C.Label>
            <C.Content>
                <Input
                    type="email"
                    placehoulder="Digite seu email"
                    value= {email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Input 
                    type="Email"
                    placehoulder="confirme seu E-mail"
                    value={emailConf}
                    onChange={(e) => [setEmailconf(e.target.value), setError("")]}
                />
                <Input 
                    type="password"
                    placehoulder="Digite sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <C.labelError>{error}</C.labelError>
                <Button Text="Inscrever-se" onClick={handleSignup}/>
                <C.LabelSignin>
                    Já tem uma conta?
                        <C.Strong>
                            <Link to="/"> Entre</Link>
                        </C.Strong>
                </C.LabelSignin>
            </C.Content>
        </C.Container>
    );

};
export default Signup;