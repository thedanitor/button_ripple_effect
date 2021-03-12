const buttons = document.querySelectorAll(".ripple");

// iterate through buttons
buttons.forEach(button => {
  // add click event on button
  button.addEventListener("click", function (e) {
    // define variables for x, y coordinates of click relative to viewport
    const x = e.clientX;
    const y = e.clientY;
    // position of top edge of button relative to viewport
    const buttonTop = e.target.offsetTop;
    // position of left edge of button relative to viewport
    const buttonLeft = e.target.offsetLeft;
    // horizontal pixel distance from left side of button to click
    const xInside = x - buttonLeft;
    // vartical pixel distance from top of button to click
    const yInside = y - buttonTop;

    // create span with circle class with top, left positions defined by yInside, xInside
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";
    // append circle to "this" (button)
    this.appendChild(circle);
    // remove circle after 0.5 seconds (once animation complete)
    setTimeout(() => circle.remove(), 500);

  });
});
