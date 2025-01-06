import { Link } from '@inertiajs/react';
import Hashtags from '@/Components/Hashtags';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function Tweet(props) {

    const tweet = props.tweet;



    return (
        <li className="tweet-item">
            <img
                src="/assets/avatars/1.png"
                alt="User avatar"
                className="tweet-profile-thumbnail"
            />
            <div className="tweet-content-wrap">
                <div className="tweet-header">
                    <Link href={`/tweets/${tweet.user.username}`} className="tweet-display-name">
                        {tweet.user.name}
                    </Link>
                    <Link href={`/tweets/${tweet.user.username}`} className="tweet-username">
                        @{tweet.user.username}
                    </Link>
                    <div className="tweet-username">

                        {dayjs(tweet.created_at).fromNow()}
                    </div>
                </div>
                <div className="tweet-text-link">
                    <div className="tweet-text">
                        <Link href={`/tweet/${tweet?.id}`}>
                            <>{tweet.body && <span>{tweet.body}</span>}</>
                        </Link>

                        {tweet.parent?.body && (
                            <Link href={`/tweet/${tweet?.parent.id}`}>
                                {tweet.body && <br />}
                                <span>Re: </span>
                                <span>{tweet.parent.body}</span>
                            </Link>
                        )}
                        {!tweet.body && !tweet.parent?.body && <span>Tweet not available.</span>}
                        {tweet?.parent_id && tweet?.parent?.user && (
                            <div className="tweet-username">
                                by <Link href={`/tweets/${tweet.parent.user.username}`}>
                                    @{tweet.parent.user.username}
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="tweet-hash-tags">
                        {tweet.hash_tags && (
                            <Hashtags hash_tags={tweet.hash_tags} />
                        )}
                    </div>

                </div>
                <ul className="tweet-action-buttons">
                    <li>
                        <a href="#">
                            <i className="fa fa-reply"></i>
                            <span></span>
                        </a>
                    </li>
                    <li>

                        <Link href={`/tweet/${tweet?.id}/retweet`}>
                            <i className="fa fa-retweet"></i>
                            <span>6</span>
                        </Link>

                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-star"></i>
                            <span>9</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-ellipsis-h"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="clear"></div>
        </li>
    );
}
