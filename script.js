// project-script.js
const projects = [
    { name: 'VistaBots', technology: 'Node' },
    { name: 'MakeCV', technology: 'React' },
    { name: 'Book Sharing Web App', technology: 'React' },
    // Add more projects as needed
  ];
  
  function filterProjects() {
    const filterValue = document.getElementById('filter').value.toLowerCase();
    const projectList = document.getElementById('project-list');
  
    // Clear existing projects
    projectList.innerHTML = '';
  
    // Filter and display projects
    projects.forEach(project => {
      if (project.technology.toLowerCase().includes(filterValue)) {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.textContent = project.name;
        projectList.appendChild(projectItem);
      }
    });
  }
  