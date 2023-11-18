const express = require("express")
const dotenv = require("dotenv")
const noteRouter = require("./routes/notesRoutes")

dotenv.config({ path: "./config.env" })

const app = express()
const PORT = process.env.PORT
app.use(express.json())

require("./db/connect")
app.use("/api/note", noteRouter);

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// for (let key in person) {
//     // console.log("key", key, "person", person);
//     console.log(key, ": ", person[key]);

// }

// const users = [
//     { id: 1, name: 'John', role: 'Admin' },
//     { id: 2, name: 'Alice', role: 'User' },
//     { id: 3, name: 'Bob', role: 'Moderator' }
// ];

// for (let userIndex in users) {
//     const user = users[userIndex];
//     console.log("User--", user);
//     // console.log(`User ${user.id}: name : ${user.name}, Role: ${user.role}`);
// }

app.listen(PORT, () => {
    console.log("Port is running on " + PORT)
})

