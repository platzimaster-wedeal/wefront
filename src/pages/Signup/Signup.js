import React, { Fragment, useState } from "react";
import logo from "../../assets/WD4.png";
import {
  Container,
  Register,
  Input,
  Label,
  Text,
  Link,
  Button,
  H1,
  FooterText,
  Img,
} from "./styles";

const Signup = () => {
  const [form, setValues] = useState({
    email: "",
    password: "",
    cpassword: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Fragment>
      <Register>
        <div>
          <Img src={logo} alt="WeDeal logo" />
          <Container action="">
            <H1>Registrarse</H1>
            <Label>Correo</Label>
            <Input
              onChange={handleInput}
              name="email"
              type="text"
              placeholder="Email"
            />
            <Label>Contraseña</Label>
            <Input
              onChange={handleInput}
              name="password"
              type="password"
              placeholder="password"
            />
            <Label>Confirmar contraseña</Label>
            <Input
              onChange={handleInput}
              name="cpassword"
              type="password"
              placeholder="Confirm password"
            />
            <Text>
              Al unirse a WeDeal aceptas los <Link>términos</Link> y{" "}
              <Link>condiciones.</Link>
            </Text>
            <Button>Unirse a WeDeal</Button>
            <FooterText>
              Ya tienes cuenta? <Link>Incia sesión.</Link>
            </FooterText>
          </Container>
        </div>
      </Register>
    </Fragment>
  );
};

export default Signup;
