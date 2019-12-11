function randInt(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
class Firm {
  constructor(directorName, departments, projects) {
    this.director = directorName;
    this.departments = departments || [];
    this.projects = projects || [];
  }

  addDepartment(department) {
    this.departments.push(department);
  }

  generateProject() {
    const typeProject = ['Web', 'Mobile'];
    const difficultyProject = [1, 2, 3];
    const type = typeProject[randInt(0, 1)];
    const difficulty = difficultyProject[randInt(0, 2)];
    const project = new Project(type, difficulty);
    this.projects.push(project);
  }

  getProjects(min, max) {
    let projectsAmount = randInt(min, max);
    for (projectsAmount; projectsAmount > 0; projectsAmount -= 1) {
      this.generateProject();
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

  hiringStaffForQA(department) {
    const firmsProjects = this.projects;
    const freeDevsAmount = department.giveFreeDevsAmount();
    let i = firmsProjects.length - freeDevsAmount - 1;
    for (i; i >= 0; i -= 1) {
      const developer = new Developer('QA');
      department.staff.push(developer);
    }
  }

  hiringStaffForDev(department, typeDepartment) {
    const firmsProjects = this.projects;
    const freeDevsAmount = department.giveFreeDevsAmount();
    let i = firmsProjects.length - freeDevsAmount - 1;
    for (i; i >= 0; i -= 1) {
      if (typeDepartment === firmsProjects[i].type) {
        const developer = new Developer(typeDepartment);
        department.staff.push(developer);
      }
    }
  }

  hiringStaff(department) {
    const typeDepartment = department.giveType();
    if (typeDepartment !== 'QA') {
      this.hiringStaffForDev(department, typeDepartment);
    } else {
      this.hiringStaffForQA(department);
    }
  }
}

class Department {
  constructor(type, projects, staff) {
    this.type = type;
    this.projects = projects || [];
    this.staff = staff || [];
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

  takeCompletedProj(i) {
    const completedProject = this.staff[i].giveСompletedProject();
    this.projects.push(completedProject);
  }

  organizeHelpWithProject(i) {
    if (this.staff[i].project) {
      let needDevAmount = this.staff[i].project.daysToProduction;
      let counter = this.staff.length - 1;
      for (counter; counter >= 0; counter -= 1) {
        if (!this.staff[counter].project) {
          this.staff[counter].helpWithProject(this.staff[i]);
          needDevAmount -= 1;
          if (needDevAmount === 0) {
            this.takeCompletedProj(i);
            counter = -1;
          }
        }
      }
    }
  }

  organizeWorkForQA() {
    let i = this.staff.length - 1;
    for (i; i >= 0; i -= 1) {
      if (this.staff[i].project) {
        this.staff[i].makeTest();
      } else {
        this.staff[i].daysWithOutProject += 1;
        return;
      }
      this.takeCompletedProj(i);
    }
  }

  organizeWorkForMobile() {
    let i = this.staff.length - 1;
    for (i; i >= 0; i -= 1) {
      if (this.staff[i].project) {
        this.staff[i].makeProject();
      } else {
        this.staff[i].daysWithOutProject += 1;
        return;
      }
      if (this.staff[i].project.made !== false) {
        this.takeCompletedProj(i);
      }
    }
    i = this.staff.length - 1;
    for (i; i >= 0; i -= 1) {
      this.organizeHelpWithProject(i);
    }
  }

  organizeWorkForWeb() {
    let i = this.staff.length - 1;
    for (i; i >= 0; i -= 1) {
      if (this.staff[i].project) {
        this.staff[i].makeProject();
      } else {
        this.staff[i].daysWithOutProject += 1;
        return;
      }
      if (this.staff[i].project.made !== false) {
        this.takeCompletedProj(i);
      }
    }
  }

  organizeWork() {
    if (this.type === 'QA') {
      this.organizeWorkForQA();
    } else if (this.type === 'Mobile') {
      this.organizeWorkForMobile();
    } else {
      this.organizeWorkForWeb();
    }
  }

  findIndexOfUselessDeveloper() {
    const uselessDev = this.staff.filter((developer) => developer.daysWithOutProject >= 3).sort((a, b) => a.expirience - b.expirience).splice(0, 1);
    const i = this.staff.findIndex((developer) => developer === uselessDev[0]);
    return i;
  }

  dismissUselessDeveloper(trash) {
    const i = this.findIndexOfUselessDeveloper();
    if (i !== -1) {
      trash.staff.push(this.staff.splice(i, 1)[0]);
    }
    return null;
  }
}

class Developer {
  constructor(type, project, expirience, daysWithOutProject) {
    this.type = type;
    this.project = project || null;
    this.expirience = expirience || 0;
    this.daysWithOutProject = daysWithOutProject || 0;
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

  helpWithProject(developer) {
    const foreignProject = developer.project;
    if (foreignProject.made !== false) return;
    this.daysWithOutProject = 0;
    foreignProject.daysToProduction -= 1;
    this.expirience += Math.floor(10 / foreignProject.difficulty) / 10;
    if (foreignProject.daysToProduction === 0) foreignProject.made = true;
  }

  giveСompletedProject() {
    const comletedProject = this.project;
    this.project = null;
    return comletedProject;
  }
}

class Project {
  constructor(type, difficulty, made, tested) {
    this.type = type;
    this.difficulty = difficulty;
    this.daysToProduction = this.difficulty;
    this.made = made || false;
    this.tested = tested || false;
  }
}

class Trash {
  constructor(projects, staff) {
    this.projects = projects || [];
    this.staff = staff || [];
  }

  collectDeletedProject(department) {
    const garbage = [];
    department.projects.forEach((completedProj, i) => {
      const proj = completedProj;
      if (proj.tested === true) {
        garbage.push(proj);
        department.projects.splice(i, 1);
      }
    });
    this.projects = this.projects.concat(garbage);
  }
}

const google = new Firm('Sergey Brin');
const webDepartment = new Department('Web');
const mobileDepartment = new Department('Mobile');
const qaDepartment = new Department('QA');
const trash = new Trash();

function simulation(daysAmount) {
  let counter = daysAmount;
  google.addDepartment(webDepartment);
  google.addDepartment(mobileDepartment);
  google.addDepartment(qaDepartment);
  google.getProjects(0, 4);

  for (counter; counter > 0; counter -= 1) {
    google.hiringStaff(webDepartment);
    google.hiringStaff(mobileDepartment);
    google.hiringStaff(qaDepartment);
    google.giveProjectsToFreeDevs(webDepartment);
    google.giveProjectsToFreeDevs(mobileDepartment);
    webDepartment.sendProjectsToTests(qaDepartment);
    mobileDepartment.sendProjectsToTests(qaDepartment);
    webDepartment.giveProjectToStaff();
    mobileDepartment.giveProjectToStaff();
    qaDepartment.giveProjectToStaff();
    webDepartment.organizeWork();
    mobileDepartment.organizeWork();
    qaDepartment.organizeWork();
    webDepartment.dismissUselessDeveloper(trash);
    mobileDepartment.dismissUselessDeveloper(trash);
    qaDepartment.dismissUselessDeveloper(trash);
    google.getProjects(0, 4);
    trash.collectDeletedProject(qaDepartment);
  }
  console.table(google.projects);
  console.table(qaDepartment.staff);
  console.table(qaDepartment.projects);
  console.table(webDepartment.staff);
  console.table(webDepartment.projects);
  console.table(mobileDepartment.staff);
  console.table(mobileDepartment.projects);
  console.log(trash.staff);
}

simulation(100);

module.exports = {
  google,
  webDepartment,
  mobileDepartment,
  qaDepartment,
  trash,
};
