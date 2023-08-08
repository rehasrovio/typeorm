import { AppDataSource } from "../../dataSource/data-source";
import { Question } from "../../entity/manyToMany/example1/question";
import { Category } from "../../entity/manyTOMany/category";

AppDataSource.initialize().then(async ()=>{
    const category1 = new Category()
    category1.name = 'Animals'
    await AppDataSource.manager.save(category1)

    const category2 = new Category()
    category2.name = 'birds'
    await AppDataSource.manager.save(category2)

    const question = new Question()
    question.title = 'walk'
    question.text = 'they both can walk'
    question.categories = [category1,category2]
    await AppDataSource.manager.save(question)

}).catch(err => console.log(err))