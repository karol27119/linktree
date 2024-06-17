import { Image, StyleSheet, Platform, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    'fonte1': require('../../assets/fonts/BebasNeue-Regular.otf'),
    'fonte2': require('../../assets/fonts/Elegante.ttf'),  });
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F0F1F0', dark: '#F0F1F0' }}
      headerImage={
        <Image
          source={require('@/assets/images/inicio.png')}
          style={styles.reactLogo}
        />
      }>
        <LinearGradient 
        colors={['#FFFFFF','#FFFFFF']}
        style={styles.background}
        end={{x: 0.6 , y: 1.5}}
        />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.text}>Bem Vindo <Text><HelloWave/></Text></ThemedText>
      </ThemedView>
      <ThemedText style={styles.texto}>Olá! Seja muito bem-vindo ao meu Linkthree. 
      Aqui você encontrará todas as informações sobre mim e os 
      meios de contato que você precisa. Navegue pelos links e 
      descubra mais sobre meus projetos, redes sociais, e muito mais.
      Fique à vontade para explorar e entrar em contato! 🚀✨</ThemedText>
      <ThemedText style={styles.sub}>
        Se Precisar de algo estou a disposição
      </ThemedText>
      <ThemedText style={styles.sub}>
      Aproveite a visita!
      </ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    gap: 8,
    backgroundColor: "transparent",
    justifyContent:"center",
    textAlign:"center",
  },
  text:{
    color:"#764520",
    fontFamily:"fonte2",
    fontSize:70,
    paddingTop:50,
    textAlign:"center",
    alignItems:"center",
    alignSelf:"center",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height:"100%",
    width:"100%",
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  background:{
    position:"absolute",
    left:0,
    right:0,
    top:0,
    height:600,
  },
  texto:{
    color:"#764520",
    textAlign:"justify",
    fontSize:15,
  }, 
  sub:{
    color:"#764520",
    fontFamily:"fonte1",
    fontSize:20,
  }
});
