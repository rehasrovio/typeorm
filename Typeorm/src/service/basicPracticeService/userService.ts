import { AppDataSource } from "../../dataSource/data-source";
import { Profile } from "../../entity/basicPractice/uprofile";
import { User } from "../../entity/basicPractice";
AppDataSource.initialize().then(async() =>{
    console.log('connection estabilished')
    const profile = new Profile();
    profile.gender = 'male'
    profile.qualification = 'B.E/ECE'
    await AppDataSource.manager.save(profile);
    const user = new User();
    user.firstName = 'roh'
    user.lastName = 'scar'
    user.age = 21
    user.profile = profile
    console.log('hii.............................')
    await AppDataSource.manager.save(user);
    const fin = await AppDataSource.manager.find(User);
    console.log(fin);
}).catch(error => console.log(error))