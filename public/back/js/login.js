// $(function () {
//   //1.进行表单校验配置
//   //校验要求:
//   //1.用户名不能为空 长度为2-6位
//   //2.密码不能为空 长度为6-12位

//   $('#form').bootstrapValidator({
//     //配置校验图标
//     feedbackIcons: {
//       valid: 'glyphicon glyphicon-ok',//校验成功
//       invalid: 'glyphicon glyphicon-remove',//校验失败
//       validating: 'glyphicon glyphicon-refresh'//校验中
//     },
//     //配置校验字段
//     fields: {
//       //用户名
//       username: {
//         //校验规则
//         validators: {
//           //非空校验
//           notEmpty: {
//             message: "请输入用户名"
//           },
//           //长度校验
//           stringLength: {
//             min: 2,
//             max: 6,
//             message: "用户名长度必须是2-6位"
//           }
//         }
//       },

//       // 密码
//       password: {
//         validators: {
//           notEmpty: {
//             message: "请输入密码"
//           },
//           stringLength: {
//             min: 6,
//             max: 12,
//             message: "密码长度必须是6-12位"
//           }
//         }
//       }
//     }

//   });

//   //校验成功后 会触发一个事件 表单校验成功事件默认是会提交表单的 页面就跳转了
//   //我们需要注册表单校验成功事件 在成功事件中 阻止默认的提交 通过ajax提交
//   $('#form').on('success.form.bv', function (e) {
//     //阻止默认的提交
//     e.preventDefault();
//     $.ajax({
//       type: "post",
//       url: "/employee/employeeLogin",
//       data: $('#form').serialize(),
//       dataType: 'json',
//       success: function (info) {
//         console.log(info);
//         if (info.error === 1000) {
//           alert('用户名不存在');
//           return;
//         }
//         if (info.error === 1001) {
//           alert('密码错误');
//           return;
//         }
//         if (info.success) {
//           location.href = 'index.html';
//         }
//       }
//     })
//   });

//   //重置功能 本身重置按钮 就可以重置内容 需要额外的重置状态
//   $('[type="reset"]').click(function () {
//     $('#form').data('bootstrapValidator').resetForm();
//   })

// })

$(function(){
  $('#form').bootstrapValidator({
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      username: {
        validators: {
          notEmpty: {
            message: "请输入用户名"
          },
          stringLength: {
            min: 2,
            max: 6,
            message: "用户名长度必须是2-6位"
          }
        }
      },
      password: {
        validators: {
          notEmpty: {
            message: "请输入密码"
          },
          stringLength: {
            min: 6,
            max: 12,
            message: "密码长度必须是6-12位"
          }
        }
      }
    }
  });
  $('#form').on('success.form.bv',function(e){
    e.preventDefault();
    $.ajax({
      type:"post",
      url:"/employee/employeeLogin",
      data:$('#form').serialize(),
      dataType:"json",
      success:function(info){
        console.log(info);
        if(info.error === 1000) {
          alert('用户名不存在');
          return;
        }
        if(info.error === 1001) {
          alert('密码错误');
          return;
        }
        if(info.success) {
          location.href = 'index.html';
        }
      }
    })
  });
  $('[type="reset"]').click(function(){
    $('#form').data('bootstrapValidator').resetForm();
  })
})