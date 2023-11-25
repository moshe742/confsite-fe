import Head from 'next/head';

import Layout from '../../app/components/layout';
import { getTickets } from '../../app/lib/tickets';
import styles from '../../styles/code-of-conduct.module.css';

export async function getServerSideProps() {
    const page = await getTickets();
    return page;
}

export default function CodeOfConduct( data ) {
    const page = data;
    return (
        <Layout>
            <Head>
                <title>{page.title}</title>
            </Head>
            <h1>{page.title}</h1>
            <div className={styles.code_of_conduct} dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
        </Layout>
    )
}