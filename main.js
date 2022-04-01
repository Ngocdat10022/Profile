const heading1 = document.querySelector(".heading-js-one");
const heading2 = document.querySelector(".heading-js-tow");
const heading3 = document.querySelector(".heading-js-three");

const Button1 = document.querySelector(".btn-js-one");
const Button2 = document.querySelector(".btn-js-tow");
const Button3 = document.querySelector(".btn-js-three");
const heart = document.querySelector(".heart");

const btn = document.querySelector(".btn");

// btn.forEach((item) =>
//   item.addEventListener("click", (e) => {
//     btn.forEach((el) => el.classList.remove("active"));
//     e.target.classList.add("active");
//   })
// );

const showHeadingOne = () => {
  heading1.classList.toggle("active");
  heading3.classList.remove("active");
  heading2.classList.remove("active");
};

const showHeadingTow = () => {
  heading1.classList.remove("active");
  heading2.classList.add("active");
};

const showHeadingThree = () => {
  heading2.classList.remove("active");
  heading3.classList.add("active");
};
heart.addEventListener("click", showHeadingOne);

Button1.addEventListener("click", showHeadingTow);

Button2.addEventListener("click", showHeadingThree);

Button3.addEventListener("click", () => {
  heading2.classList.add("active");
  heading3.classList.remove("active");
});

// btn.addEventListener("click", () => {
//   var element = document.body;
//   element.classList.toggle("dark");
// });

// btn.addEventListener("click", () => {
//   var element = document.body;
//   element.classList.toggle("dark");
// });
