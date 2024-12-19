import AppLayout from "@/Layouts/AppLayout";
import Tweet from '@/Components/Tweet';


const Show = ({ tweet }) => {
    return (
        <ul className="tweet-feed">
            <Tweet key={tweet.id} tweet={tweet} />
        </ul>
    );
}

Show.layout = page => <AppLayout user={page.props.auth.user} children={page} />

export default Show;