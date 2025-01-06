<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Tweet;
use App\Models\User;

class RetweetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        

        for ($i = 0; $i < rand(10, 20); $i++) {
            $originalTweet = Tweet::inRandomOrder()->first(); 

            Tweet::create([
                'body' => fake()->randomElement([null, fake()->sentence]),
                'user_id' => User::inRandomOrder()->first()->id,
                'parent_id' => $originalTweet->id,
            ]);
        }
    }
}
