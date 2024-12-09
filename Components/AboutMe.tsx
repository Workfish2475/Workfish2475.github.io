import { XStack, YStack, Card, H1, Paragraph, Separator } from "tamagui";

export default function AboutMe() {
  return (
    <Card backgroundColor="$color" width="95%" alignSelf="center" elevate bordered>
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
