import ItemHome from "../../shared/itemHome/ItemHome";
import { Container, Icon } from "./styles";
import { BiWifi } from "react-icons/bi";

export default function Network() {
  return (
    <Container>
      <Icon>
        <BiWifi className="icon" />
      </Icon>
      <ItemHome text={"Wifi"} number={"4"} />
    </Container>
  );
}
