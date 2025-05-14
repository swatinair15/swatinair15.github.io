document.addEventListener("DOMContentLoaded", () => {


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
      element.addEventListener("click", () => redirectTo("accountingworkflows.html"));
    });
  }

  // Target the second project (Leaflink)
  const leaflinkProject = document.querySelector("article:nth-of-type(2)");
  if (leaflinkProject) {
    const clickableElements = leaflinkProject.querySelectorAll(".project-image, h3, p");
    clickableElements.forEach((element) => {
        element.addEventListener("click", () => redirectTo("leaflink.html"));
    });
  }
 
  // Target the third project (Greeminder)
  const greeminderProject = document.querySelector("article:nth-of-type(3)");
  if (greeminderProject) {
    const clickableElements = greeminderProject.querySelectorAll(".project-image, h3, p");
    clickableElements.forEach((element) => {
        element.addEventListener("click", () => redirectTo("greeminder.html"));
    });
  }

  // Target the fourth project (Corridor)
  const corridorProject = document.querySelector("article:nth-of-type(4)");
  if (corridorProject) {
    const clickableElements = corridorProject.querySelectorAll(".project-image, h3, p");
    clickableElements.forEach((element) => {
        element.addEventListener("click", () => redirectTo("corridor.html"));
    });
  }

  const categoryCards = document.querySelectorAll('.category-card[data-link]');
  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const targetUrl = card.getAttribute('data-link');
      window.location.href = targetUrl;
    });
  });

/*
  // Select all articles in "Other Works" section
  const otherWorksProjects = document.querySelectorAll("#other-works article");

  // Define URLs for each project
  const projectLinks = [
    "microinteractions.html",   // First project
    "social-media-creatives.html",         // Second project
    "motion-graphics.html"       // Third project
  ];

  // Loop through each project and add click event
  otherWorksProjects.forEach((project, index) => {
    project.addEventListener("click", () => {
        redirectTo(projectLinks[index]);
    });
  });
*/


    
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

/*
  //Smooth scroll to work section
  const workLink = document.querySelector('a[href="#work"]');
  workLink.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#work").scrollIntoView({ behavior: "smooth" });
  });

*/

});
