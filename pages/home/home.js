const { http } = require('../../lib/http.js');

Page({
  data: {
    createTaskVisible: false,
    updateTaskVisible: false,
    lists: [],
    currentId: "",
    currentIndex: "",
    updateContet: ""
  },
  
  onShow: function() {
    http.get('/todos?completed=false')
    .then(response => {
      this.setData({ lists: response.response.data.resources })
    })
  },

  confirm: function(e) {
    let content = e.detail;
    console.log(content)
    if(content) {
      http.post('/todos',{
        description: content
      }).then((response) => {
        let todo = [response.response.data.resource];
        this.data.lists = todo.concat(this.data.lists);
        this.setData({ 
          lists: this.data.lists, 
          createTaskVisible: false
        });
      })
    }
  },
  
  cancel(e) {
    this.setData({ 
      createTaskVisible: false,
      updateTaskVisible: false
    })
  },

  createTask() {
    this.setData({ createTaskVisible: !this.data.createTaskVisible})
  },

  updateTask: function (e) {
    let index = e.currentTarget.dataset.index;
    let id = e.currentTarget.dataset.id;
    let text = this.data.lists[index].description;
    this.setData({ 
      updateTaskVisible: true,
      updateContent: text,
      currentId: id,
      currentIndex: index
    });    
  },

  updateConfirm: function(e) {
    let content = e.detail;
    http.put(`/todos/${this.data.currentId}`,{
      description: content
    }).then(response => {
      this.data.lists[this.data.currentIndex].description = content;
      this.setData({ 
        lists: this.data.lists,
        updateTaskVisible: false
      });
    })
  },

  destroyTodo(e) {
    let index = e.currentTarget.dataset.index;
    let id = e.currentTarget.dataset.id;
    http.put(`/todos/${id}`,{
      completed: true
    }).then(response => {
      this.data.lists[index].completed = true;
      this.setData({ lists: this.data.lists });
    });
  }
})