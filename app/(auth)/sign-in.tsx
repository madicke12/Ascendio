import { View, Text, ScrollView ,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import Formfield from '@/components/Formfield'
import { useState } from 'react'
import CustomButton from '@/components/customButton'
import { Link } from 'expo-router'

const SignIn = () => {
    const [form, setform] = useState({
        email :'',
        password : ''
    })
    const [isSubmitting, setisSubmitting] = useState(false)
    const submit = () => {

    }
    return (
        <SafeAreaView className = 'bg-primary h-full'>
            <ScrollView>
                <View className='min-h-[83vh] justify-center w-full px-4 my-6'>
                    <Image source={images.logo} className='w-[110px] h-[35px]' resizeMode='contain'/>
                    <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>
                        Login in to Aora
                    </Text>
                    <Formfield
                        title='Email Address'
                        value={form.email}
                        handleTextChange={(e) => setform({...form,email:e})}
                        keyboardType='email-address'
                        placeholder='Enter your email address'
                        styles='mt-7'
                    
                    
                    />
                    <Formfield
                        title='Password'
                        value={form.password}
                        handleTextChange={(e) => setform({...form,password:e})}
                        placeholder='Enter your password'
                        styles='mt-7'

                        />
                        <CustomButton
                            title='sign-in'
                            handlePress={submit}
                            containerStyle='mt-7'
                            isLoading={isSubmitting}

                        />

                        <View className='flex-row justify-center pt-5'>
                            <Text className='text-gray-100 text-lg font-pregular'>
                                Don't have an account?
                            </Text>
                            <Link href={'/sign-up'}>
                            <Text className='text-secondary-200 text-lg font-psemibold ml-1'>
                                Sign up
                            </Text>
                            </Link>
                            </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn