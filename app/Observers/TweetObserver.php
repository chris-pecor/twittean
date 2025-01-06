<?php

namespace App\Observers;

use App\Models\Tweet;
use App\Models\HashTag;

class TweetObserver
{
    /**
     * Handle the Tweet "created" event.
     *
     * @param \App\Models\Tweet $tweet
     * @return void
     */
    public function created(Tweet $tweet): void
    {
        // Update the tweet count
        //$tweet->user->increment('tweets_count');

        // Process for hashtag
        $hashTags = $this->extractUniqueHashtags($tweet->body);

        if (count($hashTags) > 0) {
            foreach ($hashTags as $hashtag) {
                // Create or get the hashtag
                $hashtagModel = HashTag::firstOrCreate(['title' => $hashtag]);
                $tweet->hashtags()->syncWithoutDetaching([$hashtagModel->id]);
            }
        }
    }

    /**
     * Extract unique hashtags from a tweet's body.
     *
     * @param string|null $text
     * @return array
     */
    protected function extractUniqueHashtags(?string $text): array
    {
        if ($text === null) {
            return [];
        }

        preg_match_all('/#\w+/u', $text, $matches);

        // hashtags to lowercase and remove the '#' symbol
        $hashtags = array_map(fn($hashtag) => strtolower(ltrim($hashtag, '#')), $matches[0]);

        return array_unique($hashtags);
    }
}
