<!DOCTYPE html>
<html lang="pl-PL">

<head>
	<meta charset="utf-8">
	<meta name="author" content="Tomasz Pakuła">
	<meta name="generator" content="Atom">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="/styles/upload.css">
	<title>Upload Error</title>
</head>

<body>
	<div class="window">
		Upload nie powiódł się!
		<?php if ($typeError): ?>
			<br>Nieprawidłowy typ pliku!
		<?php endif ?>
		<?php if ($sizeError): ?>
			<br>Plik większy niż 1 MiB!
		<?php endif ?>

		<br><br>
		Za chwilę nastąpi przekierowanie do galerii
	</div>
	<script type="text/javascript">
		setTimeout(function() {window.location.replace("gallery");}, 5000);
	</script>
</body>

</html>
