const boxes = document.querySelectorAll(".box");
const header = document.getElementById("header");
const body = document.querySelector("body");

const options = {
    root: null,
    rootMargin: `0px 0px 0px 0px`,
    threshold: [...Array(101).keys()].map(x => x / 100),
    // trackVisibility: true,
    // delay: 0,
}

const intersectionHandler = entries => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting){
            console.log("VIEWPORT ENTER")
        } else {
            console.log("VIEWPORT EXIT");
        }
    })
}



const observer = new IntersectionObserver(intersectionHandler, options)

boxes.forEach((box) => {
    observer.observe(box);
})




// [...Array(101).keys()].map(x => x / 100)

// observer.root.style.border = "2px solid #44aa44"

// if (entries[0].isIntersecting){
//     console.log('VIEWPORT ENTER')
// } else {
//     console.log('VIEWPORT EXIT')
// }

// const intersectionHandler = entries => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             entry.target.classList.add("animated")
//         }
//     })
// }

// const body = document.querySelector('body')
// let prevYPosition = 0
//
// const checkScrollDirection = () => {
//     if (body.scrollTop > prevYPosition) {
//         console.log('SCROLLING DOWN')
//     } else {
//         console.log('SCROLLING UP')
//     }
//     prevYPosition = body.scrollTop
// }


// const intersectionHandler = entries => {
//     entries.forEach(entry => {
//         const {intersectionRatio, boundingClientRect, intersectionRect} = entry;
//         if (intersectionRatio === 0) {
//             header.innerText = "OUTSIDE"
//         } else if (intersectionRatio === 1) {
//             header.innerText = "INSIDE"
//         } else if (boundingClientRect.top < intersectionRect.top) {
//             header.innerText = `INTERSECTING TOP BY ${(intersectionRatio * 100).toFixed(2)}%`
//         } else {
//             header.innerText = `INTERSECTING BOTTOM BY ${(intersectionRatio * 100).toFixed(2)}%`
//         }
//     })
// }

