// Select your name logo element
const nameLogo = document.querySelector('#navbarName'); // Replace with the actual ID or class

// Hover animation
nameLogo.addEventListener('mouseover', () => {
  gsap.to(nameLogo, {
    duration: 0.5, // Duration of the animation
    scale: 1.1, // Slightly increase the scale
    color: '#008080', // Change to a highlight color
    ease: 'power1.inOut', // Smoothing the animation
  });
});

// Reset animation on mouse out
nameLogo.addEventListener('mouseout', () => {
  gsap.to(nameLogo, {
    duration: 0.5,
    scale: 1, // Reset scale
    color: '#1C1917', // Reset color
    ease: 'power1.inOut',
  });
});
function updateNavIndicator() {
  const sections = ['hi', 'about', 'work', 'contact']; // Ensure these are the IDs of your sections
  let activeSection = '';
  
  sections.forEach((sectionId, index) => {
    const section = document.getElementById(sectionId);
    const nextSection = sections[index + 1] ? document.getElementById(sections[index + 1]) : null;
    const rect = section.getBoundingClientRect();
    const nextRect = nextSection ? nextSection.getBoundingClientRect() : null;
    
    if ((nextRect && rect.top <= 0 && nextRect.top > 0) || (!nextRect && rect.top <= window.innerHeight / 2)) {
      activeSection = sectionId;
    }
  });

  document.querySelectorAll('nav ul li span').forEach(span => {
    span.classList.remove('opacity-100');
    span.classList.add('opacity-0');
  });

  if (activeSection) {
    const activeLink = document.querySelector(`nav li a[href="#${activeSection}"]`);
    if (activeLink) {
      activeLink.parentNode.querySelector('span').classList.add('opacity-100');
      activeLink.parentNode.querySelector('span').classList.remove('opacity-0');
    }
  }
}

window.addEventListener('scroll', updateNavIndicator);
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => setTimeout(updateNavIndicator, 300)); // Adjust the timeout as needed
});

updateNavIndicator(); // Initial call to set the indicator on page load


window.addEventListener('scroll', function () {
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
    if (window.innerWidth >= 1024) {
      document.querySelector('.cursor-pointer').style.cursor = 'none';
      const cursor = document.getElementById('customCursor');
      cursor.classList.remove('scale-50', 'opacity-0');
      cursor.classList.add('scale-100', 'opacity-100');
      cursor.style.top = `${e.pageY}px`;
      cursor.style.left = `${e.pageX}px`;
    } else {
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
      cursor.classList.remove('scale-100', 'opacity-100');
    } else {
      document.querySelector('.cursor-pointer').style.cursor = 'pointer';
    }
  });

document.addEventListener('mousemove', function (e) {
  const cursor = document.getElementById('customCursor');
  cursor.style.top = `${e.pageY}px`;
  cursor.style.left = `${e.pageX}px`;
});

document
  .querySelector('.cursor-pointer')
  .addEventListener('click', function () {
    const cursor = document.getElementById('customCursor');
    const copyText = document.getElementById('copyText');

    // Change text and update color to text-stone-900
    cursor.innerHTML = 'Done!';
    cursor.classList.remove('text-green-700');
    copyText.innerHTML = 'Copied!';

    // Set a timeout to revert the text and color back to the original state (text-green-900) after 5 seconds
    setTimeout(function () {
      cursor.innerHTML = 'Copy'; // Assuming 'Copy' is the original text
      cursor.classList.add('text-green-700');
      copyText.innerHTML = 'Click email to copy';
    }, 5000);
  });
