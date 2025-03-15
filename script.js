// Sample data
const memories = [
    "Late night physics problem solving marathon",
    "The legendary robotics competition preparation",
    "That time we crashed the lab computer during coding",
    "Midnight stargazing session on the roof",
    "The Great Chemistry Lab Incident of 2023",
    "Building a makeshift Arduino alarm system",
    "3AM Math Olympiad training sessions",
    "The day we all aced the Calculus exam",
    "Our first successful science fair project",
    "When we hacked the dorm's WiFi (and got caught)",
    "Bio lab specimens escaping adventure",
    "Creating a smart lighting system for our rooms"
];

const jokes = {
    "The Pascal Incident": "When someone used Pascal instead of Python",
    "Code Debug": "When the supervisor thought debugging meant actual insects",
    "Math Emergency": "3AM calculus crisis before the exam",
    "Lab Protocol": "That time someone wore pajamas to the lab",
    "Physics Laws": "When we tried to prove gravity wrong (spoiler: we failed)",
    "Chemistry Rules": "No more experimental cooking in the microwave",
    "Bio Lab": "Keep your specimens in the lab, not under your bed",
    "Engineering 101": "Duct tape fixes everything (except grades)",
    "Computer Science": "It works on my machine ¯\\_(ツ)_/¯",
    "Robot Race": "When our robot chose freedom over the competition"
};

const stemMemories = {
    academic: [
        "Pulling an all-nighter for the Physics Olympiad",
        "That time we solved a 'impossible' math problem",
        "Group study sessions that turned into discovery moments",
        "When we built our first working robot",
        "The day everyone got perfect scores in Chemistry"
    ],
    laboratory: [
        "The legendary chemical reaction that went purple",
        "Our first successful PCR experiment",
        "The day we accidentally created a mini light show",
        "Building a working weather station",
        "The great Arduino project that actually worked"
    ],
    dormLife: [
        "Late night debugging sessions",
        "The impromptu science quiz competition",
        "Making ice cream with liquid nitrogen",
        "Building a smart dorm room system",
        "The great WiFi optimization project"
    ]
};

const dormMemories = {
    daily: [
        "Our 2AM instant noodle feasts during study breaks",
        "The legendary ping pong tournament in the common room",
        "That time we turned the corridor into a physics experiment",
        "Our weekly movie nights with DIY snacks",
        "Making a room-wide pulley system for passing notes"
    ],
    study: [
        "Group study sessions that turned into storytelling nights",
        "Creating mind maps all over the walls with sticky notes",
        "The whiteboard wars during math problem solving",
        "Our impromptu teaching sessions before exams",
        "Building a mini lab in Room 203"
    ],
    adventures: [
        "Sneaking to the roof for stargazing practice",
        "The Great Room Swap of 2023",
        "Converting the common room into a makeshift lab",
        "Our midnight snack supply missions",
        "The time we automated the dorm lights with Arduino"
    ]
};

const stemJokes = [
    "Why don't programmers like nature? It has too many bugs!",
    "Why did the physics student break up with the biology student? There was no chemistry!",
    "Why do mathematicians love Halloween? Because Cos(Pumpkin Pie) = -1",
    "What did the cell say when his sister stepped on his foot? Mitosis!"
];

function showRandomJoke() {
    const jokeIndex = Math.floor(Math.random() * stemJokes.length);
    const jokeToast = document.createElement('div');
    jokeToast.className = 'joke-toast';
    jokeToast.textContent = stemJokes[jokeIndex];
    document.body.appendChild(jokeToast);
    setTimeout(() => jokeToast.remove(), 3000);
}

// Add joke every 5 minutes
setInterval(showRandomJoke, 300000);

// Easter egg: Type 'coffee' for surprise
let coffeeCode = '';
document.addEventListener('keypress', (e) => {
    coffeeCode += e.key;
    if (coffeeCode.includes('coffee')) {
        document.querySelectorAll('.coffee-icon').forEach(icon => {
            icon.style.animation = 'wiggle 0.5s infinite';
        });
        setTimeout(() => {
            document.querySelectorAll('.coffee-icon').forEach(icon => {
                icon.style.animation = '';
            });
        }, 2000);
        coffeeCode = '';
    }
});

// Random memory generator
function generateRandomMemory() {
    const randomIndex = Math.floor(Math.random() * memories.length);
    const result = document.getElementById('random-result');
    result.textContent = memories[randomIndex];
    result.classList.add('fade-in');
}

// File upload handling
function uploadMeme() {
    const input = document.getElementById('meme-input');
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const memeContainer = document.createElement('div');
            memeContainer.className = 'meme-item';
            memeContainer.innerHTML = `
                <img src="${e.target.result}" alt="Uploaded meme">
                <div class="meme-actions">
                    <button onclick="likeMeme(this)"><i class="fas fa-heart"></i></button>
                </div>
            `;
            document.querySelector('.memes-container').appendChild(memeContainer);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.card');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    generateRandomMemory();
    // Add more initialization code
});

// Remove the duplicate scroll handlers and replace with this single implementation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.main-nav')) {
            navLinks.classList.remove('active');
        }
    });
});

// Add navbar background on scroll
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.main-nav');
    
    function updateNav() {
        if (window.scrollY > window.innerHeight - 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateNav);
    updateNav();
});

// Initialize memory sections
document.addEventListener('DOMContentLoaded', function() {
    populateMemories();
    setupMemoryFilters();
});

function populateMemories() {
    const dailyContainer = document.getElementById('daily-memories');
    const studyContainer = document.getElementById('study-memories');
    const adventureContainer = document.getElementById('adventure-memories');

    dormMemories.daily.forEach(memory => {
        dailyContainer.appendChild(createMemoryCard(memory, 'daily-life'));
    });
    
    dormMemories.study.forEach(memory => {
        studyContainer.appendChild(createMemoryCard(memory, 'study-time'));
    });
    
    dormMemories.adventures.forEach(memory => {
        adventureContainer.appendChild(createMemoryCard(memory, 'adventure'));
    });
}

function createMemoryCard(memory, type) {
    const card = document.createElement('div');
    card.className = `memory-card ${type}`;
    card.innerHTML = `
        <p>${memory}</p>
        <div class="memory-actions">
            <button onclick="likeMemory(this)">
                <i class="fas fa-heart"></i>
            </button>
        </div>
    `;
    return card;
}

// Media Gallery Handler
const mediaGallery = {
    currentIndex: 0,
    mediaItems: [],
    viewer: null,

    init() {
        this.setupGallery();
        this.setupViewer();
    },

    setupGallery() {
        const items = document.querySelectorAll('.media-item');
        items.forEach((item, index) => {
            item.addEventListener('click', () => this.openViewer(index));
            this.mediaItems.push(item);
        });
    },

    setupViewer() {
        const template = document.getElementById('media-viewer');
        if (template) {
            document.body.appendChild(template.content.cloneNode(true));
            this.viewer = document.querySelector('.media-viewer');
            this.setupViewerControls();
        }
    },

    openViewer(index) {
        this.currentIndex = index;
        this.updateViewer();
        this.viewer.style.display = 'flex';
    },

    updateViewer() {
        const item = this.mediaItems[this.currentIndex];
        const content = item.querySelector('img, video').cloneNode(true);
        const viewerContent = this.viewer.querySelector('.viewer-content');
        viewerContent.innerHTML = '';
        viewerContent.appendChild(content);
        if (content.tagName === 'VIDEO') {
            content.controls = true;
        }
    }
};

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    mediaGallery.init();
    // ...existing initialization code...
});

// Mobile menu handling
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.main-nav')) {
        document.querySelector('.nav-menu').classList.remove('active');
    }
});
