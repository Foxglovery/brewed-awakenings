import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const clickedId = itemClicked.dataset.id
        if (itemClicked.dataset.type === "product") {
            for (const product of products) {
                if (product.id === parseInt(clickedId)) {
                    const finalPrice = product.price.toFixed(2) // includes 2 decimal points in my price
                    window.alert(`${product.name} costs $${finalPrice} `)
                }
            }
        }
    }
)


export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-type="product" data-id="${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}
