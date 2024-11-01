/* 9 */
window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
  document.body.classList.add('loaded');
  document.body.classList.remove('loaded_hiding');
  }, 1500);
}


/* 6 */
document.addEventListener('DOMContentLoaded', () => {const logosList = document.querySelector('.list-unstyled');
  function moving(list) {
      let countItems = list.childElementCount;
      let itemOfList = list.firstElementChild;
      let gapList = +window.getComputedStyle(list).getPropertyValue('gap').replace('px', '');
      let widthItem = +window.getComputedStyle(itemOfList).getPropertyValue('width').replace('px', '');
      let widthViewBox = document.body.clientWidth;
      let speed = 0.08; // в идеале найти формулу
  
      let distance = (widthItem + gapList) * countItems - widthViewBox;
      let time = distance / speed;
  
      anime({
          targets: list,
          translateX: `-${distance}px`,
          duration: time,
          easing: 'linear',
          loop: true,
      });
  }
  moving(logosList);
  
  window.addEventListener('resize',(e) => {
      moving(logosList);
  });
})

/* 8 */
document.addEventListener('DOMContentLoaded', () => {
  const cursorElement = document.getElementById("magic-cursor");
  const hoveredCursor = document.getElementById("cursor");
  const followCursor = (event) => {
    const { clientX: left, clientY: top } = event;
    var cursor = anime.timeline({
      targets: cursorElement,
      duration: 40,
      left: `${left}px`,
      top: `${top}px`,
      easing: "easeInOutSine",
      endDelay: 100
    });
  
    if ( event.target.closest('a')) {
      cursor.add({
        targets: hoveredCursor,
        scale: 1.5,
        opacity: 0
      });
    } else { 
      cursor.add({
        targets: hoveredCursor,
        scale: 1,
        opacity: 1,
      });
    }
  };
  
  document.addEventListener("mousemove", followCursor);
})


