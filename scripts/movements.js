// Check if the current page is the index page
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
  // Define topics (ideas)
  const ideas = ['Курстар', 'Ой-жазбалар', 'Python', 'Үздіктер', 'Codeforces'];

  // Create the center user
  const centerUser = document.querySelector('.center-user');

  // Array to store rotation intervals
  const rotationIntervals = [];

  // Function to remove all rotation intervals
  function removeRotationIntervals() {
    rotationIntervals.forEach(interval => clearInterval(interval));
  }

  // Function to calculate random idea position within the visible area of the screen
  function calculateRandomIdeaPosition() {
    const randomX = Math.random() * (window.innerWidth - 200); // Subtracting 200 to keep ideas within visible area
    const randomY = Math.random() * (window.innerHeight - 200); // Subtracting 200 to keep ideas within visible area
    return { x: randomX, y: randomY };
  }

  // Create ideas clouds with random positions
  ideas.forEach((idea, index) => {
    const cloud = document.createElement('div');
    cloud.classList.add('idea');
    cloud.textContent = idea;
    document.body.appendChild(cloud);

    // Move ideas to random positions
    const randomPosition = calculateRandomIdeaPosition();
    cloud.style.left = randomPosition.x + 'px';
    cloud.style.top = randomPosition.y + 'px';

    // Stop rotation when mouse is over an idea
    cloud.addEventListener('mouseenter', () => {
      clearInterval(rotationIntervals[index]);
    });

    // Resume rotation when mouse leaves an idea
    cloud.addEventListener('mouseleave', () => {
      if (!centerUser.classList.contains('hovered')) {
        rotationIntervals[index] = setInterval(() => {
          const randomPosition = calculateRandomIdeaPosition();
          cloud.style.left = randomPosition.x + 'px';
          cloud.style.top = randomPosition.y + 'px';
        }, 50);
      }
    });

    // Rotate clouds around the user
    rotationIntervals[index] = setInterval(() => {
      const randomPosition = calculateRandomIdeaPosition();
      cloud.style.left = randomPosition.x + 'px';
      cloud.style.top = randomPosition.y + 'px';
    }, 50);
  });

  // Stop rotation when mouse is over the center user
  centerUser.addEventListener('mouseenter', () => {
    centerUser.classList.add('hovered');
    removeRotationIntervals();
  });

  // Resume rotation when mouse leaves the center user
  centerUser.addEventListener('mouseleave', () => {
    centerUser.classList.remove('hovered');
    ideas.forEach((idea, index) => {
      if (!document.querySelector('.idea:hover')) {
        rotationIntervals[index] = setInterval(() => {
          const randomPosition = calculateRandomIdeaPosition();
          document.querySelectorAll('.idea')[index].style.left = randomPosition.x + 'px';
          document.querySelectorAll('.idea')[index].style.top = randomPosition.y + 'px';
        }, 50);
      }
    });
  });

  // Remove rotation intervals before unloading the page
  window.addEventListener('beforeunload', removeRotationIntervals);
}
