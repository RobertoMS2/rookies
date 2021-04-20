/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import * as bootstrap from 'bootstrap';

/**
 * Write any other JavaScript below
 */

(function() {
  // Sticky functions
  window.onscroll = function() {stickyF()};

  var header = document.getElementById("header");
  var sticky = header.offsetTop;

  function stickyF() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky")
    } else {
      header.classList.remove("sticky");
    }
  }

  var menu = document.getElementById("menu");
  if(menu !== null) {
    menu.addEventListener('click', () => {
      var h = document.getElementById("header");
      if(!h.classList.contains("visible")) {
        h.className = 'visible';
      } else {
        h.className = '';
      }
    });
  }
})();

