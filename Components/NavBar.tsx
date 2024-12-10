import { Button, XStack, XGroup, Anchor } from "tamagui";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function NavBar({ scrollY }) {
  const navHeight: number = Math.max(60, 75 - scrollY);

  return (
    <XStack
      width="95%"
      height={navHeight}
      padding="$2"
      alignSelf="center"
      gap="$5"
      borderWidth={2}
      borderBottomLeftRadius="$4"
      borderBottomRightRadius="$4"
      backgroundColor="$color"
      alignItems="center"
      justifyContent="space-between"
      mt="$4"
    >
      <Button
        theme="active"
        color="linen"
        backgroundColor="#0F52BA"
        fontWeight={"bold"}
        hoverStyle={{ scale: 1.05 }}
        icon={<Entypo name="home" size={24} color="linen" />}
      >
        <Anchor href="http://localhost:8081" textDecorationLine="none"></Anchor>
      </Button>
      <XGroup alignItems="center">
        <XGroup.Item>
          <Button
            backgroundColor="#0F52BA"
            fontWeight={"bold"}
            hoverStyle={{ scale: 1.05 }}
            icon={<FontAwesome6 name="hammer" size={24} color="linen" />}
            color="linen"
          >
            Projects
          </Button>
        </XGroup.Item>

        <XGroup.Item>
          <Button
            backgroundColor="#0F52BA"
            fontWeight={"bold"}
            hoverStyle={{ scale: 1.05 }}
            icon={<Ionicons name="person" size={24} color="linen" />}
            color="linen"
          >
            <Anchor
              href="https://github.com/Workfish2475"
              textDecorationLine="none"
              fontWeight={"bold"}
              color="linen"
            >
              About Me
            </Anchor>
          </Button>
        </XGroup.Item>

        <XGroup.Item>
          <Button
            backgroundColor="#0F52BA"
            fontWeight={"bold"}
            hoverStyle={{ scale: 1.05 }}
            icon={<FontAwesome6 name="contact-book" size={24} color="linen" />}
            color="linen"
          >
            Contact Me
          </Button>
        </XGroup.Item>
        <XGroup.Item>
          <Button
            backgroundColor="#0F52BA"
            fontWeight={"bold"}
            hoverStyle={{ scale: 1.05 }}
            icon={<Entypo name="github" size={24} color="linen" />}
            color="linen"
          >
            <Anchor
              href="https://github.com/Workfish2475"
              textDecorationLine="none"
              fontWeight={"bold"}
              color="linen"
            >
              Github
            </Anchor>
          </Button>
        </XGroup.Item>
      </XGroup>
    </XStack>
  );
}
