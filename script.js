// ==================== TEAM DATA ====================
// 🔥 EDIT THIS SECTION 🔥

const teamData = {
    teamName: "TEAM MTSKV",
    tagline: "Building the future, one project at a time",
    members: [
        {
            id: 1,
            name: "Member Name 1",
            role: "Team Leader",
            category: "leadership",
            icon: "fas fa-crown",
            description: "Leading our team with vision and passion for innovation.",
            bio: "A visionary leader with over 5 years of experience in project management and team coordination. Passionate about driving innovation and building high-performing teams that deliver exceptional results.",
            skills: ["Leadership", "Strategy", "Project Management", "Team Building"],
            social: {
                linkedin: "https://linkedin.com",
                github: "https://github.com",
                twitter: "https://twitter.com",
                email: "member1@mtskv.com"
            }
        },
        {
            id: 2,
            name: "Member Name 2",
            role: "Full Stack Developer",
            category: "development",
            icon: "fas fa-code",
            description: "Crafting robust and scalable web applications.",
            bio: "Expert full-stack developer specializing in modern web technologies. Passionate about creating elegant solutions to complex problems and writing clean, maintainable code.",
            skills: ["JavaScript", "React", "Node.js", "Python", "MongoDB"],
            social: {
                linkedin: "https://linkedin.com",
                github: "https://github.com",
                twitter: "https://twitter.com",
                email: "member2@mtskv.com"
            }
        },
        {
            id: 3,
            name: "Member Name 3",
            role: "UI/UX Designer",
            category: "design",
            icon: "fas fa-palette",
            description: "Creating beautiful and intuitive user experiences.",
            bio: "Creative designer with a keen eye for aesthetics and user experience. Specialized in creating intuitive interfaces that users love and businesses need.",
            skills: ["UI Design", "UX Research", "Figma", "Adobe XD", "Prototyping"],
            social: {
                linkedin: "https://linkedin.com",
                github: "https://github.com",
                twitter: "https://twitter.com",
                email: "member3@mtskv.com"
            }
        },
        {
            id: 4,
            name: "Member Name 4",
            role: "Digital Marketing Strategist",
            category: "marketing",
            icon: "fas fa-chart-line",
            description: "Driving growth through data-driven marketing strategies.",
            bio: "Results-driven marketing professional with expertise in digital strategy, SEO, and content marketing. Proven track record of growing online presence and driving conversions.",
            skills: ["SEO", "Content Strategy", "Social Media", "Analytics", "PPC"],
            social: {
                linkedin: "https://linkedin.com",
                github: "https://github.com",
                twitter: "https://twitter.com",
                email: "member4@mtskv.com"
            }
        },
        {
            id: 5,
            name: "Member Name 5",
            role: "Data Scientist",
            category: "development",
            icon: "fas fa-brain",
            description: "Transforming data into actionable insights.",
            bio: "Data enthusiast with strong analytical skills and expertise in machine learning. Passionate about uncovering patterns in data and building predictive models.",
            skills: ["Python", "Machine Learning", "Data Visualization", "SQL", "TensorFlow"],
            social: {
                linkedin: "https://linkedin.com",
                github: "https://github.com",
                twitter: "https://twitter.com",
                email: "member5@mtskv.com"
            }
        }
    ]
};

// ==================== DOM ELEMENTS ====================
const teamGrid = document.getElementById('teamGrid');
const modal = document.getElementById('memberModal');
const closeModalBtn = document.getElementById('closeModal');
const modalOverlay = document.querySelector('.modal-overlay');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const filterButtons = document.querySelectorAll('.filter-btn');

// ==================== RENDER TEAM CARDS ====================
function renderTeamCards(filter = 'all') {
    teamGrid.innerHTML = '';
    
    const filteredMembers = filter === 'all' 
        ? teamData.members 
        : teamData.members.filter(member => member.category === filter);
    
    filteredMembers.forEach((member, index) => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="card-icon">
                <i class="${member.icon}"></i>
            </div>
            <div class="card-content">
                <h3 class="card-name">${member.name}</h3>
                <span class="card-role">${member.role}</span>
                <p class="card-description">${member.description}</p>
                <div class="card-skills">
                    ${member.skills.slice(0, 3).map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                    ${member.skills.length > 3 ? `<span class="skill-badge">+${member.skills.length - 3}</span>` : ''}
                </div>
            </div>
            <div class="card-social">
                ${member.social.linkedin ? `<a href="${member.social.linkedin}" target="_blank" class="social-icon" onclick="event.stopPropagation()"><i class="fab fa-linkedin"></i></a>` : ''}
                ${member.social.github ? `<a href="${member.social.github}" target="_blank" class="social-icon" onclick="event.stopPropagation()"><i class="fab fa-github"></i></a>` : ''}
                ${member.social.twitter ? `<a href="${member.social.twitter}" target="_blank" class="social-icon" onclick="event.stopPropagation()"><i class="fab fa-twitter"></i></a>` : ''}
                ${member.social.email ? `<a href="mailto:${member.social.email}" class="social-icon" onclick="event.stopPropagation()"><i class="fas fa-envelope"></i></a>` : ''}
            </div>
        `;
        
        card.addEventListener('click', () => openModal(member));
        teamGrid.appendChild(card);
    });
}

// ==================== FILTER FUNCTIONALITY ====================
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        renderTeamCards(filter);
    });
});

// ==================== MODAL ====================
function openModal(member) {
    const modalName = document.getElementById('modalName');
    const modalRole = document.getElementById('modalRole');
    const modalBio = document.getElementById('modalBio');
    const modalSkills = document.getElementById('modalSkills');
    const modalSocial = document.getElementById('modalSocial');
    
    modalName.textContent = member.name;
    modalRole.textContent = member.role;
    modalBio.textContent = member.bio;
    
    modalSkills.innerHTML = member.skills.map(skill => 
        `<span class="skill-tag">${skill}</span>`
    ).join('');
    
    modalSocial.innerHTML = `
        ${member.social.linkedin ? `<a href="${member.social.linkedin}" target="_blank" class="social-link"><i class="fab fa-linkedin"></i></a>` : ''}
        ${member.social.github ? `<a href="${member.social.github}" target="_blank" class="social-link"><i class="fab fa-github"></i></a>` : ''}
        ${member.social.twitter ? `<a href="${member.social.twitter}" target="_blank" class="social-link"><i class="fab fa-twitter"></i></a>` : ''}
        ${member.social.email ? `<a href="mailto:${member.social.email}" class="social-link"><i class="fas fa-envelope"></i></a>` : ''}
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ==================== NAVIGATION ====================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// ==================== NAVBAR SCROLL ====================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==================== STATS COUNTER ====================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                if (counter.textContent === '0') {
                    animateCounter(counter);
                }
            });
        }
    });
}, observerOptions);

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    observer.observe(heroStats);
}

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== FORM SUBMISSION ====================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
    renderTeamCards();
});
