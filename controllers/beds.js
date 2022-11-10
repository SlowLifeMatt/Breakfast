const express = require("express");
const bedRouter = express.Router();
const bedData = require("../models/seed");
const Bed = require("../models/bed.js");
require("dotenv").config();
const api = process.env.API;

// INDUCES
// SEED
bedRouter.get("/seed", (req, res) => {
  Bed.deleteMany({}, (error, allBed) => {});
  Bed.create(bedData, (error, data) => {
    res.redirect("/bed");
  });
});

// INDEX
bedRouter.get("/", (req, res) => {
  Bed.find({}, (error, allBed) => {
    res.render("index.ejs", {
      Bed: allBed,
    });
  });
});

// NEW
bedRouter.get("/new", (req, res) => {
  res.render("new.ejs");
});

// DELETE
bedRouter.delete("/:id", (req, res) => {
  Bed.findByIdAndRemove(req.params.id, (err, deletedBed) => {
    res.redirect("/bed");
  });
});
// UPDATE
bedRouter.put("/:id", (req, res) => {
  console.log("put");
  req.body.completed = req.body.completed === "on" ? true : false;
  Bed.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedBed) => {
      console.log(err);
      // redirect user to showpage
      res.redirect(`/bed/${req.params.id}`);
    }
  );
});

// CREATE
bedRouter.post("/", (req, res) => {
  req.body.completed = req.body.completed === "on" ? true : false;
  Bed.create(req.body, (error, createdBed) => {
    res.redirect("/bed");
  });
});

// EDIT
bedRouter.get("/:id/edit", (req, res) => {
  Bed.findById(req.params.id, (err, foundBed) => {
    res.render("edit.ejs", { Bed: foundBed });
  });
});

// SHOW
bedRouter.get("/:id", (req, res) => {
  Bed.findById(req.params.id, (err, allBed) => {
    res.render("show.ejs", {
      Bed: allBed,
      api: api,
    });
  });
});

module.exports = bedRouter;
