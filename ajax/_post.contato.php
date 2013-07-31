<?php
require_once('../classes/class.phpmailer.php');

$assuntoEmail = utf8_decode('CSSroots - Contato pelo site');
$TO = array( 
	'contato@cssroots.com.br'
);
$CC = array(
);
$BCC = array(
	'jonathan@cssroots.com.br',
	'giuliano@cssroots.com.br'
);

$nome     = trim($_POST['nome']);
$email    = trim($_POST['email']);
$mensagem = trim($_POST['mensagem']);

$mensagemHTML = "
<strong>Nome:</strong> $nome<br />
<strong>Email:</strong> $email<br />
____________________________________<br />
<br />$mensagem
";

if($nome!==''){

	$mailer = new PHPMailer();
	$mailer->IsSMTP();
	$mailer->SMTPDebug = 1;
	$mailer->Port = 587;
	$mailer->Host = 'smtp.cssroots.com.br';
	//$mailer->SMTPSecure = "ssl";
	$mailer->SMTPAuth = true;
	$mailer->Username = 'contato@cssroots.com.br';
	$mailer->Password = 'contatoroots25';
	$mailer->SetFrom('contato@cssroots.com.br');
	$mailer->AddReplyTo($email);
	if(count($TO)>0){ foreach ($TO as $mail) {
		$mailer->AddAddress($mail);
	} }
	if(count($CC)>0){ foreach ($CC as $mail) {
		$mailer->AddCC($mail);
	} }
	if(count($BCC)>0){ foreach ($BCC as $mail) {
		$mailer->AddBCC($mail);
	} }
	$mailer->Subject = $assuntoEmail;
	$mailer->MsgHTML(utf8_decode($mensagemHTML));

	if($mailer->Send()){
		print(1);
	} else {
		echo $mailer->ErrorInfo;
	}

} else {
	print(0);
}

?>
