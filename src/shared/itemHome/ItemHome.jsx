import { BoxNumber, Container, Icon, Text } from "./styles";

export default function ItemHome({ text, number }) {
  return (
    <Container>
      <Text>
        {text}
      </Text>
      <BoxNumber>{number}</BoxNumber>
    </Container>
  );
}
