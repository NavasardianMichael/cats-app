export async function fetchCats(id, page = 1) {
    const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${id}`)
    const cats = await res.json()
    return cats
}