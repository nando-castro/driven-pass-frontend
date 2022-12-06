import Header from "../../shared/header/Header";
import { BackHome, ButtonAdd, Container, Footer } from "./styles";
import Credential from "../../components/credential/Credential";
import Note from "../../components/note/Note";
import Card from "../../components/card/Card";
import Network from "../../components/network/Network";
import { useState } from "react";
import Category from "../../components/categories/Category";

export default function HomeScreen() {
  const [openCreate, setOpenCreate] = useState(false);

  console.log(openCreate);

  return (
    <Container>
      {openCreate ? (
        <>
          <Header text={"Categorias"} />
          <Category />
          <Footer>
            <BackHome onClick={() => setOpenCreate(false)}>
              {"<"} Voltar
            </BackHome>
          </Footer>
        </>
      ) : (
        <>
          <Header text={"Minhas senhas"} />
          <Credential />
          <Note />
          <Card />
          <Network />
          <Footer>
            <ButtonAdd onClick={() => setOpenCreate(true)}>+</ButtonAdd>
          </Footer>
        </>
      )}
    </Container>
  );
}
