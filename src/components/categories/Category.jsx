import { Container, Icon, Item, Text } from "./styles";
import { IoIosExit, IoIosCard } from "react-icons/io";
import { BiWifi } from "react-icons/bi";
import { HiPencil } from "react-icons/hi";

export default function Category() {
  return (
    <Container>
      <Item>
        <Icon>
          <IoIosExit className="icon" />
        </Icon>
        <Text>Credencial</Text>
      </Item>
      <Item>
        <Icon>
          <HiPencil className="icon" />
        </Icon>
        <Text>Nota</Text>
      </Item>
      <Item>
        <Icon>
          <IoIosCard className="icon" />
        </Icon>
        <Text>Cartão</Text>
      </Item>
      <Item>
        <Icon>
          <BiWifi className="icon" />
        </Icon>
        <Text>Senha de Wifi</Text>
      </Item>
    </Container>
  );
}
