let projects = [
  {
    name: "Covidng",
    description:
      "Covidngg is web-based statistic counter or tracker. It helps you stay updated with the latest statistics of all confirmed, deceased, active and recovered cases of corona virus patients in Nigeria.",
    technologies: ["VUE", "CHAKRA UI", "REST API"],
    github: "https://github.com/Kelvinblaze/covidng",
    preview: "https://covidngg.herokuapp.com/",
    image: "",
  },
  {
    name: "Where in the world",
    description:
      "A simple web based site and PWA that shows important details of all countries of the world.",
    technologies: ["VUE", "REST API", ""],
    github: "https://github.com/Kelvinblaze/where-in-the-world",
    preview: "https://widw.herokuapp.com/",
    image: "",
  },
  {
    name: "Frontend Mentors Challenges",
    description:
      "All of my submissions for the Frontend Mentor Challenges, Includes a list of landing page i have worked on.",
    technologies: ["HTML", "SCSS", "JAVASCRIPT"],
    github: "https://github.com/Kelvinblaze/frontend-mentor-challenges",
    preview: "https://bit.ly/3fBXgVs",
    image: "",
  },
  {
    name: "Neumorphism Calculator",
    description:
      "This is a fully functional and responsive Calculator built with VanillaJS in Neumorphism Design",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    github: "https://github.com/Kelvinblaze/Neumorphism-Calculator-JavaScript",
    preview: "https://kelvinblaze.github.io/Neumorphism-Calculator/",
    image: "",
  },
  {
    name: "Tiwa Africa",
    description:
      "Tiwa Africa is a platform that gives African fashion designers the opportunity to showcase their beautiful product, have engagement and also sell them.",
    technologies: ["VUE", "NUXT", "VUETIFY"],
    github: "https://softnexus.co",
    preview: "https://tiwa.africa",
    image: "",
  },
];

let projectContent = document.querySelector(".all-projects");
var fragment = document.createDocumentFragment();

projects.forEach((project) => {
  let div = document.createElement("div");
  div.innerHTML = `
  <div class="projects__card">
                        <div class="projects__card--content">
                            <div class="projects__card--content--header">
                                <h2>${project.name}</h2>
                            </div>
                            <div class="projects__card--content--about">
                                <p>${project.description}</p>
                            </div>
                            <div class="projects__card--content--tech">
                                <span>${project.technologies[0]}</span>
                                <span>${project.technologies[1]}</span>
                                <span>${project.technologies[2]}</span>
                            </div>
                            <div class="projects__card--content--links">
                                <a href="${project.github}"><span class="fa fa-github"></span></a>
                                <a href="${project.preview}"><span class="fa fa-link"></span></a>
                            </div>
                        </div>
                        <div class="projects__card--image">
                        </div>
                    </div>
  `;

  fragment.appendChild(div);
});

projectContent.appendChild(fragment);
