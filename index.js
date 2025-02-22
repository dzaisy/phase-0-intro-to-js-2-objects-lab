// Write your solution in this file!
const employee = {
    employeename: "zoe",
    streetAddress: '225 nowhere lane',
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    var newEmployee = Object.assign({}, employee, {[key]:value} );
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    var newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
