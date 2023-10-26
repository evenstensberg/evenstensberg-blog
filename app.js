"use strict";

const fs = require("fs");
const express = require("express");
const app = express();
const rateLimitMiddleware = require("./middlewares/ratelimit.js");
const _app_folder = "public";

const resturants = require("./data/resturants_flisa.json");



app.get('/api/healthcheck', rateLimitMiddleware, (req, res) => {
  res.sendStatus(200)
})

app.get('/api/resturants', rateLimitMiddleware, (_, res) => {
  res.send(resturants)
})

app.get('/api/resturants/:name', rateLimitMiddleware, (req, res) => {
  const {name} = req.params;
  const found_resturant = resturants.find(resturant => resturant.meta.id === name);
  if(!found_resturant) {
    res.sendStatus(404);
  }
  res.send(found_resturant)
})

app.get('/api/list-name', rateLimitMiddleware, (req, res) => {
  const ids = resturants.map(r => r.meta.id);
  console.log(ids)
  res.send(ids)
})


app.use("/", express.static(_app_folder, { maxAge: 60000 }));

app.get("*", (req, res, next) => {
  res.status(200).sendFile(`/`, { root: _app_folder });
});
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});