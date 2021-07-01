select "films"."title",
       "categories"."name" as "category",
       "films"."releaseYear"
       from "films"
       join "filmCategory" using ("filmId")
       join "categories" using ("categoryId")
       where "title" = 'Boogie Amelie';
