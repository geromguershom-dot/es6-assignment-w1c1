// declaration des variables

 var  student1 = { name: 'Marie', age: 22, city: 'Yaounde', skills:
['HTML', 'CSS'] };
 var student2 = { name: 'Paul', age: 25, city: 'Douala', skills:
['Python', 'SQL'] };

 function getCity(student) {

return student.city;
 }

 function buildProfile(student, extraSkills) {

var  name = student.name;
var age = student.age;
var allSkills = student.skills.concat(extraSkills);
return name + ' (' + age + ') de ' + getCity(student) + ' | Comp. : ' + allSkills.join(', ');

 }




 



 function mergeStudents(s1, s2) {
return { name: s1.name + ' & ' + s2.name, city: 'Cameroun' };
    }

    console.log(buildProfile(student1, student,['javaScript ,React']));
    console.log(mergeStudents (student1,student2));
    
    




// premiere exigence 

// chaque var doit etre remplace par const ou let

const student1 = { name: 'Marie', age: 22, city: 'Yaounde', skills: ['HTML', 'CSS'] };
const student2 = { name: 'Paul', age: 25, city: 'Douala', skills: ['Python', 'SQL'] };

// deuxieme exigence

// chaque declaration doit devenir une expression de fonction fleche 

const getCity = (student) => {
    return student.city;
}
const buildProfile = (student, extraSkills) => {
    const name = student.name;
    const age = student.age;
    const allSkills = student.skills.concat(extraSkills);
    return name + ' (' + age + ') de ' + getCity(student) + ' | Comp. : ' + allSkills.join(', ');
}
const mergeStudents = (s1, s2) => {
    return { name: s1.name + ' & ' + s2.name, city: 'Cameroun' };
};

// troisieme exigence
// destructuration des objets

const getCity = ({ city }) => city;

// quatrieme exigence 
// dans buildProfile, utiliser la destructuration pour extraire name et age depuis l'argument student

const buildProfile = ({ name, age }, extraSkills) => {
    const allSkills = student.skills.concat(extraSkills);
    return name + ' (' + age + ') de ' + getCity(student) + ' | Comp. : ' + allSkills.join(', ');
}

// cinquieme exigence
//  la fusition de competence doit utiliser l'operateur de spread

const buildProfile = ({ name, age, skills }, extraSkills) => {
    const allSkills = [...skills, ...extraSkills];
    return name + ' (' + age + ') de ' + getCity({ city: student.city }) + ' | Comp. : ' + allSkills.join(', ');
}

// sixieme exigence
//  La chaîne de profil doit utiliser un littéral de gabarit avec des expressions intégrées, pas la concaténation avec +.

const buildProfile = ({ name, age, skills }, extraSkills) => {
    const allSkills = [...skills, ...extraSkills];
    return `${name} (${age}) de ${getCity({ city: student.city })} | Comp. : ${allSkills.join(', ')}`;
}
