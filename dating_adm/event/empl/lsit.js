/**
 * http://usejsdoc.org/
 */

/**
 * http://usejsdoc.org/
 */

$(document).ready(function(){
	_this = this;
    
    $("#btn_delete").click(function(){
    	var _this = $(this);
    	$('#Modal2').modal();
    });
    
    $("#btn_post_reg").click(function(){
    	alert(1111);
    	var _this = $(this);
    	$('#modalPostReg').modal();
    });
    
    
    /*$("#btn_dept_reg").click(function(){
    	var _this = $(this);
    	$('#deptPopupReg').modal();
    	$("input#frmUserId").val(_this.data('user_id'));
    });
    
    
    $("#btn_dept_save").click(function(){
    	var frm_dept_reg = $('form[name="frm_dept_reg"]');
    	frm_dept_reg.submit();
    });
    
    
    $("#btnDel").click(function(){
    	var frmDel = $('form[name="frmDel"]');
    	frmDel.submit();
    });
    
    $("#btn_srch").click(function(){
    	var frm_srch = $('form[name="frm_srch"]');
    	frm_srch.submit();
    });*/
    
    
    /*$("input[name='srch_txt']").on('keyup', function(e) {
	    if (e.keyCode === 13) {
	    	$("#btn_srch").trigger( "click" );
	    }
	});*/
    
});



