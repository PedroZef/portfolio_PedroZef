import type { Certification } from '../types'

const BASE = 'https://github.com/PedroZef/PedroZef/blob/main/certificados'

export const certifications: Certification[] = [
    { id: 'alura-conclusao', title: 'Conclusão Geral do Programa ONE', file: `${BASE}/certificado-conclusao-programa-alura.pdf`, institution: 'alura' },
    { id: 'alura-front-end', title: 'Formação Front End T5', file: `${BASE}/formacao-front-end-one-alura.pdf`, institution: 'alura' },
    { id: 'alura-react', title: 'Formação React T5', file: `${BASE}/formacao-react-one-alura.pdf`, institution: 'alura' },
    { id: 'alura-iniciante', title: 'Formação Iniciante em Programação T5', file: `${BASE}/formacao-iniciante-programacao-one-alura.pdf`, institution: 'alura' },
    { id: 'alura-pessoal', title: 'Formação Desenvolvimento Pessoal T5', file: `${BASE}/formacao-desenvolvimento-pessoal-one-alura.pdf`, institution: 'alura' },
    { id: 'alura-agility', title: 'Formação Business Agility T5', file: `${BASE}/formacao-business-agility-one-alura.pdf`, institution: 'alura' },
    { id: 'alura-empreendedorismo', title: 'Formação Empreendedorismo T5', file: `${BASE}/formacao-empreendedorismo-one-alura.pdf`, institution: 'alura' },
    { id: 'dio-banco-digital', title: 'Criando um Banco Digital Java e Orientação a Objetos', file: `${BASE}/criando-banco-digital-java.jpg`, institution: 'dio' },
    { id: 'dio-spring-data', title: 'Spring Data JPA com JAVA', file: `${BASE}/spring-data-jpa-java.jpg`, institution: 'dio' },
    { id: 'dio-react-covid', title: 'App Web Application React Covid19', file: `${BASE}/app-web-react-covid19.jpg`, institution: 'dio' },
    { id: 'dio-github', title: 'Certificado App GitHub', file: `${BASE}/certificado-app-github.jpeg`, institution: 'dio' },
    { id: 'dio-gft-java', title: 'GFT Start #3 Java', file: `${BASE}/gft-start-3-java.jpg`, institution: 'dio' },
    { id: 'dio-gft-net', title: 'GFT Start #3 .NET', file: `${BASE}/gft-start-3-net.jfif`, institution: 'dio' },
    { id: 'dio-localizalabs', title: 'LocalizaLabs .Net Developer #2', file: `${BASE}/localizalabs-net-developer-2.jpg`, institution: 'dio' },
    { id: 'dio-spread', title: 'Spread Java Developer', file: `${BASE}/spread-java-developer.jpg`, institution: 'dio' },
    { id: 'dio-impulso', title: 'Impulso Fullstack Web Developer', file: `${BASE}/impulso-fullstack-web-developer.jpg`, institution: 'dio' },
    { id: 'dio-take-blip', title: 'Take Blip Web Developer', file: `${BASE}/take-blip-web-developer.jpg`, institution: 'dio' },
    { id: 'dio-eduzz', title: 'Eduzz Fullstack Developer #3', file: `${BASE}/eduzz-fullstack-developer-3.jpg`, institution: 'dio' },
    { id: 'dio-sportheca', title: 'Sportheca Mobile Developer', file: `${BASE}/sportheca-mobile-developer.jpg`, institution: 'dio' },
    { id: 'dio-naves', title: 'Primeiro jogo de Naves', file: `${BASE}/primeiro-jogo-naves.jpg`, institution: 'dio' },
    { id: 'dio-repositorio', title: 'Primeiro Repositório no GITHUB', file: `${BASE}/primeiro-repositorio-github.jpg`, institution: 'dio' },
]
