

# **Street Style Store API**  

This project is a RESTful API built using **Node.js**, **Express.js**, and **MySQL** to manage items in a database. It includes **CRUD operations**, **rate limiting**, **asynchronous file handling**, **authentication using JWT**, and **error handling**.  

## **Features**  
- **CRUD Operations**: Manage items in a MySQL database.  
- **Rate Limiting**: Prevent excessive API requests.  
- **JWT Authentication**: Secure endpoints with user authentication.  
- **Asynchronous File Handling**: Log metadata in a JSON file.  
- **Error Handling**: Handle invalid inputs, database errors, and rate limits.  

---

## **1. Installation & Setup**  

### **Prerequisites**  
- **Node.js** (v16 or later)  
- **MySQL Database**  
- **Postman or cURL** (for API testing)  

### **Step 1: Clone Repository**  
```bash
git clone https://github.com/your-repo-url/street-style-store-api.git
cd street-style-store-api
```

### **Step 2: Install Dependencies**  
```bash
npm install
```

### **Step 3: Setup Environment Variables**  
Create a `.env` file in the root directory and configure it as follows:  
```plaintext
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=street_style_store
JWT_SECRET=your_jwt_secret
RATE_LIMIT=100
```

### **Step 4: Database Setup**  
Run the following command to create the required table:  
```sql
CREATE TABLE items (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### **Step 5: Start Server**  
```bash
npm start
```
The server will start on `http://localhost:3000`

---

## **2. API Endpoints**  

### **Authentication (JWT)**  
- `POST /login` – Authenticate user and get a JWT token.  

### **Items API (Protected with JWT)**  
| Method | Endpoint         | Description              |  
|--------|----------------|--------------------------|  
| POST   | `/api/items`   | Create a new item        |  
| GET    | `/api/items`   | Retrieve all items       |  
| GET    | `/api/items/:id` | Get item by ID         |  
| PUT    | `/api/items/:id` | Update item by ID      |  
| DELETE | `/api/items/:id` | Delete item by ID      |  

### **Rate Limiting**  
- Maximum **100 requests per 15 minutes** per IP.  
- Exceeding limit returns `429 Too Many Requests`.  

---

## **3. Folder Structure**  

```
Street-Style-Store-API/
│── db/
│   ├── index.js         # Database connection
│── logs/
│   ├── logOperations.js # File handling (async logging)
│── middlewares/
│   ├── auth.js          # JWT authentication middleware
│   ├── rateLimiter.js   # Rate limiting middleware
│── routes/
│   ├── items.js         # API routes
│── index.js             # Main server entry point
│── package.json         # Dependencies and scripts
│── README.md            # Documentation
│── .env                 # Environment variables
```

---

## **4. Error Handling**  

### **Common Errors & Responses**  
| Error Type | Description | Status Code |  
|------------|------------|-------------|  
| Invalid Input | Missing or incorrect data | 400 |  
| Unauthorized | JWT missing or invalid | 401 |  
| Not Found | Requested resource not found | 404 |  
| Rate Limit Exceeded | Too many requests | 429 |  
| Server Error | Unexpected error | 500 |  

---

## **5. Future Enhancements**  
- Implement **Swagger documentation** for better API visibility.  
- Introduce **file upload functionality** for item images.  
- Add **pagination** for retrieving large datasets.  

---

## **6. Contributors**  
Developed by **K Thirumalesh**.  

-