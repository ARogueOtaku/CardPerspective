const card = document.querySelector(".card");

const MAX_ANGLE = 30;
const MAX_SHADOW = 10;

function hoverPerspective(event) {
  const boundingClientRect = event.target.getBoundingClientRect();
  const tiltY = Math.round(
    (MAX_ANGLE / (boundingClientRect.width / 2)) * (event.offsetX - boundingClientRect.width / 2)
  );
  const tiltX = Math.round(
    (MAX_ANGLE / (boundingClientRect.height / 2)) * (boundingClientRect.height / 2 - event.offsetY)
  );
  const tiltZ = Math.round((4 / MAX_ANGLE) * ((tiltY + tiltX) / 2));
  const borderX = Math.round(
    (MAX_SHADOW / (boundingClientRect.width / 2)) * (boundingClientRect.width / 2 - event.offsetX)
  );
  const borderY = Math.round(
    (MAX_SHADOW / (boundingClientRect.height / 2)) * (boundingClientRect.height / 2 - event.offsetY)
  );
  event.target.style.transform = `scale(1.2) perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) rotateZ(${tiltZ}deg)`;
  event.target.style.boxShadow = `${borderX}px ${borderY}px 10px 0px gray`;
  event.target.style.transition = `transform 0.2s, box-shadow 0s`;
}

function noPerspective(event) {
  event.target.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
  event.target.style.boxShadow = `0px 0px 0px 0px gray`;
  event.target.style.transition = `transform 1s, box-shadow 1s`;
}

card.addEventListener("mousemove", hoverPerspective);
card.addEventListener("mouseout", noPerspective);
