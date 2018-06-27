var app = new Vue({
  el: "#app",
  methods: {
    //第一个点我按钮的点击事件
    onClick: function() {
      console.log("clicked");
    },
    //鼠标在上的事件
    onEnter: function() {
      console.log("mouseEnter");
    },
    //鼠标移开时的事件
    onOut: function() {
      console.log("mouseLeave");
    },
    //表单里的提交事件
    //传进一个参数
    // v-on:submit="onSubmit($event)"
    //$event ,$ 为关键词 。 这样浏览器就会知道传递进来的是一个事件
    onSubmit: function() {
      //阻止这个参数的默认事件，没有这个条件的话 页面默认刷新
      //e.preventDefault();
      console.log("Submitted");
    },
    //键盘事件
    //v-on:keyup="onKeyUp" ---> 在H5页面写法
    onKeyUp: function() {
      console.log("key passed");
    },
    //键盘点击了enter之后触发的事件，Vue有封装事件
    //v-on:keyup.enter="onKeyEnter" ---> 在H5页面写法
    onKeyEnter: function() {
      console.log("entered");
    }
    // v-on: 可简写成 @
  }
});
