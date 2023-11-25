import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/global.css';

export const siteTitle = 'PyCon Israel';

function MyNav() {
    const router = useRouter();

    return (
        <nav>
            <Link className={router.pathname == '/' ? 'active' : ''} href="/">home</Link>
            <Link className={router.pathname == '/sponsors' ? 'active' : ''} href="/sponsors">sponsors</Link>
            <Link className={router.pathname == '/location' ? 'active' : ''} href="/location">location</Link>
            <Link className={router.pathname.includes('/agenda') ? 'active' : ''} href="/agenda">agenda</Link>
            <Link className={router.pathname == '/tickets' ? 'active' : ''} href="/tickets">tickets</Link>
            <Link className={router.pathname.includes('/blog') ? 'active' : ''} href="/blog">blog</Link>
            <Link className={router.pathname == '/code' ? 'active' : ''} href="/code">code of conduct</Link>
        </nav>
    );
}

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
        <div>
            <header className='nav-header'>
                <Image className='logo' src="/logo-pyconil.png" alt="PyCon logo" width={50} height={50} />
                <MyNav />
            </header>
        </div>
      <Head>
        <link rel="icon" href="/logo-pyconil-favicon.png" />
        {/* <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <main>{children}</main>
      <footer>
        <section>
            <Link href="/">home</Link>
            <Link href="/sponsors">sponsors</Link>
            <Link href="/location">location</Link>
            <Link href="/agenda">agenda</Link>
            <Link href="/tickets">tickets</Link>
            <Link href="/blog">blog</Link>
            <Link href="/code">code of conduct</Link>
        </section>
        <section>
            <a href="https://pycon.org.il/2022/">pycon 2022</a>
            <a href="https://pycon.org.il/2021/">pycon 2021</a>
            <a href="https://pycon.org.il/2019/">pycon 2019</a>
            <a href="https://pycon.org.il/2018/">pycon 2018</a>
            <a href="https://pycon.org.il/2016/">pycon 2016</a>
        </section>
      </footer>
    </div>
  );
}
