import axios from 'axios'

export const getCategories = async () =>
    await axios
        .get(process.env.API_URL_CATEGORIES)
        .then(({ data }) => data.trivia_categories)

export const getQuiz = async ({ category, amount = 1 } = {}) => {
    const url = `${process.env.API_URL_BASE}?amount=${amount}${
        category ? `&category=${category}` : ''
    }&type=multiple`

    return await axios.get(url).then(({ data }) => data.results)
}
