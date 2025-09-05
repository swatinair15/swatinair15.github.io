document.addEventListener("DOMContentLoaded", () => {
  

  // Typing animation for intro
  const words = [
    "UX Designer",
    "Product Designer",
    "Graphic Designer",
    "Problem Solver",
    "Storyteller",
    "Curious Explorer"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typedElement = document.getElementById("typed");
  const typingSpeed = 80;   // typing speed
  const erasingSpeed = 60;   // backspace speed
  const delayBetween = 1500; // pause after full word

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

  if (typedElement) type(); // start typing


  const categoryToggle = document.getElementById("category-toggle");
  const categoryMenu = document.querySelector(".category-menu");
  const dropdownIcon = document.getElementById("dropdown-icon");

  categoryToggle.addEventListener("click", (e) => {
    e.preventDefault();     // Prevent default <button> behavior
    e.stopPropagation();    // Prevent bubbling to document click listener
    const isOpen = categoryMenu.classList.toggle("show");
    dropdownIcon.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
  });
  

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".category-dropdown")) {
      categoryMenu.classList.remove("show");
      dropdownIcon.style.transform = "rotate(0deg)";
    }
  });

  

  // Parallax + fade-out effect for category-hero
  const categoryHero = document.querySelector(".category-hero");

  document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Parallax movement
    categoryHero.style.transform = `translateY(${scrollY * 0.1}px)`;

    // Fade and slide out when scrolling down
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


  // Play MP4 animation on hover
  const videos = document.querySelectorAll('.category-video');
  
  videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.currentTime = 0;
      video.play();
    });
  
    video.addEventListener('mouseleave', () => {
      video.pause();
      video.load(); // Resets video to show poster again
    });
  });  
  
  
    
  // Redirect function
  const redirectTo = (url) => {
    window.location.href = url;
  };

  // Target the first project (Accounting Workflows)
  const accountingProject = document.querySelector("article:first-of-type");
  if (accountingProject) {
    const clickableElements = accountingProject.querySelectorAll(".project-image, h3, p");
    clickableElements.forEach((element) => {
      element.addEventListener("click", () => redirectTo("/accountingworkflows"));
    });
  }

  // Target the second project (Leaflink)
  const leaflinkProject = document.querySelector("article:nth-of-type(2)");
  if (leaflinkProject) {
    const clickableElements = leaflinkProject.querySelectorAll(".project-image, h3, p");
    clickableElements.forEach((element) => {
        element.addEventListener("click", () => redirectTo("/leaflink"));
    });
  }
 
  // Target the third project (Greeminder)
  const greeminderProject = document.querySelector("article:nth-of-type(3)");
  if (greeminderProject) {
    const clickableElements = greeminderProject.querySelectorAll(".project-image, h3, p");
    clickableElements.forEach((element) => {
        element.addEventListener("click", () => redirectTo("/greeminder"));
    });
  }

  // Target the fourth project (Corridor)
  const corridorProject = document.querySelector("article:nth-of-type(4)");
  if (corridorProject) {
    const clickableElements = corridorProject.querySelectorAll(".project-image, h3, p");
    clickableElements.forEach((element) => {
        element.addEventListener("click", () => redirectTo("/corridor"));
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

  // Initialize dark mode based on localStorage
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
    darkModeIcon.style.display = "block";
    lightModeIcon.style.display = "none";
  } else {
    document.body.classList.remove("dark");
    darkModeIcon.style.display = "none";
    lightModeIcon.style.display = "block";
  }

  // Toggle dark mode on button click
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
  //Function to start the waving animation
  function startWaveAnimation() {
    waveElement.style.animation = "wave 2s ease-in-out"; //Play waving animation 1second
    setTimeout(() => {
      waveElement.style.animation = "none"; //Reset animation to allow re-triggering
    }, 2000) //Remove animation after it finishes 
  }
  //Loop the animation every 3 seconds (1s animation + 2s rest)
  setInterval(startWaveAnimation, 3000);
  //Start the first wave immediately
  startWaveAnimation();


  //Parallax effect for intro text
  const introElement = document.querySelector(".intro");
  document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    introElement.style.transform = `translateY(${scrollY * 0.5}px)`; //Can adjust for slower/faster effect
  });

});
