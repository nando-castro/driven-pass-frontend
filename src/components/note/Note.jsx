import ItemHome from "../../shared/itemHome/ItemHome";
import { Container, Icon } from "./styles";
import { HiPencil } from "react-icons/hi";

export default function Note() {
  return (
    <Container>
      <Icon>
        <HiPencil className="icon" />
      </Icon>
      <ItemHome text={"Notas Seguras"} number={"2"} />
    </Container>
  );
}
