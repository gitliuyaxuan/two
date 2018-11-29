$(function(){

  var currentPage = 1; //当前页
  var pageSize = 5; //每页条数
  var currentId; //当前的用户id
  var isDelete; //修改的状态

// 一进入页面 发送ajax请求 请求列表数据 进行渲染 (通过模板引擎)
render();
function render(){
  $.ajax({
    type:'get',
    url:'/user/queryUser',
    data:{
      page:currentPage,
      pageSize:pageSize
    },
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr = template('tmp',info)
      $('tbody').html(htmlStr);
      //在ajax请求回来后 根据最新的数据 进行初始化分页插件
      $('#paginator').bootstrapPaginator({
        bootstrapMajorVersion: 3, //版本号
        currentPage: info.page, //当前页
        totalPages: Math.ceil(info.total / info.size), //总页数
        //给页码添加点击事件
        onPageClicked: function(a,b,c,page){
          console.log(page);
          currentPage = page;
          //重新渲染
          render();
        }
      })
    }
  });
}
// 2. 给所有的按钮添加点击事件 通过事件委托绑定
// 事件委托的好处
// 1. 可以给动态生成的元素 绑定事件
// 2. 可以批量注册事件 性能效率高
$('tbody').on('click','.btn',function(){
// 显示模态框
$('#userModal').modal('show');
// 获取用户id
currentId = $(this).parent().data('id');
// 根据按钮的类名 觉得修改用户称什么状态
// 禁用按钮? 0 : 1
isDelete = $(this).hasClass('btn-danger') ? 0 : 1;
});

// 模态框确认按钮被点击 应该发送ajax 进行修改用户状态
$('#confirmBtn').click(function(){
  $.ajax({
    type:'post',
    url:'/user/updateUser',
    data: {
      id: currentId,
      isDelete: isDelete
    },
    dataType:'json',
    success:function(info){
      console.log(info);
      if (info.success) {
        //关闭模态框
        $('#userModal').modal('hide');
        //重新渲染页面
        render();
      }
    }
  })
})

})