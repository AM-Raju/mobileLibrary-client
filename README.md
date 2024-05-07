# Mobile Library - Books At Your Door

### Concept:

This Web application has been meticulously designed and developed by thinking in mind of a mobile or portable library. In this case a specialized mini-bus carried some books to a designated location of a city on a specific day of the week. And the paid members of this library can take hard cover book(s) for a week to read.

As for free users, they have access to an impressive collection of free ebooks. To unlock the full potential of this library and gain access to the entire catalog, individuals are invited to subscribe as paid members for a duration of one year, requiring a reasonable fee.

### Key Features:

This is a single page web application developed with React JS. I also used various react packages to improve the functionality of this project.

Only tailwindCSS is used to design this application. I only used DaisyUI to create the dashboard layout.

Used Stripe payment method for the payment purpose.

Full website is multi-device responsive. You can use this application on mobile, tablet, laptop, and desktop without any hassle

For authentication purpose I used Firebase authentication system so that user can login into the system with full security.

This application has some backed functionality. I used mongoDB as database and express.js for server purpose. And I also used imageBB to host images.

Used JSON Web Token(JWT) and axios to secure data.

Used React Hook Form(RHF) to get data from the users. It is also used to upload book data and author data to the database.

### Key Functionalities:

This web application is designed for three types of reader - free, standard, and premium.

Free reader can read all the ebooks just by login into the application using email. He can also see the details of the premium books. But not allowed to requisition a book.

Paid readers have two types. One is standard and another is premium. Standard reader can take one book for a week at a time, whereas premium reader can take two.

Admin, moderator, and paid reader have the access to the dashboard. They all have different routes and protected by their roles

Firebase authentication is used here for login and managed users. User can login with email and password or by gmail account

I used stripe payment method here. After only a successful payment a reader can get access of all the benefits of this app as per his membership status.

### Admin login:

Email: amproject2003@gmail.com

Password: 12345a

#### Used technologies:

- React
- Tailwind CSS
- Daisy UI
- AOS
- Express JS as server.
- MongoDB as database.
- Stripe payment method
- React Hook Form
- Firebase

Live URL: `https://mobilelibrarytexas.netlify.app/`

Live server: `https://mobile-library-server.vercel.app/`

========================================================

### Cloning the Vite React Project

#### Install Git:

Make sure you have Git installed on your machine.

#### Clone the Repository:

Open a terminal and navigate to the directory where you want to clone the project. Run the following command.

`git clone https://github.com/AM-Raju/mobileLibrary-client`

#### Navigate to Project Directory:

Change your working directory to the cloned project folder.

` cd your-project-folder`

========================================================

### Installing Dependencies

#### Install Node.js

Ensure that you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from [Node.js official website](https://nodejs.org/en).

#### Install Project Dependencies

Run the following command to install the project dependencies.

`npm install
`

#### Run the Development Server

To run the development server, use the following command.

`npm run dev
`
