import { YStack, Card, H1, XStack, H3, Separator, Button } from "tamagui";
import Entypo from '@expo/vector-icons/Entypo'

export default function ContactSection() {
  return (
    <YStack>
      <Card backgroundColor="$color" width="95%" alignSelf="center" mb="$4">
        <Card.Header>
          <YStack gap="$5">

			<XStack display="flex" justifyContent="space-between">
			<H1 color="linen">Contact Me</H1>

			<Button icon={<Entypo name="download" size={24} color="$color"/>}>

			</Button>
			
			</XStack>
			
			<Separator borderColor="gray" />

			<YStack>
				<XStack gap="$2" alignContent="center">
				<H3 color="linen">Discord</H3>
				<H3 color="gray">@username</H3>
				</XStack>
				<XStack gap="$2">
				<H3 color="linen">Linkedin</H3>
				<H3 color="gray">@username</H3>
				</XStack>
				<XStack gap="$2">
				<H3 color="linen">Email</H3>
				<H3 color="gray">example@example.com</H3>
				</XStack>
			</YStack>
          </YStack>
        </Card.Header>
      </Card>
    </YStack>
  );
}