

window.onload = function(){
	for(var i = 0;i<$(".contant_nav a").length;i++){
	$($(".contant_nav a")[i]).click(function(){
		for(var i = 0;i<$(".contant_nav a").length;i++){
			$($(".contant_nav a")[i]).css("border-bottom","");
		}
			$(this).css("border-bottom","1px solid #00B4FF");
			console.log("12212");
			var index = $(".contant_nav a").index(this);
			if(index==0){
				$(".contant ul").css({"margin-left":"0","transition":"all 1s"});
			}
			if(index==1){
				$(".contant ul").css({"margin-left":"-100%","transition":"all 1s"});
			}
			if(index==2){
				$(".contant ul").css({"margin-left":"-200%","transition":"all 1s"});
			}
			console.log(index);
	})
}
	
	
	 $(".dream").hover(function(){	
	 	$(this).addClass("swing");

	 },function(){
        $(this).removeClass("swing");
    });
	 $(".journal").hover(function(){
	 	$(this).addClass("swing"); 	
	 },function(){
        $(this).removeClass("swing");
    });
	 $(".dream").click(function(){
		$(".popup").css({"opacity":"1","margin-top":"100px","transition":"all 2s","z-index":"99999"});
		$(".black").css({"opacity":"0.4","transition":"all 2s","z-index":"99998"});
	})
	 $(".cancel").click(function(){
		$(".popup").css({"opacity":"0","margin-top":"","z-index":"-99999"});
		$(".black").css({"opacity":"0","z-index":"-99998"});
		$(".idea").css({"opacity":"0","margin-top":"","z-index":"-99999"});
	})

	  $(".journal").click(function(){
	 	$(".idea").css({"opacity":"1","margin-top":"100px","transition":"all 2s","z-index":"9999999"});
	 	$(".black").css({"opacity":"0.4","transition":"all 2s","z-index":"99998"});
	 })


	 var E = window.wangEditor;
    var editor = new E('#div3');
    // 自定义菜单配置
    editor.customConfig.menus = [
        'bold',  // 粗体
	    'italic',  // 斜体
	    'underline',  // 下划线
	    'strikeThrough',  // 删除线
	    'foreColor',  // 文字颜色
	    'backColor',  // 背景颜色
		'justify',  // 对齐方式
	    'quote',  // 引用
	    'list',
	    'emoticon',  // 表情
	    'image'  // 插入图片
    ]
    editor.create();
}

