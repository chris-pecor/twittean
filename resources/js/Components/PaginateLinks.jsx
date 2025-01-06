import { Link } from '@inertiajs/react';

export default function PaginateLinks({ items }) {

    return (
        <div className="pagination">
            {items.links.map((link, index) => (
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
    );
}
