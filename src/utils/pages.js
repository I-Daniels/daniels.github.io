export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
    let resault = []
    for (let i = 0; i < totalPages; i++) {
        resault.push(i + 1)
    }
    return resault
}