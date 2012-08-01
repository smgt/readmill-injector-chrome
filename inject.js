(function() {

  var Readmill = {

    button: function(url, callback, size) {
      var el = document.createElement("div");
      el.className = "send-to-readmill"
      el.setAttribute('data-download-url', url);
      if(size) {
        el.setAttribute('data-display', size);
      } else {
        el.setAttribute('data-display', "small");
      }

      var container = document.createElement("div");
      if(callback) {
        container = callback(container);
      }
      container.appendChild(el);
      return container;
    },

    appendChild: function(targets, button, insertAt) {
      Array.prototype.forEach.call(document.querySelectorAll(targets), function(el) {
        //<div class="send-to-readmill" data-download-url="http://project.com" data-display="small" ></div>
        el.parentNode.appendChild(button(el));
      });
    }

  }

  // Feedbooks
  if(/^https?:\/\/.*\.feedbooks\.com\//.test(document.location.href)) {
    Readmill.appendChild("a[href$='.epub'][role='button']", function(el) {
      return Readmill.button(el.href, function(button) {
        button.style.marginTop = "4px";
        return button;
      });
    });
  // Project Gutenberg
  } else if(/^https?:\/\/.*gutenberg\.org\//.test(document.location.href)) {
    Readmill.appendChild("a[type='application/epub+zip']", function(el) {
      return Readmill.button(el.href, function(button) {
          button.style.verticalAlign = "middle";
          button.style.marginLeft = "20px";
          button.style.display = "inline-block";
          return button;
      });
    });
  }

})();
