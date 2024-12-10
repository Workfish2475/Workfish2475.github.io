import {
  XStack,
  YStack,
  Paragraph,
  Card,
  H1,
  Image,
  Separator,
  Text
} from "tamagui";

import { BlurView } from 'expo-blur'

export default function HeaderSection() {
  return (
    <Card
      flex={1}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      alignSelf="center"
      backgroundColor="#0F52BA"
      width="95%"
      minHeight="40%"
      elevation={3}
      bordered
      borderColor="#1B1B1B"
      mt="$4"
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
          Recent graduate seeking opportunities. 
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
