
Array.prototype.forEach.call(document.querySelectorAll("a[type='application/epub+zip']"),function(anchor) {
  //<div class="send-to-readmill" data-download-url="http://project.com" data-display="small" ></div>
  var el = document.createElement("div");
  el.className = "send-to-readmill"
  el.setAttribute('data-download-url', anchor.href);
  el.setAttribute('data-display', 'small');
  var container = document.createElement("div");
  container.style.verticalAlign = "middle";
  container.style.marginLeft = "20px";
  container.style.display = "inline-block";
  container.appendChild(el);
  anchor.parentNode.appendChild(container);
});

(function() {
  var st = document.createElement('script'); st.type = 'text/javascript'; st.async = true;
  st.src = 'https://platform.readmill.com/send.js';
  var p = document.getElementsByTagName('body')[0];
  p.appendChild(st);
})();
