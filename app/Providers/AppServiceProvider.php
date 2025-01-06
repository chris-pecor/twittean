<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

use App\Models\Tweet;
use App\Models\Follow;
use App\Observers\TweetObserver;
use App\Observers\FollowObserver;
use App\Models\Scopes\TweetScope;
use App\Services\UserCountsService;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
        Tweet::observe(TweetObserver::class);
        Tweet::addGlobalScope(new TweetScope);

    }
}
