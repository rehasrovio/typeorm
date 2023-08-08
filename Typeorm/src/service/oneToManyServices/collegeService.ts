import { AppDataSource } from "../../dataSource/data-source";
import { College } from "../../entity/oneToMany/college";
import { Student } from "../../entity/oneToMany/student";

AppDataSource.initialize().then(async() =>{
console.log('its working')

const college = new College();
college.collegeName = 'ponjesly'
await AppDataSource.manager.save(college)

const student1 = new Student()
student1.name = 'rovio'
student1.college = college;
await AppDataSource.manager.save(student1)

const student2 = new Student()
student2.name = 'rohith'
student2.college = college;

await AppDataSource.manager.save(student2)

const collegeRepository = AppDataSource.getRepository(Student)
const coll = await collegeRepository.find({
    relations: {
        college: true
    }
})
console.log(coll)

}).catch(err => console.log(err));

