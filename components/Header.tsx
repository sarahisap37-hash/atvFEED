import { createHomeStyles } from '@/assets/styles/home.styles';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hooks/useTheme';
import { useQuery } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { colors } = useTheme();

  const homeStyles = createHomeStyles(colors);

  const todos = useQuery(api.todo.getTodos);

  const todoCompletos = todos ? todos.filter((todo) => todo.isCompleted).length : 0;
  const todoTotal = todos ? todos.length : 0;
 
  return (
    <View style={homeStyles.header}>
      {/* TEXTO */}
      <View style={homeStyles.titleTextContainer}>
        <Text style={homeStyles.title}>Instagram</Text>
        <Text style={homeStyles.subtitle}> {todoCompletos} de {todoTotal} </Text>
      </View>

      
    </View>  
  )
}

export default Header