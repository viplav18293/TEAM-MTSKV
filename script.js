// ==================== TEAM DATA ====================
// 🔥 EDIT THIS SECTION TO CUSTOMIZE YOUR TEAM 🔥

const teamData = {
    teamName: "TEAM MTSKV",
    tagline: "Excellence Through Collaboration",
    members: [
        {
            id: 1,
            name: "Member Name 1",
            role: "Team Leader",
            description: "Short description about member 1",
            bio: "Detailed biography of member 1. Share their experience, passion, and what they bring to the team. This can be 2-3 sentences long.",
            image: "https://via.placeholder.com/400x400/667eea/ffffff?text=Member+1",
            skills: ["Leadership", "Project Management", "Strategy", "Communication"],
            social: {
                linkedin: "https://linkedin.com",
                github: "https://github.com",
                twitter: "https://twitter.com",
                email: "member1@example.com"
            }
        },
        {
            id: 2,
            name: "Member Name 2",
            role: "Developer",
            description: "Short description about member 2",
            bio: "Detailed biography of member 2. Share their experience, passion, and what they bring to the team. This can be 2-3 sentences long.",
            image: "https://via.placeholder.com/400x400/764ba2/ffffff?text=Member+2",
            skills: ["JavaScript", "React", "Node.js", "HTML/CSS"],
            social: {
                linkedin: "https://linkedin.com",
                github: "https://github.com",
                twitter: "https://twitter.com",
                email: "member2@example.com"
            }
        },
        {
            id: 3,
            name: "Member Name 3",
            role: "Designer",
            description: "Short description about member 3",
            bio: "Detailed biography of member 3. Share their experience, passion, and what they bring to the team. This can be 2-3 sentences long.",
            image: "https://via.placeholder.com/400x400/667eea/ffffff?text=Member+3",
            skills: ["UI/UX Design", "Figma", "Adobe XD", "Graphic Design"],
            social: {
                linkedin: "https://linkedin.com",
                github: "https://github.com",
                twitter: "https://twitter.com",
                email: "member3@example.com"
            }
        },
        {
            id: 4,
            name: "Member Name 4",
            role: "Marketing Specialist",
            description: "Short description about member 4",
            bio: "Detailed biography of member 4. Share their experience, passion, and what they bring to the team. This can be 2-3 sentences long.",
            image: "https://via.placeholder.com/400x400/764ba2/ffffff?text=Member+4",
            skills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
            social: {
                linkedin: "https://linkedin.com",
                github: "https://github.com",
                twitter: "https://twitter.com",
                email: "member4@example.com"
            }
        },
        {
            id: 5,
            name: "Member Name 5",
            role: "Data Analyst",
            description: "Short description about member 5",
            bio: "Detailed biography of member 5. Share their experience, passion, and what they bring to the team. This can be 2-3 sentences long.",
            image: "https://via.placeholder.com/400x400/667eea/ffffff?text=Member+5",
            skills: ["Python", "Data Visualization", "SQL", "Machine Learning"],
            social: {
                linkedin: "https://linkedin.com",
                github: "https://github.com",
                twitter: "https://twitter.com",
                email: "member5@example.com"
            }
        }
    ]
};

// ==================== DOM ELEMENTS ====================
const teamGrid = document.getElementById('teamGrid');
const modal = document.getElementById('memberModal');
const closeModal = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalRole = document.getElementById('modalRole');
const modalBio = document.getElementById('modalBio');
const modalSkills = document.getElementById('modalSkills');
const modalSocial = document.getElementById('modalSocial');

// ==================== RENDER TEAM CARDS ====================
function renderTeamCards() {
    teamGrid.innerHTML = '';
    
    teamData.members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}" class="card-image">
            <div class="card-content">
                <h3 class="card-name">${member.name}</h3>
                <p class="card-role">${member.role}</p>
                <p class="card-description">${member.description}</p>
                <div class="card-social">
                    ${member.social.linkedin ? `<a href="${member.social.linkedin}" target="_blank" onclick="event.stopPropagation()"><i class="fab fa-linkedin social-icon"></i></a>` : ''}
                    ${member.social.github ? `<a href="${member.social.github}" target="_blank" onclick="event.stopPropagation()"><i class="fab fa-github social-icon"></i></a>` : ''}
                    ${member.social.twitter ? `<a href="${member.social.twitter}" target="_blank" onclick="event.stopPropagation()"><i class="fab fa-twitter social-icon"></i></a>` : ''}
                    ${member.social.email ? `<a href="mailto:${member.social.email}" onclick="event.stopPropagation()"><i class="fas fa-envelope social-icon"></i></a>` : ''}
                </div>
            </div>
        `;
        
        // Add click event to open modal
        card.addEventListener('click', () => openModal(member));
        
        teamGrid.appendChild(card);
    });
}

// ==================== OPEN MODAL ====================
function openModal(member) {
    modalImage.src = member.image;
    modalImage.alt = member.name;
    modalName.textContent = member.name;
    modalRole.textContent = member.role;
    modalBio.textContent = member.bio;
    
    // Render skills
    modalSkills.innerHTML = `
        <h3>Skills & Expertise</h3>
        <div class="skills-list">
            ${member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
    `;
    
    // Render social links
    modalSocial.innerHTML = `
        ${member.social.linkedin ? `<a href="${member.social.linkedin}" target="_blank"><i class="fab fa-linkedin social-icon"></i></a>` : ''}
        ${member.social.github ? `<a href="${member.social.github}" target="_blank"><i class="fab fa-github social-icon"></i></a>` : ''}
        ${member.social.twitter ? `<a href="${member.social.twitter}" target="_blank"><i class="fab fa-twitter social-icon"></i></a>` : ''}
        ${member.social.email ? `<a href="mailto:${member.social.email}"><i class="fas fa-envelope social-icon"></i></a>` : ''}
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// ==================== CLOSE MODAL ====================
function closeModalHandler() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

closeModal.addEventListener('click', closeModalHandler);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalHandler();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModalHandler();
    }
});

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
    renderTeamCards();
});