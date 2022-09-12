import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useState } from "react";
import { api } from "../../services/api";

export default function LoginScreen() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  if (user !== null) {
    navigate("/home");
  }

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  function login(e) {
    e.preventDefault();

    api
      .post({ ...userLogin })
      .then((res) => {
        setUser(res.data);
        navigate("/home");

        const person = {
          token: res.data.token,
        };
        localStorage.setItem("userLogged", JSON.stringify(person));
      })
      .catch((err) => {
        console.log("email ou senha inválidos");
      });
  }
  //   function changeInput(e) {
  //     setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  //   }
  return <>Login</>;
}
{
  /* <Container>
  <Header>
    <p className="login" onClick={loginRoute}>
      Entrar
    </p>
    <p onClick={registerRoute}>Cadastrar-se</p>
  </Header>
  <Logo />
  <Form>
    <input
      type="email"
      placeholder="E-mail"
      value={userLogin.email}
      name="email"
      onChange={changeInput}
    />
    <input
      type="password"
      placeholder="Senha"
      value={userLogin.password}
      name="password"
      onChange={changeInput}
    />
  </Form>
  <Button onClick={login}>Entrar</Button>
</Container> */
}
