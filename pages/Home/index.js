import React from 'react'
import { Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

const Container = styled(View)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: blue;
`;

const BoxTitle = styled(View)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled(Image)`
  width: 250;
  height: 150;
`
const Botao = styled(TouchableOpacity)`
  width: 300;
  height: 50;
  backgroundColor: #fff;
  orderTopLeftRadius: 6;
  borderBottomRightRadius: 40;
  borderTopLeftRadius: 6;
  borderTopLeftRadius: 40;
  align-items: center;
  justify-content: center;
`

const TexoBotao = styled(Text)`
  font-size: 20;
  font-weight: 600;
`;

const Texto = styled(Text)`
  font-size: 12;
  font-weight: 600;
  margin-bottom: 50;
  color: #fff;
  marginTop: 30;
  text-align: center;
`;

const TextoEnter = styled(Text)`
  font-size: 12;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin-bottom: 20;
`;

const Home = ({ navigation }) => {
  const goToAvengers0 = () => {
    navigation.navigate("Avengers");
  };

  return (
    <Container>
      <SafeAreaView>
        <BoxTitle>
          <StatusBar translucent barStyle="black" backgroundColor="transparent" />
          <Logo
            source={{
              uri: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DACCECF30623B6B75929F7D3532B1133AD7F6192F3EC128C393E0F6EF6F165DD/scale?width=1200&aspectRatio=2.00&format=png',
            }}
          />
        </BoxTitle>
        <TextoEnter>Click aqui para saber mais:</TextoEnter>
        <Botao
          onPress={goToAvengers0}
        >
          <TexoBotao>Entrar</TexoBotao>
        </Botao>
        <Texto>feito por Rhuan</Texto>
      </SafeAreaView>
    </Container>
  )
};

export default Home;