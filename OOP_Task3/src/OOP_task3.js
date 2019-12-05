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

  sendProjectsToTests(department) {
    let i = this.projects.length - 1;
    for (i; i >= 0; i -= 1) {
      if (this.projects[i].made === true) {
        department.projects.push(this.projects[i]);
        this.projects.splice(i, 1);
      }
    }
  }

  giveProjectToStaff() {
    let i = this.staff.length - 1;
    const firstItem = 0;
    for (i; i >= 0; i -= 1) {
      if (!this.staff[i].project) {
        this.staff[i].project = this.projects[firstItem];
        this.projects.splice(0, 1);
      }
    }
  }

  organizeWork() {
    if (this.type === 'QA') {
      let i = this.staff.length - 1;
      for (i; i >= 0; i -= 1) {
        if (this.staff[i].project) {
          this.staff[i].makeTest();
        } else {
          this.staff[i].daysWithOutProject += 1;
          return;
        }
        const completedProject = this.staff[i].giveСompletedProject();
        this.projects.push(completedProject);
      }
    } else if (this.type === 'Mobile') {
      let i = this.staff.length - 1;
      for (i; i >= 0; i -= 1) {
        if (this.staff[i].project) {
          this.staff[i].makeProject();
        } else {
          this.staff[i].daysWithOutProject += 1;
          return;
        }
        if (this.staff[i].project.made !== false) {
          const completedProject = this.staff[i].giveСompletedProject();
          this.projects.push(completedProject);
        }
      }
      i = this.staff.length - 1;
      for (i; i >= 0; i -= 1) {
        if (this.staff[i].project) {
          let needDevAmount = this.staff[i].project.daysToProduction;
          let counter = this.staff.length - 1;
          for (counter; counter >= 0; counter -= 1) {
            if (!this.staff[counter].project) {
              this.staff[counter].helpWithProject(this.staff[i]);
              needDevAmount -= 1;
              if (needDevAmount === 0) {
                const completedProject = this.staff[i].giveСompletedProject();
                this.projects.push(completedProject);
                counter = -1;
              }
            }
          }
        }
      }
    } else {
      let i = this.staff.length - 1;
      for (i; i >= 0; i -= 1) {
        if (this.staff[i].project) {
          this.staff[i].makeProject();
        } else {
          this.staff[i].daysWithOutProject += 1;
          return;
        }
        if (this.staff[i].project.made !== false) {
          const completedProject = this.staff[i].giveСompletedProject();
          this.projects.push(completedProject);
        }
      }
    }
  }

  dismissUselessDeveloper(trash) {
    const uselessDev = this.staff.filter((developer) => developer.daysWithOutProject >= 3).sort((a, b) => a.expirience - b.expirience).splice(0, 1);
    const i = this.staff.findIndex((developer) => developer === uselessDev[0]);
    if (i !== -1) {
      trash.staff.push(this.staff.splice(i, 1)[0]);
    }
    return null;
  }
}

class Developer {
  constructor(type, project = null, expirience = 0, daysWithOutProject = 0) {
    this.type = type;
    this.project = project;
    this.expirience = expirience;
    this.daysWithOutProject = daysWithOutProject;
  }

  makeProject() {
    this.daysWithOutProject = 0;
    if (this.project.made !== false) return;
    this.project.daysToProduction -= 1;

    if (this.project.daysToProduction === 0) {
      this.project.made = true;
      this.expirience += 1;
    }
  }

  makeTest() {
    this.daysWithOutProject = 0;
    if (this.project.tested !== false) return;
    this.project.tested = true;
    this.expirience += 1;
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
