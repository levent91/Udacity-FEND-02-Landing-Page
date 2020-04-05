let sectionList, sectionCoordinates, starterCoordinates, population; //list of variables

sectionList = [];
sectionCoordinates = [];
starterCoordinates = [];
population = 6;

function populateNavbar(navpopulation) { //populating navbar with relevant ids
  var navbar__menu = document.getElementById("navbar__list");
  for (var i = 1; i < navpopulation; i++) {
    var items = document.createTextNode("Section" + i);
    sectionList.push(items);
    var para = document.createElement("li");
    para.appendChild(sectionList[i - 1]);
    para.id = "section" + i + "n";
    navbar__menu.appendChild(para);
    applyClick(i);
  }
}

populateNavbar(population);

function getCoordinates(navpopulation) { //getting coordinates of sections
  starterCoordinates = [];
  for (var i = 1; i < navpopulation; i++) {
    starterCoordinates.push(
      document.getElementById("section" + i).getBoundingClientRect().y
    );
  }
  return starterCoordinates;
}

getCoordinates(population);

function applyClick(n) { //adding event listener to scroll
  document
    .getElementById("section" + n + "n")
    .addEventListener("click", function () {
      window.scrollTo({
        top: starterCoordinates[n - 1],
        behavior: "smooth",
      });
    });
}

window.addEventListener("resize", function () { //coordinates of sections reset at each resize
  window.scrollTo(0, 0);
  getCoordinates(population);
});

window.addEventListener("scroll", function (e) { //assigning active classes
  for (var i = 1; i < 6; i++) {
    sectionCoordinates.push(
      Math.abs(document.getElementById("section" + i).getBoundingClientRect().y)
    );
  }
  for (var i = 1; i < 6; i++) {
    document
      .getElementById("section" + i)
      .classList.remove("your-active-class");
    if (sectionCoordinates[i - 1] == Math.min.apply(null, sectionCoordinates)) {
      var activeSection = document.getElementById("section" + i);
      activeSection.classList.add("your-active-class");
    }
  }
  sectionCoordinates = [];
});

function scrollLanding(n) { //button function to go landing page
  window.scrollTo(0, 0);
  getCoordinates(n);
}
