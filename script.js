// ==================== TEAM DATA ====================
const teamData = {
    teamName: "TEAM MTSKV",
    tagline: "Building the future, one project at a time",
    members: [
        {
            id: 1,
            name: "S. Viplav",
            role: "Team Coordinator",
            category: "team-coordinator",
            icon: "fas fa-crown",
            description: "Leading innovation and excellence",
            bio: "I am a B.Tech CSE (AI) student at ICFAI University, currently serving as a Coordinator in the Swecha Viswam AI Internship Program. I enjoy organizing team workflows, collaborating on AI-driven initiatives, and learning modern software technologies.",
            skills: ["C", "OOPS", "MYSQL", "PYTHON"],
            social: {
                linkedin: "https://www.linkedin.com/in/viplav-sindhu",
                github: "https://github.com/shindhuviplav-code"
            }
        },
        {
            id: 2,
            name: "MEMBER 2 NAME",
            role: "Intern",
            category: "team-member",
            icon: "fas fa-code",
            description: "Building scalable solutions",
            bio: "Passionate developer with expertise in modern technologies.",
            skills: ["JavaScript", "React", "Node.js", "Python"],
            social: {
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            }
        },
        {
            id: 3,
            name: "MEMBER 3 NAME",
            role: "Intern",
            category: "team-member",
            icon: "fas fa-palette",
            description: "Creating beautiful experiences",
            bio: "Creative designer focused on user experience.",
            skills: ["UI Design", "Figma", "UX Research", "Prototyping"],
            social: {
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            }
        },
        {
            id: 4,
            name: "MEMBER 4 NAME",
            role: "Intern",
            category: "team-member",
            icon: "fas fa-chart-line",
            description: "Driving growth",
            bio: "Data-driven marketer with expertise in digital strategy.",
            skills: ["SEO", "Marketing", "Analytics", "Content Strategy"],
            social: {
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            }
        },
        {
            id: 5,
            name: "MEMBER 5 NAME",
            role: "Intern",
            category: "team-member",
            icon: "fas fa-brain",
            description: "Transforming data",
            bio: "Data scientist passionate about machine learning.",
            skills: ["Python", "Machine Learning", "Data Analysis", "SQL"],
            social: {
                linkedin: "https://linkedin.com",
                github: "https://github.com"
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
