import Head from 'next/head';
import Layout from '../../app/components/layout';
import Date from '../../app/components/date';
import { getAllBlogIds, getBlogData } from '../../app/lib/blogs.js';
import blogStyles from '../../styles/blog.module.css';

export async function getServerSideProps({ params }) {
  const BlogData = await getBlogData(params.id);
  return {
    props: {
      BlogData,
    },
  };
}

// export async function getStaticPaths() {
//   const paths = await getAllBlogIds();

//   return {
//     paths,
//     fallback: false,
//   };
// }

export default function Blog({ BlogData }) {
  return <Layout>
    <Head>
        <title>{BlogData.title}</title>
    </Head>
    <article className={blogStyles.blog_post}>
        <h1 className=''>{BlogData.title}</h1>
        <div className=''>
            <Date dateString={BlogData.updated} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: BlogData.contentHtml }} />
    </article>
  </Layout>;
}
