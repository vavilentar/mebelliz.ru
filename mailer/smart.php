<?php 

$name = $_POST['client-name'];
$phone = $_POST['client-phone'];
$email = $_POST['client-mail'];
$comment = $_POST['client-request'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'ssl://mail.mebelliz.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'info@mebelliz.ru';                 // Наш логин
$mail->Password = 'PMrKi3dASn5Z';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('info@mebelliz.ru', 'Заявка с сайта');   // От кого письмо 
$mail->addAddress('i@rpchelkin.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Вам новое сообщение от посетителя сайта';
$mail->Body    = '
		Пользователь оставил данные <br> <br>
	<b>Имя:</b> ' . $name . ' <br>
	<b>Телефон:</b> ' . $phone . '<br>
	<b>Почта:</b> ' . $email . '<br>
	<b>Сообщение: </b> ' . $comment . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>