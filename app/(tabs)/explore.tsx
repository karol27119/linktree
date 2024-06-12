import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Linking, TouchableOpacity, Text } from 'react-native';

import { useCallback } from 'react';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function TabTwoScreen() {
  const [fontsLoaded, fontError] = useFonts({
    'fonte1': require('../../assets/fonts/BebasNeue-Regular.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const InstagramLink = async () => {
    const instagramUrl = "instagram://user?username=karolpelegrini";
    try {
      await Linking.openURL(instagramUrl);
    } catch (error) {
      console.error("Erro ao abrir o link do Instagram:", error);
    }
  };
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F0F1F0', dark: '#F0F1F0' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.reactLogo}
        />
      }>
        <LinearGradient 
        colors={['#F0F1F0','#AD795B']}
        style={styles.background}
        end={{x: 0.6 , y: 1.5}}
        />
      <ThemedView style={styles.titleContainer}>
      </ThemedView>
      <ThemedText style={styles.text}>Estudante | Técnico em Informática | Ajudante em Logistíca</ThemedText>
      <TouchableOpacity style={styles.botao} onPress={InstagramLink}>
        <Text>Ir para o Instagram</Text>
      </TouchableOpacity>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#F0F1F0',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  reactLogo: {
    height: 250,
    width: 380,
    bottom: 2,
    left: 5,
    position: 'absolute',
  },
  background:{
    position:"absolute",
    left:0,
    right:0,
    top:0,
    height:600,
  },
  text:{
    fontFamily:"fonte1",
    color:"#48392E",
    fontSize:16,
  },
  botao: {
    flexDirection: "row",
    backgroundColor: "#ffff",
    borderColor: "#ffff",
    height: 50,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    alignSelf:"center",
    borderRadius: 100,
  },
});
