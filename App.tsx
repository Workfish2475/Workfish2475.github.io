import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";
import { YStack, View } from "tamagui";

import { ScrollView } from "react-native";

import NavBar from "./Components/NavBar";
import HeaderSection from "./Components/Header";
import ProjectItem from "./Components/ProjectItem";
import ContactSection from "./Components/Contact";
import AboutMe from "./Components/AboutMe";
import { useState, useRef } from "react";

export default () => {
  const [scrollY, setScrollY] = useState(0);
  const [sectionPositions, setSectionPositions] = useState({
    headerSection: 0,
    projectItem: 0,
    aboutMe: 0,
    contactSection: 0,
  });

  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    setScrollY(yOffset);
  };

  const scrollTo = (position: number) => {
    scrollViewRef.current?.scrollTo({ y: position, animated: true });
  };

  const handleLayout =
    (sectionName: keyof typeof sectionPositions) => (event: any) => {
      const { y } = event.nativeEvent.layout;
      setSectionPositions((prev) => ({
        ...prev,
        [sectionName]: y,
      }));
    };

  return (
    <TamaguiProvider config={config}>
      <View
        backgroundColor="$color"
        style={{ flex: 1, height: "auto" }}
        gap="$2"
      >
        <NavBar
          scrollY={scrollY}
          onScrollTo={scrollTo}
          sectionPositions={sectionPositions}
        />

        <ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, height: "auto" }}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <YStack gap="$5">
            <HeaderSection />
            <ProjectItem onLayout={handleLayout("projectItem")} />
            <AboutMe onLayout={handleLayout("aboutMe")} />
            <ContactSection onLayout={handleLayout("contactSection")} />
          </YStack>
        </ScrollView>
      </View>
    </TamaguiProvider>
  );
};
