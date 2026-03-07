//using IIFE to avoid the global polluting

(async function () {

    const data = await fetch("./src/data.json");
    const res = await data.json();

    let employees = res; //array of objects

    let selectedEmployee = employees[0];
    let selectedEmployeeId = employees[0].id;

    const employeeList = document.querySelector(".employees_names--list");
    const employeeInfo = document.querySelector(".employee__details");

    //ToDo: Add employee Logic

    //Todo: select Employee logic

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

    renderEmployees();
})();