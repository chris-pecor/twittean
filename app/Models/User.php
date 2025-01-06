<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory;
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'username',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }


    // relationships

    public function tweets()
    {
        return $this->hasMany(Tweet::class);
    }

    public function following()
    {
        return $this->belongsToMany(
            User::class, 
            'follows', 
            'user_id', 
            'followed_user_id'
        );
    }

    public function followers()
    {
        return $this->belongsToMany(
            User::class, 
            'follows', 
            'followed_user_id', 
            'user_id'
        );
    }


    public function isFollowing(User $followedUser)
    {
        return $this->following->contains($followedUser);
    }

    public function isFollower(User $followerUser)
    {
        return $this->followers->contains($followerUser);
    }

    public function getRouteKeyName()
    {
        return 'username';
    }
}
