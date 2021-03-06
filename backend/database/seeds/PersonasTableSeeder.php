<?php

use Illuminate\Database\Seeder;

class PersonasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
                // Let's truncate our existing records to start from scratch.
                Personas::truncate();

                $faker = \Faker\Factory::create();
        
                // And now, let's create a few articles in our database:
                for ($i = 0; $i < 50; $i++) {
                    Personas::create([
                        'nombre' => $faker->sentence,
                        'nit' => $faker->paragraph,
                    ]);
                }
    }
}
