import {
  Code,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Puzzle,
  Unplug,
} from 'lucide-react';
import Image from 'next/image';

import Link from 'next/link';
import { ReactNode } from 'react';

type ProfessionalExperience = {
  start: string;
  end?: string;
  company: string;
  position: string;
  description: string | ReactNode;
};

type Project = {
  banner: string;
  title: string;
  description: string;
  seeMoreUrl?: string;
};

export default function Home() {
  const professionalExperience: ProfessionalExperience[] = [
    {
      start: '11/2023',
      company: 'Agência F2F',
      position: 'Desenvolvedora Fullstack',
      description: 'Atuando como desenvolvedora Full Stack no projeto Gaspers.',
    },
    {
      start: '10/2023',
      end: '11/2023',
      company: 'Freelancer',
      position: 'Desenvovedora Fullstack',
      description:
        'Desenvolvimento de módulos da API e parte do dashboard para uma plataforma de pesquisa de mestrado, com integração de dados e automação de processos.',
    },
    {
      start: '10/2022',
      end: '06/2023',
      company: 'Tremdy Soluções',
      position: 'Desenvolvedora Fullstack',
      description:
        'Responsável pelo desenvolvimento de uma plataforma ERP, automatizando fluxos de trabalho e digitalizando processos manuais. Também desenvolvi um aplicativo mobile para uso offline.',
    },
    {
      start: '08/2022',
      end: '10/2022',
      company: 'Luby Software',
      position: 'Desenvolvedora Frontend',
      description:
        'Manutenção e melhoria de uma plataforma de ensino interna, com foco na usabilidade e no acompanhamento de alunos. Também participei do desenvolvimento de um aplicativo mobile para facilitar a interação dos alunos.',
    },
  ];

  const projects: Project[] = [
    {
      banner: '/assets/gaspers-banner.png',
      title: 'Gaspers AI',
      description:
        'Atualmente faço parte do time de desenvolvimento do projeto Gaspers.ai da Agência F2F. É uma plataforma de assistência de conteúdo movida por IA, projetada para otimizar estratégias de marketing, vendas e atendimento ao cliente.',
      seeMoreUrl: 'https://www.gaspers.ai/',
    },
    {
      banner: '/assets/tapnotes-banner.png',
      title: 'TapNotes',
      description:
        'O TapNotes é um editor de texto online focado em simplicidade e agilidade. Ele permite salvar notas localmente no navegador, funcionando como um bloco de notas rápido, similar ao editor de texto nativo do computador mas com suporte a Markdown e outras formatações avançadas.',
      seeMoreUrl: 'https://tapnotes-ruby.vercel.app/',
    },
    {
      banner: '/assets/my-portfolio-banner.png',
      title: 'Meu Site Portfólio',
      description: 'Este site!',
      seeMoreUrl: '/',
    },
  ];

  return (
    <div className="bg-zinc-900 min-h-[100vh] text-zinc-100 scroll-smooth">
      <header className="flex items-center px-4 md:px-8 py-4">
        <div className="inline-flex gap-2 items-center">
          <Code size={24} strokeWidth={2.4} />
          <h1 className="font-bold text-lg">Jaiane Oliveira</h1>
        </div>
      </header>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start px-8 py-4 md:py-16 lg:py-[20vh] lg:px-[10vw] ">
        <div>
          <h2 className="font-bold text-4xl leading-loose drop-shadow-lg">
            Hi, I&apos;m Jaiane
          </h2>
          <p className="text-lg font-light text-zinc-200">
            <strong className="font-medium">Desenvolvedora Full-Stack</strong>{' '}
            especializada em{' '}
            <strong className="font-medium">
              criar soluções modernas e escaláveis
            </strong>
            . Com experiência em{' '}
            <strong className="font-medium">React, Next.js e Node.js</strong>,
            atuo no desenvolvimento de
            <strong className="font-medium">frontends responsivos</strong>,
            automação de processos e integração de APIs para entregar projetos
            eficientes e inovadores.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <Link
              href={'#projects'}
              className="font-semibold inline-flex items-center justify-center text-center px-4 py-2 bg-zinc-200 border border-zinc-200 rounded-md shadow-md text-zinc-800 hover:bg-zinc-300 hover:brightness-125 transition-all duration-300"
            >
              Ver projetos
            </Link>
            <Link
              href={'#contact'}
              className="font-semibold inline-flex items-center justify-center text-center px-4 py-2 rounded-md border border-zinc-200 hover:bg-zinc-800/50 hover:brightness-125 transition-all duration-300"
            >
              Entre em contato
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center text-center justify-center bg-zinc-800 shadow-sm rounded-lg p-4">
            <Code />
            <h4 className="text-lg font-semibold mt-2">FullStack</h4>
            <p className="text-sm font-light">
              Especialista em soluções completas, do backend ao frontend,
              garantindo performance e escalabilidade.
            </p>
          </div>
          <div className="flex flex-col items-center text-center justify-center bg-zinc-800 shadow-sm rounded-lg p-4">
            <Puzzle />
            <h4 className="text-lg font-semibold mt-2">
              Automação de Processos
            </h4>
            <p className="text-sm font-light">
              Transformo processos manuais em fluxos automatizados, otimizando o
              tempo e a produtividade.
            </p>
          </div>
          <div className="flex flex-col items-center text-center justify-center bg-zinc-800 shadow-sm rounded-lg p-4">
            <Layers3 />
            <h4 className="text-lg font-semibold mt-2">
              Frontends Responsivos
            </h4>
            <p className="text-sm font-light">
              Criação de interfaces adaptadas a diferentes dispositivos,
              proporcionando uma excelente experiência ao usuário.
            </p>
          </div>
          <div className="flex flex-col items-center text-center justify-center bg-zinc-800 shadow-sm rounded-lg p-4">
            <Unplug />
            <h4 className="text-lg font-semibold mt-2">Integração de APIs</h4>
            <p className="text-sm font-light">
              Experiência em conectar sistemas de forma eficiente, garantindo a
              comunicação fluida entre plataformas.
            </p>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="bg-zinc-800 px-8 lg:px-[10vw] py-4 md:py-16 lg:py-[10vh] flex flex-col items-center justify-start "
      >
        <h2 className="text-center text-2xl leading-loose font-bold">
          Meus Ultimos Projetos
        </h2>
        <p className="text-center font-light">
          Dê uma olhadas nos projetos que tenho trabalhado recentemente.
        </p>

        <div className="w-full grid place-items-center place-content-center grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 ">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 hover:bg-zinc-900/95 transition-all duration-300 shadow-lg rounded-lg p-4 flex flex-col gap-2 w-full h-full max-w-80 lg:max-w-none"
            >
              <div className="relative w-full aspect-video rounded-md shadow-inner overflow-hidden">
                <Image
                  src={project.banner}
                  fill
                  className="object-cover"
                  alt="Banner-Gaspers"
                />
              </div>
              <h3 className="leading-relaxed font-semibold text-lg mt-4">
                {project.title}
              </h3>
              <p className="font-light text-zinc-200 text-sm">
                {project.description}
              </p>

              <Link
                href={project.seeMoreUrl || '#'}
                target="_blank"
                className="mt-auto text-sm text-end underline underline-offset-4 hover:brightness-125 transition-all duration-300 mt-4"
              >
                Ver mais
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="p-4 md:p-8 lg:p-16">
        <h2 className="text-2xl leading-loose font-bold mb-4">Sobre mim</h2>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p>
              Sou desenvolvedora Full Stack, com foco em criar soluções digitais
              eficientes e escaláveis. Minha experiência abrange desde o
              desenvolvimento de interfaces modernas com React e Next.js até a
              criação de APIs utilizando Node.js. Trabalho em projetos que
              valorizam a performance e a experiência do usuário, sempre
              buscando otimizar processos e oferecer soluções de qualidade.
            </p>

            <div className="mt-8">
              <h4 className="font-semibold text-sm mb-4">
                Principais ferramentas
              </h4>
              <div className="flex items-center flex-wrap gap-2">
                {[
                  'ReactJS',
                  'NextJS',
                  'Javascript',
                  'Typescript',
                  'TailwindCSS',
                  'NodeJS',
                  'Express',
                  'MongoDB',
                  'MySQL',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-zinc-200/50 px-2 text-xs rounded-full text-center text-zinc-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Experiência Profissional</h3>
            <table className="w-full space-y-4">
              {professionalExperience.map(
                ({ start, end, company, position, description }) => (
                  <tr
                    key={company}
                    className="w-full grid grid-cols-12 bg-zinc-800/25 hover:bg-zinc-800/30 transition-all duration-300 p-4 rounded-lg shadow-lg divide-x divide-zinc-700"
                  >
                    <td className="col-span-2">
                      <p className="text-xs font-medium">
                        {start} - {end ?? 'Presente'}
                      </p>
                      {/* <span className="text-xs font-light italic">1 ano</span> */}
                    </td>
                    <td className="col-span-10 px-4">
                      <h3 className="font-semibold leading-loose text-sm">
                        {position} - {company}
                      </h3>
                      <p className="text-sm font-light text-xs">
                        {description}
                      </p>
                    </td>
                  </tr>
                )
              )}
            </table>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-zinc-800 px-8 lg:px-[10vw] py-4 md:py-16 lg:py-[10vh] flex flex-col items-center justify-start "
      >
        <h2 className="text-center text-2xl leading-loose font-bold">
          Onde me encontrar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4 mt-4 w-full">
          <Link
            href="https://github.com/jaianeoliveira"
            target="_blank"
            className="bg-zinc-900/25 hover:bg-zinc-900/40 transition-all duration-300 p-4 rounded-lg shadow-lg text-center w-full flex items-center justify-center flex-col"
          >
            <Github />
            <h3 className="text-sm font-semibold text-zinc-200/50 mt-2">
              Github
            </h3>
            <p>jaianeoliveira</p>
          </Link>

          <Link
            href={'https://www.linkedin.com/in/jaianeoliveira'}
            target="_blank"
            className="bg-zinc-900/25 hover:bg-zinc-900/40 transition-all duration-300 p-4 rounded-lg shadow-lg text-center w-full flex items-center justify-center flex-col"
          >
            <Linkedin />
            <h3 className="text-sm font-semibold text-zinc-200/50 mt-2">
              Linkedin
            </h3>
            <p>jaianeoliveira</p>
          </Link>

          <Link
            href="mailto:jaianeoliveira.dev@gmail.com"
            target="_blank"
            className="bg-zinc-900/25 hover:bg-zinc-900/40 transition-all duration-300 p-4 rounded-lg shadow-lg text-center w-full flex items-center justify-center flex-col"
          >
            <Mail />
            <h3 className="text-sm font-semibold text-zinc-200/50 mt-2">
              E-mail
            </h3>
            <p>jaianeoliveira.dev@gmail.com</p>
          </Link>
        </div>
      </section>

      <footer className="flex items-center justify-center px-4 md:px-8 py-4">
        <p className="text-xs opacity-50 italic">
          Created by, Jaiane Oliveira (2024)
        </p>
      </footer>
    </div>
  );
}
