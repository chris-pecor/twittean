import { Link, usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";

export default function UserCard({ userCard }) {

    const user = usePage().props.auth.user;

    const handleFollowClick = async (e) => {
        e.preventDefault();

        // using axios here as it's what is under inertia's hood
        if (userCard.is_following) {

            axios.delete(route('unfollow.store', { user_id: userCard.id }))
                .then(response => {
                    userCard.is_following = false;
                    router.reload({ only: ['userCard'] }); // reload only the userCard
                })
                .catch(error => {
                    console.error('Error unfollowing user:', error.response || error.message);
                });

        } else {

            axios.post(route('follow.store', { user_id: userCard.id }))
                .then(response => {
                    userCard.is_following = true;
                    router.reload({ only: ['userCard'] }); // reload only the userCard - again
                })
                .catch(error => {
                    console.error('Error following user:', error.response || error.message);
                });
        }

        userCard.is_following = !userCard.is_following;
    };
    
    return (
        <div className="user-summary top-level-panel">
            {user && user.id !== userCard.id && (
                <div className="follow-card-wrap">
                    <div className="follow-card">
                        <Link onClick={handleFollowClick} className="follow">
                            <i className="fa fa-user-plus"></i>
                            {userCard.is_following ? "Unfollow" : "Follow"}
                        </Link>
                    </div>
                </div>
            )}
            
            <div className="user-info-wrap">
                <Link href={route('user.tweets', userCard.username)}>
                    <img src="/assets/avatars/1.png" alt="" className="profile-picture" />
                </Link>

                <div className="username-wrap">
                    <Link href={route('user.tweets', userCard.username)} className="display-name">
                        {userCard.name}
                    </Link>
                    <Link href={route('user.tweets', userCard.username)} className="username">
                        @{userCard.username}
                    </Link>
                </div>

                <ul className="user-stats">
                    <li>
                        <a href="#" className="user-stats-header">Tweets</a>
                        <Link href={route('user.tweets', userCard.username)} className="user-stats-value">
                            {userCard.counts.tweetsCount}
                        </Link>
                    </li>
                    <li>
                        <a href="#" className="user-stats-header">Following</a>
                        <a href="#" className="user-stats-value">{userCard.counts.followingCount}</a>
                    </li>
                    <li>
                        <a href="#" className="user-stats-header">Followers</a>
                        <a href="#" className="user-stats-value">{userCard.counts.followersCount}</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
