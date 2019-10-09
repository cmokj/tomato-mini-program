Page({
  data: {
    visible: false,
    lists: [
      { id: 0, text: "今天星期一今天星期一今天星期一今天星期一今天星期一今天星期一今天星期一今天星期一今天星期一", complete: true },
      { id: 1, text: "今天星期二，我要把小程序完成我要把小程序完成我要把小程序完成我要把小程序完成我要把小程序完成我要把小程序完成。", complete: true },
      { id: 2, text: "今天星期三，我要吃炸鸡我要吃炸鸡我要吃炸鸡我要吃炸鸡我要吃炸鸡我要吃炸鸡我要吃炸鸡我要吃炸鸡我要吃炸鸡我要吃炸鸡。", complete: false },
      { id: 3, text: "今天星期四，我要喝奶茶我要喝奶茶我要喝奶茶我要喝奶茶我要喝奶茶我要喝奶茶我要喝奶茶我要喝奶茶我要喝奶茶我要喝奶茶我要喝奶茶我要喝奶茶我要喝奶茶。", complete: false },
      { id: 4, text: "今天星期五，我要看海贼我要看海贼我要看海贼我要看海贼我要看海贼我要看海贼我要看海贼我要看海贼我要看海贼我要看海贼。", complete: false },
      { id: 5, text: "今天星期六，我要看美剧。", complete: false }
    ]
  },

  confirm(e) {
    let content = e.detail;
    if(content) {
      let newId = this.data.lists.length;
      let todo = [{ id: newId, text: content, complete: false }];
      this.data.lists = todo.concat(this.data.lists);
      this.setData({ lists: this.data.lists })
    }
    this.setData({ visible: false })
  },
  
  cancel(e) {
    this.setData({visible:false})
  },

  createTask() {
    this.setData({ visible: !this.data.visible})
  },

  destroyTodo(e) {
    let index = e.currentTarget.dataset.index;
    this.data.lists[index].complete = true;
    this.setData({ lists: this.data.lists });
  }
})