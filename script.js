// Select your name logo element
const nameLogo = document.querySelector("#navbarName"); // Replace with the actual ID or class

// Hover animation
nameLogo.addEventListener('mouseover', () => {
  gsap.to(nameLogo, {
    duration: 0.5, // Duration of the animation
    scale: 1.1, // Slightly increase the scale
    color: "#008080", // Change to a highlight color
    ease: "power1.inOut" // Smoothing the animation
  });
});

// Reset animation on mouse out
nameLogo.addEventListener('mouseout', () => {
  gsap.to(nameLogo, {
    duration: 0.5,
    scale: 1, // Reset scale
    color: "#1C1917", // Reset color
    ease: "power1.inOut"
  });
});

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('nav');
    if (window.scrollY > 0) {
        navbar.classList.add('border-stone-200');
        navbar.classList.remove('border-transparent');
    } else {
        navbar.classList.add('border-transparent');
        navbar.classList.remove('border-stone-200');
    }
});

document
  .querySelector('.cursor-pointer')
  .addEventListener('mouseover', function (e) {
    if(window.innerWidth >= 1024) {
      document.querySelector('.cursor-pointer').style.cursor = 'none';
      const cursor = document.getElementById('customCursor');
      cursor.classList.remove('scale-50', 'opacity-0');
      cursor.classList.add(
        'scale-100',
        'opacity-100',
      );
      cursor.style.top = `${e.pageY}px`;
      cursor.style.left = `${e.pageX}px`;
    }
    else{
      document.querySelector('.cursor-pointer').style.cursor = 'pointer';
    }
  });

document
  .querySelector('.cursor-pointer')
  .addEventListener('mouseout', function () {
    if (window.innerWidth >= 1024) {
      document.querySelector('.cursor-pointer').style.cursor = 'none';
      const cursor = document.getElementById('customCursor');
      cursor.classList.add('scale-50', 'opacity-0');
      cursor.classList.remove(
        'scale-100',
        'opacity-100',
      );
    }
    else{
      document.querySelector('.cursor-pointer').style.cursor = 'pointer';
    }
  });

document.addEventListener('mousemove', function (e) {
  const cursor = document.getElementById('customCursor');
  cursor.style.top = `${e.pageY}px`;
  cursor.style.left = `${e.pageX}px`;
});
