function scrollTop() {
    const scrollTop = document.getElementById("fixNav");
  
    if (this.scrollY >= 130) {
      scrollTop.classList.add("fixNav");
    } else {
      scrollTop.classList.remove("fixNav");
    }
  }
  
  window.addEventListener("scroll", scrollTop);