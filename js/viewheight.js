let root = document.documentElement;

function updateRealViewportDimensions() {
  console.log(`1vh = ${window.innerHeight / 100}px`)
  root.style.setProperty('--real-vh', (window.innerHeight / 100) + "px");
}

updateRealViewportDimensions()
const vhChangeEventTypes = [
  "scroll",
  "resize",
  "fullscreenchange",
  "fullscreenerror",
  "touchcancel",
  "touchend",
  "touchmove",
  "touchstart",
  "mozbrowserscroll",
  "mozbrowserscrollareachanged",
  "mozbrowserscrollviewchange",
  "mozbrowserresize",
  "MozScrolledAreaChanged",
  "mozbrowserresize",
  "orientationchange"
]
vhChangeEventTypes.forEach(function(type) {
  window.addEventListener(type, event => updateRealViewportDimensions());
})
