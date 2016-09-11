<?php
    include 'includes/cabecera.php';
?>

<?php
    include 'includes/navbar.php';
?>
<div id="conoce_page">
    <div class="container">
        <h1>Conócenos</h1>
    </div>
    <div class="container-fluid">
        <div id="google_map">
            <div class="overlay" onClick="style.pointerEvents='none'"></div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7492222437145!2d-1.5018656846824305!3d37.77247797975984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6492e988a08431%3A0xc8a84875577097ea!2zUGFuYWRlcsOtYSBDYcOxaXphcmVz!5e0!3m2!1sen!2ses!4v1451320015979" width="1200" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-12">
                <div id="contact_info">
                    <h2>¿Dónde estamos?</h2>
                    <hr>
                    <p>Calle San Antonio 29</p>
                    <p>Totana, 30850</p>
                    <p>Murcia</p>
                    <h2>¿Necesitas más información?</h2>
                    <hr>
                    <p>Llámanos al telefono: <a href="tel:968420498" target="_blank">968420498</a></p>
                    <p>O escribe un email a: <a href="mailto:ginescani@gmail.com" target="_blank">ginescani@gmail.com</a></p>
                    
                </div>

            </div>
            <div class="col-sm-12 col-md-6">
                
            </div>
        </div>
    </div>
    
<?php
    include 'includes/google_feed.php';
?>

</div>

<?php
    include 'includes/footer.php';
?>

<?php
    include 'includes/cabecera_fin.php';
?>