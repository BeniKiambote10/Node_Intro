import express from 'express';
import employees from '../employees.json' assert { type: 'json' };
const app = express();
const PORT = 3000;
// Route to get all employees
app.get('/employees', (req, res) => {
  res.json(employees);
});
// Route to get a specific employee by ID
app.get('/employees/:employeeID', (req, res) => {
  const employeeID = parseInt(req.params.employeeID, 10);
  const employee = employees.find(emp => emp.employeeID === employeeID);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: 'Employee Not Found' });
  }
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 


//http://localhost:3000/employees output should show on the employees on that server 
//http://localhost:3000/employees/1 ouput should show one employee information on that server 
//http://localhost:3000/employees/999 output should show error and that the employee was not found 