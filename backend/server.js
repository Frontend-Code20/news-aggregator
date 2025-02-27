import express from "express";  // Importing express for routing and creating the app
import cors from 'cors';  // Importing CORS to handle cross-origin resource sharing
import { newsList } from "../frontend/src/model/db.js";

// Initialize express app
const app = express();
const port = process.env.PORT || 1337; // Setting the port to the value in .env or default to 1337

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies (e.g., form submissions)
// app.use(bodyparser.urlencoded({ extended: true }));

// CORS configuration to allow cross-origin requests from the frontend (localhost:3000)
app.use(cors({
    origin: 'http://localhost:3000',  // Allowing requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed HTTP methods
    // allowedHeaders: ['Content-Type', 'Authorization']  // Allowed headers for requests
}));

// Default route to test the server connection
app.get('/', async (req, res) => {
    res.end("connected")
})

app.post('/full-articles', async (req, res) => {

    res.json(
        {
            category: req.body.category,
            articles: [{
                "newsID": 1,
                "sourceName": "Bol News",
                "sourceIcon": "/news/AA1tekmr.jpg",
                "sourceImage": "/news/th.jpg",
                "sourceTitle": "iPhone 17 Pro: latest rumors, tips and everything we’ve heard so far",
                "sourceDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "fullArticle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "likes": 20,
                "reads": 100,
                "comments": []
            },
            {
                "newsID": 2,
                "sourceName": "CNN",
                "sourceIcon": "/news/th.jpg",
                "sourceImage": "/news/AA1tekmr.jpg",
                "sourceTitle": "Apple Reportedly Working on MacBook Pro Overhaul",
                "sourceDescription": "Apple is reportedly working on a completely redesigned MacBook Pro, but it likely won't be released until 2026. While the company is still expected to launch the 2025 MacBook Pro featuring upgraded M5, M5 Pro, and M5 Max chips, a more comprehensive.",
                "fullArticle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "likes": 200,
                "reads": 1300,
                "comments": [{
                    "userName": "Ali Ahmed",
                    "userImage": "/icons/explore.png",
                    "comment": "This is a great new, we should all learn about it. I like this app also"
                }
                ]
            },]
        }
    )
})

app.post('/search', async (req, res) => {
    console.log(req.body);

    res.json({
        category: "World News",
        searchResults: [
            {
                "newsID": 1,
                "sourceName": "Bol News",
                "sourceIcon": "/news/AA1tekmr.jpg",
                "sourceImage": "/news/th.jpg",
                "sourceTitle": "iPhone 17 Pro: latest rumors, tips and everything we’ve heard so far",
                "sourceDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "fullArticle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "likes": 20,
                "reads": 100,
                "comments": []
            },
            {
                "newsID": 2,
                "sourceName": "CNN",
                "sourceIcon": "/news/th.jpg",
                "sourceImage": "/news/AA1tekmr.jpg",
                "sourceTitle": "Apple Reportedly Working on MacBook Pro Overhaul",
                "sourceDescription": "Apple is reportedly working on a completely redesigned MacBook Pro, but it likely won't be released until 2026. While the company is still expected to launch the 2025 MacBook Pro featuring upgraded M5, M5 Pro, and M5 Max chips, a more comprehensive.",
                "fullArticle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "likes": 200,
                "reads": 1300,
                "comments": [{
                    "userName": "Ali Ahmed",
                    "userImage": "/icons/explore.png",
                    "comment": "This is a great new, we should all learn about it. I like this app also"
                }
                ]
            }
        ]
    })
})

app.post('/user-info', async (req, res) => {
    res.json(
        {
            "userName": "usama khan",
            "userImage": "/news/AA1tekmr.jpg",
            "bookmarks": [2, 4, 1, 3, 5]
        }

    )
})

app.post('/OTP-verify', async (req, res) => {
    console.log(req.body);
    res.json(true).status(201)
})

app.post('/news-posts', async (req, res) => {
    console.log(req.body);
    res.json(newsList).status(201)
})

app.post('/login', async (req, res) => {
    console.log(req.body);
    res.json({ token: '34342323' }).status(201)
})

app.post('/bookmarked-news', async (req, res) => {
    const { bookmarks } = req.body
    const bookmarkedNews = newsList.filter(list => bookmarks.includes(list.newsID));
    console.log(bookmarks, req.body);
    res.json(bookmarkedNews).status(201)
})



// Starting the server and listening on the specified port
app.listen(port, () => {
    console.log("Server is running on " + port)
});