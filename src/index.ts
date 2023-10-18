const $button = document.querySelector("button");
const $body = document.querySelector("body");
const $h1 = document.querySelector("h1");
const $img = document.querySelector("img");

const regularCageSrc =
  "https://m.media-amazon.com/images/M/MV5BNTlhZDdlZWMtNGM1Ni00NDBkLWE3YTItOTgxNjg4NWU1ZWQyXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg";
const spookyCageSrc =
  "https://m.media-amazon.com/images/M/MV5BMGFjOTQzNGQtNjA4My00ZWU0LWJjMmMtNWQ0ZjEwYmM0MDVkXkEyXkFqcGdeQWFybm8@._V1_QL75_UY281_CR0,0,500,281_.jpg";

if (!$h1) {
  throw new Error("Cannot find h1 tag");
}

if (!$img) {
  throw new Error("Cannot find img tag");
}

if (!$body) {
  throw new Error("Cannot find body . tag");
}

if (!$button) {
  throw new Error("Cannot find button");
}

const makeDarkTheme = () => {
  $body.classList.add("dark");
  $button.classList.add("dark");
  $h1.classList.add("dark");

  $h1.innerText = "OOH a SCARY SPOOKY VAMPIRE MOVIE";
  $img.src = spookyCageSrc;
};

const makeLightTheme = () => {
  $body.classList.remove("dark");
  $button.classList.remove("dark");
  $h1.classList.remove("dark");

  $h1.innerText = "Nick Cage App";
  $img.src = regularCageSrc;
};

$button.addEventListener("click", (e) => {
  const isDark = $body.classList.contains("dark");
  if (isDark) {
    makeLightTheme();
  } else {
    makeDarkTheme();
  }
});
