<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['Email'];
    $visitor_phone = $_POST['Phone'];
    $message = $_POST['message'];
    
    $email_from = 'web@nggraphics.com';
    $email_subject = "New Web Request";
    $email_body = "$message";
    $to = "payak.keyur@gmail.com";
    $headers = "New email request";
    mail($to,$email_subject,$email_body,$headers);
?>
