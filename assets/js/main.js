let projects = [];

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