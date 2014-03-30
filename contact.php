<?php
/*
Theme Name: Ace
Author URI: http://mishostudio.com
Description: Coming soon web page.
Author: @Shamanet
Version: 1.0
License: 
Copyright: (c) 2014 MISHO STUDIO
*/

//Call to settings
require 'settings.php';

//Clean information
function clean_data($input) {
    $input = trim(strip_tags(preg_replace("/[^A-Za-z0-9?![:space:]@,;:.-áéíóú]/","",$input)));
    return $input;
}

//Set variables
$name = substr(clean_data($_POST['name']),0,50);
$email = substr(clean_data($_POST['email']),0,50);
$message = substr(clean_data($_POST['message']),0,5000);

//Build the message
$contact  = "Someone contact you, here is the information. Greetings.\r\n\r\n";
$contact .= "Name: " . $name . "\r\n";
$contact .= "Email: " . $email . "\r\n";
$contact .= "Message: " . $message . "\r\n\r\n\r\n";
$contact .= "Message from: " . $root = ($_SERVER["HTTPS"] ? "https" : "http") . "://" . $_SERVER["HTTP_HOST"] . "/\r\n";
$contact .= "Copyright 2014. " . $companyName;

//Call to PHPMailer
require 'mailer/class.phpmailer.php';

//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Etc/UTC');
//Create a new PHPMailer instance
$mail = new PHPMailer();
//Tell PHPMailer to use SMTP
$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 0;
//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';
//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;
//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = $googleUser;
//Password to use for SMTP authentication
$mail->Password = $googlePassword;
//Set who the message is to be sent from
$mail->setFrom($googleUser, $companyName);
//Set an alternative reply-to address
$mail->addReplyTo($googleUser, $companyName);
//Set who the message is to be sent to
$mail->addAddress($googleUser, $companyName);
//Set the subject line
$mail->Subject = 'Hello, someone contact you! ' . '- ' . $companyName;
//Set the body message
$mail->Body = $contact;
//send the message, check for errors
$mail->send();