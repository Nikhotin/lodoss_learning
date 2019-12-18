class Employee {
  create(type) {
    if (type === 'QA') {
      return new Developer('QA');
    }
    if (type === 'Web') {
      return new Developer('Web');
    }
    if (type === 'Mobile') {
      return new Developer('Mobile');
    }
  }
}

function randInt(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

class FindProject {
  create() {
    const typeProject = ['Web', 'Mobile'];
    const difficultyProject = [1, 2, 3];
    const type = typeProject[randInt(0, 1)];
    const difficulty = difficultyProject[randInt(0, 2)];
    if (type === 'Web') {
      return new Project(type, difficulty);
    }
    return new Project(type, difficulty);
  }
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
    const factory = new FindProject();
    const project = factory.create();
    this.projects.push(project);
  }

  getProjects(min, max) {
    let projectsAmount = randInt(min, max);
    for (projectsAmount; projectsAmount > 0; projectsAmount -= 1) {
      this.generateProject();
    }
  }

  getProject(department) {
    const typeDepartment = department.getType();
    const firmsProjects = this.projects;
    firmsProjects.forEach((proj, i) => {
      if (typeDepartment === proj.type) {
        department.projects.push(proj);
        firmsProjects.splice(i, 1);
        return undefined;
      }
    });
  }

  getProjectsToFreeDevs(department) {
    let freeDevsAmount = department.getFreeDevsAmount();
    for (freeDevsAmount; freeDevsAmount > 0; freeDevsAmount -= 1) {
      this.getProject(department);
    }
  }

  hiringStaffForQA(department) {
    const firmsProjects = this.projects;
    const freeDevsAmount = department.getFreeDevsAmount();
    const factory = new Employee();
    let i = firmsProjects.length - freeDevsAmount - 1;
    for (i; i >= 0; i -= 1) {
      const developer = factory.create('QA');
      department.staff.push(developer);
    }
  }

  hiringStaffForDev(department, typeDepartment) {
    const firmsProjects = this.projects;
    const freeDevsAmount = department.getFreeDevsAmount();
    const factory = new Employee();
    let i = firmsProjects.length - freeDevsAmount - 1;
    for (i; i >= 0; i -= 1) {
      if (typeDepartment === firmsProjects[i].type) {
        const developer = factory.create(typeDepartment);
        department.staff.push(developer);
      }
    }
  }

  hiringStaff(department) {
    const typeDepartment = department.getType();
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

  getType() {
    return this.type;
  }

  getStaff() {
    return this.staff;
  }

  getFreeDevsAmount() {
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

  getProjectToStaff() {
    let i = this.staff.length - 1;
    const firstItem = 0;
    for (i; i >= 0; i -= 1) {
      if (!this.staff[i].project) {
        this.staff[i].project = this.projects[firstItem];
        this.projects.splice(0, 1);
      }
    }
  }

  takeCompletedProj(dev) {
    const completedProject = dev.getСompletedProject();
    this.projects.push(completedProject);
  }

  organizeHelpWithProject(dev) {
    if (dev.project) {
      let needDevAmount = dev.project.daysToProduction;
      let counter = this.staff.length - 1;
      for (counter; counter >= 0; counter -= 1) {
        const supporting = this.staff[counter];
        if (!supporting.project) {
          supporting.helpWithProject(dev);
          needDevAmount -= 1;
          if (needDevAmount === 0) {
            this.takeCompletedProj(dev);
            counter = -1;
          }
        }
      }
    }
  }


  organizeWorkForQA() {
    this.staff.forEach((dev) => {
      if (dev.project) {
        dev.makeTest();
        this.takeCompletedProj(dev);
      } else {
        dev.rest();
      }
    });
  }

  organizeWorkForMobile() {
    this.staff.forEach((dev) => {
      if (dev.project) {
        dev.makeProject();
        if (dev.project.made) {
          this.takeCompletedProj(dev);
        }
      } else {
        dev.rest();
      }
    });
    this.staff.forEach((dev) => {
      this.organizeHelpWithProject(dev);
    });
  }

  organizeWorkForWeb() {
    this.staff.forEach((dev) => {
      if (dev.project) {
        dev.makeProject();
        if (dev.project.made) {
          this.takeCompletedProj(dev);
        }
      } else {
        dev.rest();
      }
    });
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

  rest() {
    this.daysWithOutProject += 1;
  }

  work(number) {
    this.project.daysToProduction -= 1;
    if (this.project.daysToProduction === 0) {
      this.project.made = true;
      this.expirience += number;
    }
  }

  makeProject() {
    this.daysWithOutProject = 0;
    if (this.project.made) return;
    this.work(1);
  }

  makeTest() {
    this.daysWithOutProject = 0;
    if (this.project.tested) return;
    this.project.tested = true;
    this.expirience += 1;
  }

  helpWithProject(developer) {
    const foreignProject = developer.project;
    if (this.project) throw new Error('dev has a project, cannot help with others');
    if (foreignProject.made) return;
    this.daysWithOutProject = 0;
    developer.work(0);
    this.expirience += Math.floor(10 / foreignProject.difficulty) / 10;
  }

  getСompletedProject() {
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

class Statistic {
  constructor() {
    this.madeProjects = 0;
    this.hiredDevelopers = 0;
    this.dismissedDevelopers = 0;
  }

  collectStatistic(trash, firm) {
    this.madeProjects = trash.projects.length;
    this.dismissedDevelopers = trash.staff.length;
    let devs = 0;
    firm.departments.forEach((department) => {
      devs += department.staff.length;
    });
    this.hiredDevelopers = devs + trash.staff.length;
  }
}

function simulation(daysAmount) {
  const google = new Firm('Sergey Brin');
  const webDepartment = new Department('Web');
  const mobileDepartment = new Department('Mobile');
  const qaDepartment = new Department('QA');
  const trash = new Trash();
  const statistic = new Statistic();
  let counter = daysAmount;
  google.addDepartment(webDepartment);
  google.addDepartment(mobileDepartment);
  google.addDepartment(qaDepartment);
  google.getProjects(0, 4);

  for (counter; counter > 0; counter -= 1) {
    google.hiringStaff(webDepartment);
    google.hiringStaff(mobileDepartment);
    google.hiringStaff(qaDepartment);
    google.getProjectsToFreeDevs(webDepartment);
    google.getProjectsToFreeDevs(mobileDepartment);
    webDepartment.sendProjectsToTests(qaDepartment);
    mobileDepartment.sendProjectsToTests(qaDepartment);
    webDepartment.getProjectToStaff();
    mobileDepartment.getProjectToStaff();
    qaDepartment.getProjectToStaff();
    webDepartment.organizeWork();
    mobileDepartment.organizeWork();
    qaDepartment.organizeWork();
    webDepartment.dismissUselessDeveloper(trash);
    mobileDepartment.dismissUselessDeveloper(trash);
    qaDepartment.dismissUselessDeveloper(trash);
    google.getProjects(0, 4);
    trash.collectDeletedProject(qaDepartment);
  }
  statistic.collectStatistic(trash, google);

  console.table(google.projects);
  console.table(qaDepartment.staff);
  console.table(qaDepartment.projects);
  console.table(webDepartment.staff);
  console.table(webDepartment.projects);
  console.table(mobileDepartment.staff);
  console.table(mobileDepartment.projects);
  console.log(statistic);
}

simulation(100);

module.exports.simulation = simulation;
