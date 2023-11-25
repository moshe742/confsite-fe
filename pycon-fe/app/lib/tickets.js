import { CreateHtmlFromMarkup, getFromServer } from "./utils";

export async function getTickets() {
    const data = await getFromServer('pages/tickets/');

    const contentHtml = await CreateHtmlFromMarkup(data.text);

    return {
        props: {
            contentHtml,
            ...data
        }
    };
}