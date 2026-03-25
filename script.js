document.addEventListener("DOMContentLoaded", () => {

  const words = [
    "UX Designer",
    "Product Designer",
    "Visual Designer",
    "Human-Centred Thinker",
    "Problem Solver",
    "Design Tinkerer"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typedElement = document.getElementById("typed");
  const typingSpeed = 80;   
  const erasingSpeed = 60;  
  const delayBetween = 1500; 

  function type() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      typedElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, delayBetween);
        return;
      }
    } else {
      typedElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
  }

  if (typedElement) type();




  const categoryToggle = document.getElementById("category-toggle");
  const categoryMenu = document.querySelector(".category-menu");
  const dropdownIcon = document.getElementById("dropdown-icon");

  categoryToggle.addEventListener("click", (e) => {
    e.preventDefault();     
    e.stopPropagation();    
    const isOpen = categoryMenu.classList.toggle("show");
    dropdownIcon.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
  });
  

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".category-dropdown")) {
      categoryMenu.classList.remove("show");
      dropdownIcon.style.transform = "rotate(0deg)";
    }
  });
  

  const categoryHero = document.querySelector(".category-hero");

  document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    categoryHero.style.transform = `translateY(${scrollY * 0.1}px)`;

    if (scrollY > 200) {
      categoryHero.style.opacity = "0";
      categoryHero.style.transform += " translateY(-50px)";
      categoryHero.style.pointerEvents = "none";
    } else {
      categoryHero.style.opacity = "1";
      categoryHero.style.transform = `translateY(${scrollY * 0.1}px)`;
      categoryHero.style.pointerEvents = "auto";
    }
  });

  const videos = document.querySelectorAll('.category-video');
  
  videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.currentTime = 0;
      video.play();
    });
  
    video.addEventListener('mouseleave', () => {
      video.pause();
      video.load(); 
    });
  });  
  
    
  const redirectTo = (url) => {
    window.location.href = url;
  };

  // Wisp
  const wispProject = document.querySelector("article:first-of-type");
  if (wispProject) {
    const clickableElements = wispProject.querySelectorAll(".project-image, h3, p");
    clickableElements.forEach((element) => {
      element.addEventListener("click", () => redirectTo("/wisp"));
    });
  }

  // Ecom
  const ecomProject = document.querySelector("article:nth-of-type(2)");
  if (ecomProject) {
    const clickableElements = ecomProject.querySelectorAll(".project-image, h3, p");
    clickableElements.forEach((element) => {
      element.addEventListener("click", () => redirectTo("/ecommerce"));
    });
  }

  // Acounting workflow 
  const accountingProject = document.querySelector("article:nth-of-type(3)");
  if (accountingProject) {
    const clickableElements = accountingProject.querySelectorAll(".project-image, h3, p");
    clickableElements.forEach((element) => {
      element.addEventListener("click", () => redirectTo("/accountingworkflows"));
    });
  }

  // Leaflink
  const leaflinkProject = document.querySelector("article:nth-of-type(4)");
  if (leaflinkProject) {
    const clickableElements = leaflinkProject.querySelectorAll(".project-image, h3, p");
    clickableElements.forEach((element) => {
        element.addEventListener("click", () => redirectTo("/leaflink"));
    });
  }

   // Greeminder
  const greeminderProject = document.querySelector("article:nth-of-type(5)");
  if (greeminderProject) {
    const clickableElements = greeminderProject.querySelectorAll(".project-image, h3, p");
    clickableElements.forEach((element) => {
        element.addEventListener("click", () => redirectTo("/greeminder"));
    });
  }


  const categoryCards = document.querySelectorAll('.category-card[data-link]');
  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const targetUrl = card.getAttribute('data-link');
      window.location.href = targetUrl;
    });
  });

  // dark mode logic
  const themeToggle = document.getElementById("theme-toggle");
  const lightModeIcon = document.getElementById("light-mode-icon");
  const darkModeIcon = document.getElementById("dark-mode-icon");

  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
    darkModeIcon.style.display = "block";
    lightModeIcon.style.display = "none";
  } else {
    document.body.classList.remove("dark");
    darkModeIcon.style.display = "none";
    lightModeIcon.style.display = "block";
  }

  themeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    localStorage.setItem("darkMode", "disabled");
    darkModeIcon.style.display = "none";
    lightModeIcon.style.display = "block";
  } else {
    document.body.classList.add("dark");
    localStorage.setItem("darkMode", "enabled");
    darkModeIcon.style.display = "block";
    lightModeIcon.style.display = "none";
  }
  });


  //Waving animation
  const waveElement = document.querySelector(".wave");
  function startWaveAnimation() {
    waveElement.style.animation = "wave 2s ease-in-out"; 
    setTimeout(() => {
      waveElement.style.animation = "none";
    }, 2000) 
  }
 
  setInterval(startWaveAnimation, 3000);
  startWaveAnimation();


  //Parallax effect for intro text
  const introElement = document.querySelector(".intro");
  document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    introElement.style.transform = `translateY(${scrollY * 0.5}px)`;
  });

});





