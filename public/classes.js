class Carrer{
  constructor(pcarrername, pcarrercode, pcarrerdegree, pcarrerstate){
    this.carrerName = pcarrername;
    this.carrerCode = pcarrercode;
    this.carrerDegree = pcarrerdegree;
    this.carrerState = pcarrerstate;
  }
  
  // Getter
  getCarrerName(){
    return this.carrerName;
  }

  getCarrerCode(){
    return this.carrerCode
  }

  getCarrerDegree(){
    return this.carrerDegree;
  }

  getCarrerState(){
    return this.carrerState;
  }

  // Setter
  setCarrerName(pnewcarrername){
    this.carrerName = pnewcarrername;
  }

  setCarrerDegree(pnewcarrerdegree){
    this.carrerDegree = pnewcarrerdegree;
  }

  setCarrerState(pnewcarrerstate){
    this.carrerState = pnewcarrerstate;
  }
}

class Project {
  constructor(pid, pprojectstate, pprojectname, pobjetive, pimages, pmoney, pprojectmanager, pclient){
    this._id = pid;
    this.projectState = pprojectstate;
    this.projectName = pprojectname;
    this.projectObjetive = pobjetive;
    this.projectImages = pimages;
    this.projectMoney = pmoney;
    this.projectManager = pprojectmanager;
    this.client = pclient;
    this.students = [];
    this.professor = '';
  };

  setTeacher(pobjprofesor){
    this.professor = pobjprofesor;
  }

  setStudents(pobjstudent){
    this.students.push(pobjstudent);
  }
  // TODO Hacer los metodos del Proyecto
}

class ProjectManager {
  constructor(pfirstname, psecondname, pfirstsurname, psecondsurname, pemail){
    this.pmFirstName = pfirstname;
    this.pmSecondName = psecondname;
    this.pmFirstSurname = pfirstsurname;
    this.pmSecondSurname = psecondsurname;
    this.pmEmail = pemail;
  }
  // TODO Hacer los metodos del PM
}

class Client {
  constructor(penterprisename, penterpriseid, penterpriseidustry){
    this.enterpriseName = penterprisename;
    this.enterpriseId = penterpriseid;
    this.enterpriseIndustry = penterpriseidustry;
  };
  // TODO Hacer los metodos del Cliente
}

class User {
  constructor(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate){
    this.role = prole;
    this.firstName = pfirstname;
    this.secondName = psecondname;
    this.firstSurname = pfirstsurname;
    this.secondSurname = psecondsurname;
    this.id = pid;
    this.email = pemail;
    this.password = ppassword;
    this.photo = pphoto;
    this.phone = pphone;
    this.state = pstate;
  };

  // TODO Terminar los metodos de la clase Padre

  getEmail(){
    return this.email;
  }

  getPassword(){
    return this.password;
  }

  getPhono(){
    return this.photo;
  }

  getId(){
    return this.id;
  }

  setPhoto(pnphoto){
    this.photo = pnphoto;
  }
}

class Admin extends User{
  constructor(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate, pjob){
    super(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate);
    this.jobPosition = pjob;
  };

  // TODO Hacer los metodos del Administrado
}

class Assistant extends User{
  constructor(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate, pjob){
    super(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate);
    this.jobPosition = pjob;
  };
  // TODO Hacer los metodos del Asistente
}

class Professor extends User{
  constructor(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate, pmember, pspecialty){
    super(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate);
    this.specialty = pspecialty;
    this.councilMember = pmember;
  };
  // TODO Hacer los metodos del Profesor
}

class Student extends User{
  constructor(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate, pbirthdate, pcurriculum, pcarrer, pgithubuser, pwebsite){
    super(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate);
    this.birthDate = pbirthdate;
    this.curriculum = pcurriculum;
    this.carrer = pcarrer;
    this.githubUser = pgithubuser;
    this.website = pwebsite;
    this.rejectReason = ''
  };
  // TODO Hacer los metodos del Estudiante
}


