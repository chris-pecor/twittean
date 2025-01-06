<?php
namespace App\Services;

use App\Models\Follow;
use App\Models\Tweet;
use App\Models\User;

class UserCountsService
{
    /**
     * Get the counts of followers, following, and tweets for a given user.
     *
     * @param  \App\Models\User  $user
     * @return array
     */
    public function getCounts(User $user)
    {
        $followersCount = $user->followers()->count() ?? 0;
        $followingCount = $user->following()->count() ?? 0;
        $tweetsCount = $user->tweets()->count() ?? 0;

        return compact('followersCount', 'followingCount', 'tweetsCount');
    }
}
