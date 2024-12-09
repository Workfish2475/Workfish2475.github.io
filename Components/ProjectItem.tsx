import {
  Card,
  XStack,
  YStack,
  H1,
  H5,
  Text,
  Image,
  Button,
  Anchor,
} from "tamagui";

import Entypo from "@expo/vector-icons/Entypo";

const projects = [
  {
    title: "Fini",
    languages: ["Swift"],
    description: "Simple Todo app written in Swift.",
    imageURL: "/path/to/project/img.png.",
    link: "https://github.com",
  },
  {
    title: "Selenium Scraper",
    languages: ["Python"],
    description:
      "A web scraper made using Selenium and BS4 that scrapes and organizes card date into a json, then proceeds to download the entire collection of card images using multithreading to do so quickly",
    imageURL: "/path/to/project/img.png.",
    link: "https://github.com/Workfish2475/WebScraper",
  },
  {
    title: "Pomo",
    languages: ["Kotlin"],
    description: "Minimalistic Pomodoro app made using Kotlin Compose. Allows for the user to input session goals, and even offers insights after a certain amount of sessions have been completed.",
    imageURL: "/path/to/project/img.png.",
    link: "https://github.com/alenrtan/Pomo",
  }
];

export default function ProjectItem() {
  return (
    <XStack
      backgroundColor="$color"
      width="95%"
      alignSelf="center"
      borderRadius="$4"
      height="50%"
      justifyContent="space-around"
      flexWrap="wrap"
    >
      {projects.map((project, index) => (
        <Card
          key={index}
          backgroundColor="rgba(255, 255, 255, 0.1)"
          borderWidth={1}
          borderColor="rgba(255, 255, 255, 0.1)"
          borderRadius="$5"
          padding="$3"
          height="80%"
          width="30%"
          alignSelf="center"
          elevate
        >
          <Card.Header padded>
            <YStack gap="$4">
              <H1 color="linen">{project.title}</H1>
              <H5 color="linen" numberOfLines={2}>{project.description}</H5>

              <XStack
                backgroundColor="#0070BB"
                borderRadius="$4"
                elevation="$1"
              >
                <Text
                  padding="$2"
                  theme="alt2"
                  color="linen"
                  fontWeight={"bold"}
                >
                  {project.languages.join(", ")}
                </Text>
              </XStack>
            </YStack>
          </Card.Header>

          <Card.Background>
            <Image />
          </Card.Background>
          <Card.Footer padded>
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
  );
}
