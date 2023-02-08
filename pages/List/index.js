import React, { useRef } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components';
import { herois } from '../../components/api';

import Carousel from 'react-native-snap-carousel';

const sliderWidth = Dimensions.get('window').width;
const itemHeight = Dimensions.get('window').height;

const Container = styled(View)`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  paddingBottom: 20;
  paddingTop: 10;
  paddingLeft: 5;
  paddingRight: 5;
`;

const BoxContainer = styled(ScrollView)`
  flex: 1;
  width: 100%;
  height: auto;
  background: #fff;
`;

const Title = styled(Text)`
  margin-top: 60;
  font-size: 20;
  font-weight: 800;
  margin-bottom: 30;
  text-align: center;
  width: 90%;
`

const Textos = styled(Text)`
  width: 90%;
  font-size: 20;
  font-weight: 600;
  text-align: start;
  margin-bottom: 3;
`

const Texto = styled(Text)`
  font-size: 20;
  font-weight: 800;
  color: #fff;
  position: absolute;
  width: 100%;
  paddingTop: 10;
  paddingBottom: 10;
  background: red;
  bottom: 10;
  border: 3px solid #fff;
  padding-left: 30;
  left: -20;
`;

const Card = styled(TouchableOpacity)`
  width: 100%;
  height: 500;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-bottom: 40;
  flex: 1;
  overflow: hidden;

  opacity: 1;
`;

const Logo = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`

const Imagem = styled(Image)`
  margin-top: 30;
  width: 100%;
  margin-bottom: 30;
  height: 500;
`

const List = ({ navigation }) => {
  const goToInfo = (item) => {
    console.log(item, "aqui")
    navigation.navigate("Heroi", { item });
  };

  const Show = useRef(null);

  const Box = ({ item }) => {
    console.log(item, "aqui")
    return (
      <Card key={item.index} onPress={() => goToInfo(item)} activeAnimationType='stop'>
        <Logo source={item.imagem} />
        <Texto>{item.nomeDeHeroi}</Texto>
      </Card>
    )
  }

  return (
    <BoxContainer>
      <Container>
        <Title>ACESSE OS DADOS DOS VINGADORES: </Title>
        <Carousel
          ref={Show}
          data={herois}
          renderItem={Box}
          sliderWidth={sliderWidth}
          itemWidth={350}
          sliderHeight={itemHeight}
          activeAnimationType='timing'
          layout='tinder'
        />
        <Textos>Cinco anos atrás, nós perdemos.</Textos>
        <Textos>Todos nós</Textos>
        <Textos>Perdemos amigos, perdemos família, perdemos uma parte nossa</Textos>
        <Textos>hoje temos a chance de ter tudo de volta</Textos>
        <Textos>Conhecem sua equipe, conhecem sua missão</Textos>
        <Textos>Peguem as joias, tragam elas de volta</Textos>
        <Textos>Uma viagem pra cada um, não pode errar! Só uma chance.</Textos>
        <Textos>Muitos de nós estão indo pro lugar que conhecem, isso não quer dizer que sabemos o que esperar.</Textos>
        <Textos>Tomem cuidado!</Textos>
        <Textos>Cuidem uns dos outros</Textos>
        <Textos>Essa é a luta das nossas vidas</Textos>
        <Textos>Vamos vencer</Textos>
        <Textos>Custe o que custar</Textos>
        <Textos>Boa sorte</Textos>
        <Textos>VINGADORES !!! AVANTE...</Textos>

        <Imagem
          source={{
            uri: 'https://giffiles.alphacoders.com/127/12717.gif',
          }}
        />
        <Textos>Nem uma missão é pequena de mais para os Avengers</Textos>
      </Container>
    </BoxContainer>
  )
};

export default List;