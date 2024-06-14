import { StyleSheet, Image, Platform, Linking, TouchableOpacity, Text, ImageBackground } from 'react-native';

import { useCallback } from 'react';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync();

export default function TabTwoScreen() {
  const [fontsLoaded, fontError] = useFonts({
    'fonte1': require('../../assets/fonts/BebasNeue-Regular.otf'),
    'fonte2': require('../../assets/fonts/Elegante.ttf'),
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
      <ThemedText style={styles.nome}>Karoline Ramos</ThemedText>
      <ThemedText style={styles.text}>Estudante | Técnico em Informática | Ajudante em Logistíca | Auxiliar em Agropécuaria</ThemedText>
      <ThemedView style={styles.titleContainer}>
      </ThemedView>
      <TouchableOpacity style={styles.botao} onPress={InstagramLink}>
      <AntDesign name="instagram" size={24} color="#48392E" />
      <Text>  </Text>
        <Text style={styles.textbutton}>Instagram</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={GithubLink}>
      <Feather name="github" size={24} color="#48392E" />
      <Text> </Text>
        <Text style={styles.textbutton}>GitHub</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={WhatsappMessage}>
      <FontAwesome name="whatsapp" size={24} color="#48392E" />
      <Text> </Text>
        <Text style={styles.textbutton}>WhatsApp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={LinkedInLink}>
      <EvilIcons name="sc-linkedin" size={30} color="#48392E" />
      <Text></Text>
        <Text style={styles.textbutton}>Linkedin</Text>
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
    bottom: 5,
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
    fontSize:20,
    textAlign:"center",
  },
  botao: {
    flexDirection: "row",
    backgroundColor: "#ffff",
    borderColor: "#48392E",
    height: 50,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    alignSelf:"center",
    borderRadius: 100,
    borderWidth:1,
  },
  nome:{
    textAlign:"center",
    color:"#48392E",
    fontFamily:"fonte2",
    fontSize:50,
    paddingTop:25,
  },
  textbutton:{
    fontFamily:"fonte1",
    fontSize:18,
    color:"#48392E",
  },
});
