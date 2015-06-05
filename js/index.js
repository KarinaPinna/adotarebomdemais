jQuery(document).ready(function(){
	/*espera todos os elementos da página carregar para começar o js, senao corre o risco de mexer em algo que não existe */
	cont=1;
	var img = Array();
	img[1]="hanna03.jpg";
	img[2]="hanna02.jpg";
	img[3]="hanna05.jpg";

	var leg = Array();
	leg[1]="Adote um cão!";
	leg[2]="Conheça as formas de ajudar o projeto.";
	leg[3]="Fórum: converse com outros apaixonados por cachorros.";

	jQuery("#dir").click(function(){

		if(cont==3) cont=1; else cont++;
		jQuery("#gde").fadeOut();
		/*efeito de imagem, tem o slideOut tbm */
		jQuery("#gde").attr("src","img/"+img[cont]);
		jQuery("#legenda").html(leg[cont]);
		jQuery("#gde").fadeIn();

	});

	/*jQuery("#gde").attr("src","images/"+img[1]); */
	jQuery("#dir").trigger("click");
	/* deve vir depois pois a função ainda não estava criada */

	jQuery("#esq").click(function(){

		if(cont==1) cont=3; else cont--;
		/*jQuery("#gde").fadeOut(); */
		/*efeito de imagem, tem o slideOut tbm */
		jQuery("#gde").attr("src","img/"+img[cont]);
		jQuery("#legenda").html(leg[cont]);
		jQuery("#gde").fadeIn();

	});

	/*jQuery("#gde").attr("src","images/"+img[1]); */
	jQuery("#esq").trigger("click");
});

/* jQuery(document).ready(function(){

	jQuery(".cria").on("click",function(){

		aux="<button class='cria'>Cria</button>";
		jQuery("#galeria").append(aux);

	});

	jQuery("#dir").click(function(){

		if(cont==2) cont=0; else cont ++;
		$("#gde").fadeOut();
		jQuery("#gde").attr("src","images/"+img[cont]);

	});

});*/
