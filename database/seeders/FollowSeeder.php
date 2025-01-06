<?php

namespace Database\Seeders;

use App\Models\Follow;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class FollowSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();

        foreach ($users as $user) {
            $otherUsers = $users->where('id', '!=', $user->id);

            $otherUsers->random(min(3, $otherUsers->count()))->each(function ($otherUser) use ($user) {
                Follow::factory()->create([
                    'user_id' => $user->id,
                    'followed_user_id' => $otherUser->id,
                ]);
            });
        }
    }
}
