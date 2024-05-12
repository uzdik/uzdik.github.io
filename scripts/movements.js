// Check if the current page is the index page
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
  // Define topics (ideas)
  const ideas = ['Курстар', 'Ой-жазбалар', 'Python', 'Үздіктер', 'Codeforces'];

  // Create the center user
  const centerUser = document.querySelector('.center-user');

  // Define oval parameters
  const ovalWidth = 600; // Width of the oval
  const ovalHeight = 400; // Height of the oval
  const angleOffset = Math.PI / 8; // Offset for starting angle

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

  // Rotate clouds around the user
  const rotateCloud = () => {
    const time = Date.now();
    const { x, y } = calculateIdeaPosition(index, time);
    cloud.style.left = x + 'px';
    cloud.style.top = y + 'px';
  };

  let rotationInterval = setInterval(rotateCloud, 50); // Rotate the cloud
  rotationIntervals.push(rotationInterval); // Push rotation interval to the array

  // Stop rotation when mouse is over an idea
  cloud.addEventListener('mouseenter', () => {
    clearInterval(rotationInterval);
  });

  // Resume rotation when mouse leaves an idea
  cloud.addEventListener('mouseleave', () => {
    if (!centerUser.classList.contains('hovered')) {
      rotationInterval = setInterval(rotateCloud, 50);
      rotationIntervals.push(rotationInterval); // Push rotation interval to the array
    }
  });
});


  // Stop rotation when mouse is over the center user
  centerUser.addEventListener('mouseenter', () => {
    centerUser.classList.add('hovered');
    removeRotationIntervals();
  });

  // Resume rotation when mouse leaves the center user
  centerUser.addEventListener('mouseleave', () => {
    centerUser.classList.remove('hovered');
    rotationIntervals.forEach(interval => {
      const index = rotationIntervals.indexOf(interval);
      if (index > -1) {
        rotationIntervals.splice(index, 1);
      }
    });
    ideas.forEach((idea, index) => {
      if (!document.querySelector('.idea:hover')) {
        const rotateCloud = () => {
          const time = Date.now();
          const { x, y } = calculateIdeaPosition(index, time);
          document.querySelectorAll('.idea')[index].style.left = x + 'px';
          document.querySelectorAll('.idea')[index].style.top = y + 'px';
        };
        const rotationInterval = setInterval(rotateCloud, 50); // Rotate the cloud
        rotationIntervals.push(rotationInterval); // Push rotation interval to the array
      }
    });
  });

  // Remove rotation intervals before unloading the page
  window.addEventListener('beforeunload', removeRotationIntervals);
}
