var tl = gsap.timeline({
  defaults: { duration: 0.7, ease: Back.easeOut.config(2), opacity: 0 },
});
var tl2 = gsap.timeline({ defaults: { duration: 1.5, delay: 1 } });
var tl3 = gsap.timeline({ defaults: { duration: 1.5 } });
var tl4 = gsap.timeline({
  defaults: { duration: 0.7, repeat: -1, yoyo: true },
});

var ciderProcess = gsap.timeline({
  defaults: { duration: 0.3 },
});
// Whats in can: Karma
// ciderProcess.fromTo(
//   ".apple-tree-2, .apple-tree-3",
//   { opacity: 0, scaleY: 0, transformOrigin: "bottom" },
//   { opacity: 1, scaleY: 1, duration: 1 }
// );

// ciderProcess.fromTo(
//   ".apple-tree-1",
//   { opacity: 0 },
//   { opacity: 1, duration: 1 }
// );

// .apple-tree
ciderProcess.from(".apple-tree path", {
  opacity: 0,
  scale: 0,
  transformOrigin: "center",
  stagger: {
    each: 0.1,
    ease: "power2.inOut",
  },
  repeat: -1,
  repeatDelay: 3,
});

// Spped test
var speedTest = gsap.timeline({
  defaults: { duration: 0.3 },
});
// .all-path
speedTest.from(".all-path path", {
  opacity: 0,
  scale: 0.5,
  transformOrigin: "center",
  stagger: {
    each: 0.2,
    ease: "bounce.out",
  },
  repeat: -1,
  repeatDelay: 3,
});

tl.from(".card-bg", { delay: 1, scale: 0.2, transformOrigin: "center" }, "=.2")
  .from(".card-top", { scaleY: 0, transformOrigin: "top" })
  .from(".icon", { scale: 0.2, transformOrigin: "center" }, "-=.7")
  .from(".blip1", { scaleX: 0 })
  .from(".blip2", { scaleX: 0 }, "-=.2")
  .from(".blip3", { scaleX: 0 }, "-=.3")
  .from(".blip4", { scaleX: 0 }, "-=.5")
  .from(".blip5", { scaleX: 0 }, "-=.7");

tl2.to(".whole-card", { y: 10, repeat: -1, yoyo: true });

tl3.from(".main-content", { opacity: 0, y: 40, stagger: 0.3 });

tl4
  .from(".pin-1", { scaleY: 0, transformOrigin: "bottom" })
  .from(".pin-circle-1", { opacity: 0, transformOrigin: "bottom" })
  .from(".left-eye", { opacity: 0 });

var paths = document.querySelectorAll(".multiple-path"),
  i = 0;

paths.forEach(function (item, index) {
  i++;
  var pathLength = item.getTotalLength(),
    speed = 750;

  item.setAttribute("stroke-dasharray", pathLength);
  item.setAttribute("stroke-dashoffset", pathLength);

  if (index == 0) {
    item.innerHTML =
      "<animate id='a" +
      i +
      "' attributeName='stroke-dashoffset' begin='0s' dur='" +
      pathLength / speed +
      "' to='0' fill='red' />";
  } else {
    item.innerHTML =
      "<animate id='a" +
      i +
      "' attributeName='stroke-dashoffset' begin='a " +
      (i - 1) +
      ".end' dur='" +
      pathLength / speed +
      "' to='0' fill='red' />";
  }

  console.log(index, pathLength, item.innerHTML);
});

const squiggle = document.querySelector(".squiggle");
const range = document.querySelector(".range");

range.addEventListener("input", handleSlider);

function handleSlider(e) {
  let value = e.target.value;
  squiggle.style.setProperty("--stroke-dashoffset", value);
  document.querySelector(".result").innerHTML = value;
}

const counters = document.querySelectorAll(".counters .count");

counters.forEach((counter) => {
  counter.innerText = 0;

  let count = 0;

  function updateCount() {
    const target = parseInt(counter.dataset.count);
    console.log("🚀 ~ counters.forEach ~ target:", target);

    if (count < target) {
      count++;
      counter.innerText = count;
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  }

  updateCount();
});
