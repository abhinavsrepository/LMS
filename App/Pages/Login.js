import { View, Text ,Image} from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View>
      
      <Image source ={require('./../Assets/Images/login.jpg')}/>
    <Text style={{fontSize:35,textAlign:'center',fontWeight:'bold'}}>Welcome to Abhinav's Academy</Text>
    </View>
  )
}