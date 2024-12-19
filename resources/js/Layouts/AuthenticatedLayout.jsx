import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import UserCard from '@/Components/UserCard';

export default function AuthenticatedLayout({ children }) {
    const user = usePage().props.auth.user;
    const userCard = usePage().props.userCard;
    const stats = usePage().props.stats;

    return (
        <>
        <div className="header">
            <div className="header-content">
                <ul className="global-actions">
                    <li>
                        <Link href="/" className="global-actions-button-content">
                            <i className="fa fa-home" aria-hidden="true"></i>
                            Home
                        </Link>
                        
                    </li>

                   
                    <li>
                    <Link method="post" href={route('logout')} className="global-actions-button-content">
                            
                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                            Logout
                        </Link>
                    </li>
                </ul>
                <Link href="/tweet/create" className="compose-tweet">
                <button className="compose-tweet">
                    <span className="wrap">
                        <i className="fa fa-paper-plane"></i>
                        Tweet
                    </span>
                </button>
                </Link>

                <img src="/assets/avatars/1.png" alt="" className="profile-picture-small" />

                <div className="search">
                    <input type="text" placeholder="Search Twitter" />
                    <span className="fa fa-search"></span>
                </div>

                <i className="logo fa fa-twitter" aria-hidden="true"></i>
            </div>
        </div>

        <div className="page-wrap">

            <div className="left-sidebar">

                <div className="user-summary top-level-panel">

                    <div className="user-info-wrap">
                    {userCard ? <UserCard userCard={userCard}  stats={stats} /> : <UserCard userCard={user} stats={stats} />}


                    </div>
                </div>

                <div className="trending top-level-panel">
                    <h1>Trends</h1>

                    <ul className="trend-list">
                        <li className="trend">
                            <a href="#" className="trending-hashtag">#php</a>
                            <p className="trend-description">Unde omnis iste #php natus error sit</p>
                            <p className="subtext">70.2K Tweets about this trend</p>
                        </li>

                        <li className="trend">
                            <a href="#" className="trending-hashtag">#HotCode</a>
                            <p className="trend-description">#HotCode consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <p className="subtext">10K Tweets about this trend</p>
                        </li>

                        <li className="trend">
                            <a href="#" className="trending-hashtag">#CodeForFun</a>
                            <p className="subtext">Just started trending</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="central-content top-level-panel">
                {children}
            </div>
            <div className="right-sidebar">
                <div className="who-to-follow top-level-panel">
                    <ul className="who-to-follow-header">
                        <li>
                            <h1>Who to follow</h1>
                        </li>
                    </ul>

                    <ul className="who-to-follow-list">
                        <li>
                            <img src="/assets/avatars/2.png" alt="" className="tweet-profile-thumbnail" />

                            <div className="who-to-follow-right-wrap">
                                <p className="who-to-follow-line-wrap">
                                    <a href="#" className="who-to-follow-display-name">Webroot</a>
                                    <a href="#" className="tweet-username">@webroot</a>
                                </p>

                                <div className="clear"></div>

                                <a href="#" className="follow">
                                    <i className="fa fa-user-plus"></i>
                                    Follow
                                </a>
                            </div>

                            <div className="clear"></div>
                        </li>
                        <li>
                            <img src="/assets/avatars/3.png" alt="" className="tweet-profile-thumbnail" />

                            <div className="who-to-follow-right-wrap">
                                <p className="who-to-follow-line-wrap">
                                    <a href="#" className="who-to-follow-display-name">Carter</a>
                                    <a href="#" className="tweet-username">@carter3</a>
                                </p>

                                <div className="clear"></div>

                                <a href="#" className="follow">
                                    <i className="fa fa-user-plus"></i>
                                    Follow
                                </a>
                            </div>

                            <div className="clear"></div>
                        </li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="clear"></div>
                <div className="footer top-level-panel">
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
            </div>
        </div>

    
    </>

    );
}
