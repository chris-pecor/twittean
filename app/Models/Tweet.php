<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tweet extends Model
{

    protected $fillable = [
        'body', 'user_id', 'parent_id'
    ];
    // relationships

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function hashTags()
    {
        return $this->belongsToMany(HashTag::class, 'hashtags_tweets', 'tweet_id', 'hashtag_id');
    }

    public function parent()
    {
        return $this->belongsTo(Tweet::class, 'parent_id');
    }

    public function retweets()
    {
        return $this->hasMany(Tweet::class, 'parent_id');
    }

    // scopes
    
}
