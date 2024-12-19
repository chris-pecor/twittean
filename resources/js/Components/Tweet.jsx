import { Link } from '@inertiajs/react';
import Hashtags from '@/Components/Hashtags';

export default function Tweet(props) {
    const tweet = props.tweet;

    return (
        <li className="tweet">
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
                    <Link href={`/tweets/${tweet.user.username}`} className="tweet-time">
                        {tweet.created_at}
                    </Link>
                </div>
                <div className="tweet-text-link">
                    <div className="tweet">
                        <Link href={`/tweet/${tweet?.id}`}>
                            {tweet.body ?
                                tweet.body
                                : tweet.parent.body ? (
                                    <>
                                        <span>Retweet: </span>
                                        <span>{tweet.parent.body}</span>
                                    </>
                                ) : (
                                    <span></span>
                                )}
                        </Link>
                        {tweet?.parent_id && tweet?.parent?.user && (
                            <div className="tweet-username">
                                by <Link href={`/tweets/${tweet.parent.user.username}`}>
                                    @{tweet.parent.user.username}
                                </Link>
                            </div>
                        )}
                    </div>

                    {tweet.hash_tags && (

                        <Hashtags hash_tags={tweet.hash_tags} />
                    )}

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
