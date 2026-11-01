import AppLayout from "#layouts/AppLayout.tsx";
import { Show, For } from "solid-js";

export default function Home() {
  interface MySkillsDetails {
    skillIcon: string;
    skillName: string;
    skillDescriptions: string[];
    isOpen?: boolean;
  }

  interface Project {
    projectName: string;
    projectStatus: string;
    projectImage: string;
    projectGithubURL?: string;
    projectPreviewURL?: string;
  }
  
  const projects = () : Project[] => [
    {
      projectName: 'octavianmironescu.com',
      projectStatus: 'Deployed',
      projectImage: 'https://placehold.co/600x400/101010/16a34a?text=Portfolio+Website',
      projectGithubURL: 'https://github.com/MironescuOctavian/octavianmironescu.com',
      projectPreviewURL: 'https://octavianmironescu.com',
    },
    {
      projectName: 'Backend API Service',
      projectStatus: 'In Development',
      projectImage: 'https://placehold.co/600x400/101010/16a34a?text=Backend+Services',
      projectGithubURL: 'https://github.com/MironescuOctavian',
      projectPreviewURL: 'https://github.com/MironescuOctavian',
    },
    {
      projectName: 'Full-stack Platform',
      projectStatus: 'Contributor',
      projectImage: 'https://placehold.co/600x400/101010/16a34a?text=Full-stack+App',
      projectGithubURL: 'https://github.com/MironescuOctavian',
      projectPreviewURL: 'https://github.com/MironescuOctavian',
    },
    {
      projectName: 'Developer Automation Tools',
      projectStatus: 'Deployed',
      projectImage: 'https://placehold.co/600x400/101010/16a34a?text=Automation+Tools',
      projectGithubURL: 'https://github.com/MironescuOctavian',
      projectPreviewURL: 'https://github.com/MironescuOctavian',
    },
  ]

  const skills = () : MySkillsDetails[] => [
    {
      skillIcon: 'i-mdi-web',
      skillName: "Web Development",
      skillDescriptions: [
        "Single Page Applications (SPAs)",
        "Landing pages and business websites",
        "Portfolio websites"
      ]
    },
    {
      skillIcon: 'i-mdi-code-braces',
      skillName: "Software Development",
      skillDescriptions: [
        "REST APIs and backend services",
        "CLI tools and automation scripts",
        "System design and architecture"
      ]
    },
    {
      skillIcon: 'i-mdi-cloud-outline',
      skillName: "DevOps & Cloud Infrastructure",
      skillDescriptions: [
        "Containerization & deployment with Docker",
        "Cloud hosting & edge deployment (Cloudflare)",
        "CI/CD pipelines & build automation"
      ]
    },
  ];

  const projectBtnClass =
      'flex items-center justify-center p-3 rounded-xl border border-green-900 bg-black/60 text-gray-300 hover:text-white hover:border-green-600 transition-colors';

  return (
    <AppLayout>
      <div>
        {/* Hero Section */}
          <section class="flex flex-col p-12">
            <p class="flex color-green text-2xl " >Hi,I'm Octavian Mironescu</p>
            <header class="flex flex-col md:flex-row items-center justify-start gap-4 mt-1">
              <h1 class="font-bold text-6xl text-white">Software Enginner</h1>
              <p class="text-3xl">Transforming ideas into interactive and seamless digital experiences
                with cutting-edge <span class={"text-green"}>frontend</span> and <span class={"text-green"}>backend</span> development.</p>
            </header>
          </section>
        {/* My Skills Section */}
        <section class={"flex flex-col p-12"}>
          <p class="flex color-green text-2xl " >My Skills</p>
          <h1 class={"flex-bold text-4xl mt-1"}>What I do?</h1>
          <div>
              <ul>
                <Show when={skills().length === 0}>
                  <span>No Skills. Really?</span>
                </Show>
                <For each ={skills()}>
                  {(skill, index) => (
                      <details class="border border-green-900 rounded-xl overflow-hidden bg-black/20 lg:w-1/2 min-w-0 w-full" open={skill.isOpen}>
                        <summary>
                          <span class={["w-6 h-6 text-green inline-block shrink-0", skill.skillIcon]}></span>
                          <span class="text-white text-lg font-medium flex-1">{skill.skillName}</span>
                          <span class="i-mdi-chevron-down w-5 h-5 text-white inline-block accordion-chevron" />
                        </summary>
                        <ul class="flex flex-col gap-2 px-6 pb-5 text-gray-300 text-sm">
                          <For each ={skill.skillDescriptions}>
                              {(skillDescription, index) => (
                                  <li class="flex items-center gap-2">
                                    <span class="text-green-500">·</span> {skillDescription}
                                  </li>
                              )}
                          </For>
                        </ul>
                      </details>
                  )}
                </For>
              </ul>
          </div>
        </section>
        {/* My Work Section */}
          <section class={"flex flex-col p-12"}>
            <p class="flex color-green text-2xl " >My work</p>
            <h1 class={"flex-bold text-4xl mt-1"}>Projects</h1>
            <div>
              <ul>
                <Show when={projects().length === 0}>
                  <span>No Projects. Really?</span>
                </Show>
                <For each ={projects()}>
                  {(projectz, index) => (
                      <div class="group border border-green-900/80 hover:border-green-600/80 rounded-2xl overflow-hidden bg-black/30 transition-all duration-300">
                        <a href={projectz.projectPreviewURL || projectz.projectGithubURL || '#'} target="_blank" rel="noopener noreferrer" class="block overflow-hidden">
                          <img
                              src={projectz.projectImage}
                              alt={projectz.projectName}
                              class="w-full h-48 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                          />
                        </a>
                        <div class="flex items-center justify-between p-5">
                          <div>
                            <h4 class="text-xl font-semibold text-white">{projectz.projectName}</h4>
                            <span class="inline-block mt-1 text-xs px-2.5 py-1 rounded-full border border-green-800 text-green-400 bg-green-950/40">
                                            {projectz.projectStatus}
                                        </span>
                          </div>
                          <div class="flex gap-2">
                            {projectz.projectGithubURL && (
                                <a href={projectz.projectGithubURL} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" class={projectBtnClass}>
                                  <span class="i-mdi-code-tags text-xl" />
                                </a>
                            )}
                            {projectz.projectPreviewURL && (
                                <a href={projectz.projectPreviewURL} target="_blank" rel="noopener noreferrer" aria-label="Live Preview" class={projectBtnClass}>
                                  <span class="i-mdi-arrow-top-right text-xl" />
                                </a>
                            )}
                          </div>
                        </div>
                      </div>
                      )}
                </For>
              </ul>
              <div class="flex items-center justify-center">
                <a
                    href="https://github.com/MironescuOctavian?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-center gap-2 mt-10 text-gray-300 hover:text-white border border-green-900 hover:border-green-600 p-3.5 w-md rounded-full bg-black/40 hover:bg-green-950/20 hover:scale-[1.01] transition-all"
                >
                  <span class="text-base font-medium">More projects on Github.</span>
                  <span class="i-mdi-github text-xl text-green-500" />
                </a>
              </div>
            </div>
          </section>
        {/* Contact Section */}
      </div>
    </AppLayout>
  );
}
