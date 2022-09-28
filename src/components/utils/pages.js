export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages, curentPage, maxPages=5) => {
    let result = []
    let start = curentPage-3 > 0 ? curentPage-3 : 0
    let middle = curentPage - (parseInt(maxPages/2))
    if (middle > 0) {
        start = curentPage-3
    }
    if (middle < 0) {
        start = 0
    }
    if (curentPage+2 > totalPages) {
        start = totalPages - maxPages
    }

    for (let i=start; result.length < maxPages; i++) {
        result.push(i + 1);
    }
    return result
}