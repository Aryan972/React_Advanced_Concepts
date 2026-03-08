//using IIFE to avoid the global polluting

(async function () {

    const data = await fetch("./src/data.json");
    const res = await data.json();

    let employees = res; //array of objects
    let selectedEmployeeId = employees[0].id;
    let selectedEmployee = employees[0];

    const employeeList = document.querySelector(".employees_names--list");
    const employeeInfo = document.querySelector(".employees_single--info");

    //ToDo: Add employee Logic

    //Todo: select Employee logic -> use event delegation to avoid targetting individually
    employeeList.addEventListener("click", (e) => {
        if(e.target.tagName === "SPAN" && selectedEmployeeId !== e.target.id){
            selectedEmployeeId = e.target.id;

            // Find the selected employee
        selectedEmployee = employees.find(
            (emp) => emp.id == selectedEmployeeId
        );
        renderEmployees();
        //render single employee details as well
        renderSingleEmployee();
        }
    })

    //render employee
    function renderEmployees() {
        employeeList.innerHTML="";

        //loop through the employess and print the name
        employees.forEach((emp) => {
            //create new span and add the name
            const employee = document.createElement("span");
            employee.classList.add("employees__names--item");

            employee.setAttribute("id", emp.id);
            employee.innerHTML = `${emp.firstName}  ${emp.lastName} <i class="employeeDelete">❌</i>`;

            employeeList.append(employee);
        })
    }

    //Todo: Render single employee
    const renderSingleEmployee = () => {
        //Todo: deleting employee
        employeeInfo.innerHTML = `
        <img src="${selectedEmployee.imageUrl}" />
        <span class="employees--single--heading">
        ${selectedEmployee.firstName} ${selectedEmployee.lastName} 
        </span>
        <span>${selectedEmployee.address}</span>
        <span>${selectedEmployee.email}</span>
        <span>${selectedEmployee.contactNumber}</span>
        <span>${selectedEmployee.dob}</span>

        `;
    }

    if(selectedEmployee) renderSingleEmployee();
    renderEmployees();
})();