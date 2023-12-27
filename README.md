# Employee Management Application

## Overview

SpringBoot Application with React as Frontend. This repository contains a simple Employee Management application built with Spring Boot for the backend, React for the frontend, and PostgreSQL as the database. The application allows users to add, update, and delete employee details based on their ID, as well as list all employees.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Add Employee:** Add new employee details, including name and position.

- **Update Employee:** Update existing employee details based on their ID.

- **Delete Employee:** Delete an employee based on their ID.

- **List Employees:** View a list of all employees.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Getting Started

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/employee-management.git
    cd employee-management
    ```

2. **Setup PostgreSQL Database:**

    - Create a database named `employee_management`.
    - Update the database connection settings in `src/main/resources/application.properties`.

3. **Run the Spring Boot Backend:**

    ```bash
    ./mvnw spring-boot:run
    ```

    The backend server will start at `http://localhost:8080`.

4. **Run the React Frontend:**

    ```bash
    cd frontend
    npm install
    npm start
    ```

    The frontend development server will start at `http://localhost:3000`.

5. **Access the Application:**

    Open your browser and visit [http://localhost:3000/employee](http://localhost:3000) to access the Employee Management application.

## Project Structure

- `src/main/java/com/example/employeemanagement`: Backend Java source code.
- `src/main/resources`: Backend resources, including application properties.
- `frontend`: Frontend React application.

## Technologies Used

- **Backend:**
  - Spring Boot
  - Spring Data JPA
  - PostgreSQL

- **Frontend:**
  - React
  - Axios for API communication
  - Bootstrap for styling

---
### Output

![Screenshot 2023-12-26 002936](https://github.com/aditi55/EmployeeManagement/assets/67974030/ef23d883-4fe2-48d3-bc5f-9b5866d99618)
![Screenshot 2023-12-26 002604](https://github.com/aditi55/EmployeeManagement/assets/67974030/74c08104-0f1f-4921-8d0e-39f7163118d2)
![Screenshot 2023-12-26 002531](https://github.com/aditi55/EmployeeManagement/assets/67974030/c4d8f7c9-e3f0-44ad-bb45-fbf9323ae35d)
