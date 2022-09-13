import ItemHome from "../../shared/itemHome/ItemHome";
import { Container, Icon } from "./styles";
import { IoIosCard } from "react-icons/io";

export default function Card() {
  return (
    <Container>
      <Icon>
        <IoIosCard className="icon" />
      </Icon>
      <ItemHome text={"Cartões"} number={"3"} />
    </Container>
  );
}
