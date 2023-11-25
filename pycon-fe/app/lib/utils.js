import { remark } from 'remark';
import html from 'remark-html';

export async function getFromServer(path) {
    const url = `http://127.0.0.1:8000/${path}`
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export async function CreateHtmlFromMarkup(text) {
    const processedContent = await remark().use(html)
            .process(text);

    const contentHtml = processedContent.toString();
    return contentHtml;
}