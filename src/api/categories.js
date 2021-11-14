export async function fetchCategories() {
    const res = await fetch('https://api.thecatapi.com/v1/categories')
    const categories = await res.json()
    return categories
}