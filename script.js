const menuBtn = document.getElementById('menuBtn'), nav = document.getElementById('navLinks'); menuBtn.addEventListener('click', () => nav.classList.toggle('open')); document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Function to get the current year for the footer
const setCurrentYear = () => {
    const yearSpan = document.getElementById('current-year');
    yearSpan.textContent = new Date().getFullYear();
};

// A simple data source for projects (can be a JSON file or an API)
const projects = [
    {
        title: "Project Alpha",
        description: "A dynamic web application built with HTML, CSS, and JavaScript.",
        link: "#"
    },
    {
        title: "Project Beta",
        description: "An e-commerce prototype using React and a mock API.",
        link: "#"
    },
    {
        title: "Project Gamma",
        description: "A data visualization tool with D3.js.",
        link: "#"
    }
];

// Function to dynamically create project cards
const renderProjects = () => {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = ''; // Clear existing content

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;

        projectList.appendChild(projectCard);
    });
};

// Handle form submission
const handleFormSubmission = async (event) => {
    event.preventDefault(); // Prevent default form submission
    
    const form = event.target;
    const statusDiv = document.getElementById('contact-status');
    const formData = new FormData(form);

    // This is a simple mock of sending data to a server.
    // In a real application, you would use `fetch()` here to send data
    // to a backend (e.g., using Node.js, Python, or a service like Formspree).
    
    statusDiv.textContent = 'Sending message...';
    statusDiv.style.color = 'blue';

    try {
        // Simulate a network request
        await new Promise(resolve => setTimeout(resolve, 1500)); 
        
        // This would be your real fetch request:
        // const response = await fetch('your-backend-api-endpoint', {
        //     method: 'POST',
        //     body: JSON.stringify(Object.fromEntries(formData)),
        //     headers: {'Content-Type': 'application/json'}
        // });
        
        // if (!response.ok) throw new Error('Network response was not ok');

        statusDiv.textContent = 'Message sent successfully!';
        statusDiv.style.color = 'green';
        form.reset(); // Clear the form
    } catch (error) {
        console.error('Submission failed:', error);
        statusDiv.textContent = 'Failed to send message. Please try again later.';
        statusDiv.style.color = 'red';
    }
};

// Attach event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    renderProjects();
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
});