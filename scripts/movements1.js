// Check if the current page is the index page
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
  // Define topics (ideas)
  const ideas = ['Idea A', 'Idea B', 'Idea C', 'Idea D'];

  // Create the center user
  const centerUser = document.querySelector('.center-user');

  // Define oval parameters
  const ovalWidth = 300; // Width of the oval
  const ovalHeight = 200; // Height of the oval
  const centerX = window.innerWidth / 2; // X-coordinate of the center of the oval
  const centerY = window.innerHeight / 2; // Y-coordinate of the center of the oval
  const angleOffset = Math.PI / 8; // Offset for starting angle

  // Create user center image
  const userImage = document.createElement('img');
  userImage.src = "/assets/img/uzdik-logo.png";
  userImage.alt = "User";
  userImage.classList.add('user-image');
  centerUser.appendChild(userImage);

  // Function to calculate the position of an idea on the ellipse
  function calculatePosition(angle, radiusX, radiusY, centerX, centerY) {
    const x = centerX + radiusX * Math.cos(angle);
    const y = centerY + radiusY * Math.sin(angle);
    return { x, y };
  }

  // Function to create and initialize an idea
  function initializeIdea(idea, index) {
    const angle = angleOffset + (index / ideas.length) * (2 * Math.PI - angleOffset * 2);
    const { x, y } = calculatePosition(angle, ovalWidth / 2, ovalHeight / 2, centerX, centerY);
    
    const ideaElement = document.createElement('div');
    ideaElement.classList.add('idea');
    ideaElement.textContent = idea;
    ideaElement.style.left = x + 'px';
    ideaElement.style.top =     ideaElement.style.top = y + 'px';

    // Add event listener to stop rotation when idea is hovered
    ideaElement.addEventListener('mouseenter', () => {
      clearInterval(rotationInterval);
    });

    // Add event listener to resume rotation when mouse leaves idea
    ideaElement.addEventListener('mouseleave', () => {
      rotationInterval = setInterval(rotateIdeas, 50);
    });

    document.body.appendChild(ideaElement);

    return { element: ideaElement, angle };
  }

  // Initialize and store all ideas
  const ideaObjects = ideas.map((idea, index) => initializeIdea(idea, index));

  // Function to rotate ideas around the user-center
  function rotateIdeas() {
    const time = Date.now();
    ideaObjects.forEach(({ element, angle }, index) => {
      const newX = centerX + ovalWidth / 2 * Math.cos(angle + time / 1000 + index * 0.1);
      const newY = centerY + ovalHeight / 2 * Math.sin(angle + time / 1000 + index * 0.1);
      element.style.left = newX + 'px';
      element.style.top = newY + 'px';
    });
  }

  // Rotate ideas periodically
  let rotationInterval = setInterval(rotateIdeas, 50);

  // Function to enlarge the user-center image and stop idea rotation when hovered
  function handleUserCenterHover() {
    clearInterval(rotationInterval);
    userImage.style.transform = 'scale(1.2)';
    ideaObjects.forEach(({ element }) => {
      element.style.transition = 'none';
    });
  }

  // Function to shrink the user-center image and resume idea rotation when not hovered
  function handleUserCenterLeave() {
    rotationInterval = setInterval(rotateIdeas, 50);
    userImage.style.transform = 'scale(1)';
    ideaObjects.forEach(({ element }) => {
      element.style.transition = '';
    });
  }

  // Add event listeners for user-center hover and leave
  centerUser.addEventListener('mouseenter', handleUserCenterHover);
  centerUser.addEventListener('mouseleave', handleUserCenterLeave);
}

