select "countries"."name" as "country name",
        count("cities") as "totalCities"
        from "countries"
        join "cities" using ("countryId")
        group by "countries"."name"
