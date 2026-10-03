# BrightPath College Student Management System

A responsive React app for browsing student records and registering students with a local JSON Server API.

## Developer

- Name: **Your full name** (replace before submission)
- Student ID: **Your student ID** (replace before submission)

## Run the project

Install dependencies from the project root:

```bash
npm install
```

In one terminal, start JSON Server on port 5000:

```bash
npm run server
```

In a second terminal, start Vite:

```bash
npm run dev
```

Open the URL printed by Vite, usually `http://localhost:5173`. The student API is at `http://localhost:5000/students`. Keep both terminals running while using the app.

## Features

- Responsive Bootstrap navigation with active page styling and collapsible phone menu.
- Home, Students, Student Details, Add Student, About, and not-found pages.
- Student directory and individual profiles loaded with `fetch()` and the shared `useFetch` hook.
- Loading, error, empty, and missing-student states.
- Controlled registration form that sends new records to JSON Server with a POST request.
- Form validation, submission feedback, and redirect to the student directory after a successful save.

## Design decisions

`useFetch` accepts a URL and returns `data`, `loading`, and `error`; a changed URL starts a new request and aborts the previous one so stale records are not shown. A student card receives the record through props and puts its ID into the `/students/:id` route. The list and profile pages display clear messages when the API is unavailable, while an HTTP 404 for a profile displays “Student not found.” The registration form keeps its fields in component state, sends a POST request to the shared API base URL, and navigates to the directory only after a successful response. Repeated interface elements such as the navbar, page headers, state messages, and student cards are separate reusable components.

## Checks

```bash
npm run lint
npm run build
```

## Known bugs

- No known application bugs. Verify both the API-running and API-stopped states before submission.
