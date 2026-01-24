BlogSphere is a **modern full‑stack blogging platform** built using the **MERN stack principles**. It provides a clean, user‑friendly interface for readers and a powerful admin dashboard for managing blogs and comments.

This project demonstrates **real‑world full‑stack development**, including authentication, CRUD operations, cloud integrations, secure environment handling, and responsive UI design.

### Key Features :

### Admin Panel
* Secure **Admin Login** using JWT authentication
* Add, edit, publish/unpublish, and delete blogs
* Rich text editor (**Quill.js**) for blog content
* AI‑assisted blog content generation (Gemini API)
* Upload and optimize blog images using **ImageKit**
* View dashboard analytics:
  * Total Blogs
  * Total Comments
  * Drafts
  * Recent Blogs (with scrollable table)
* Approve or delete user comments

### User Side
* View all published blogs
* Read full blog details with:
   * Title & subtitle
   * Author name
   * Publish date
   * Featured image
* Add comments on blogs(admin approval required)
* Clean, responsive UI for all screen sizes
  

### Tech Stack : 

**Frontend :**

React.js

Tailwind CSS

Axios

Quill.js (Rich Text Editor)

**Backend :**

Node.js

Express.js

MongoDB Atlas

Mongoose ODM

JWT Authentication

**Cloud & Integrations :**

ImageKit (Image upload & optimization)

Google Gemini API (AI blog generation)


### Environment Variables

Sensitive data such as API keys and database URLs are securely managed using .env files and are not committed to GitHub.

Example variables:

MONGO_URI

JWT_SECRET

IMAGEKIT_PUBLIC_KEY

IMAGEKIT_PRIVATE_KEY

GEMINI_API_KEY

