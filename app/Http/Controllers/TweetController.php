<?php

namespace App\Http\Controllers;

use App\Models\Tweet;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Services\UserCountsService;

class TweetController extends Controller
{
    protected $userCountsService;

    public function __construct(UserCountsService $userCountsService)
    {
        $this->userCountsService = $userCountsService;
    }

    /**
     * Display the 20 most recent tweets from all users.
     */
    public function index()
    {

        $userCard = Auth::user();
        if ($userCard) {
            // get the counts - middleware seemed like overkill, only a few spots need it
            $userCard->counts = $this->userCountsService->getCounts($userCard);
        }

        return Inertia::render('Tweet/Index', [
            'tweets' => fn() => Tweet::latest()->paginate(20),
            'userCard' => $userCard,
        ]);
    }

    /**
     * Show tweets for the username.
     */
    public function userTweets(User $user)
    {
        // should be an accessor
        if (Auth::check()) {
            $user->is_following = Auth::user()->following->contains($user);
        }

        // get the counts - middleware seemed like overkill, only a few spots need it
        $user->counts = $this->userCountsService->getCounts($user);

        return Inertia::render('Tweet/Index', [
            'tweets' => fn() => $user->tweets()->latest()->paginate(20),
            'userCard' => $user,
        ]);
    }

    /**
     * Show the form for creating a new tweet.
     */
    public function create()
    {
        $userCard = Auth::user();
        if ($userCard) {
            // get the counts - middleware seemed like overkill, only a few spots need it
            $userCard->counts = $this->userCountsService->getCounts($userCard);
        }
        return Inertia::render('Tweet/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'body' => 'required|string|max:255',
            'parent_id' => 'nullable',
        ]);

        Tweet::create([
            'body' => $request->body,
            'user_id' => Auth::user()->id,
            'parent_id' => null,
        ]);

        return Redirect::route('home');
    }

    /**
     * Show the form for creating a retweet.
     */
    public function createRetweet(Tweet $tweet)
    {
        $userCard = Auth::user();
        if ($userCard) {
            // get the counts - middleware seemed like overkill, only a few spots need it
            $userCard->counts = $this->userCountsService->getCounts($userCard);
        }
        return Inertia::render('Tweet/CreateRetweet', [
            'tweet' => $tweet,
        ]);
    }

    /**
     * Store a retweet.
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

        return Redirect::route('home');
    }

    /**
     * Display the specified resource.
     */
    public function show(Tweet $tweet)
    {
        $data = Tweet::findOrFail($tweet->id);

        // get the counts - middleware seemed like overkill, only a few spots need it
        $data->user->counts = $this->userCountsService->getCounts($data->user);

        return Inertia::render('Tweet/Show', [
            'tweet' => $data,
            'userCard' => $data->user,
        ]);
    }

    /**
     * Determine if user is a follower of the target user
     */
    public function isFollowing(User $user, User $targetUser)
    {
        return $user->isFollowing($targetUser);
    }

    public function isFollower(User $user, User $targetUser)
    {
        return $user->isFollower($targetUser);
    }
}
