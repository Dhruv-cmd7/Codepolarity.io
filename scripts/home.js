// Mobile menu functionality
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const dropBtns = document.querySelectorAll('.mobile-menu .dropbtn');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Handle dropdowns in mobile menu
dropBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdown = btn.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    mobileMenu.classList.remove('active');
    menuBtn.classList.remove('active');
  }
});

// Close mobile menu when clicking a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuBtn.classList.remove('active');
  });
});

// Scroll Animation with Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  // Add scroll-animate class to main sections
  const sections = document.querySelectorAll('.code-editor-section, .brand-scrolling, .main-content, .ai-features, .user-reviews, .platform');
  sections.forEach(section => {
    section.classList.add('scroll-animate');
  });

  // Add stagger-children class to grid containers
  const grids = document.querySelectorAll('.feature-grid, .ai-grid');
  grids.forEach(grid => {
    grid.classList.add('stagger-children');
  });

  // Add scroll-animate class to individual cards
  const cards = document.querySelectorAll('.feature-card, .ai-card, .review-card');
  cards.forEach(card => {
    card.classList.add('scroll-animate');
  });

  // Create Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Add visible class when element enters viewport
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // For stagger-children, add visible class to parent
        if (entry.target.classList.contains('stagger-children')) {
          entry.target.classList.add('visible');
        }
      }
    });
  }, {
    root: null, // Use viewport as root
    rootMargin: '0px', // No margin
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  // Observe all elements with scroll-animate class
  document.querySelectorAll('.scroll-animate, .stagger-children').forEach(element => {
    observer.observe(element);
  });

  // 3D Model Setup and Animation
  const modelContainer = document.getElementById('model-container');
  const canvas = document.getElementById('model-canvas');
  
  // Create scene
  const scene = new THREE.Scene();
  
  // Create camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 15; // Adjusted for better view in hero section
  
  // Create renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  // Add lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  
  // Add point lights for better illumination
  const pointLight1 = new THREE.PointLight(0x60a6fa, 1, 50);
  pointLight1.position.set(10, 10, 10);
  scene.add(pointLight1);
  
  const pointLight2 = new THREE.PointLight(0x22d2ee, 1, 50);
  pointLight2.position.set(-10, -10, 10);
  scene.add(pointLight2);
  
  // Create binary code particles
  const particles = [];
  const particleCount = 100; // Increased particle count
  
  for (let i = 0; i < particleCount; i++) {
    const size = Math.random() * 0.3 + 0.1; // Slightly larger particles
    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshPhongMaterial({
      color: Math.random() > 0.5 ? 0x60a6fa : 0x22d2ee,
      transparent: true,
      opacity: 0.7,
      shininess: 100
    });
    
    const particle = new THREE.Mesh(geometry, material);
    
    // Position particles in a sphere around the center, adjusted for hero section
    const radius = Math.random() * 6 + 3; // Adjusted radius for hero section
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    
    particle.position.x = radius * Math.sin(phi) * Math.cos(theta);
    particle.position.y = radius * Math.sin(phi) * Math.sin(theta);
    particle.position.z = radius * Math.cos(phi);
    
    // Add binary code to some particles
    if (Math.random() > 0.5) { // Increased chance of having code
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 64;
      canvas.height = 64;
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = '14px monospace'; // Slightly larger font
      context.fillStyle = '#000000';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      
      const binaryCodes = ['1010', '1100', '0101', '1111', '0000', '1001', '0110', '0011', 
                         '{ }', '()', '[]', '=>', ';', '//', '/*', '*/'];
      const text = binaryCodes[Math.floor(Math.random() * binaryCodes.length)];
      context.fillText(text, canvas.width / 2, canvas.height / 2);
      
      const texture = new THREE.CanvasTexture(canvas);
      const textMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.9
      });
      
      const textGeometry = new THREE.PlaneGeometry(size, size);
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.z = size / 2 + 0.01;
      particle.add(textMesh);
    }
    
    scene.add(particle);
    particles.push({
      mesh: particle,
      speed: Math.random() * 0.005 + 0.002, // Further reduced speed
      direction: new THREE.Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      ).normalize()
    });
  }
  
  // Add orbit controls
  const controls = new THREE.OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false;
  
  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    
    // Animate particles
    particles.forEach(particle => {
      particle.mesh.position.add(particle.direction.clone().multiplyScalar(particle.speed));
      
      // Wrap particles around if they go too far
      const distance = particle.mesh.position.length();
      if (distance > 12) { // Increased boundary
        particle.mesh.position.set(
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 12
        );
      }
      
      // Rotate particles even more slowly
      particle.mesh.rotation.x += 0.001; // Further reduced rotation speed
      particle.mesh.rotation.y += 0.001; // Further reduced rotation speed
    });
    
    controls.update();
    renderer.render(scene, camera);
  }
  
  // Start animation
  animate();
  
  // Show 3D model when it's in viewport
  const modelObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        modelContainer.classList.add('visible');
      } else {
        modelContainer.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  // Observe only the hero section
  const heroSection = document.querySelector('.code-editor-section');
  modelObserver.observe(heroSection);
}); 