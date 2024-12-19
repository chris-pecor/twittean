import GuestLayout from "@/Layouts/GuestLayout";
import { Head, router, usePage } from '@inertiajs/react';


export default function Home() {
    const tweets = usePage().props.tweets;
    console.log(tweets);
    return (
        <GuestLayout>
            <ul className="tweet-feed">
            <li className="new-tweet">
                <img src="assets/avatars/1.png" alt="" className="profile-picture-small" />
                <div className="tweet-input-wrap">
                    <input type="text" placeholder="What's happening?" />
                    <a className="fa fa-camera attach-photo"></a>
                </div>
            </li>

            <li className="view-new-tweets">
                <p>View 22 new Tweets</p>
            </li>

            

            <li className="tweet">
                <img src="assets/avatars/1.png" alt="" className="tweet-profile-thumbnail" />
                <div className="tweet-content-wrap">
                    <div className="tweet-header">
                        <a href="#" className="tweet-display-name">LillyRue</a>
                        <a href="#" className="tweet-username">@lilly_rue</a>
                        <a href="#" className="tweet-time">2h</a>
                    </div>
                    <p className="tweet-text">
                        RT <a href="#" className="user-mention">@perspiciatis</a>: Sed ut unde omnis iste natus error sit <a href="#" className="user-mention">#voluptatem</a> accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi beatae vitae dicta sunt explicabo <a href="#" className="user-mention">@architecto</a>. <a href="#" className="external-link">google.com/1P1INge</a>
                    </p>
                    <img src="assets/media/tweet-post.jpg" alt="" className="tweet-photo" />
                    <ul className="tweet-action-buttons">
                        <li>
                            <a href="#">
                                <i className="fa fa-reply"></i>
                                <span></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-retweet"></i>
                                <span>1,265</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-star"></i>
                                <span>45</span>
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
        </ul>
        </GuestLayout>
    );

}