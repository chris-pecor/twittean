<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Follow;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Follow>
 */
class FollowFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => $this->faker->randomElement(\App\Models\User::pluck('id')->toArray()),
            'followed_user_id' => $this->faker->randomElement(\App\Models\User::pluck('id')->toArray()),
        ];
    }
}