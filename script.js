// fetch data

fetch("./data.json")
  .then((response) => response.json())
  .then((json) => displayData(json));

// display
function displayData(data) {
  // name
  document.getElementById("name").innerText = data["name"];
  // pronoun
  document.getElementById("pronouns").innerText = data["pronoun"];
  // job title
  document.getElementById("job-title").innerText = data["jobTitle"];
  // about title
  document.getElementById("about-title").innerText = data["about"]["title"];
  // about me
  document.getElementById("about-me").innerText = data["about"]["info"];
  // edu year
  document.getElementById("edu-year").innerText = data["education"]["year"];
  // edu title
  document.getElementById("edu-title").innerText = data["education"]["title"];
  // edu info
  document.getElementById("edu-info").innerText = data["education"]["info"];
  // job year
  document.getElementById("job-year").innerText = data["work"]["year"];
  // job title
  document.getElementById("job-title").innerText = data["work"]["title"];
  // job info
  document.getElementById("job-info").innerText = data["work"]["info"];
}

// change layout on large devices

let minWidth = "min-width: 786px";

let bodyEle = document.getElementsByTagName("body")[0];
let divEle = document.getElementById('layout_size-1--js');
let divEle2 = document.getElementById('layout_size-2--js');

if (window.matchMedia("(min-width: 768px)").matches) {
  bodyEle.classList.replace('flex-column', 'flex-row');
  divEle.classList.toggle('w-50');
  divEle2.classList.toggle('w-50');
}
