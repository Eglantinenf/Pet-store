const container = document.querySelector(".breed-page");
const dogsContainer = document.querySelector(".dog-pics");

const dogs = [
  { image: "images/golden.png", title: "Golden Retriver" },
  { image: "images/husky.png", title: "Siberian Husky" },
  { image: "images/pitbull.png", title: "Pitbul" },
  { image: "images/german.png", title: "German Shepard" },
  { image: "images/pug.png", title: "Pug" },
  { image: "images/spitz.png", title: "Japanese Spitz" },
  { image: "images/labrador.png", title: "Labrador" },
];

dogs.forEach((dog) => {
  const dogsInfo = document.createElement("div");
  dogsInfo.classList = "dog-info";

  dogsInfo.innerHTML = `
    <img src="${dog.image}" />
    <p>${dog.title}</p>
    `;
  dogsContainer.appendChild(dogsInfo);
});
// --------
const blogs = [
  {
    image: "images/blog1.png",
    title: "Are you having trouble <br>finding the right dog?",
  },
  {
    image: "images/blog2.png",
    title: "Is your dog aggresive <br>towards your kids?",
  },
  {
    image: "images/blog3.png",
    title: "Looking for someone to train your dog?",
  },
  {
    image: "images/blog4.png",
    title: "Choose the most stylist and durable <br>products for your dog.",
  },
];

const blogContainer = document.querySelector(".blog-container");

blogs.forEach((blog) => {
  const blogCard = document.createElement("div");
  blogCard.classList = "blog-card";

  blogCard.innerHTML = `
    <img src="${blog.image}" />
    <p>${blog.title}</p>`;

  blogContainer.appendChild(blogCard);
});
