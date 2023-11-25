import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '../../app/components/layout';
import { getSponsorsData } from '../../app/lib/sponsors';
import styles from '../../styles/sponsors.module.css';

export async function getServerSideProps() {
    const sponsorsData = await getSponsorsData();
    return sponsorsData;

}

function DiamondSponsors(sponsors) {
    return sponsors.filter((sponsor) => sponsor.level == 1);
}

function GoldSponsors(sponsors) {
    return sponsors.filter((sponsor) => sponsor.level == 2);
}

function SilverSponsors(sponsors) {
    return sponsors.filter((sponsors) => sponsors.level == 3);
}

function Sponsor({id, name, url, logo, level}) {
    let width = 100;
    let height = 100;
    console.log(level);
    if (level == 1) {
        width = 200;
        height = 100;
    } else if (level == 2) {
        width = 150;
        height = 75;
    } else if (level == 3) {
        width = 100;
        height = 50;
    }
    return (
        <Link href={url} key={id}><img src={logo} alt={ name } width={width} height={height} /></Link>
    )
}

function SponsorLogos({title, sponsors}) {
    if (sponsors.length > 0) {
        return (
            <>
            <h2>{title}</h2>
            <div className={styles.sponsorLogos}>
                {sponsors.map(({id, name, url, logo, level}) => (
                    <Sponsor key={id} id={id} name={name} url={url} logo={logo} level={level} />
                ))}
            </div>
            </>
        )
    } else {
        return ''
    }
}

export default function Sponsors({ sponsorsData }) {
    let diamond = DiamondSponsors(sponsorsData);
    let gold = GoldSponsors(sponsorsData);
    let silver = SilverSponsors(sponsorsData);
    return (
        <Layout>
            <Head>
                <title>sponsors</title>
            </Head>
            <div className={styles.sponsors}>
                <SponsorLogos title='diamond' sponsors={diamond} />
                <SponsorLogos title='gold' sponsors={gold} />
                <SponsorLogos title='silver' sponsors={silver} />
            </div>
        </Layout>
    )
}