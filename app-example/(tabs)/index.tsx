import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import DateItem from "../DateItem";
import DeadlineCard from "../DeadlineCard";
import SocialAccountabilitySection from "../SocialAccountabilitySection";
import BottomNavigation from "../BottomNavigation";

const MyComponent: React.FC = () => {
  const dates = [
    { day: 17, weekday: "Mon" },
    { day: 18, weekday: "Tue" },
    { day: 19, weekday: "Wed", isActive: true },
    { day: 20, weekday: "Thu" },
  ];

  return (
    <View className="flex overflow-hidden flex-col pb-5 bg-white max-w-[390px] shadow-[0px_3px_6px_rgba(18,15,40,0.12)]">
      <View className="flex z-10 flex-col pb-3.5 w-full whitespace-nowrap bg-white">
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef445e081b0047dc2afb51ce13e320aecfa3a0ffe7b9719f9232e6a895cb0846?placeholderIfAbsent=true&apiKey=9c066bb72ce5442ca7b521d698a43bb1" }}
          className="w-full aspect-[9.71]"
        />
        <View className="flex flex-col pl-5 mt-3 w-full">
          <View className="flex gap-5 justify-between items-center pl-4 max-w-full text-lg leading-loose text-black bg-white bg-opacity-0 w-[350px]">
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0aaca409b13ee326246996be5cb834c82bd861a09e8c2cfa4bf4bc1ab4e1f841?placeholderIfAbsent=true&apiKey=9c066bb72ce5442ca7b521d698a43bb1" }}
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <View className="self-stretch my-auto rotate-[2.4492937051703357e-16rad]">
              <Text>Aujourd'hui</Text>
            </View>
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b6d1359fe09b130407f8ecd8fa77038f05cb61ff8c88ef71f47fcc4cdf631db6?placeholderIfAbsent=true&apiKey=9c066bb72ce5442ca7b521d698a43bb1" }}
              className="object-contain shrink-0 self-stretch w-9 rounded-2xl aspect-square"
            />
          </View>
          <ScrollView horizontal className="flex gap-4 mt-9 text-center">
            {dates.map((date, index) => (
              <DateItem key={index} {...date} />
            ))}
            <View className="flex shrink-0 bg-gray-50 rounded h-[84px] shadow-[0px_0px_2px_rgba(248,249,250,0.12)] w-[18px]" />
          </ScrollView>
        </View>
      </View>
      <View className="flex flex-col px-5 py-14 mt-0 w-full bg-white">
        <DeadlineCard />
        <View className="px-4 py-6 mt-4 text-sm leading-loose bg-gray-50 rounded rotate-[2.4492937051703357e-16rad] text-zinc-400">
          <Text>Deadlines Approaching</Text>
        </View>
      </View>
      <SocialAccountabilitySection />
      <View className="flex w-full bg-white min-h-[130px]" />
      <BottomNavigation />
      <View className="flex shrink-0 self-center mt-2.5 w-40 rounded bg-zinc-900 h-[5px]" />
    </View>
  );
};

export default MyComponent;