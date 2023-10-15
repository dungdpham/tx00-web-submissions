const { ROLE } = require('../data');

// Function to check if a user can view a project
function canViewProject(user, project) {
  return user.role === ROLE.ADMIN || project.userId === user.id;
}

// Function to filter projects based on user's role and ownership
function scopedProjects(user, projects) {
  if (user.role === ROLE.ADMIN) return projects;
  return projects.filter((project) => project.userId === user.id);
}

// Function to check if a user can delete a project
function canDeleteProject(user, project) {
  return project.userId === user.id;
}

module.exports = {
  canViewProject,
  scopedProjects,
  canDeleteProject,
};
