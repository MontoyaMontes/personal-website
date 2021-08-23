<?php
//get data from form  
$name = $_POST['cont_name'];
$email= $_POST['cont_email'];
$subject = $_POST['cont_sub']
$message= $_POST['cont_message'];

$to = 'montoyamontespi@ciencias.unam.mx';
$subject = "[Mensaje de portafolio]" . $subject;
$txt ="Nombre = ". $name . "\r\n  Email = " . $email . "\r\n Mensaje =" . $message;

if($email!=NULL){
    mail($to,$subject,$txt);
}
//redirect
//header("Location:index.html");
?>