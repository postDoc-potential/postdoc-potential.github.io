<?php
// Get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];

$to = "postdoc.potential@gmail.com";
$subject = "This is the subject line";

// The following text will be sent
// Name = user entered name
// Email = user entered email
// Message = user entered message 
$txt ="Name = ". $name . "\r\n  Email = " 
    . $email . "\r\n Message =" . $message;
// $headers = "MIME-Version: 1.0" . "\r\n";

// $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// // $headers = "From: " $name . " <" $email">\r\n" .
// //             "CC: rituparnasarkr@gmail.com";

// $headers[] = 'To: Postdoc Potential <postdoc.potential@gmail.com>';

// $headers[] = 'From: test <'$email'>';


// if($email != NULL) {
//     // mail($to, $subject, $txt, $headers);
//     mail($to, $subject, $txt,);
// }
mail('postdoc.potential@gmail.com', 'test_subject', $txt);
// Redirect to
header("Location:last.html");
?>