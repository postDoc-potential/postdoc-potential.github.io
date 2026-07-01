<?php
// Receive form data
$firstname = $_POST['firstname'];
$lastname  = $_POST['lastname'];
$country   = $_POST['country'];
$message   = $_POST['subject'];

// Process data here...

echo "Thank you! Your message has been sent.";
exit();
?>