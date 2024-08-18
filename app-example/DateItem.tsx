import React from "react";
import { View, Text } from "react-native";

interface DateItemProps {
  day: number;
  weekday: string;
  isActive?: boolean;
}

const DateItem: React.FC<DateItemProps> = ({ day, weekday, isActive = false }) => {
  const baseClasses = "flex overflow-hidden flex-col items-center px-3.5 py-4 rounded shadow-[0px_0px_2px_rgba(248,249,250,0.12)]";
  const activeClasses = isActive
    ? "bg-cyan-50 border border-cyan-500 border-solid shadow-[0px_0px_2px_rgba(235,253,255,0.12)]"
    : "bg-gray-50";

  return (
    <View className={`${baseClasses} ${activeClasses}`}>
      <Text className={`text-xl rotate-[2.4492937051703357e-16rad] ${isActive ? "text-cyan-600" : "text-zinc-700"}`}>
        {day}
      </Text>
      <Text className={`text-sm leading-loose rotate-[2.4492937051703357e-16rad] ${isActive ? "text-zinc-700" : "text-gray-600"}`}>
        {weekday}
      </Text>
    </View>
  );
};

export default DateItem;