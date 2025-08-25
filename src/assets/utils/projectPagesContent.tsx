import DS1 from "../../assets/images/ProjectsImages/AlmaDsImages/AlmaDesignSystem.png";
import DS2 from "../../assets/images/ProjectsImages/AlmaDsImages/AlmaDesignSystem1.png";
import DS3 from "../../assets/images/ProjectsImages/AlmaDsImages/AlmaDesignSystem2.png";
import DSLogo from "../../assets/images/ProjectsImages/AlmaDsImages/DS.png";
import FC1 from "../../assets/images/ProjectsImages/LandingPageImages/FelitCourses.png";
import FC2 from "../../assets/images/ProjectsImages/LandingPageImages/FC2.png";
import FC3 from "../../assets/images/ProjectsImages/LandingPageImages/FC3.png";
import FC4 from "../../assets/images/ProjectsImages/LandingPageImages/FC4.png";
import FCLogo from "../../assets/images/ProjectsImages/LandingPageImages/LogoSM.png";
import EALogo from "../../assets/images/ProjectsImages/EncantoArtesanal/LojaLogo.png";
import Encanto1 from "../../assets/images/ProjectsImages/EncantoArtesanal/Encanto1.png";
import Page1 from "../../assets/images/ProjectsImages/EncantoArtesanal/Page1.png";
import Page2 from "../../assets/images/ProjectsImages/EncantoArtesanal/Page2.png";
import Page3 from "../../assets/images/ProjectsImages/EncantoArtesanal/Page3.png";
import Page4 from "../../assets/images/ProjectsImages/EncantoArtesanal/Page4.png";
import DeD1 from "../../assets/images/ProjectsImages/DrinkEDesgraça/1.png";
import DeD2 from "../../assets/images/ProjectsImages/DrinkEDesgraça/2.png";
import DeD3 from "../../assets/images/ProjectsImages/DrinkEDesgraça/3.png";
import DeD4 from "../../assets/images/ProjectsImages/DrinkEDesgraça/4.png";
import DeDLogo from "../../assets/images/ProjectsImages/DrinkEDesgraça/Logo.png";

export const pagesContent = [
  {
    pageTitle: "Drink & Descraça",
    imageArray: [
      { imageSrc: DeD1 },
      { imageSrc: DeD2 },
      { imageSrc: DeD3 },
      { imageSrc: DeD4 },
    ],
    logo: DeDLogo,
    pageDescription:
      "Bem-vindo ao Drink & Desgraça, o jogo que vai transformar qualquer encontro em uma verdadeira montanha-russa de risadas, desafios e, claro, alguns goles a mais! aqui você encontra uma mistura insana de prendas, desafios e missões malucas que vão testar sua coragem, criatividade e resistência etílica.",
    demoLink: "",
    gitHubLink: "https://github.com/Felipe-alv-es/drink-game-app",
    figmaLink: "",
  },
  {
    pageTitle: "Encanto Artesanal",
    imageArray: [
      { imageSrc: Encanto1 },
      { imageSrc: Page1 },
      { imageSrc: Page2 },
      { imageSrc: Page3 },
      { imageSrc: Page4 },
    ],
    logo: EALogo,
    pageDescription:
      "Site dedicado à venda de produtos artesanais feitos com cuidado e dedicação. Aqui você encontra velas exclusivas, sabonetes decorativos e itens de resina únicos, todos produzidos de forma manual, com atenção aos detalhes e muito carinho. Cada peça carrega autenticidade, tornando-se perfeita para presentear ou transformar o seu ambiente com beleza e aconchego.",
    demoLink: "https://encantoartesanal.com.br/",
    gitHubLink: "https://github.com/Felipe-alv-es/encanto_artesanal",
    figmaLink: "",
  },
  {
    pageTitle: "Cursos de TI",
    imageArray: [
      { imageSrc: FC1 },
      { imageSrc: FC2 },
      { imageSrc: FC3 },
      { imageSrc: FC4 },
    ],
    logo: FCLogo,
    pageDescription:
      "Você está desempregado e não está conseguindo uma re-colocação no mercado de trabalho? Isso ocorre por diversos motivos, deste a falta de organização de tempo, até a errada priorização das atividades, e para isso, a tecnica das 12 horas poderá te ajudar! \n\n Este é um projeto pessoal desenvolvido como uma plataforma para organização do seu tempo do dia a dia, a fim de evitar tempos ociosos ou mal administrados.",
    demoLink: "https://felitcourses.netlify.app/",
    gitHubLink: "https://github.com/Felipe-alv-es/LandingPage",
    figmaLink: "",
  },
  {
    pageTitle: "Alma Design System",
    imageArray: [{ imageSrc: DS1 }, { imageSrc: DS2 }, { imageSrc: DS3 }],
    logo: DSLogo,
    pageDescription:
      "Robusto Design System amplamente adotado por diversas Equipes (Squads), visando a padronização de estilos, elementos e componentes em todo o ecossistema da empresa. O Design System resultante otimizou a eficiência do desenvolvimento, reduziu inconsistências visuais e acelerou a entrega de projetos. Além de estabelecer uma base solida para colaboração entre as Squads.",
    demoLink: "https://alma-react.dasa.com.br/",
    gitHubLink: "",
    figmaLink: "",
  },
];
