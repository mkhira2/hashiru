import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import ACTIONS from './actions'
import User from './models/userModel'

import HomePage from './views/homePage'
import LoginPage from './views/loginPage'
import AddRunPage from './views/addRunPage'
import FAQPage from './views/faqPage'
import BossBattlesPage from './views/bossBattlesPage'
import QuestsPage from './views/questsPage'


const app = function() {
    var HashiruRouter = Backbone.Router.extend({

        routes: {
            'home': 'renderHomePage',
            'login': 'renderLoginPage',
            'addrun/user/:id': 'renderAddRunPage',
            'faq': 'renderFAQPage',
            'bossbattles': 'renderBossBattlesPage',
            'quests': 'renderQuestsPage',
            '*default': 'handleRedirect'
        },

        renderHomePage: function() {
            ReactDOM.render(<HomePage />, document.querySelector('.container'))
        },

        renderLoginPage: function() {
            ReactDOM.render(<LoginPage />, document.querySelector('.container'))
        },

        renderAddRunPage: function(id) {
            ReactDOM.render(<AddRunPage userID={id}/>, document.querySelector('.container'))
        },

        renderFAQPage: function() {
            ReactDOM.render(<FAQPage />, document.querySelector('.container'))
        },

        renderBossBattlesPage: function() {
            ReactDOM.render(<BossBattlesPage />, document.querySelector('.container'))
        },

        renderQuestsPage: function() {
            ReactDOM.render(<QuestsPage />, document.querySelector('.container'))
        },

        handleRedirect() {
        location.hash = User.getCurrentUser() ? 'home' : 'login'
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
