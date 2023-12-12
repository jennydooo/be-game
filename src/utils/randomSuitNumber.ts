export const randomSuiteGame = (array: number[], length: number) => {
    let index = Math.floor(Math.random() * array.length)
    const container = []
    while (length > 0) {
        length--
        container.push(array[index])
        index++
        if (index == array.length) {
            index = 0
        }
    }

    return container.join(',')
}
