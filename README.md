# News Aggregator Web App UI Using React

A user-friendly news aggregator web app built with React and Tailwind CSS. This web app fetches news from different news APIs, stores the data in its own database, and displays it like posts when the user requests. Users can like, bookmark news they like, and search for specific articles by category. To use this web app, the user must create an account.

## 1. Features
- Fetch news from different news platforms.
- Search for news articles by keywords or category.
- View and read full articles.
- Bookmark articles for later reading.
- Like articles to show preference.
- User authentication and management (sign up, login, logout).
## 2. Tech Stack
- **JavaScript**
- **React**
- **Tailwind CSS**
- **Axios** (for HTTP requests)
- **React-Redux** (for state management)
- **React Router** (for page navigation)


## 3. Get Started (Installation)
This project is built with React and Tailwind, so make sure you have node.js installed on your machine. Follow the steps below to set up the project locally.

### **Project structure:**
``` 
news-aggregator
 ├── backend        # Backend logic for the app
 └── frontend       # React frontend UI
 └── README.md      # Project documentation
```
### **Step 1: Setup Project Folder**

1. Create a folder named `news-aggregator` (or any name you prefer) and open it in a code editor like `VS Code`.
2. Open the terminal/command prompt inside the folder and run the following command to set up the `React` app:

```bash
-> npx create-react-app frontend
```
This will create a frontend folder with the basic React project setup.

### **Step 2: Navigate to the `frontend` folder**
```bash
-> cd frontend
```

### **Step 3: Install Required Dependencies**
Inside the `frontend` folder, install the necessary dependencies for the project:
```bash
-> npm install axios
-> npm install react-redux
-> npm install @reduxjs/toolkit
-> npm install react-router
-> npm install -D tailwindcss@3
```

### **Step 4: Replace the Default `src` Folder**
1. Inside the `frontend` folder, you will find a `src` folder that was created by `create-react-app`. You need to replace this `src` folder with the `src` folder from the project you downloaded.
2. Delete the existing `src` folder inside `frontend`, and then copy the `src` folder from your downloaded project into the `frontend` folder.
3. For the Tailwind CSS configuration, copy the `tailwind.config.js` file from the downloaded folder and paste it into the `frontend` folder. 

### **Step 5: Run the React App**
Now you can start the React development server and view the app in your browser.
```bash
-> npm start
```
This will start the app at http://localhost:3000 by default.

## Data Formats

### **1. Post Object**
```json
    {
        "newsID": "",
        "sourceName": "",
        "sourceIcon": "",
        "sourceImage": "",
        "sourceTitle": "",
        "sourceDescription": "",
        "fullArticle": " ",
        "likes": 0,
        "reads": 0,
        "comments": [{
            "userName":"",
            "userImage": "",
            "comment": ""
        }]
    },
``` 

### **2. User Object**
```json
    {
        "userName": "",
        "userImage": "",
        "bookmarks": []
    }
```

## License
This project is licensed under the **MIT License**

## Project Preview
![Explore page](https://github.com/Frontend-Code20/news-aggregator/blob/main/frontend/public/assets/explore.png)
![Articles page](https://github.com/Frontend-Code20/news-aggregator/blob/main/frontend/public/assets/articles.png)
![Search page](https://github.com/Frontend-Code20/news-aggregator/blob/main/frontend/public/assets/search.png)
![View Article page](https://github.com/Frontend-Code20/news-aggregator/blob/main/frontend/public/assets/article.png)
![Explore page](https://github.com/Frontend-Code20/news-aggregator/blob/main/frontend/public/assets/tabExplore.png)
![Explore page](https://github.com/Frontend-Code20/news-aggregator/blob/main/frontend/public/assets/tabArticles.png)
![Explore page](https://github.com/Frontend-Code20/news-aggregator/blob/main/frontend/public/assets/tabSearch.png)
![Explore page](https://github.com/Frontend-Code20/news-aggregator/blob/main/frontend/public/assets/tabArticle.png)
![Explore page](https://github.com/Frontend-Code20/news-aggregator/blob/main/frontend/public/assets/phoneExplore.png)
![Explore page](https://github.com/Frontend-Code20/news-aggregator/blob/main/frontend/public/assets/phoneSearch.png)
![Explore page](https://github.com/Frontend-Code20/news-aggregator/blob/main/frontend/public/assets/phoneArticles.png)
![Explore page](https://github.com/Frontend-Code20/news-aggregator/blob/main/frontend/public/assets/phoneArticle.png)
![Explore page](https://github.com/Frontend-Code20/news-aggregator/blob/main/frontend/public/assets/login.png)
![Explore page](https://github.com/Frontend-Code20/news-aggregator/blob/main/frontend/public/assets/signup.png)