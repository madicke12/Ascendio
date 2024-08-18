import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const SocialAccountabilitySection: React.FC = () => {
  return (
    <View className="flex gap-1.5 py-5 pl-5 mt-3 bg-white">
      <View className="flex flex-col grow shrink-0 basis-0 w-fit">
        <Text className="self-start text-xl text-black rotate-[2.4492937051703357e-16rad]">
          Social Accountability
        </Text>
        <View className="flex gap-1.5 mt-1.5 text-sm leading-loose text-white">
          <TouchableOpacity className="flex overflow-hidden flex-1 gap-1.5 px-3 py-2 bg-cyan-500 rounded-md rotate-[2.4492937051703357e-16rad]">
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b1144f4ad538a6709fea885482d5225ca6a51989a2dd670da57f9c1ff3d5114?placeholderIfAbsent=true&apiKey=9c066bb72ce5442ca7b521d698a43bb1" }}
              className="object-contain shrink-0 my-auto w-4 aspect-square"
            />
            <Text>Join Group</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex overflow-hidden flex-1 gap-1.5 px-3 py-2 bg-cyan-500 rounded-md rotate-[2.4492937051703357e-16rad]">
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/54ca7da4d129573e54a8416bf7429977193bdb1601ff82d7fcd9a343f0495d7b?placeholderIfAbsent=true&apiKey=9c066bb72ce5442ca7b521d698a43bb1" }}
              className="object-contain shrink-0 my-auto w-4 aspect-square"
            />
            <Text>Share Goals</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity className="flex overflow-hidden gap-1.5 self-end px-3 py-2 mt-9 text-sm leading-loose text-white whitespace-nowrap bg-cyan-500 rounded-md rotate-[2.4492937051703357e-16rad]">
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2221274664b34594040357c1588dc2f3319cf52fdbfc079508639338184ed41?placeholderIfAbsent=true&apiKey=9c066bb72ce5442ca7b521d698a43bb1" }}
          className="object-contain shrink-0 my-auto w-4 aspect-square"
        />
        <Text>Discussions</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialAccountabilitySection;