import FM1 from "../../assets/images/ProjectsImages/FictionalMobileImages/FM1.png";
import FM2 from "../../assets/images/ProjectsImages/FictionalMobileImages/FM2.png";
import FM3 from "../../assets/images/ProjectsImages/FictionalMobileImages/FM3.png";
import FMLogo from "../../assets/images/ProjectsImages/FictionalMobileImages/FM.png";
import DS1 from "../../assets/images/ProjectsImages/AlmaDsImages/AlmaDesignSystem.png";
import DS2 from "../../assets/images/ProjectsImages/AlmaDsImages/AlmaDesignSystem1.png";
import DS3 from "../../assets/images/ProjectsImages/AlmaDsImages/AlmaDesignSystem2.png";
import DSLogo from "../../assets/images/ProjectsImages/AlmaDsImages/DS.png";
import TW1 from "../../assets/images/ProjectsImages/TwelveHours/Imagem1.png";
import TW2 from "../../assets/images/ProjectsImages/TwelveHours/Imagem2.png";
import TW3 from "../../assets/images/ProjectsImages/TwelveHours/Imagem3.png";
import TWLogo from "../../assets/images/ProjectsImages/TwelveHours/TwelveHours.png";

export const pagesContent = [
  {
    id: 1,
    pageTitle: "Técnica das 12 Horas",
    imageArray: [{ imageSrc: TW1 }, { imageSrc: TW2 }, { imageSrc: TW3 }],
    logo: TWLogo,
    pageDescription:
      "Você está desempregado e não está conseguindo uma re-colocação no mercado de trabalho? Isso ocorre por diversos motivos, deste a falta de organização de tempo, até a errada priorização das atividades, e para isso, a tecnica das 12 horas poderá te ajudar! \n\n Este é um projeto pessoal desenvolvido como uma plataforma para organização do seu tempo do dia a dia, a fim de evitar tempos ociosos ou mal administrados.",
    demoLink: "https://tecnica12horas.netlify.app/",
    gitHubLink: "https://github.com/Felipe-alv-es/TwelveHoursProject",
    figmaLink: "",
  },
  {
    id: 2,
    pageTitle: "Alma Design System",
    imageArray: [{ imageSrc: DS1 }, { imageSrc: DS2 }, { imageSrc: DS3 }],
    logo: DSLogo,
    pageDescription:
      "Robusto Design System amplamente adotado por diversas Equipes (Squads), visando a padronização de estilos, elementos e componentes em todo o ecossistema da empresa. O Design System resultante otimizou a eficiência do desenvolvimento, reduziu inconsistências visuais e acelerou a entrega de projetos. Além de estabelecer uma base solida para colaboração entre as Squads.",
    demoLink: "https://alma-react.dasa.com.br/",
    gitHubLink: "",
    figmaLink: "",
  },
  {
    id: 3,
    pageTitle: "Fictional Mobile",
    imageArray: [{ imageSrc: FM1 }, { imageSrc: FM2 }, { imageSrc: FM3 }],
    logo: FMLogo,
    pageDescription:
      "A loja de celulares Fictional Mobile é uma plataforma na qual os usuários podem explorar uma variedade de opções, selecionar e comprar os celulares de sua escolha. Além disso, é possível verificar especificações técnicas, ler avaliações de clientes e aproveitar outras opções disponíveis na loja.",
    demoLink: "https://fictionalmobile.netlify.app",
    gitHubLink: "https://github.com/Felipe-alv-es/smartphone-store",
    figmaLink:
      "https://www.figma.com/file/IckaEZtrblVM49Bn7rvVKi/Site-Portif%C3%B3lio?type=design&node-id=55-27&mode=design&t=q47AFgMoONL1wXYO-4",
  },
];
