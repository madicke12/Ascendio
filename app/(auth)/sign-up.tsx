import { View, Text, ScrollView ,Image, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import Formfield from '@/components/Formfield'
import { useState } from 'react'
import CustomButton from '@/components/customButton'
import { Link, router } from 'expo-router'
import {createUser} from '../../lib/appwrite'
const Signup = () => {
    const [form, setform] = useState({
        username:'',
        email :'',
        password : ''
    })
    const [isSubmitting, setisSubmitting] = useState(false)
    const submit = async ( ) => {
      if(!form.email || !form.password || !form.username) {
        Alert.alert('Error','Please fill all fields')
      }
      const response = await createUser(form.email,form.password,form.username)
      console.log(response)

      //set it to global state using context
      router.replace('/home')
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
                        title='Username'
                        value={form.username}
                        handleTextChange={(e) => setform({...form,username:e})}
                        // keyboardType='email-address'
                        placeholder='Enter your username'
                        styles='mt-10'
                    
                    
                    />
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
                            title='sign-up'
                            handlePress={submit}
                            containerStyle='mt-7'
                            isLoading={isSubmitting}

                        />

                        <View className='flex-row justify-center pt-5'>
                            <Text className='text-gray-100 text-lg font-pregular'>
                                Already have an account?
                            </Text>
                            <Link href={'/sign-in'}>
                            <Text className='text-secondary-200 text-lg font-psemibold ml-1'>
                                Sign in
                            </Text>
                            </Link>
                            </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Signup