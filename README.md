# Wheel's Way Project

## Project Overview

The Wheel's Way project is a comprehensive web platform designed to enable users to list their cars for sale or rent. The platform incorporates a range of modern web development technologies and provides robust features for user authentication, state management, and data handling.

## Technology Stack

- **React**: Used for building the user interface.
- **Tailwind CSS**: Utilized for styling the application.
- **React Router DOM**: Implemented for creating routes and dynamic pages.
- **JSON Web Token (JWT)**: Used for authentication functionality.
- **Google OAuth**: Integrated for additional authentication options.
- **Redux Toolkit**: Employed for managing application state.
- **MongoDB**: Utilized as the database for all CRUD operations.
- **Render**: Used for deploying the application.

## Project Details

1. **Installation and Setup**:
   - Installed React, Tailwind CSS, and React Router DOM.
   - Configured the initial setup to create routes and dynamic pages.

2. **Authentication**:
   - Implemented authentication functionality using JSON Web Token (JWT).
   - Integrated Google OAuth for user login.
   - Enabled users to log in and update their username, password, email, and profile image.

3. **State Management**:
   - Used Redux Toolkit for managing the application's state.

4. **CRUD Operations**:
   - Utilized MongoDB for implementing all four CRUD operations (Create, Read, Update, Delete).
   - Allowed users to create new car listings with parameters such as price, offers, mileage, etc.
   - Enabled users to upload images of their cars.

5. **Listing Management**:
   - Provided functionality for users to edit their car listings after creation.
   - Displayed car listings to others with a slider image and quick details.
   - Enabled smooth contact options via Gmail.

6. **Search Functionality**:
   - Implemented advanced search functionality.
   - Allowed users to search by title, select certain options, and sort search results by car price.

7. **Deployment**:
   - Deployed the application using Render's free variant.

## Flowchart

```plaintext
  [Install and Setup]
         |
  [Create Routes]
         |
 [Implement Authentication] --- [
         |
   [Manage State with Redux Toolkit]
         |
[CRUD Operations with MongoDB]
         |
[User Features: Login, Profile Update]
         |
[Create/Edit Car Listings]
         |
[Image Upload Functionality]
         |
 [Display Listings with Details]
         |
  [Advanced Search Functionality]
         |
 [Deployment using Render]


flowchart TD
    A[Install and Setup] --> B[Create Routes]
    B --> C[Implement Authentication]
    C --> D[Google OAuth Integration]
    C --> E[Manage State with Redux Toolkit]
    E --> F[CRUD Operations with MongoDB]
    F --> G[User Features: Login, Profile Update]
    G --> H[Create/Edit Car Listings]
    H --> I[Image Upload Functionality]
    I --> J[Display Listings with Details]
    J --> K[Advanced Search Functionality]
    K --> L[Deployment using Render]
