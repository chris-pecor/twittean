<?php

namespace Database\Seeders;

use App\Models\HashTag;
use App\Models\User;
use App\Models\Tweet;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // create 10 users with 20 tweets
         User::factory()->count(10)->hasTweets(20)->create();

         // create test user with 20 tweets to login with
         User::factory()->hasTweets(20)->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'username' => 'test',
        ]);



        
        // call the hashtag and retweet seeders - 
        $this->call([
            HashTagSeeder::class,
            RetweetSeeder::class,]);


    }
}
