import { getFromServer } from '../lib/utils';

export async function getSponsorsData() {
    const sponsorsData = await getFromServer('sponsors/');

    return {
        props: {
            sponsorsData
        }
    };
}
