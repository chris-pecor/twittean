<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TweetController;
use App\Http\Controllers\HashTagController;
use Illuminate\Support\Facades\Route;


Route::get('/', [TweetController::class, 'index'])->name('dashboard');

Route::middleware('auth')->group(function () {

    // breeze profile stuff
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/tweet', [TweetController::class, 'store'])->name('tweet.store');
    Route::post('/retweet', [TweetController::class, 'storeRetweet'])->name('retweet.store');
    Route::get('/tweet/create', [TweetController::class, 'create'])->name('tweet.create');
    Route::get('/tweet/{tweet}/retweet', [TweetController::class, 'createRetweet'])->name('tweet.retweet');
});

Route::get('/tweets/{user}', [TweetController::class, 'userTweets'])->name('user.tweets');

Route::get('/tweet/{tweet}', [TweetController::class, 'show'])->name('tweet.show');
Route::get('/hashtag/{hashtag}', [HashTagController::class, 'show'])->name('hashTag.show');

require __DIR__ . '/auth.php';