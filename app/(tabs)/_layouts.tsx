import { View, Text ,Image  } from 'react-native'
import React from 'react'
import {Tabs ,Redirect} from 'expo-router'
import Home from './home'
import profile from './profile'
import Bookmark from './bookmark'
import {icons} from '../../constants'

interface TabIconProps {
    icon: any;
    color: string;
    name: string;
    focused: boolean;
}
const TabstLayout = () => {
    const TabIcon=({icon ,color ,name ,focused}:TabIconProps)=>{
        return(
            <View className='items-center justify-center gap-2 '>
                <Image
                    source={icon}
                    resizeMode='contain'
                    tintColor={color}
                    className='w-6 h-6'
                    name={name}
                />
                <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{color:color}}>
                    {name}
                </Text>
            </View>
        )
    }
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel:false,
                tabBarActiveTintColor:'#FFA001',
                tabBarStyle:{
                    height:84,
                    backgroundColor:'#161622',
                    borderTopColor:'#CDCDEO',
                },
            }}
        >
            <Tabs.Screen name="home" options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon:({color ,focused}) => (
                    <TabIcon
                        icon={icons.home}
                        color={color}
                        name='Home'
                        focused={focused}
                    />
                )
            }} />
            <Tabs.Screen name="bookmark" options={{
                title: 'Bookmark',
                headerShown: false,
                tabBarIcon:({color ,focused}) => (
                    <TabIcon
                        icon={icons.bookmark}
                        color={color}
                        name='Profile'
                        focused={focused}
                    />
                )
            }} />
            <Tabs.Screen name="create" options={{
                title: 'Create',
                headerShown: false,
                tabBarIcon:({color ,focused}) => (
                    <TabIcon
                        icon={icons.plus}
                        color={color}
                        name='Create'
                        focused={focused}
                    />
                )
            }} />
            <Tabs.Screen name="profile" options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon:({color ,focused}) => (
                    <TabIcon
                        icon={icons.profile}
                        color={color}
                        name='Profile'
                        focused={focused}
                    />
                )
            }} />
            {/* <Tabs.Screen name="Profile" component={profile} />
            <Tabs.Screen name="Bookmark" component={Bookmark} /> */}
        </Tabs>
    </>
    
  )
}

export default TabstLayout