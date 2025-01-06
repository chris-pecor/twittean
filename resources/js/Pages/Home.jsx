import AppLayout from "@/Layouts/AppLayout";
import Tweet from '@/Components/Tweet';
import { Link } from "@inertiajs/react";

const Home = ({ tweets }) => {

    if (!tweets || !tweets.data) {
        return <h1>No tweets available.</h1>;
    }

    return (
        <>
            <h1>Most Recent Tweets</h1>
            <ul className="tweet-feed">

                {tweets.data.map((tweet) => (
                    <Tweet key={tweet.id} tweet={tweet} />
                ))}

            </ul>
            <div className="pagination">
                {tweets.links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        className={`${link.active ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        only={['tweets']}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </>

    );
}

Home.layout = page => <AppLayout user={page.props.auth.user} children={page} />

export default Home;
