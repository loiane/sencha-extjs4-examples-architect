<?php

$username_list = array('admin', 'administrator', 'superadmin', 'loiane', 'groner');
if (in_array($_POST['username'], $username_list)) {
	echo 0;
} else {
	echo 1;
}

?>