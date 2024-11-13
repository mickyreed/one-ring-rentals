
/**
 * Property Information Page
 *
 * Property information component for all properties
 *
 * FILE NAME:   {id}.tsx
 * Location:    /src/pages/properties
 * Created:     12/11/2024
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 */
import { useRouter } from 'next/router';
import articles from '../../../public/articlesData.json';
import Link from "next/link";
import React from "react";
export default function ArticlesInfo() {
    const router = useRouter();
    const { id } = router.query;
    console.log('ID:', id);

    // Find the property by id
    const article = articles.find((prop) => prop.id === id);

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <div className="columns pt-6 pb-6 flex-col">
            <div className="column is-full is-centered">
                <h2 className="title is-2">{article.title}</h2>
                <h3 className="title is-3">{article.summary}</h3>

                <img src={article.image} alt={article.title}
                     className="w-full image-large object-cover pt-4 mt-4 mb-4 pb-4"/>
                <div className="pb-4 mb-4">
                    <h4 className="title is-4">{article.date}</h4>
                    <h4 className="title is-4">{article.tags}, {article.commentsCount}</h4>

                </div>
                <div className="flex justify-center mt-8 w-full">
                    <Link href={`/news`}>
                        <button className="button is-primary is-align-items-center mt-6">Back to New Articles</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}