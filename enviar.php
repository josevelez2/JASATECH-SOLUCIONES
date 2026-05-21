<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $empresa = $_POST['empresa'];
    $mensaje = $_POST['mensaje'];

    $destino = "TU_CORREO@tudominio.com";
    $asunto = "Nuevo mensaje desde JASATECH";

    $contenido = "
    Nombre: $nombre
    Correo: $correo
    Empresa: $empresa
    Mensaje: $mensaje
    ";

    $headers = "From: $correo";

    mail($destino, $asunto, $contenido, $headers);

    echo "<script>alert('Mensaje enviado correctamente');window.location='index.html';</script>";
}
?>
