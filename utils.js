import axios from 'axios'

export const getCategories = async () =>
    await axios
        .get(process.env.API_URL_CATEGORIES)
        .then(({ data }) => data.trivia_categories)
