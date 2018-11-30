
$(function(){

var currentPage = 1; //当前页
var pageSize = 5;  //每页条数

render();

function render() {
$.ajax({
  type: 'get',
  url: '/category/querySecondCategoryPaging',
  data: {
    page: currentPage,
    pageSize: pageSize
  },
  dataType: 'json',
  success:function(info){
    console.log(info);
    var htmlStr = template('secondTpl',info);
    $('tbody').html(htmlStr);
    //初始化分页插件
    $('#paginator').bootstrapPaginator({
      bootstrapMajorVersion: 3,
      currentPage: info.page,
      totalPages: Math.ceil(info.total / info.size),
      onPageClicked: function(a,b,c,page){
        currentPage = page;
        render();
      }
    })
  }
})
}

// 2. 点击添加分类按钮 显示添加模态框


})