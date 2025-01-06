<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // create 10 users with 20 tweets
         User::factory()->count(20)->hasTweets(20)->create();

         // create test user with 20 tweets to login with
         User::factory()->hasTweets(20)->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'username' => 'test',
        ]);

        // call the other seeders 
        $this->call([
            HashTagSeeder::class,
            RetweetSeeder::class,
            FollowSeeder::class,
        ]);
    }
}
