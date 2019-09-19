exports.up = pgm => {
  //1. Users Table
  pgm.sql(`
    CREATE TABLE "boilerplate"."users" (
      "id" SERIAL PRIMARY KEY,
      "email" VARCHAR(255) NOT NULL,
      "password" VARCHAR(255) NOT NULL,
      "user_date_created" DATE NOT NULL DEFAULT CURRENT_DATE,
      "fullname" VARCHAR(128)
    );
  `),
    pgm.sql(`
      CREATE TABLE "boilerplate"."stocks" (
        "id" SERIAL PRIMARY KEY,
        "user_id" INT NOT NULL,
        "ticker" VARCHAR(3) NOT NULL,
        "user_date_created" DATE NOT NULL DEFAULT CURRENT_DATE
  );
  `);
};
