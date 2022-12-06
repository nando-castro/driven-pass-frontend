import { Container, Icon, Item, Text } from "./styles";
import { IoIosExit, IoIosCard } from "react-icons/io";
import { BiWifi } from "react-icons/bi";
import { HiPencil } from "react-icons/hi";
import FormCard from "../../shared/forms/FormCard";
import FormCredential from "../../shared/forms/FormCredential";
import FormNetwork from "../../shared/forms/FormNetwork";
import FormNote from "../../shared/forms/FormNote";
import { useState } from "react";
import Header from "../../shared/header/Header";

export default function Category() {
  const [selected, setSelected] = useState(null);
  let renderTab = {
    card: <FormCard />,
    credential: <FormCredential />,
    network: <FormNetwork />,
    note: <FormNote />,
  };

  let currentTab = selected;
  return (
    <Container>
      {currentTab !== null ? (
        renderTab[currentTab]
      ) : (
        <>
          <Header text={"Categorias"} />
          <Item onClick={() => setSelected("credential")}>
            <Icon>
              <IoIosExit className="icon" />
            </Icon>
            <Text>Credencial</Text>
          </Item>
          <Item onClick={() => setSelected("note")}>
            <Icon>
              <HiPencil className="icon" />
            </Icon>
            <Text>Nota</Text>
          </Item>
          <Item onClick={() => setSelected("card")}>
            <Icon>
              <IoIosCard className="icon" />
            </Icon>
            <Text>Cartão</Text>
          </Item>
          <Item onClick={() => setSelected("network")}>
            <Icon>
              <BiWifi className="icon" />
            </Icon>
            <Text>Senha de Wifi</Text>
          </Item>
        </>
      )}
    </Container>
  );
}
