<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\Tweet;

class StatService
{
    public function getStats($userId)
    {

        $tweetCount = Tweet::where('user_id', $userId)->count();

        
        return [
            'tweet_count' => $tweetCount,
            //'follower_count' => $user->followers()->count(),
            //'following_count' => $user->followings()->count(),
            //'hashtag_count' => $user->hashtags()->count(), 
        ];
    }
}