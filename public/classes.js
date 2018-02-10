class Carrer{
  constructor(pcarrername, pcarrercode, pcarrerdegree){
    this.carrerName = pcarrername;
    this.carrerCode = pcarrercode;
    this.carrerDegree = pcarrerdegree;
  }
}

class Project {
  constructor(pprojectstate, pprojectname, pobjetive, pimages, pmoney, pprojectmanager, pclient){
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
}

class ProjectManager {
  constructor(pfirstname, psecondname, pfirstsurname, psecondsurname, pemail){
    this.pmFirstName = pfirstname;
    this.pmSecondName = psecondname;
    this.pmFirstSurname = pfirstsurname;
    this.pmSecondSurname = psecondsurname;
    this.pmEmail = pemail;
  }
}

class Client {
  constructor(penterprisename, penterpriseid, penterpriseidustry){
    this.enterpriseName = penterprisename;
    this.enterpriseId = penterpriseid;
    this.enterpriseIndustry = penterpriseidustry;
  };
}

class User {
  constructor(prol, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone){
    this.rol = prol;
    this.firstName = pfirstname;
    this.secondName = psecondname;
    this.firstSurname = pfirstsurname;
    this.secondSurname = psecondsurname;
    this.id = pid;
    this.email = pemail;
    this.password = ppassword;
    this.photo = pphoto;
    this.phone = pphone;
  };

  getEmail(){
    return this.email;
  }

  getPassword(){
    return this.password;
  }

  getFullName(){
    return `${this.firstName} ${this.secondName} ${this.firstSurname} ${this.secondSurname}`;
  }

  getPhono(){
    return this.photo;
  }

  setPhoto(pnphoto){
    this.photo = pnphoto;
  }
}

class Admin extends User{
  constructor(prol, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pjob){
    super(prol, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone);
    this.job = pjob;
  };
}

class Assistant extends User{
  constructor(prol, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pjob){
    super(prol, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone);
    this.job = pjob;
  };
}

class Professor extends User{
  constructor(prol, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pmember){
    super(prol, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone);
    this.member = pmember;
  };
}

class Student extends User{
  constructor(prol, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pbirthdate, pcurriculum, pcarrer, pgithubuser){
    super(prol, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone);
    this.birthDate = pbirthdate;
    this.curriculum = pcurriculum;
    this.carrer = pcarrer;
    this.githubUser = pgithubuser;
  };
}


