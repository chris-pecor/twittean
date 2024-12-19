import AppLayout from "@/Layouts/AppLayout";

import Tweet from '@/Components/Tweet';

const Show = ({ hashtag, tweets }) => {
    console.log(tweets);

    return (
        
            
            <div className="hashtag-page">
                <h1>#{hashtag.title}</h1>
                <ul className="tweets-list">
                    {tweets.map((tweet) => (
                        <Tweet key={tweet.id} tweet={tweet} />
                    ))}
                </ul>
            </div>
        
    );
};

Show.layout = page => <AppLayout user={page.props.auth.user} children={page} />

export default Show;
