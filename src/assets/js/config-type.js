import Typed from 'typed.js';

export function initializeTyped() {
  const typed = new Typed('.typed', {
    stringsElement: '#cadenas-texto',
    typeSpeed: 75,
    startDelay: 100,
    backSpeed: 75,
    smartBackspace: false,
    backDelay: 1500,
    loop: false,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
  });
}