document.addEventListener('DOMContentLoaded', () => {
    getGames()
})


function getGames() {
    let yearList = ['1980s', '1990s', '2000s']
    for (let i of yearList) {
        console.log(i)
        fetch(`http://localhost:3000/${i}`)
        .then(resp => resp.json())
        .then((data) => {
            data.forEach((gameData) => {
            gameCard(gameData, i)
        })
        })
    }
}

function gameCard(gameData, year) {
    let newImg = document.createElement('img')
    newImg.src = `${gameData.image}`
    let newH2 = document.createElement('h2')
    newH2.setAttribute('class', 'name')
    newH2.innerText = `${gameData.name}`
    let yearLabel = document.getElementById(`year-${year}`)
    yearLabel.append(newImg)
    yearLabel.append(newH2)
} 