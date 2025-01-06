<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HashTag extends Model
{
    /** @use HasFactory<\Database\Factories\HashTagFactory> */
    use HasFactory;

    protected $table = 'hashtags';

    protected $fillable = [
        'title',
    ];

    public function getRouteKeyName(){
        return 'title';
    }

    public function tweets()
    {
        return $this->belongsToMany(
            Tweet::class,
            'hashtags_tweets',
            'hashtag_id',
            'tweet_id'
        );
    }

}
