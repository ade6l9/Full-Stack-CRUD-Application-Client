# Campus Management System - Client

This is the client-side application for the Campus Management System. It is built with React and Redux and provides a user-friendly interface for managing campuses and students.

## Features

- Home page with navigation to campuses and students
- CRUD functionality for campuses and students
- State management using Redux
- Real-time form validation with error messages
- Responsive and visually appealing design

## Prerequisites

Before setting up the project, ensure you have the following installed:

- Node.js 
- npm 

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <client-repository-url>
2. Navigate to the project directory:
   ```bash
   cd client
3. Install dependencies:
   ```bash
   npm install
4. Start the application:
   ```bash
   npm start
5. The application will be available at http://localhost:3000.


## Pages and Features

# Home Page
- Default landing page with navigation links to:
    - All Campuses View
    - All Students View

# All Campuses View
- Displays a list of all campuses
- Includes the following functionalities:
    - Add a new campus
    - Delete a campus
    - Navigate to the Single Campus View

# Single Campus View
- Displays detailed information about a specific campus:
    - Name, address, description, and image
    - A list of enrolled students (if any)
- Functionalities:
    - Add or remove students
    - Edit campus information
    - Delete the campus
    = Navigate to a student's detailed view

# All Students View
- Displays a list of all students
- Includes the following functionalities:
    - Add a new student
    - Delete a student
    - Navigate to the Single Student View

# Single Student View
- Displays detailed information about a specific student:
    - Name, email, GPA, image, and enrolled campus (if any)
- Functionalities:
    - Edit student information
    - Delete the student
    - Navigate to the campus they are enrolled in

# Add/Edit Campus and Student Views
- Forms to add or edit a campus or student
- Real-time form validation for:
    - Empty fields
    - Invalid inputs (e.g., invalid email, GPA out of range)
- Updates the view dynamically after form submission without a page refresh

#State Management (Redux)
- Campus Reducer: Manages state related to campuses
- Student Reducer: Manages state related to students

#Client-Side Routing (React Router)

- Route /campuses: Displays All Campuses View
- Route /students: Displays All Students View
- Route /campus/:campusId: Displays Single Campus View
- Route /student/:studentId: Displays Single Student View

## Contributor
Adelina Dautovic <br>
Github: ade6l9
