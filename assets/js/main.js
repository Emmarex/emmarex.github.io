let recentProjects = [
  {
    name: "Dialogflow Fulfillment Python",
    description: "This Library makes creating fulfillment for Dialogflow v2 agents with Django or Flask easy and simple.",
    technologies: ["Python", "", ""],
    github: "https://github.com/Emmarex/dialogflow-fulfillment-python",
    preview: "https://dialogflow-fulfillment-python.readthedocs.io/en/latest/",
    article: ""
  },
  {
    name: "Plant A.I",
    description: "Mobile App for the plant disease recognition using artificial inteligence. This project was originally built for the NaijaHacks hackaton.",
    technologies: ["Python/Django", "Keras", "Ionic"],
    github: "https://github.com/Emmarex/naijahacks-fort-API",
    preview: "https://www.youtube.com/watch?v=lY7sRTmo9oA",
    article: "https://towardsdatascience.com/plant-ai-plant-disease-detection-using-convolutional-neural-network-9b58a96f2289"
  }
];

let failedProjects = [
  {
    name: "QHay",
    description: "* Fun Fact: This was built in two days",
    technologies: ["PHP/Code-Igniter", "Flutter", "MySQL"],
    github: "",
    preview: ""
  },
  {
    name: "PilotOne",
    description: "A car hailing application that was support to redefine car hailing.",
    technologies: ["Django", "Redis", "PostgreSQL", "Ionic"],
    github: "https://github.com/Emmarex/",
    preview: "https://pilotone.africa/home/"
  },
  {
    name: "RoadPal",
    description: "A Road Companion. Traffic Report, Nearby facilities, alternative routes e.t.c",
    technologies: ["PHP/Code-Igniter", "Xamarin", "MySQL"],
    github: "",
    preview: ""
  }
];

let recentProjectContent = document.querySelector(".recent-projects");
let failedProjectContent = document.querySelector(".failed-projects");
var recentFragment = document.createDocumentFragment();
var failedFragment = document.createDocumentFragment();

recentProjects.forEach((project) => {
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
        <a href="${project.github}"><span class="fab fa-github"></span></a>
        <a href="${project.preview}"><span class="fa fa-link"></span></a>
        <a href="${project.article}"><span class="fab fa-medium"></span></a>
      </div>
    </div>
  </div>
  `;
  recentFragment.appendChild(div);
});
recentProjectContent.appendChild(recentFragment);

failedProjects.forEach((project) => {
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
        <a href="${project.github}"><span class="fab fa-github"></span></a>
        <a href="${project.preview}"><span class="fa fa-link"></span></a>
      </div>
    </div>
  </div>
  `;
  failedFragment.appendChild(div);
});


failedProjectContent.appendChild(failedFragment);