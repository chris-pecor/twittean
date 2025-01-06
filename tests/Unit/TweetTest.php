<?php

namespace Tests\Unit;

use App\Models\Tweet;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TweetTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that a tweet is created correctly.
     *
     * @return void
     */
    public function testTweetCreation()
    {
        // use a factory to create a user
        $user = User::factory()->create(); 

        // prep the tweet
        $tweetData = [
            'body' => 'tweeeeeet tweeeet',
            'user_id' => $user->id,
            'parent_id' => null,
        ];

        // create it
        $tweet = Tweet::create($tweetData);

        // assertions
        $this->assertInstanceOf(Tweet::class, $tweet); // is it an instance of Tweet
        $this->assertEquals('tweeeeeet tweeeet', $tweet->body); // check tweet body content
        $this->assertEquals($user->id, $tweet->user_id); // check the user association
        $this->assertNull($tweet->parent_id); // check that parent_id is null (not a retweet)
    }
}
