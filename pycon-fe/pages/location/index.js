import Head from 'next/head';

import Layout from '../../app/components/layout';
import { getLocation } from '../../app/lib/location';
import styles from '../../styles/code-of-conduct.module.css';

export async function getServerSideProps() {
    const code = await getLocation();
    return code;
}

export default function Location( data ) {
    return (
        <Layout>
            <Head>
                <title>{data.title}</title>
            </Head>
            <h1>{data.title}</h1>
            <div className={styles.code_of_conduct} dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
        </Layout>
    )
}