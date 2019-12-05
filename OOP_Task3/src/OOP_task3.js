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
}

class Department {
  constructor(type, projects = [], staff = []) {
    this.type = type;
    this.projects = projects;
    this.staff = staff;
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
