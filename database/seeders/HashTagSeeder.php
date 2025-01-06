<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\HashTag;
use App\Models\Tweet;

class HashTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create 50 hashtags
        $hashtags = Hashtag::factory()->count(50)->create();

        // Get all tweets - this would never be done in a real application
        $tweets = Tweet::all();

        // Attach random hashtags to each tweet
        $tweets->each(function ($tweet) use ($hashtags) {
            // Attach 1 to 5 random hashtags to a tweet
            $randomHashtags = $hashtags->random(rand(1, 5));
            $tweet->hashtags()->attach($randomHashtags->pluck('id')->toArray());
        });
    }
}
