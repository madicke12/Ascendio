import React from "react";
import { View, Image } from "react-native";

const BottomNavigation: React.FC = () => {
  const navItems = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/15d92637f3329be84042600d01295257cb8573448584ec363a1d730408fe03d0?placeholderIfAbsent=true&apiKey=9c066bb72ce5442ca7b521d698a43bb1",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/c5650f17d92d84449232884da3986ddaaa0f4bc3097b149f19bdfbfb23cbf264?placeholderIfAbsent=true&apiKey=9c066bb72ce5442ca7b521d698a43bb1",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/d751aea9aed51552b95c3967a817dbed17959d292945716eee7e145c0cf88781?placeholderIfAbsent=true&apiKey=9c066bb72ce5442ca7b521d698a43bb1",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/0653c3910ec11a3efde3814332622e7dc8b5520754693a5fd3242b56c1a48b67?placeholderIfAbsent=true&apiKey=9c066bb72ce5442ca7b521d698a43bb1",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/ceb0979037cbbe7202a8323ba1c54f82989c7e5af0a52cf0ad74fc5326dbe081?placeholderIfAbsent=true&apiKey=9c066bb72ce5442ca7b521d698a43bb1",
  ];

  return (
    <View className="flex flex-col justify-center px-12 py-6 w-full bg-white">
      <View className="flex bg-black bg-opacity-0">
        {navItems.map((item, index) => (
          <Image
            key={index}
            source={{ uri: item }}
            className="object-contain shrink-0 rounded aspect-[1.34] w-[59px]"
          />
        ))}
      </View>
    </View>
  );
};

export default BottomNavigation;