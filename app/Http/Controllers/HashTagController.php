<?php

namespace App\Http\Controllers;

use App\Models\HashTag;
use App\Models\Tweet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HashTagController extends Controller
{
    /**
     * Display all tweets with the specified hashTag
     */
    public function show($hashtagId)
    {

        // type hinting broke this, no time to fix so just passing id.

        $tweets = Tweet::with('user', 'hashTags')
            ->whereHas('hashTags', fn($query) => $query->where('hashtag_id', $hashtagId))
            ->get();

            
    
        return Inertia::render('HashTag/Show', [
            'tweets' => $tweets,
            'hashtag' => HashTag::findOrFail($hashtagId),
        ]);
    }
}
