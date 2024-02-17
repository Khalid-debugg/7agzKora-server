import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import mikroOrmConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  await orm.getMigrator().up();
  const post = orm.em.fork({}).create(Post, {
    title: "my fift post",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await orm.em.persistAndFlush(post);
};
main();
