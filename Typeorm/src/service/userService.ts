import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { Profile } from "../entity/uprofile";

AppDataSource.initialize().then(async() =>{
    console.log('connection estabilished')
    const profile = new Profile();
    profile.gender = 'male'
    profile.qualification = 'B.E/ECE'
    await AppDataSource.manager.save(profile);
    const user = new User();
    user.firstName = 'rovio'
    user.lastName = 'rehas'
    user.age = 21
    user.profile = profile
    console.log('hii.............................')
    await AppDataSource.manager.save(user);
    const fin = await AppDataSource.manager.find(User);
    console.log(fin);
}).catch(error => console.log(error))