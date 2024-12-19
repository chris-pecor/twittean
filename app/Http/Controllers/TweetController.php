<?php

namespace App\Http\Controllers;

use App\Models\Tweet;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Services\StatService;


class TweetController extends Controller
{

    protected $statService;

    public function __construct(StatService $statService)
    {
        $this->statService = $statService;

    }
    /**
     * Display the 20 most recent tweets from all users
     */
    public function index()
    {
        $tweets = Tweet::with('user', 'hashTags', 'parent', 'parent.user')->latest()->take(20)->get();
        
        return Inertia::render('Tweet/Index', [
            'tweets' => $tweets,
            
        ]);
    }

    /**
     * Show tweets for the username
     */

    public function userTweets(User $user)
    {
        $tweets = Tweet::with('user', 'hashTags', 'parent', 'parent.user')->where('user_id', $user->id)->latest()->take(20)->get();

        $stats = $this->statService->getStats($user);

        return Inertia::render('Tweet/Index', [
            'tweets' => $tweets, 
            'userCard' => $user,
            'stats' => $stats,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */

    public function create()
    {
        // show the create tweet form
        return Inertia::render('Tweet/Create');
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(Request $request)
    {
        // store a new tweet
        $request->validate([
            'body' => 'required|string|max:255',
        ]);

        Tweet::create([
            'body' => $request->body,
            'user_id' => Auth::user()->id,
            'parent_id' => null,
        ]); 

        return Redirect::route('dashboard');
    }

    /**
     * Reteweet a tweet
     */

    public function createRetweet(Tweet $tweet)
    {
        // get the tweet by id
        $retweet = Tweet::findOrFail($tweet->id);

        return Inertia::render('Tweet/CreateRetweet', [
            'tweet' => $tweet,
        ]);
    }

    /**
     * Store a retweet
     */

    public function storeRetweet(Request $request)
    {
        $request->validate([
            'parent_id' => 'required',
            'body' => 'required|string|max:255',
        ]);

        Tweet::create([
            'body' => $request->body,
            'user_id' => Auth::user()->id,
            'parent_id' => $request->parent_id,
        ]); 

        return Redirect::route('dashboard');
    }

    /**
     * Display the specified resource.
     */

    public function show(Tweet $tweet)
    {
        // show a single tweet
        $data = Tweet::with('user', 'hashTags', 'parent', 'parent.user')->findOrFail($tweet->id);
        return Inertia::render('Tweet/Show', [
            'tweet' => $data,
            'userCard' => $data->user
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    
    public function edit(Tweet $tweet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tweet $tweet)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tweet $tweet)
    {
        //
    }

}
