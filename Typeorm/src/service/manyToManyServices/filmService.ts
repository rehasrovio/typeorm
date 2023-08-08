import { AppDataSource } from "../../dataSource/data-source";
import { Movie } from "../../entity/manyToMany/example2/movies";
import { Actor } from "../../entity/manyToMany/example2/actors";

AppDataSource.initialize()
  .then(async () => {
    const movie1 = new Movie();
    movie1.title = "GOT";
    const movie2 = new Movie();
    movie2.title = "X-men";
    const movie3 = new Movie();
    movie3.title = "Spiderman";

    const actor1 = new Actor();
    actor1.name = "hugh jackman";
    const actor2 = new Actor();
    actor2.name = "tom holland";
    const actor3 = new Actor();
    actor3.name = "emilia clarke";

    actor1.movies = [movie2];
    actor2.movies = [movie3];
    actor3.movies = [movie1];

    await AppDataSource.manager.save([movie1, movie2, movie3]);
    await AppDataSource.manager.save([actor1, actor2, actor3]);
    const fin = await AppDataSource.manager.find(Actor);
    console.log(fin)

  })
  .catch((err) => console.log(err));
