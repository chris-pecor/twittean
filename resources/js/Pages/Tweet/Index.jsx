import AppLayout from "@/Layouts/AppLayout";

import Tweet from '@/Components/Tweet';


const Index =  ({ tweets }) => {
    
    return (    
        <>
        <h1>Most Recent Tweets</h1>
        <ul className="tweet-feed">

                {tweets.map((tweet) => (
                    <Tweet key={tweet.id} tweet={tweet} />
                ))}

            </ul>
            </>
    );
}

Index.layout = page => <AppLayout user={page.props.auth.user} children={page} userCard={page.props.userCard} />

export default Index;
