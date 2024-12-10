import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";
import { YStack, View } from "tamagui";

import { ScrollView } from "react-native";

import NavBar from "./Components/NavBar";
import HeaderSection from "./Components/Header";
import ProjectItem from "./Components/ProjectItem";
import ContactSection from "./Components/Contact";
import AboutMe from "./Components/AboutMe";
import { useState } from "react";

export default () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (event: any) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    setScrollY(yOffset);
  };

  return (
    <TamaguiProvider config={config}>
      <View backgroundColor="$color" style={{flex: 1, height: "auto"}} gap="$2">
        <NavBar scrollY={scrollY} />

        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, height: "auto" }} onScroll={handleScroll} scrollEventThrottle={16}>
          <YStack gap="$5">
            <HeaderSection />
            <ProjectItem />
            <AboutMe />
            <ContactSection />
          </YStack>
        </ScrollView>
      </View>
    </TamaguiProvider>
  );
};
