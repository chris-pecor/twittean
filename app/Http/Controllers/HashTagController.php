<?php

namespace App\Http\Controllers;

use App\Models\HashTag;
use Inertia\Inertia;
use App\Services\UserCountsService;
use Illuminate\Support\Facades\Auth;

class HashTagController extends Controller
{

    protected $userCountsService;

    public function __construct(UserCountsService $userCountsService)
    {
        $this->userCountsService = $userCountsService;
    }
    /**
     * Display all tweets associated with the specified hashtag.
     */
    public function show(HashTag $hashtag)
    {
        $userCard = Auth::user();
        if ($userCard) {
            // get the counts - middleware seemed like overkill, only a few spots need it
            $userCard->counts = $this->userCountsService->getCounts($userCard);
        }

        return Inertia::render('HashTag/Show', [
            'tweets' => fn () => $hashtag->tweets()->latest()->paginate(20),
            'hashtag' => $hashtag,
            'userCard' => $userCard
        ]);
    }
}
