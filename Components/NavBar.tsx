import { Button, XStack, XGroup, Anchor, useMedia } from "tamagui";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function NavBar({ scrollY, onScrollTo, sectionPositions }) {
  const navHeight: number = Math.max(60, 75 - scrollY);

  const scrollToSection = (sectionName: keyof typeof sectionPositions) => {
    const offset = 75;

    if (sectionPositions[sectionName] === "header") {
      onScrollTo(0);
    } else {
      onScrollTo(sectionPositions[sectionName]);
    }
  };

  const media = useMedia();

  return (
    <XStack
      width={"95%"}
      height={navHeight}
      maxHeight={75}
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
        hoverStyle={{ backgroundColor: "#0D4393", borderColor: "#0D4393" }}
        icon={<Entypo name="home" size={24} color="linen" />}
        onPress={() => scrollToSection("headerSection")}
      >
        Home
      </Button>
      <XGroup alignItems="center">
        <XGroup.Item>
          <Button
            backgroundColor="#0F52BA"
            fontWeight={"bold"}
            hoverStyle={{ backgroundColor: "#0D4393", borderColor: "#0D4393" }}
            icon={<FontAwesome6 name="hammer" size={24} color="linen" />}
            color="linen"
            onPress={() => scrollToSection("projectItem")}
          >
            Projects
          </Button>
        </XGroup.Item>

        <XGroup.Item>
          <Button
            backgroundColor="#0F52BA"
            fontWeight={"bold"}
            hoverStyle={{ backgroundColor: "#0D4393", borderColor: "#0D4393" }}
            icon={<Ionicons name="person" size={24} color="linen" />}
            color="linen"
            onPress={() => scrollToSection("aboutMe")}
          >
            <Anchor
              // href=""
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
            hoverStyle={{ backgroundColor: "#0D4393", borderColor: "#0D4393" }}
            icon={<FontAwesome6 name="contact-book" size={24} color="linen" />}
            color="linen"
            onPress={() => scrollToSection("contactSection")}
          >
            Contact Me
          </Button>
        </XGroup.Item>
        <XGroup.Item>
          <Button
            backgroundColor="#0F52BA"
            fontWeight={"bold"}
            hoverStyle={{ backgroundColor: "#0D4393", borderColor: "#0D4393" }}
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
