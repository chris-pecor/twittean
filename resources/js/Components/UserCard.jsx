
export default function UserCard({ userCard, stats }) {

    
    return (
        <>
            <img src="/assets/avatars/1.png" alt="" className="profile-picture" />

            <div className="username-wrap">
                <a href="#" className="display-name">{userCard.name}</a>
                <a href="#" className="username">@{userCard.username}</a>
            </div>

            <ul className="user-stats">
                <li>
                    <a href="#" className="user-stats-header">Tweets</a>
                    <a href="#" className="user-stats-value">22</a>
                </li>
                <li>
                    <a href="#" className="user-stats-header">Following</a>
                    <a href="#" className="user-stats-value">86</a>
                </li>
                <li>
                    <a href="#" className="user-stats-header">Followers</a>
                    <a href="#" className="user-stats-value">2</a>
                </li>
            </ul>
        </>
    );
}

