这是一个笔记文档。
学习网址如下：
表严肃--------http://biaoyansu.com/
今日分学习地址--http://biaoyansu.com/18.3
** v-bind **
绑定数据和元素属性

---

绑定 href 的值
<a v-bind:href="url">点我</a>

---

绑定照片的 src 属性
<img v-bind:src="img">
data: {
img:"照片的路径"
}

---

添加相对应的类
<a :class="active: isActive" :href="url">点我</a>
data: {
url: "http://www.baidu.com/",
isActive: true
}
此部分数据在正确的安装了相对应的工具可使用，暂时无法使用这样的功能去解析，会报错
