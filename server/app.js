const express = require("express")
const axios = require("axios")
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

let going = []
let notGoing = []

// 1.Create a route for "/"
app.get("/api", (req, res) => {
  axios.get(`https://randomuser.me/api/`).then((r) => {
    const user = r.data.results[0]
    res.json({
      first: user.name.first,
      last: user.name.last,
      pic: user.picture.large,
      email: user.email,
      phone: user.phone,
    })
  })
})

// 2.Create a route for "/going" 
app.get("/api/going/", (req, res) => {
  res.json(going)
})

// 3.Create a route for "/notgoing" 
app.get("/api/notgoing/", (req, res) => {
  res.json(notGoing)
})

// 4.Create a POST route for "/mark-invitee"
app.post("/api/mark-invitee", (req, res) => {
  if (req.body.going === true) {
    going.push(req.body);
  } else if (req.body.going !== true) {
    notGoing.push(req.body);
  }

  console.log(going);
  res.json({ success: true });
});


app.listen(3001, (req, res) => {
  console.log("listening on port 3001")
})