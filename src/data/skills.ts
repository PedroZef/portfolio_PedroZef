import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
    {
        id: 'ai',
        title: 'IA & Inovação',
        emoji: '🤖',
        skills: [
            { name: 'Google Gemini', level: 85, badge: 'https://img.shields.io/badge/Google%20Gemini-8E75B2?style=flat-square&logo=googlegemini&logoColor=white' },
            { name: 'OpenAI', level: 80, badge: 'https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white' },
            { name: 'Spring AI', level: 75, badge: 'https://img.shields.io/badge/Spring%20AI-6DB33F?style=flat-square&logo=spring&logoColor=white' },
            { name: 'IA Generativa & LLMs', level: 80, badge: 'https://img.shields.io/badge/IA%20Generativa%20%26%20LLMs-FF6F00?style=flat-square&logo=target&logoColor=white' },
            { name: 'Prompt Engineering', level: 85, badge: 'https://img.shields.io/badge/Prompt%20Engineering-00599C?style=flat-square&logo=codeforces&logoColor=white' },
        ],
    },
    {
        id: 'frontend',
        title: 'Front-End & Mobile',
        emoji: '💻',
        skills: [
            { name: 'HTML5', level: 90, badge: 'https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white' },
            { name: 'CSS3', level: 85, badge: 'https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white' },
            { name: 'JavaScript', level: 80, badge: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black' },
            { name: 'TypeScript', level: 75, badge: 'https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white' },
            { name: 'React.js', level: 75, badge: 'https://img.shields.io/badge/React.js-61DAFB?style=flat-square&logo=react&logoColor=black' },
            { name: 'Angular', level: 60, badge: 'https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white' },
        ],
    },
    {
        id: 'backend',
        title: 'Back-End & Bancos de Dados',
        emoji: '⚙️',
        skills: [
            { name: 'Java', level: 75, badge: 'https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white' },
            { name: 'Spring Boot', level: 70, badge: 'https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white' },
            { name: 'Python', level: 70, badge: 'https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white' },
            { name: 'Node.js', level: 70, badge: 'https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white' },
            { name: '.NET', level: 60, badge: 'https://img.shields.io/badge/.NET-512BD4?style=flat-square&logo=dotnet&logoColor=white' },
            { name: 'PostgreSQL', level: 65, badge: 'https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white' },
            { name: 'MySQL', level: 65, badge: 'https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white' },
        ],
    },
    {
        id: 'cloud',
        title: 'Cloud, DevOps & Ferramentas',
        emoji: '☁️',
        skills: [
            { name: 'Git', level: 85, badge: 'https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white' },
            { name: 'GitHub', level: 85, badge: 'https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white' },
            { name: 'Docker', level: 65, badge: 'https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white' },
            { name: 'AWS', level: 60, badge: 'https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonwebservices&logoColor=white' },
            { name: 'Kubernetes', level: 50, badge: 'https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white' },
            { name: 'Linux', level: 65, badge: 'https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black' },
        ],
    },
]
