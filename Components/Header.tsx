import {
  XStack,
  YStack,
  Paragraph,
  Card,
  H1,
  Image,
  Separator,
} from "tamagui";

export default function HeaderSection() {
  return (
    <Card
      flex={1}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      alignSelf="center"
      backgroundColor="$color"
      width="95%"
      minHeight="40%"
      elevation={3}
      bordered
    >
      <YStack fullscreen alignItems="center" justifyContent="center">
        <H1 color="linen" textAlign="center" alignSelf="center">
          Alexander Rivera
        </H1>

        <Paragraph
          fontWeight="800"
          color="linen"
          textAlign="center"
          alignSelf="center"
        >
          Placeholder text
        </Paragraph>
      </YStack>
      <Card.Background>
        <XStack fullscreen alignItems="center" justifyContent="center">
          <Image objectFit="contain" alignSelf="center" />
        </XStack>
      </Card.Background>
    </Card>
  );
}
