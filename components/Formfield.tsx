import { View, Text ,TextInput, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import {icons} from '../constants'
import { TouchableOpacity } from 'react-native'
interface FormfieldProps {
    title: string
    value: string
    handleTextChange: (text: string) => void
    styles?: string
    keyboardType:'email-address'
    placeholder: string

}
const Formfield = ({title,value,handleTextChange,styles,keyboardType ,placeholder}:FormfieldProps) => {
    const [Password, setPassword] = useState(false)

  return (
    <View className={`${styles} space-y-2`}>
      <Text className='text-base font-pmedium text-gray-100'>{title}</Text>
      <View className='border-2  rounded-2xl focus:border-secondary-100 flex-row items-center w-full h-16 px-4 bg-black-100 '>
        <TextInput
            className=' text-white text-base flex-1 font-psemibold'
            value={value}
            onChangeText={handleTextChange}
            placeholder={placeholder}
            placeholderTextColor='#7b7b8b'
            secureTextEntry={title === 'Password' ? true : false }
        />
        {title === 'Password' && (
            <TouchableOpacity
                className='text-white text-base font-pmedium'
                onPress={() => setPassword(!Password)}
            >
                <Image source={Password ? icons.eye : icons.eyeHide} className='w-6 h-6' resizeMode='contain'/>
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default Formfield