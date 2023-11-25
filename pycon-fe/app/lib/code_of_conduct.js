import { CreateHtmlFromMarkup, getFromServer } from './utils';

export async function getCodeOfConduct() {
    const data = await getFromServer('pages/code/');

    const contentHtml = await CreateHtmlFromMarkup(data.text);

    return {
        props: {
            contentHtml,
            ...data
        }
    };
}