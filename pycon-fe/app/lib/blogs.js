import { remark } from 'remark';
import html from 'remark-html';

import { getFromServer } from './utils';

export async function getBlogsData() {
    const blogsData = await getFromServer('blog/');

    return {
        props: {
            blogsData
        }
    };
}

export async function getAllBlogIds() {
    const blogsData = await getFromServer('blog/');
  
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]

  return blogsData.map((blogData) => {
    return {
      params: {
        id: blogData.slug,
      },
    };
  });
}

export async function getBlogData(id) {
    const blogsData = await getFromServer('blog/');

    const blogData = blogsData.filter((obj) => obj.slug == id)[0]

    const processedContent = await remark().use(html)
                .process(blogData.post);

    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...blogData
    };
}

// export async function getServerSideProps(context) {
//     return {
//         props: {
//             // props for your component
//         }
//     };
// }
