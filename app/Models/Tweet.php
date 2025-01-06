<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tweet extends Model
{

    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<string>
     */
    protected $fillable = [
        'body',
        'user_id',
        'parent_id',
    ];

    /**
     * Relationships
     */

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function hashTags()
    {
        return $this->belongsToMany(
            HashTag::class,
            'hashtags_tweets',
            'tweet_id',
            'hashtag_id',
        );
    }

    public function parent()
    {
        return $this->belongsTo(
            Tweet::class,'parent_id'
        );
    }

    public function retweets()
    {
        return $this->hasMany(
            Tweet::class,
            'parent_id'
        );
    }


}
