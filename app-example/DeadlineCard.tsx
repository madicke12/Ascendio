import React from "react";
import { View, Text, Image } from "react-native";

const DeadlineCard: React.FC = () => {
  return (
    <View className="flex flex-col px-4 pt-2 pb-6 w-full text-white rounded bg-violet-400 bg-opacity-70">
      <View className="flex z-10 self-end text-xs leading-4">
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/688d76271094a232460497018fc53a9817ab6c2fe14e134cab2be0cfdd4e4274?placeholderIfAbsent=true&apiKey=9c066bb72ce5442ca7b521d698a43bb1" }}
          className="object-contain shrink-0 self-start w-full aspect-square"
        />
        <Text className="rotate-[2.4492937051703357e-16rad]">
          {" "}
          <Text className="font-bold">1</Text>{" "}
          <Text className="font-bold">Day</Text>
        </Text>
      </View>
      <View className="flex gap-5 justify-between">
        <Text className="text-sm leading-loose rotate-[2.4492937051703357e-16rad]">
          Deadlines Approaching
        </Text>
        <Text className="text-xs font-bold leading-loose rotate-[2.4492937051703357e-16rad]">
          1h/1h
        </Text>
      </View>
    </View>
  );
};

export default DeadlineCard;