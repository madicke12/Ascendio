import { View, Text, ScrollView, Image } from 'react-native'
import { Link, router } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import CustomButton from '@/components/customButton'
import { StatusBar } from 'expo-status-bar'

const App = () => {
    return (
            <SafeAreaView className ='bg-primary h-full'>
                <ScrollView contentContainerStyle={{
                    height: '100%',
                }}>
                    <View className='w-full justify-center items-center min-h-[85vh]  px-4'>
                        <Image source={images.logo} className='w-[140px] h-[84px]' resizeMode='contain'/>
                        <Image source={images.cards} className='max-w-[380px] h-[300px] w-full' resizeMode='contain'/>
                        <View className='relative mt-5' >
                            <Text className ={'text-3xl text-white font-bold text-center'} >
                                Discover Endles Possibilities with{' '} 
                                <Text className={'text-secondary-200'}>Aora</Text>

                            </Text>
                            <Image source ={images.path} className={'w-[136 h-[15px] absolute -bottom-2 -right-12' } resizeMode='contain'/>
                        </View>
                        <Text className = {'text-gray-100 font-pregular mt-7 text-center  text-sm'}>
                        Where creativity and technology meets inovation:  embark on a journey of limitless possibilities with our team of experts
                        </Text>
                        <CustomButton
                            title='Get Started'
                            containerStyle='mt-7 w-full'
                            textStyle=''
                            handlePress={()=>router.push('/sign-in')}

                        />
                    </View>
                </ScrollView>
                <StatusBar style='light' backgroundColor='#161622'/>
            </SafeAreaView>
    )
}

export default App