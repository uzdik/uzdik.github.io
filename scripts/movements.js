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

// Create ideas clouds rotating around the user in an oval shape
ideas.forEach((idea, index) => {
  const angle = angleOffset + (index / ideas.length) * (2 * Math.PI - angleOffset * 2);
  const x = centerX + ovalWidth / 2 * Math.cos(angle);
  const y = centerY + ovalHeight / 2 * Math.sin(angle);

  const cloud = document.createElement('div');
  cloud.classList.add('idea');
  cloud.textContent = idea;
  cloud.style.left = x + 'px';
  cloud.style.top = y + 'px';
  document.body.appendChild(cloud);

 // Rotate clouds around the user
    const rotateCloud = () => {
      if (!mouseIsOver) { // Check if mouse is not over any idea or center user
        const time = Date.now();
        const newX = centerX + ovalWidth / 2 * Math.cos(angle + time / 1000 + index * 0.1);
        const newY = centerY + ovalHeight / 2 * Math.sin(angle + time / 1000 + index * 0.1);
        cloud.style.left = newX + 'px';
        cloud.style.top = newY + 'px';
      }
    };

    let rotationInterval = setInterval(rotateCloud, 50); // Rotate the cloud
    let mouseIsOver = false;

    // Stop rotation when mouse is over an idea or center user
    cloud.addEventListener('mouseenter', () => {
      clearInterval(rotationInterval);
      mouseIsOver = true;
    });

    cloud.addEventListener('mouseleave', () => {
      rotationInterval = setInterval(rotateCloud, 50);
      mouseIsOver = false;
    });

    centerUser.addEventListener('mouseenter', () => {
      clearInterval(rotationInterval);
      mouseIsOver = true;
    });

    centerUser.addEventListener('mouseleave', () => {
      rotationInterval = setInterval(rotateCloud, 50);
      mouseIsOver = false;
    });
  });
