import { CreateHtmlFromMarkup, getFromServer } from './utils';

export async function getLocation() {
    const data = await getFromServer('pages/location/');

    const contentHtml = await CreateHtmlFromMarkup(data.text);

    return {
        props: {
            contentHtml,
            ...data
        }
    };
}