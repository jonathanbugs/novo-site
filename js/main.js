$(document).ready(function(){
	scrollPage();
	titulosPortfolio();
	abrirMenu();
	//imgRetina();
	placeHolder();
});


/**************
	SCROLL
**************/
function scrollPage(){
	$("#boxLogo, .navMenu").localScroll({
		duration: 900,
		easing: 'easeInOutExpo'
	});
}


/**************
	MENU MOBILE
**************/
function abrirMenu(){
	$(".btMenu").click(function(){
		$().addClass('');

		if($(this).hasClass('showMenu')){
			$(this).removeClass('showMenu').addClass('fecharMenu');
		} else {
			$(this).removeClass('fecharMenu').addClass('showMenu');
		}

		$("html").toggleClass("menuAberto");
	});
}


/**************
	TITULOS PORTFOLIO
**************/
function titulosPortfolio(){
	$(".portfolioLink").on('mouseenter', function() {
		var texto = $(this).find('.portfolioTituloTxt');
		texto.delay(210).animate({
			opacity: 1
		}, 200, 'linear');
	}).on('mouseleave', function() {
		$(this).find('.portfolioTituloTxt').fadeTo(10, 0)
	});
}


/**************
	IMAGENS RETINA
**************/
function imgRetina(){
	Retina = function() {
		return {
			init: function(){
				var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
				if (pixelRatio > 1) {
					$("img").each(function(idx, el){
						el = $(el);
						if (el.attr("data-src2x")) {
							el.attr("src", el.attr("data-src2x"));
						}
					});
				}
			}
		};
	}();
	Retina.init();
}


/**************
	PLACEHOLDER
**************/
function placeHolder(){
	$('.input, .textarea').on('keyup',function(){
		if($(this).val()===''){ $(this).prev().show(); }
	}).on('keydown',function(){
		$(this).prev().hide();
	}).on('change',function(){
		if ($(this).val()===''){ $(this).prev().show(); } else { $(this).prev().hide(); }
	}).on('focusout',function(){
		$(this).prev().fadeTo(0,1);
		if ($(this).val()===''){ $(this).prev().show(); $(this).parent().find('.erro').show(); } else { $(this).prev().hide(); $(this).parent().find('.erro').hide(); }
	}).on('focusin',function(){
		if ($(this).val()===''){ $(this).prev().show(); $(this).prev().fadeTo(0,0.3); } else { $(this).prev().hide(); }
	}).each(function(){
		if ($(this).val()===''){ $(this).prev().show(); } else { $(this).prev().hide(); }
	});
}


/**************
	VALIDACAO DE FORMULARIO 
**************/
// function validaForm(){
// 	$('#formContato').validate({
// 		rules: {
// 			iptNome:{ required: true },
// 			iptEmail:{ required: true, email: true },
// 			textAreaMensagem:{ required: true }
// 		},
// 		submitHandler:function() {
// 			enviaContato();
// 		},
// 	});
// 	$('#btEnviar').on('click', function(){
// 		setTimeout(function(){
// 			$('label.error').siblings('label, span').css({'color':'#FF0000'});
// 		}, 100);
// 	});
// }

// function enviaContato(){
// 	var nome        = $("#iptNome").val();
// 	var email       = $("#iptEmail").val();
// 	var mensagem    = $("#textAreaMensagem").val();

// 	$.post("./ajax/_post.contato.php", {
// 		'nome'        : nome,
// 		'email'       : email,
// 		'mensagem'    : mensagem
// 	},
// 	function(data){
// 		$("#nome").val('').prev().show();
// 		$("#email").val('').prev().show();
// 		$("#mensagem").val('').prev().show();
// 	}, "html");
// 	alert('Sua mensagem foi enviada com sucesso. Obrigado!');
// }
