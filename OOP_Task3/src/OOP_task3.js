function randInt(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
class Firm {
  constructor(directorName, departments = [], projects = []) {
    this.director = directorName;
    this.departments = departments;
    this.projects = projects;
  }

  addDepartment(department) {
    this.departments.push(department);
  }

  getProjects(min, max) {
    const typeProject = ['Web', 'Mobile'];
    const difficultyProject = [1, 2, 3];
    let projectsAmount = randInt(min, max);
    for (projectsAmount; projectsAmount > 0; projectsAmount -= 1) {
      const type = typeProject[randInt(0, 1)];
      const difficulty = difficultyProject[randInt(0, 2)];
      const project = new Project(type, difficulty);
      this.projects.push(project);
    }
  }

  giveProject(department) {
    const typeDepartment = department.giveType();
    const firmsProjects = this.projects;
    firmsProjects.forEach((proj, i) => {
      if (typeDepartment === proj.type) {
        department.projects.push(proj);
        firmsProjects.splice(i, 1);
        return undefined;
      }
    });
  }

  giveProjectsToFreeDevs(department) {
    let freeDevsAmount = department.giveFreeDevsAmount();
    for (freeDevsAmount; freeDevsAmount > 0; freeDevsAmount -= 1) {
      this.giveProject(department);
    }
  }

  hiringStaff(department) {
    const typeDepartment = department.giveType();
    if (typeDepartment !== 'QA') {
      const firmsProjects = this.projects;
      const freeDevsAmount = department.giveFreeDevsAmount();
      let i = firmsProjects.length - freeDevsAmount - 1;
      for (i; i >= 0; i -= 1) {
        if (typeDepartment === firmsProjects[i].type) {
          const developer = new Developer(typeDepartment);
          department.staff.push(developer);
        }
      }
    } else {
      const firmsProjects = this.projects;
      const freeDevsAmount = department.giveFreeDevsAmount();
      let i = firmsProjects.length - freeDevsAmount - 1;
      for (i; i >= 0; i -= 1) {
        const developer = new Developer(typeDepartment);
        department.staff.push(developer);
      }
    }
  }
}

class Department {
  constructor(type, projects = [], staff = []) {
    this.type = type;
    this.projects = projects;
    this.staff = staff;
  }

  giveType() {
    return this.type;
  }

  giveStaff() {
    return this.staff;
  }

  giveFreeDevsAmount() {
    let freeStaffAmount = 0;
    this.staff.forEach((dev) => {
      if (!dev.project) freeStaffAmount += 1;
    });
    return freeStaffAmount;
  }
}

class Developer {
  constructor(type, project = null, expirience = 0, daysWithOutProject = 0) {
    this.type = type;
    this.project = project;
    this.expirience = expirience;
    this.daysWithOutProject = daysWithOutProject;
  }
}

class Project {
  constructor(type, difficulty, made = false, tested = false) {
    this.type = type;
    this.difficulty = difficulty;
    this.daysToProduction = this.difficulty;
    this.made = made;
    this.tested = tested;
  }
}

class Trash {
  constructor(projects = [], staff = []) {
    this.projects = projects;
    this.staff = staff;
  }
}