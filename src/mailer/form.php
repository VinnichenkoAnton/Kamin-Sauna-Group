<?php 

$user_name = $_POST['user_name'];
$user_phone = $_POST['user_phone'];


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'vinnichenkoanton.cv@gmail.com';
$mail->Password = 'Ant9379992';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('vinnichenkoanton.cv@gmail.comt', 'Kamin Sauna Group');
$mail->addAddress('vinnichenkoanton.cv@gmail.com');
$mail->isHTML(true);
$mail->Subject = 'Письмо от Kamin Sauna Group';
$mail->Body    = '
	Пользователь сайта <b>Kamin Sauna Group</b> оставил заявку!<br><br> 
	Имя: ' . $user_name . ' <br>
	Номер телефона: ' . $user_phone . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>