import Head from 'next/head';
import Link from 'next/link';

import Layout from '../../app/components/layout';
import { getCodeOfConduct } from '../../app/lib/code_of_conduct';
import styles from '../../styles/code-of-conduct.module.css';

export async function getServerSideProps() {
    const code = await getCodeOfConduct();
    return code;
}

export default function CodeOfConduct( data ) {
    const codeOfConduct = data;
    return (
        <Layout>
            <Head>
                <title>{codeOfConduct.title}</title>
            </Head>
            <h1>{codeOfConduct.title}</h1>
            <div className={styles.code_of_conduct} dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
        </Layout>
    )
}