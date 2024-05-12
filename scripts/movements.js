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

  // Function to calculate idea position
  function calculateIdeaPosition(index, time) {
    const centerX = centerUser.offsetLeft + centerUser.offsetWidth / 2;
    const centerY = centerUser.offsetTop + centerUser.offsetHeight / 2;
    const angle = angleOffset + (index / ideas.length) * (2 * Math.PI - angleOffset * 2);
    // Adjust radius for distance from center
    const radius = ovalWidth / 2 + 200; // 50 pixels further from the center
    // Calculate x and y positions
    const x = centerX + radius * Math.cos(angle + time / 1000 + index * 0.1);
    const y = centerY + (ovalHeight / 2) * Math.sin(angle + time / 1000 + index * 0.1);
  
    return { x, y };
  }

  // Create ideas clouds rotating around the user in an oval shape
  ideas.forEach((idea, index) => {
    const cloud = document.createElement('div');
    cloud.classList.add('idea');
    cloud.textContent = idea;
    document.body.appendChild(cloud);

    // Move ideas from center to random position
    setTimeout(() => {
      const time = Date.now();
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;
      cloud.style.left = randomX + 'px';
      cloud.style.top = randomY + 'px';
    }, 1000); // Delay moving ideas by 1 second

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
