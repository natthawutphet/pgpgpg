import React, { useState } from 'react';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Layout from '../components/Layout';

// แก้ไข Type ที่นี่
type PageParams = {
    id: string;
};

type ContentPageProps = {
    post: Post;
};

type Post = {
    _id: string;
    title: string;
    content: string;
};

type ResponseFromServer = {
    _id: string;
    title: string;
    content: string;
};

export async function getStaticProps({
    params,
}: GetStaticPropsContext<PageParams>): Promise<GetStaticPropsResult<ContentPageProps>> {
    try {
        let response = await fetch(`http://localhost:3000/api/getPost?id=${params?.id}`);
        let responseFromServer: ResponseFromServer = await response.json();

        return {
            props: {
                post: {
                    _id: responseFromServer._id,
                    title: responseFromServer.title,
                    content: responseFromServer.content,
                },
            },
        };
    } catch (e) {
        console.log('error', e);
        return {
            props: {
                post: {
                    _id: '',
                    title: '',
                    content: '',
                },
            },
        };
    }
}

export async function getStaticPaths() {
    let posts = await fetch('http://localhost:3000/api/getPosts');
    let postFromServer: Post[] = await posts.json();

    const paths = postFromServer.map((post) => ({
        params: { id: post._id },
    }));

    return { paths, fallback: false };
}

function EditPost({ post }: ContentPageProps) {
    const [postTitle, setPostTitle] = useState(post.title);
    const [postContent, setPostContent] = useState(post.content);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!postTitle || !postContent) {
            setError('All fields are required!');
            return;
        }

        try {
            let response = await fetch(`http://localhost:3000/api/editPost?id=${post._id}`, {
                method: 'POST',
                body: JSON.stringify({
                    title: postTitle,
                    content: postContent,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                setPostTitle('');
                setPostContent('');
                setMessage('Post edited successfully!');
            } else {
                throw new Error('An error occurred while editing the post');
            }
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <Layout>
            {/* Form and other UI elements here */}
            <form onSubmit={handleSubmit} className="form">
                {/* Form fields and submit button */}
            </form>
        </Layout>
    );
}

export default EditPost;
