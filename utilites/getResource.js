import AddOption from "../classes/CreateSelect/CreateOptions";

const getResource = async (url, parentID) => {
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error(`Could not fetch${url}, status: ${res.status}`)
    }
    return await res.json()
        .then(data => {
            console.log(data)
            data.forEach(({title, value}) => {
                new AddOption(title, value, parentID).render()
            })
        })
}
export default getResource;