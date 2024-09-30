function move(event) {
  console.log(cursor);
  cursor.style.top = event.y + "px";
  cursor.style.left = event.x + "px";
 console.log('event.x, event.y') }

window.onmousemove = move 
