const container = document.querySelector(".container")
const sentinel = document.getElementById("sentinel")

const addBoxes = (() => {
    let currentBoxNum = 0;
    return (numBoxes) => {
        for(let i = 0; i < numBoxes; i++){
            currentBoxNum++
            const newBox = document.createElement('div');
            newBox.classList.add("box")
            newBox.textContent = `Box ${currentBoxNum}`;
            container.appendChild(newBox)
        }
    }
})()

const intersectionHandler = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            addBoxes(7)
            container.appendChild(sentinel)
            addBoxes(3)
        }
    })
}

const observer = new IntersectionObserver(intersectionHandler)

observer.observe(sentinel)



