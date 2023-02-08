import { useRoute } from '@react-navigation/native';
import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components';

import AvengersImg from "../../assets/avengers logo.png"

const Container = styled(View)`
  flex: 1;
  overflow: scroll;
  align-items: center;
  paddingBottom: 20;
`;

const BoxContainer = styled(ScrollView)`
  width: 100%;
  height: auto;
  background: #000;
`;

const TitleName = styled(Text)`
  font-size: 30px;
  width: 90%
  line-height: 26px;
  font-weight: 900;
  text-align: center;
  paddingBottom: 20;
  paddingTop: 20;
  color: #fff;

`;

const Texto = styled(Text)`
  font-size: 20px;
  width: 90%;
  line-height: 26px;
  color: #fff;
  font-weight: 600;
`;

const FraseTexto = styled(Text)`
  font-size: 20px;
  line-height: 26px;
  color: #fff;
  font-weight: 200;
  margin-bottom: 20;
  padding-left: 20;
  padding-right: 20;
`;

const Imagem = styled(Image)`
  width: 100%;
  height: 220;
  padding-bottom: 10;
`

const LogoVingadores = styled(Image)`
   width: 20px;
  height: 20px;
  display: flex;
  position: absolute;
`
const BoxLogo = styled(View)`
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`

const Estrelas = styled(Text)`
  color: #ecde9d;
  font-weight: 600;
  position: absolute;
  right: 0;
  top: 30;
  font-size: 14;
`;

const TextoHistoria = styled(Text)`
  marginTop: 30;
  font-size: 20px;
  width: 90%;
  line-height: 26px;
  color: #fff;
  font-weight: 600;
`

const InfoCards = () => {
  const route = useRoute();
  const { item } = route.params;

  console.log(item);
  return (
    <BoxContainer>
      <Container>
        <Imagem source={item.imagem} />
        <BoxLogo>
          <TitleName>{item.nomeDeHeroi}</TitleName>
          <Estrelas>{item.estrelas}</Estrelas>
          <FraseTexto>"{item.frase}"</FraseTexto>
        </BoxLogo>
        <Texto>Nome: {item.nome}</Texto>
        <Texto>idade: {item.idade}</Texto>
        <Texto>Especie: {item.especie}</Texto>
        <TextoHistoria>{item.historia}</TextoHistoria>
        <LogoVingadores source={AvengersImg} alt="aqui" />
      </Container>
    </BoxContainer>
  )
};

export default InfoCards;