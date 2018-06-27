学习网址如下：
表严肃--------http://biaoyansu.com/
今日分学习地址--http://biaoyansu.com/18.4

---

**v-on 指令**

#### 基本语法

- v-on:click="onClick" (在这个地方有一个点击事件，点击事件函数的名字为 onClick 。onClick 事件函数写在 methods 这里面。 )
- //上面的这个语句可以简写成 ： @click="onClick"
- v-on 事件可以绑定数据事件。比如写成这样的 （v-on="{mouseenter: onEnter,mouseleave: onOut}" ），在一个事件里同时写两个时间。{}一定要记得写。！！！！要不然会语法报错。

#### 表单提交事件

- //表单里的提交事件
  //传进一个参数
  // v-on:submit="onSubmit($event)"
  //$event ,$ 为关键词 。 这样浏览器就会知道传递进来的是一个事件  
  onSubmit: function(e) {
  //阻止这个参数的默认事件，没有这个条件的话 页面默认刷新
  //e.preventDefault();
  console.log("Submitted");
  }

  //比较麻烦的写法。

- Vue 的包装事件
  v-on:submit.prevent="onSubmit"
  onSubmit: function() {
  console.log("Submitted");
  }
  这个跟上面的功能是一样的，阻止了默认事件的发生。
- Vue 的键盘事件
  v-on:keyup="onKeyUp"
  当输入框有键盘触发的时候，便触发 onKeyUp 这个函数事件。
  v-on:keyup.enter="onKeyEnter"
  当输入框有 enter 键被触发的时候，便触发 onKeyEnter 这个函数事件。

#### TIPS

- 函数名不要同名，下面的会覆盖上面的。
