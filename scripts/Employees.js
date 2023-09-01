import { getEmployees, getOrders } from "./database.js"


const employees = structuredClone(getEmployees())
const orders = structuredClone(getOrders())

const employeeOrders = (id) => {
    let ordersMade = 0

    for (const order of orders) {
        if (order.employeeId === id) {
            ordersMade++
        }
    }
    return ordersMade
}

document.addEventListener(
    "click",
    (clickEvent) => {
        
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type ==="employee") {
            const clickedEmployeeId = itemClicked.dataset.id

            
            for (const employee of employees) {
                if (employee.id === parseInt(clickedEmployeeId)) {
                    
                    const orderCount = employeeOrders(employee.id)
                    window.alert(`${employee.name} has made ${orderCount} orders`)
                }
            }
            
        }
    }
)
//for employee clicked
//iterate orders
//find orders with matching employee id

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee" data-id="${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

