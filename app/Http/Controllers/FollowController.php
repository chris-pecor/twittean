<?php

namespace App\Http\Controllers;

use App\Models\Follow;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class FollowController extends Controller
{
    public function store(Request $request)
    {
        // Check if the authenticated user is already following
        if (Auth::user()->following->contains($request->user_id)) {
            return response()->json(['message' => 'Already following this user'], 400);
        }

        // Create a new follow record
        Follow::create([
            'user_id' => Auth::user()->id,
            'followed_user_id' => $request->user_id,
        ]);

        return response()->json(['message' => 'Successfully followed'], 200);
    }

    public function destroy(Request $request)
    {


        $authenticatedUser = Auth::user(); // Use Auth facade to get the authenticated user
        $following = User::findOrFail($request->user_id); // Get the user to be unfollowed

        // Find the follow relationship and delete it
        $follow = Follow::where('user_id', $authenticatedUser->id)
            ->where('followed_user_id', $following->id)
            ->first();

        if (!$follow) {
            return response()->json(['message' => 'Not following this user'], 400);
        }

        // Delete the follow relationship
        $follow->delete();

        return response()->json(['message' => 'Successfully unfollowed'], 200);
    }
}
