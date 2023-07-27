$(function(){

    abirJanela()
    fecharJanela ()

    function abirJanela (){
        $('#btn').click(function(e){
            e.stopPropagation()
            $('.bg').fadeIn()
        })
    }

    function fecharJanela (){
        var el = $('body,.fechar')

        el.click(function(){
            $('.bg').fadeOut()
        })

        $('.form').click(function(e){
            e.stopPropagation()
        })

    }


    $('form#form1').submit(function(){

        var nome = $('input[name=nome]').val();
        var telefone = $('input[name=telefone]').val();
        var email = $('input[name=email]').val();

        if(verificarNome(nome) == false){
            aplicarCampooinvalido($('input[name=nome]'));
            return false
        }else if(verificarTelefone(telefone) == false){
            aplicarCampooinvalido($('input[name=telefone]'));
            return false
        }else if (verificarEmail(email) == false) {
            aplicarCampooinvalido($('input[name=email]'));
            return false
        }
        else {
            alert('formulario enviado com sucesso')
        }

        //se chegar até o final é porque esá tudo ok
    })

    function verificarNome(nome){
        if(nome == ''){
            return false;
        }

        var amout = nome.split(' ').length;
        var splitStr = nome.split(' ');

        if(amout >= 2){
            for(var i = 0; i < amout; i++ ){
                if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){

                }else {
                    return false;
                }

            }
        }else {
            return false;
        }
    }

    function aplicarCampooinvalido(el){
        el.css('color','red');		
		el.css('border','2px solid red');
		el.val('Campo Inválido!');
		//el.data('invalido','true');

    }

	function resetarCampoInvalido(el){
        el.css('color','black');		
        el.css('border','1px solid black');
        el.val('');
}

    $('input[type=text]').focus(function(){
        resetarCampoInvalido ($(this));
    })

    $('input[type=email]').focus(function(){
        resetarCampoInvalido ($(this));
    })

	function verificarTelefone(telefone){
		if(telefone == ''){
			return false;
		}

		if(telefone.match(/^[0-9]{2}[0-9]{4}[0-9]{4}$/) == null){
			return false;
		}

	}

    function verificarEmail (email){
        if(email == ''){
            return false
        }

        if (email.match(/^([a-z0-9--_.]{1,})+@([a-z.]{1,})$/) == null){
            return false
        }
    }

        



})