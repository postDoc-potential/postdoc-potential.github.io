<?php
// Get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];

$to = "rituparnasarkr@gmail.com";
$subject = "This is the subject line";

// The following text will be sent
// Name = user entered name
// Email = user entered email
// Message = user entered message 
$txt ="Name = ". $name . "\r\n  Email = " 
    . $email . "\r\n Message =" . $message;

$headers = "From: postdocpotential@gmail.com" . "\r\n" .
            "CC: rituparnasarkr@gmail.com";


if($email != NULL) {
    mail($to, $subject, $txt, $headers);
}

// Redirect to
header("Location:last.html");
?>