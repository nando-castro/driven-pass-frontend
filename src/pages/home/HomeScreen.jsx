import Header from "../../shared/header/Header";
import { BackHome, ButtonAdd, Container, Footer } from "./styles";
import Credential from "../../components/credential/Credential";
import Note from "../../components/note/Note";
import Card from "../../components/card/Card";
import Network from "../../components/network/Network";
import Category from "../../components/categories/Category";
import { useAuth } from "../../context/auth";
import Networks from "../../components/network/Networks";
import Cards from "../../components/card/Cards";
import Credentials from "../../components/credential/Credentials";
import Notes from "../../components/note/Notes";

export default function HomeScreen() {
  const { openCreate, setOpenCreate } = useAuth();

  const { selected } = useAuth();

  let renderTab = {
    networks: <Networks />,
    cards: <Cards />,
    credentials: <Credentials />,
    notes: <Notes />,
  };

  let currentTab = selected;

  return (
    <Container>
      {openCreate ? (
        <>
          <Category setOpenCreate={setOpenCreate} />
          <Footer>
            <BackHome onClick={() => setOpenCreate(false)}>
              {"<"} Voltar
            </BackHome>
          </Footer>
        </>
      ) : (
        <>
          {currentTab !== null ? (
            renderTab[currentTab]
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
        </>
      )}
    </Container>
  );
}
