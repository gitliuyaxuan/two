$(function(){
  // 基于准备好的dom 初始化echarts实例
  var echarts_left = echarts.init(document.querySelector(".echarts_left"));
  // 指定图标的配置项和数据
  var option1 = {
    // 标题
    title: {
      // 标题文本
        text: '顶上战争'
    },
    // 提示框组件
    tooltip: {},
    // 图例
    legend: {
        data:['人数','死亡']
    },
    // x轴
    xAxis: {
        data: ["1月","2月","3月","4月","5月","6月"]
    },
    // y轴 y轴的数据刻度 需要通过数据的值 动态生成
    yAxis: {},
    series: [{
        name: '人数',
        type: 'bar',  // bar 柱状图  line 折线图  pie 饼图
        data: [52, 80, 36, 90, 98, 66]
    },{
      name: '死亡',
      type: 'bar',  // bar 柱状图  line 折线图  pie 饼图
      data: [112, 40, 86, 30, 99, 96]
  }]
};

// 使用刚指定的配置项和数据显示图表。
echarts_left.setOption(option1);

// 饼图
// 基于准备好的dom 初始化echarts实例
var echarts_right = echarts.init(document.querySelector(".echarts_right"));
// 指定图表的配置项和数据
var option2 = {
  title : {
    // 主标题文本
      text: '中二晚期',
      // 副标题文本
      subtext: '在下坂本有何贵干',
      // 水平居中
      x:'center',
      textStyle: {
        fontSize: 30,
        color: "#e92322"
      }
  },
  // 提示框组件
  tooltip : {
    // 鼠标悬停在数据项上时触发
      trigger: 'item',
      // {a} (系列名称) {b} (数据项名称) {c} (数值) {d} (百分比)
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  // 图例
  legend: {
    // 垂直 vertical 水平 horizontal
      orient: 'vertical',
      left: 'left',
      data: ['萨斯给','呐鲁多','niconiconi','地爆天星','西奈!!!']
  },
  // 系列列表
  series : [
      {
          name: '中二晚期',  // 系列名称
          type: 'pie',  // 饼状图
          // 圆的大小 圆直径的大小
          radius : '55%',
          // 圆心的位置
          center: ['50%', '60%'],
          data:[
              {value:335, name:'萨斯给'},  //数据项名称
              {value:310, name:'呐鲁多'},
              {value:234, name:'niconiconi'},
              {value:135, name:'地爆天星'},
              {value:1548, name:'西奈!!!'}
          ],
          itemStyle: {
              emphasis: {
                  shadowBlur: 50,
                  shadowOffsetX: 0,
                  shadowColor: 'yellow'
              }
          }
      }
  ]
};
  echarts_right.setOption(option2);
})