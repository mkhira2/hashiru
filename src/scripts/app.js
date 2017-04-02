import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

import HomePage from './views/homePage.js'


const app = function() {
    var HashiruRouter = Backbone.Router.extend({

        routes: {
            'home': 'renderHomePage',
            '*default': 'handleRedirect'
        },

        renderHomePage: function() {
            ReactDOM.render(<HomePage /> , document.querySelector('.container'))
        },

        handleRedirect: function() {
        	location.hash = 'home'
        }
    })

    new HashiruRouter
    Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
    // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
