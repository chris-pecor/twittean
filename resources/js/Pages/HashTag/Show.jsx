import AppLayout from "@/Layouts/AppLayout";

import Tweet from '@/Components/Tweet';

const Show = ({ hashtag, tweets }) => {

    return (

<>

            <h1>#{hashtag.title}</h1>
            <ul className="tweets-feed">
                {tweets.data.map((tweet) => (
                    <Tweet key={tweet.id} tweet={tweet} />
                ))}
            </ul>
        
            </>
    );
};

Show.layout = page => <AppLayout user={page.props.auth.user} children={page} />

export default Show;
