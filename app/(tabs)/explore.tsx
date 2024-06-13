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

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

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

  const GithubLink = async () => {
    const githubUrl = "https://github.com/karol27119";
    try {
      await Linking.openURL(githubUrl);
    } catch (error) {
      console.error("Erro ao abrir o link do GitHub:", error);
    }
  };

  const WhatsappMessage = async () => {
    const phoneNumber = "18997634714";
    const message = "Olá Karoline, tudo bem?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    try {
      await Linking.openURL(whatsappUrl);
    } catch (error) {
      console.error("Erro ao abrir o link do WhatsApp:", error);
    }
  };

  const LinkedInLink = async () => {
    const linkedInUrl = "linkedin://profile/karoline-ramos-49875b279";
    try {
      await Linking.openURL(linkedInUrl);
    } catch (error) {
      console.error("Erro ao abrir o link do LinkedIn:", error);
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
      <AntDesign name="instagram" size={24} color="black" />
        <Text>Ir para o Instagram</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={GithubLink}>
      <Feather name="github" size={24} color="black" />
        <Text>Ir para o GitHub</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={WhatsappMessage}>
      <FontAwesome name="whatsapp" size={24} color="black" />
        <Text>Ir para o WhatsApp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={LinkedInLink}>
      <Feather name="linkedin" size={24} color="black" />
        <Text>Ir para o Linkedin</Text>
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
