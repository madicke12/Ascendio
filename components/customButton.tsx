import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

interface customButtonProps {
    title: string
    handlePress : () => void
    containerStyle?: string
    isLoading?: boolean
    textStyle?: string
}
const CustomButton = ({title , handlePress , containerStyle , isLoading ,textStyle}:customButtonProps) => {
  return (
    <TouchableOpacity 
        className ={`bg-secondary rounded-xl min-h-[62] items-center justify-center ${containerStyle} ${isLoading ? 'opacity-50' : ''}`}
        onPress={handlePress}
        activeOpacity={0.7}
        disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton