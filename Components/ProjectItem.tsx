import {
  Card,
  XStack,
  YStack,
  H1,
  Text,
  Image,
  Button,
  Anchor,
  Separator,
  Paragraph,
  H2,
} from "tamagui";

import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const projects = [
  {
    title: "Fini",
    languages: [{ name: "Swift", color: "#F05138" }],
    description: "Simple Todo app written in Swift.",
    imageURL: "/path/to/project/img.png.",
    link: "https://github.com",
  },
  {
    title: "Selenium Scraper",
    languages: [{ name: "Python", color: "#3776AB" }],
    description:
      "A web scraper made using Selenium and BS4 that scrapes and organizes card date into a json, then proceeds to download the entire collection of card images using multithreading to do so quickly",
    imageURL: "/path/to/project/img.png.",
    link: "https://github.com/Workfish2475/WebScraper",
  },
  {
    title: "Pomo",
    languages: [{ name: "Kotlin", color: "#7f52ff" }],
    description:
      "Minimalistic Pomodoro app made using Kotlin Compose. Allows for the user to input session goals, and even offers insights after a certain amount of sessions have been completed.",
    imageURL: "/path/to/project/img.png.",
    link: "https://github.com/alenrtan/Pomo",
  },
];

export default function ProjectItem({ onLayout }) {
  return (
    <Card
      padded
      width="95%"
      height={"55%"}
      alignSelf="center"
      backgroundColor="rgba(255, 255, 255, 0.1)"
      elevate
      bordered
      borderColor="#1B1B1B"
      onLayout={onLayout}
    >
      <Card.Header>
        <YStack gap="$3">
          <XStack gap="$5" flexDirection="row" alignItems="center">
            <FontAwesome6 name="hammer" size={30} color="linen" />
            <H1 color="linen">Projects</H1>
          </XStack>

          <Separator borderColor="gray" />
          <XStack
            alignSelf="center"
            borderRadius="$4"
            justifyContent="space-between"
            flexWrap="wrap"
            height={"100%"}
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                backgroundColor="#0F52BA"
                borderWidth={1}
                borderColor="rgba(255, 255, 255, 0.1)"
                borderRadius="$5"
                padding="$3"
                height="100%"
                width="30%"
                alignSelf="center"
                elevate
              >
                <Card.Header padded>
                  <YStack gap="$4">
                    <H2 color="linen">{project.title}</H2>
                    <XStack gap="$2">
                      {project.languages.map((language, index) => (
                        <XStack
                          backgroundColor={language.color}
                          borderRadius="$4"
                          elevation="$1"
                          width="auto"
                          alignSelf="flex-start"
                        >
                          <Text
                            key={index}
                            padding="$2"
                            theme="alt2"
                            color="linen"
                            fontWeight={"bold"}
                          >
                            {language.name}
                          </Text>
                        </XStack>
                      ))}
                    </XStack>

                    <Paragraph
                      fontWeight="bold"
                      color="linen"
                      numberOfLines={5}
                    >
                      {project.description}
                    </Paragraph>
                  </YStack>
                </Card.Header>

                <Card.Background>
                  <Image />
                </Card.Background>
                <Card.Footer>
                  <Button
                    fontWeight="bold"
                    icon={<Entypo name="github" size={24} color="black" />}
                  >
                    <Anchor
                      href={project.link}
                      fontWeight={"bold"}
                      textDecorationLine="none"
                    >
                      Github
                    </Anchor>
                  </Button>
                </Card.Footer>
              </Card>
            ))}
          </XStack>
        </YStack>
      </Card.Header>
    </Card>
  );
}
