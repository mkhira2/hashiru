import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

import HomePage from './views/homePage'
import LoginPage from './views/loginPage'
import AddRunPage from './views/addRunPage'
import FAQPage from './views/faqPage'


const app = function() {
    var HashiruRouter = Backbone.Router.extend({

        routes: {
            'home': 'renderHomePage',
            'login': 'renderLoginPage',
            'addrun': 'renderAddRunPage',
            'faq': 'renderFAQPage',
            '*default': 'handleRedirect'
        },

        renderHomePage: function() {
            ReactDOM.render(<HomePage />, document.querySelector('.container'))
        },

        renderLoginPage: function() {
            ReactDOM.render(<LoginPage />, document.querySelector('.container'))
        },

        renderAddRunPage: function() {
            ReactDOM.render(<AddRunPage />, document.querySelector('.container'))
        },

        renderFAQPage: function() {
            ReactDOM.render(<FAQPage />, document.querySelector('.container'))
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
