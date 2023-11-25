import Head from 'next/head';
import Link from 'next/link';

import Layout from '../../app/components/layout';
import { getBlogsData } from '../../app/lib/blogs';
import styles from '../../styles/blog.module.css';
import Date from '../../app/components/date.js';

export async function getServerSideProps() {
    const BlogsData = getBlogsData();
    return BlogsData;
}

export default function Blogs({ blogsData }) {
    return (
        <Layout>
            <Head>
                <title>blog posts</title>
            </Head>
            <div className={styles.blog_posts}>
            {blogsData.map(({id, title, updated, slug}) => (
            <div className={styles.blog_preview} key={id}>
                <h3><Link href={`/blog/${slug}`}>{title}</Link></h3>
                <Date dateString={updated} />
            </div>
            ))}
            </div>
        </Layout>
    )
}