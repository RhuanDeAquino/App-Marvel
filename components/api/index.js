import PanteraNegra from "../../assets/black-panther.webp";
import CapitaoAmerica from "../../assets/capitaoAmerica.webp";
import CapitaMarvel from "../../assets/capita.jpeg";
import DeadPool from "../../assets/deadpool.webp";
import DoutorS from "../../assets/doctor-strange.webp";
import Gaviao from "../../assets/gaviao.jpeg";
import Groot from "../../assets/groot.webp";
import Spider from "../../assets/homemaranhalogo.webp";
import Iron from "../../assets/homem-de-ferro.jpeg";
import Formiga from "../../assets/homem-formiga.webp";
import Nick from "../../assets/nick.png";
import Thor from "../../assets/thor.webp";
import Rocket from "../../assets/rocket.jpg";
import Vision from "../../assets/vision.webp";
import Viuva from "../../assets/viuva-negra.jpg";
import Wanda from "../../assets/wanda.jpeg";
import Quill from "../../assets/quill.jpg";
import Walkiria from "../../assets/walkiria.webp";
import Hulk from "../../assets/hulk.webp";
import Falcao from "../../assets/falcao-negro.jpg";


export const herois = [
  {
    nome: "Peter Parker",
    nomeDeHeroi: "Homem Aranha",
    idade: "18 anos",
    especie: "Terraquío",
    historia: "Antes de se tornar o Homem-Aranha, Peter Parker levava a vida de um adolescente comum. Criado pelos tios após ficar órfão quando ainda era um bebê, Peter passou a se interessar por tecnologia e ciência desde cedo. Por conta de sua timidez e inteligência, não demorou para ser alvo de bullying na escola.",
    imagem: Spider,
    estrelas: "★★★★★",
    frase: "Com grandes poderes vêm grandes responsabilidades",
  },
  {
    nome: "Steve Rogers",
    nomeDeHeroi: "Capitão America",
    idade: "105 anos",
    especie: "Terraquío",
    historia: "O Capitão América surgiu durante a Segunda Guerra Mundial, para combater nazistas, mas foi revivido na década de 60 e liderou os Vingadores. O Capitão América é a identidade heroica de Steve Rogers. Além disso, é considerado como o primeiro Vingador.",
    imagem: CapitaoAmerica,
    estrelas: "★★★★★",
    frase: "Vingadores!, avante!",
  },
  {
    nome: "Tony Stark",
    nomeDeHeroi: "Homem de Ferro",
    idade: "53 anos",
    especie: "Terraquío",
    historia: "Na versão original, durante a guerra do Vietnã, o inventor e empresário Tony Stark foi vítima de uma explosão de granada. Stark sobreviveu à explosão mas estilhaços do explosivo se alojaram próximo ao seu coração, ameaçando sua vida. Ele foi capturado e levado até o líder Wong Chu.",
    imagem: Iron,
    estrelas: "★★★★★",
    frase: "As vezes é preciso aprender a correr antes de começar a andar.",
  },
  {
    nome: "Thor",
    nomeDeHeroi: "Thor",
    idade: "1.500 anos",
    especie: "Aasgardiano",
    historia: "Thor é filho de Odin, o Pai de Todos e rei de Asgard. Ele era adorado pelos Terraquíos conhecidos como vikings e tornou-se parte da mitologia nórdica. Armado com seu martelo Uru encantado Mjolnir, que o ajuda a canalizar suas energias divinas, ele se tornou o guerreiro mais poderoso dos Dez Reinos.",
    imagem: Thor,
    estrelas: "★★★★",
    frase: "Um rei sábio nunca almeja guerra, mas deve estar sempre pronto para ela",
  },
  {
    nome: "Nicholas Joseph Fury",
    nomeDeHeroi: "Nick Fury",
    idade: "99 anos",
    especie: "Terraquío",
    historia: "Nicholas Joseph foi um ex-coronel que serviu no Exército dos Estados Unidos e um veterano de espionagem da CIA durante a Guerra Fria. Fury continuou servindo ao mundo quando juntou-se a S.H.I.E.L.D., uma organização internacional secreta de manutenção da paz que opera como a primeira linha de defesa da humanidade contra os inimigos mais perigosos da Terra, até ser promovido ao posto de diretor. A partir desta posição, Fury redirecionou seus esforços para organizar a Iniciativa Vingadores, com a intenção de reunir indivíduos superpoderosos que pudessem proteger o mundo de qualquer ameaça. Apesar de uma relutância considerável dos membros do Conselho de Segurança Mundial, Fury deu continuidade aos seus esforços e conseguiu recrutar o Homem de Ferro e o Capitão América para a iniciativa.",
    imagem: Nick,
    nickFury: "★★★★",
    frase: "Ver se eles poderiam trabalhar juntos quando precisássemos que lutassem em batalhas que nunca poderíamos",
  },
  {
    nome: "T'Challa",
    nomeDeHeroi: "Pantera Negra",
    idade: "43 anos",
    especie: "Terraquío",
    historia: "T'Challa foi o próximo na linha de sucessão para ser o rei de Wakanda e o Pantera Negra, mas até que ele estivesse pronto para se tornar o líder da nação, seu tio S'yan, irmão mais novo de T'Chaka, passou com sucesso nas provas para se tornar o novo Pantera Negra.",
    imagem: PanteraNegra,
    estrelas: "★★★★★",
    frase: "Em tempos de crise, os sábios constroem pontes, enquanto os tolos constroem muros",
  },
  {
    nome: "Natasha Alianovna Romanova",
    nomeDeHeroi: "Viúva Negra",
    idade: "32 anos",
    especie: "Terraquío",
    historia: "Antes de adotar o nome 'americanizado' Natasha Romanoff, a espiã que nós conhecemos como Viúva Negra era Natalia Alianovna Romanova, uma mulher treinada, desde jovem, pela Sala Vermelha, uma organização com laços com a KGB, que treinava jovens mulheres para se tornarem assassinas e espiãs letais para servir ao governo",
    imagem: Viuva,
    estrelas: "★★★★★",
    frase: "Sempre achei melhor não investigar o passado.",
  },
  {
    nome: "Wanda Maximoff",
    nomeDeHeroi: "Feiticeira Escarlate",
    idade: "37 anos",
    especie: "Humana",
    historia: "Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos do casal de ciganos, Django e Marya Maximoff.",
    imagem: Wanda,
    estrelas: "★★★★★",
    frase: "Em um verdadeiro ato mágico, tudo é falso.",
  },
  {
    nome: "Scott Lang",
    nomeDeHeroi: "Homem Formiga",
    idade: "30 anos",
    especie: "Terraquío",
    historia: "Dr. Hank Pym transforma um talentoso ladrão no herói Homem-Formiga. Ele quer impedir que seu antigo pupilo consiga replicar a fórmula da roupa que dá o poder do encolhimento, força sobre-humana e a capacidade de controlar um exército de formigas.",
    imagem: Formiga,
    estrelas: "★★★",
    frase: "Eu faço algumas coisas idiotas e as pessoas que eu mais amo pagam o preço.",
  },
  {
    nome: "Clint Barton",
    nomeDeHeroi: "Gavião Arqueiro",
    idade: "51 anos",
    especie: "Terraquío",
    historia: "niciou sua carreira como vilão do Homem de Ferro e nessa época se envolveu com a Viúva Negra, mas o relacionamento fracassou. Posteriormente se regenerou e entrou para os Vingadores, na mesma época em que o fizeram Mercúrio e a Feiticeira Escarlate. O líder era o Capitão América.",
    imagem: Gaviao,
    estrelas: "★★★",
    frase: "Eu acho que um interesse em comum é um terreno muito fértil pra afinidade.",
  },
  {
    nome: "Rocket Raccoon",
    nomeDeHeroi: "Rocket",
    idade: "?",
    especie: "Guaxinim Geneticamente Modificado",
    historia: "A origem estabelecida historicamente do Rocket é que ele era um guaxinim normal e morava em uma espécie de asilo galáctico que era usado para tratar pacientes com problemas mentais no espaço. Ele, e outros animais, eram acompanhantes das pessoas que recebiam tratamento, eram usados como parte da terapia",
    imagem: Rocket,
    estrelas: "★★★★",
    frase: "Não posso prometer que não vou matar vocês quando isto acabar",
  },
  {
    nome: "Carol Danvers",
    nomeDeHeroi: "Capitã Marvel",
    idade: "30 anos",
    especie: "Terraquío/Kree",
    historia: "Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls. Ao tentar impedir uma invasão de larga escala na Terra, em 1995, ela tem memórias recorrentes de uma outra vida, como Carol Danvers, agente da Força Aérea norte-americana. Com a ajuda de Nick Fury, Capitã Marvel precisa descobrir os segredos de seu passado e pôr um fim ao conflito intergalático com os Skrulls.",
    imagem: CapitaMarvel,
    estrelas: "★★★★★",
    frase: "Eu vejo flashes, alguns momentos, mas não sei dizer o que é real.",
  },
  {
    nome: "Peter Quill",
    nomeDeHeroi: "Senhor das Estrelas",
    idade: "38 anos",
    especie: "Yondu",
    historia: "Peter Quill foi concebido como resultado do amor entre a terráquea Meredith Quill e o Imperador Spartoi da época, J'son. J'son deixou a Terra logo após a concepção de Peter, a fim de continuar sua guerra intergaláctica, deixando Meredith na Terra para protegê-la.",
    imagem: Quill,
    estrelas: "★★",
    frase: "Existem dois tipos de seres no universo: aqueles que dançam, e aqueles que não dançam.",
  },

  {
    nome: "Grott",
    nomeDeHeroi: "Grott",
    idade: "?",
    especie: "Flora Colossus",
    historia: "Groot era o último integrante dos Colossos Florais e foi aprisionado pelos Kree no planeta Hala. Foi nesse aprisionamento onde ele começou sua amizade com Rocket Racoon e a partir daí é designado para uma equipe de operações secretas liderada pelo Senhor das Estrelas, sim “Os Guardiões da Galáxia”.",
    imagem: Groot,
    estrelas: "★★★★",
    frase: "Eu sou Groot",
  },
  {
    nome: "Bruce Benner",
    nomeDeHeroi: "Hulk",
    idade: "54 anos",
    especie: "Terraquío",
    historia: "o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar de uma bomba por ele desenvolvida.",
    imagem: Hulk,
    estrelas: "★★★★★",
    frase: "Viagem no tempo!",
  },
  {
    nome: "Steve Strange",
    nomeDeHeroi: "Dr.Estranho",
    idade: "50 anos",
    especie: "Terraquío",
    historia: "ascido em 1930, Strange era um neurocirurgião incrível e, por isso, também era extremamente arrogante. No auge de sua carreira, ele sofre um acidente de carro e acabou danificando os nervos das mãos. Stephen buscou diversas formas, e fez várias cirurgias, para recuperar o movimento completo das mãos.",
    imagem: DoutorS,
    estrelas: "★★★★★",
    frase: "Olhem além do mundo a sua frente.",
  },
  {
    nome: "Visão",
    nomeDeHeroi: "Visão",
    idade: "20 anos",
    especie: "inteligência artificial J.A.R.V.I.S.",
    historia: "isão é criado depois que Tony Stark e Bruce Banner carregam a inteligência artificial J.A.R.V.I.S. em um corpo sintético, que foi criado por Ultron como um upgrade de corpo para si mesmo, movido pela Joia da Mente.",
    imagem: Vision,
    estrelas: "★★★★",
    frase: "Algo não é belo somente porque dura",
  },
  {
    nome: "Brunnhilde",
    nomeDeHeroi: "walkiria",
    idade: "mais de 1.500 anos",
    especie: "Aasgardiana",
    historia: "Uma Aasgardiana de nascimento, Valquíria, também conhecida por seu nome real, Brunnhilde, foi selecionada por Odin para liderar o Valkyrior e hoje ela é a líder de Asgard nomeda pelo Thor.",
    imagem: Walkiria,
    estrelas: "★★★★★",
    frase: "Tô contigo",
  },
  {
    nome: "Wade Wilson",
    nomeDeHeroi: "Deadpool",
    idade: "30 anos",
    especie: "Terraquío",
    historia: "Deadpool, cujo nome verdadeiro é Wade Winston Wilson, é um mercenário canadense marcado por ser falastrão, violento e principalmente por ser comediante e a partir ficou conhecido como o 'mercenário tagarela'. Tem também o fator de cura que o faz sobreviver aos piores ferimentos.",
    imagem: DeadPool,
    estrelas: "♥ ♥ ♥ ♥ ♥",
    frase: "Não para de estudar não criança, ou para... Eu parei e virei x-man",
  },
  {
    nome: "Sam Wilson",
    nomeDeHeroi: "Falcão Negro",
    idade: "53 anos",
    especie: "Terraquío",
    historia: "Quando Steve Rogers pediu ajuda ao veterano da Força Aérea Sam Wilson, Wilson imediatamente concordou. Ele vestiu o traje de voo que ele usou em combate para se tornar o Falcão, colocando-o em um caminho para se tornar um Vingador e, eventualmente, o Capitão América.",
    imagem: Falcao,
    estrelas: "★★★★",
    frase: "A esquerda",
  },
]