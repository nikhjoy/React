<?php
header("Content-Type: application/json");

// Read JSON sent from React
$data = json_decode(file_get_contents("php://input"), true);

$name = $data["name"] ?? "";
$phone = $data["phone"] ?? "";
$email = $data["email"] ?? "";
$subject = $data["subject"] ?? "PRS Contact Form Enquiry";
$message = $data["message"] ?? "";

// Destination email
$to = "info@prsint.fr";

// Email subject
$email_subject = "New Contact Form Message from $name";

// Email body
$email_body = "
You have received a new message from the PRS website contact form:

Name: $name
Phone: $phone
Email: $email
Subject: $subject

Message:
$message
";

// Email headers
$headers = "From: no-reply@prsint.fr\r\n";
$headers .= "Reply-To: $email\r\n";

// Send email
if (mail($to, $email_subject, $email_body, $headers)) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => "Mail function failed"]);
}
?>
