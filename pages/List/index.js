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
`;

const BoxContainer = styled(ScrollView)`
  flex: 1;
  width: 100%;
  height: auto;
  background: #fff;
`;

const BoxTitle = styled(View)`
  width: 100%;
  height: 200;
`

const Banner = styled(Image)`
  width: 100%;
  height: 200;
`

const BannerBottom = styled(Image)`
  width: 100%;
  height: 300;
`

const TitleBanner = styled(Text)`
  font-size: 30;
  font-weight: 800;
  text-align: center;
  color: #fff;
  width: 100%;
  background: #d72629;
`

const Title = styled(Text)`
  margin-top: 60;
  font-size: 30;
  font-weight: 800;
  margin-bottom: 30;
  text-align: center;
`

const Textos = styled(Text)`
  width: 90%;
  font-size: 20;
  font-weight: 600;
  text-align: start;
  margin-bottom: 3;
  color: #000;
`

const TextosBlack = styled(Text)`
  width: 90%;
  font-size: 20;
  font-weight: 600;
  text-align: start;
  margin-bottom: 3;
  color: #fff;
  align-items: center;
  justify-content: center;
`

const Texto = styled(Text)`
  font-size: 18;
  font-weight: 800;
  width: 100%;
  text-align: center;
  color: #000;
`;

const BoxText = styled(View)`
  width: 100%;
  height: 42;
  background: #fff;
  borderBottomRightRadius: 38;
  borderTopLeftRadius: 6;
  borderTopLeftRadius: 38;
  align-items: center;
  justify-content: center;
  borderStyle: 'solid';
`

const Card = styled(TouchableOpacity)`
  width: 100%;
  height: 300;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 40;
  flex: 1;
  borderTopLeftRadius: 6;
  borderBottomRightRadius: 40;
  borderTopLeftRadius: 6;
  borderTopLeftRadius: 40;
  borderStyle: 'solid';
  borderWidth: 2;
  borderColor: #d72629;
  background: #d72629;
  position: relative;
  overflow: hidden;
`;

const BoxIcon = styled(View)`
  width: 50;
  height: 50;
  position: absolute;
  right: -2;
  top: -2;
  background: #fff;
  align-items: center;
  justify-content: center;
`

const Icon = styled(Image)`
  width: 70%;
  height: 80%;
`

const Logo = styled(Image)`
  width: 100%;
  height: 85%;
  borderTopLeftRadius: 6;
  borderTopLeftRadius: 39;
`

const BoxBlack = styled(View)`
  background: #000;
  width: 100%;
  padding-top: 30;
  padding-bottom: 30;
  align-items: center;
  justify-content: center;
`

const Imagem = styled(Image)`
  margin-top: 30;
  width: 100%;
  height: 500;
`

const ImagemLogo = styled(Image)`
  margin-top: 30;
  width: 100%;
  height: 150;
`

const List = ({ navigation }) => {
  const goToInfo = (item) => {
    navigation.navigate("Heroi", { item });
  };

  const Show = useRef(null);

  const Box = ({ item }) => {
    return (
      <Card key={item.index} onPress={() => goToInfo(item)} activeAnimationType='stop'>
        <Logo source={item.imagem} />
        <BoxIcon>
          <Icon
            source={{
              uri: 'https://www.freepnglogos.com/uploads/avengers-png-logo/avengers-logo-vector-png-logo-18.png',
            }}
          />
        </BoxIcon>
        <BoxText>
          <Texto>{item.nomeDeHeroi}</Texto>
        </BoxText>
      </Card>
    )
  }

  return (
    <BoxContainer>
      <Container>
        <BoxTitle>
          <Banner
            source={{
              uri: 'https://wallpapercave.com/wp/wp9012120.jpg',
            }}
          />
        </BoxTitle>
        <TitleBanner>OS VINGADORES </TitleBanner>
        <BoxBlack>
          <Carousel
            ref={Show}
            data={herois}
            renderItem={Box}
            sliderWidth={sliderWidth}
            itemWidth={250}
            sliderHeight={itemHeight}
            activeAnimationType='timing'
            layout='snack'
            autoplay={true}
            autoplayInterval={6000}
          />
        </BoxBlack>
        <Imagem
          source={{
            uri: 'https://giffiles.alphacoders.com/127/12717.gif',
          }}
        />
        <Title>Historia :</Title>
        <Textos>A Iniciativa Vingadores foi uma cria????o do diretor da S.H.I.E.L.D., Nick Fury. Ele primeiro se aproximou de Tony Stark com a ideia, ap??s a derrota de Tony de Obadiah Stane e seu subsequente an??ncio p??blico de que ele era o Homem de Ferro. Fury manteve seu olho em v??rios membros em potencial, enquanto Bruce Banner lutava com a vida como o Hulk, o Thor Asgardiano apareceu na Terra, e Steve Rogers, tamb??m conhecido como her??i da Segunda Guerra Mundial, Capit??o Am??rica, foi descoberto vivo d??cadas ap??s sua aparente morte. Enquanto isso, alguns dos membros mais habilidosos da S.H.I.E.L.D., Vi??va Negra (Natasha Romanoff) e Gavi??o Arqueiro (Clint Barton), estavam fazendo um nome para si mesmos e impressionando Fury.</Textos>
        <Textos></Textos>
        <Textos></Textos>
        <Textos></Textos>
        <Textos>Uma vez que o deus trapaceiro asgardiano Loki chegou ?? Terra e fugiu com o objeto massivamente poderoso conhecido como Tesseract - possuindo Gavi??o Arqueiro e transformando-o em seu pe??o com lavagem cerebral no processo - Fury achou necess??rio finalmente reunir sua potencial super equipe, chamando Romanoff, Banner, Rogers e Stark. O Capit??o Am??rica e o Homem de Ferro, auxiliados pela Vi??va Negra, conseguiram capturar Loki, mas durante o voo de volta para a S.H.I.E.L.D., Thor chegou, tentando trazer seu irm??o de volta a Asgard para enfrentar a justi??a. Uma luta se seguiu entre Thor e o Homem de Ferro, mas o Capit??o Am??rica a interrompeu, e o grupo retornou com seu prisioneiro, Loki, para o Helicarrier da S.H.I.E.L.D.</Textos>
        <ImagemLogo
          source={{
            uri: 'https://media.tenor.com/hBJEinQ_PAMAAAAC/avengers-funny.gif',
          }}
        />
        <BoxBlack>
          <TextosBlack>Enquanto Stark e Banner encontraram algum terreno comum atrav??s de seu amor pela ci??ncia, a equipe em potencial estava em desacordo enquanto discutiam seu pr??ximo curso de a????o, e os argumentos aumentaram ap??s a descoberta de que a S.H.I.E.L.D. estava usando o Tesseract para recriar armas perigosas da HYDRA.</TextosBlack>
          <Textos></Textos>
          <Textos></Textos>
          <Textos></Textos>
          <TextosBlack>Loki revelou que era seu plano ser capturado o tempo todo e acionou Banner para se transformar no Hulk. Enquanto se envolvia em uma luta com Thor, Hulk quase destruiu o Helicarrier, antes de cair na Terra. Escapando no caos, Loki ent??o ejetou Thor do Helicarrier em sua pr??pria cela fechada e recuperou seu cetro, matando Phil Coulson com ele. Vi??va Negra lutou contra o Gavi??o Arqueiro, que havia chegado para ajudar Loki, conseguindo trazer seu amigo de volta ao seu verdadeiro eu no processo. Loki continuou para Nova York, onde, com a ajuda do Dr. Erik Selvig, que sofreu lavagem cerebral, ele abriu um portal para o espa??o, desencadeando um devastador ex??rcito Chitauri.</TextosBlack>
          <Textos></Textos>
          <Textos></Textos>
          <Textos></Textos>
          <TextosBlack>Motivados pela tr??gica morte de Phil Coulson, Homem de Ferro, Vi??va Negra, Capit??o Am??rica e Gavi??o Arqueiro foram para Nova York para lutar contra Loki e suas for??as invasoras Chitauri, e logo se juntaram novamente a Thor e Hulk, com os seis her??is realmente se reunindo como os Vingadores pela primeira vez.</TextosBlack>
        </BoxBlack>
        <BannerBottom
          source={{
            uri: 'https://images.hdqwalls.com/wallpapers/marvel-legends-2021-4k-zx.jpg',
          }}
        />
      </Container>
    </BoxContainer>
  )
};

export default List;