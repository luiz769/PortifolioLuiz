document.getElementsById('form-conato').addEventListener('submit', function(e) {
	e.preventDefault();
	let nome = document.getElementsById('nome').value;
	let email = document.getElementsById('email').value;
	let mensagem = document.getElementsById('mensagem').value;

	if(nome && email && mensagem) {
		alert('Mensagem enviada com sucesso');

		document.getElementsById('form-conato').reset();
	} else {
		alert('Por favor, preencha todos os campos.');
	}
});