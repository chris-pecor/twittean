import {  Link } from '@inertiajs/react';

export default function Hashtags({ hash_tags }) {
    
    return (

        <ul>
            {hash_tags.map((tag) => (
                <li key={tag.id} className="tweet-hashtags-item">
                    <Link href={`/hashtag/${tag.title}`}>#{tag.title}</Link>
                </li>
            ))}
        </ul>

        
    );
}