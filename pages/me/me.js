// pages/me/me.js
const { http } = require("../../lib/http.js");

Page({

  data: {
    historyActive: "true",
    completedTodoActive: "",
    todos: {},
    tomato: {}
  },

  toHistory: function() {
    http.get('/tomatoes',{ is_group: "yes"}).then(response => {
      let tomato = response.response.data.resources;
      this.setData({
        tomato: tomato,
        historyActive: "true",
        completedTodoActive: ""
      })
    })
  },

  toCompletedTodo: function () {
    http.get('/todos', { is_group: "yes" }).then(response => {
      let todos = response.response.data.resources;
      this.setData({ 
        todos: todos,
        historyActive: "",
        completedTodoActive: "true"
      });
    })
  },
  
  onShow: function () {
    this.toHistory();
    http.get('/todos',{ is_group: "yes"}).then(response => {
      let todos = response.response.data.resources;
      this.setData({ todos: todos });
    })
  },

  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  },

})