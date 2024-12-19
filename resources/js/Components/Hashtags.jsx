import {  Link } from '@inertiajs/react';

export default function Hashtags({ hash_tags }) {
    
    return (
        <div className="hashtags">
            {hash_tags.map((tag) => (
                <span key={tag.id} className="hashtag">
                    <p><Link href={`/hashtag/${tag.id}`}>#{tag.title}</Link></p>
                </span>
            ))}
        </div>
    );
}