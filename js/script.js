//Helper Function
const $ = (id) => document.getElementById(id)
let empForm         = $('empForm')

empForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let employeeName    = $('name').value
    let employeeID      = $('id').value
    let ext             = $('ext').value
    let email           = $('email').value
    let department      = $('department').value
    console.log(`ID: ${employeeID}`)
    console.log(`Name: ${employeeName}`)
    console.log(`Extention: ${ext}`)
    console.log(`Email: ${email}`)
    console.log(`Department: ${department}`)
})