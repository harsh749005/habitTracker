import { useAuth } from '@/lib/authAppWrite';
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from "react-native-paper";

const Home = () => {

  const {user,signOut} = useAuth();
  return (
    <View style={{flex:1,gap:10, justifyContent:"center",alignItems:"center"}}>
      <Text>Home{user?.name}</Text>
      
      <Button mode="contained" onPress={signOut}>Log out</Button>
    </View>
  )
}

export default Home