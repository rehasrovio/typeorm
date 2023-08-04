import { error } from "console"
import {AppDataSource} from "../data-source"
import { Employee } from "../entity/employee"
import { Name } from "../entity/name"

AppDataSource.initialize().then(async () => {
    console.log('hi!!')
    const emp = new Employee();
    const na = new Name();
    na.first = 'rovio'
    na.last = 'rehas'
    emp.name = na;
    emp.salary = 100000
    await AppDataSource.manager.save(emp);
    const fin = await AppDataSource.manager.find(Employee);
    console.log(fin);

}).catch(error => console.log(error))
