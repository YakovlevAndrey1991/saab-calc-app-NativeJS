// export default function showHideAnimation(parentElementSelector, contentSelector, parentElementClassName) {
//     const element = document.querySelector(parentElementSelector)
//     const content = document.querySelectorAll(contentSelector)
//
//     element.addEventListener('click', (e) => {
//
//         const target = e.target
//         if (target.classList.contains(parentElementClassName) || target.classList.contains('title') || target.parentElement.classList.contains('title') || target.parentElement.classList.contains(parentElementClassName)) {
//             content.forEach(elem => {
//                 if (elem.classList.contains('hide')){
//                     elem.classList.remove('hide')
//                     elem.classList.add('show')
//                     elem.style.cssText = 'height: 150px'
//                 } else {
//                     elem.classList.remove('show')
//                     elem.classList.add('hide')
//                     elem.style.cssText = 'height: 50px'
//                 }
//
//             })
//         }})
// }

export default function showHideAnimation(parentElementSelector, contentSelector) {
    const element = document.querySelector(parentElementSelector)
    const content = document.querySelectorAll(contentSelector)

    element.addEventListener('click', (e) => {

        const target = e.target
        if (target.parentElement.classList.contains('title')) {
            content.forEach(elem => {
                if (elem.classList.contains('hide')){
                    elem.classList.remove('hide')
                    elem.classList.add('show')
                    elem.style.cssText = 'height: 150px'
                } else {
                    elem.classList.remove('show')
                    elem.classList.add('hide')
                    elem.style.cssText = 'height: 25px'
                }

            })
        }})
}