let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

let User = require('../db/schema.js').User
let Run = require('../db/schema.js').Run
  
  apiRouter
    .get('/users', function(req, res){
      User.find(req.query , "-password", function(err, results){
        if(err) return res.json(err) 
        res.json(results)
      })
    })

  apiRouter
    .get('/users/:_id', function(req, res){

      User.findById(req.params._id, "-password", function(err, record){
        if(err || !record ) return res.json(err) 
        res.json(record)
      })
    })
    .put('/users/:_id', function(req, res){
            console.log('req',req.body)

      User.findByIdAndUpdate(req.params._id, req.body, {new: true}, function(err, record){
          if (err) {
            res.status(500).send(err)
          }
          else if (!record) {
            res.status(400).send('no record found with that id')
          }
          else {
            res.json(record)
          }
      })
    })

    .delete('/users/:_id', function(req, res){
      User.remove({ _id: req.params._id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: `record ${req.params._id} successfully deleted`,
          _id: req.params._id
        })
      })  
    })

    // Routes for a Model(resource) should have this structure

    apiRouter 
    .get('/runs', function(request, response) {
      Run.find(request.query, function(error, records) {
        if (error) {
          return response.status(400).json(error)
        }
        response.json(records)
      })
    })

    .post('/runs', function(request, response){
      var newRun = new Run(request.body)
      newRun.save(function(error, record){
        if (error) {
          return response.status(400).json(error)
        }
        response.json(record)
      })
    })

    .put('/runs/:runsId', function(request,response) {
      Run.findByIdAndUpdate(request.params.runsId,request.body,{new: true}, function(error,record) {
        if (error) {
          console.log(response)
          return response.status(400).json(error)
        }
        response.json(record)
      })
    })

    .delete('/runs/:runsId', function(request,response){
        Run.remove({_id: request.params.runsId}, function(error) {
          if (error) {
            return response.status(400).json(error)
          }
          response.json({
            msg: `Run ID ${request.params.runsId} has been deleted.`,
            id: request.params.runsId
          })
        })
      })


module.exports = apiRouter

