$(function(){
  //1.进行表单校验配置
    //校验要求:
    //1.用户名不能为空 长度为2-6位
    //2.密码不能为空 长度为6-12位

    $('#from').bootstrapValidator({
      //配置校验图标
      feedbackIcons:{
        valid:'glyphicon glyphicon-ok',
      }
    })

})