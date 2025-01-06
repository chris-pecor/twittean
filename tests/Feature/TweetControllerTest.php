<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TweetControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testStoreCreatesTweet()
{
    // create user, act as
    $user = User::factory()->create();
    $this->actingAs($user);

    // make up a tweet
    $tweetData = [
        'body' => 'tweeeeeeeet!',
        'parent_id' => null,
    ];

    // post is
    $response = $this->post(route('tweet.store'), $tweetData);

    // assert it has created a tweet
    $this->assertDatabaseHas('tweets', [
        'body' => 'tweeeeeeeet!',
        'user_id' => $user->id,
        'parent_id' => null,
    ]);

    // assert we redirect
    $response->assertRedirect(route('home'));
}
    

    
}
