import { XStack, YStack, Card, H1, Paragraph, Separator } from "tamagui";

export default function AboutMe() {
  return (
    <Card backgroundColor="#0F52BA" width="95%" alignSelf="center" elevate bordered borderColor="#1B1B1B">
      <Card.Header>
        <YStack gap="$5">
          <H1 color="linen">About Me</H1>

          <Separator borderColor="gray" />

          <XStack
            flexDirection="row"
            alignSelf="center"
            justifyContent="space-around"
            width="100%"
          >
            <Paragraph color="linen" fontWeight="bold">
              Placeholder text Placeholder text Placeholder text Placeholder
              text
            </Paragraph>

            <H1 color="linen">An image will go here</H1>
          </XStack>
        </YStack>
      </Card.Header>
    </Card>
  );
}
