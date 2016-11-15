'use strict';

/**
 * @ngdoc function
 * @name appYangApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appYangApp
 */
angular.module('appYangApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
$(function () {

  //弹出模态窗口
  $("#btnAdd").click(function () {

    $("#submitData").html("提交");
    $('#AddModal').modal('show');

  });

  $("#btnshow").click(function(){
    var count= $('#datatable input[type=checkbox]:checked').length;
    if(count>0){
      $("#delmodal").modal("show");
    }
  });

  //删除
  $("#btnDel").click(function () {

    $('#datatable input[type=checkbox]').each(function () {
      var checked = $(this).is(":checked");
      var tr= $(this).parent().parent()
      if (checked) {
        tr.remove();
      }
    });
    $("#delmodal").modal("hide");
  });

  //修改
  $("#btnUpdate").click(function () {
    var count= $('#datatable input[type=checkbox]:checked').length;
    if(count==1){
      //获取选中行的元素值
      var tr = $('#datatable input[type=checkbox]:checked').parent().parent();
      var status= tr.children().eq(1).first().find("span").html();
      var title= tr.children().eq(2).first().find("a").html();
      var author= tr.children().eq(3).first().find("a").html();
      var createtime= tr.children().eq(4).first().html();
      //获取同级tr下的详情内容
      var detail=tr.next().children().html();
      if(status=="未审核"){
        $("#radioNoPass").prop("checked", true);
      }
      else if(status=="审核"){
        $("#radioPass").prop("checked", true);
      }
      //给页面元素赋值
      $("#txttiltle").val(title);
      $("#txtauthor").val(author);
      $("#txtcreatetime").val(createtime);
      $("#txtdetail").val(detail);

      $("#submitData").html("修改");
      $('#AddModal').modal('show');
    }
  });

  //全选
  $("#chkAll").click(function () {

    var checked = jQuery(this).is(":checked");
    $('#datatable input[type=checkbox]').each(function () {
      //jquery 1.7.2支持attr操作，后面的版本只能用prop了
      $(this).prop("checked", checked);
    });

  });

  //提交表单
  $("#submitData").click(function () {
    //获取页面值
    var tiltle=$("#txttiltle").val();
    var author=$("#txtauthor").val();
    var createtime=$("#txtcreatetime").val();
    var detail=$("#txtdetail").val();
    //获取选中的值
    var status=	$('input[name="key"]:checked').val();

    //获取文本内容判断是修改还是添加
    var btnContent=$("#submitData").html();
    if(btnContent=="修改"){
      //获取选中行的元素值
      var tr = $('#datatable input[type=checkbox]:checked').parent().parent();

      tr.children().eq(1).first().find("span").html(status);
      tr.children().eq(2).first().find("a").html(tiltle);
      tr.children().eq(3).first().find("a").html(author);
      tr.children().eq(4).first().html(createtime);

      tr.next().children().html(detail);

      $('#AddModal').modal('hide');
      return;
    }

    //获得表格在动态增减行数后的行数
    var index = $('#datatable tr[class="collapse"]').length + 1;

    //申明的变量
    var htmlText='<tr><td><input type="checkbox"/></td>';

    //判断状态
    if(status=="未审核"){
      htmlText += '<td><span class="label label-default">'+status+'</span></td>';
    }
    else if(status=="审核"){
      htmlText += '<td><span class="label label-success">'+status+'</span></td>';
    }

    htmlText += '<td><a href="#">'+ tiltle +'</a></td>';
    htmlText += '<td><a href="#">'+ author +'</a></td>';
    htmlText += '<td>'+ createtime +'</td>';
    htmlText += '<td><a class="detail-link" data-toggle="collapse" data-parent="#accordion" href="#collapse'+index+'">';
    htmlText += '<span class="glyphicon glyphicon-chevron-down"></span></a></td></tr>';
    htmlText += '<tr id="collapse'+ index + '" class="collapse">';
    htmlText +='<td colspan="10">'+detail+'</td></tr>';

    $("#datatable tbody").append(htmlText);
    //添加成功后关闭窗口
    $('#AddModal').modal('hide');
  });


});
