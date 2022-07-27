<?php


$con=mysqli("sql208.epizy.com","epiz_32253431","BJiiZYnbzZI","epiz_32253431_Userword");
$name=$_POST['name'];
$Topic=$_POST['Topic'];
$no=(int)$_POST['no'];
$in=$_POST['in'];
$bind=$con->prepare("Insert into clientdetails values(?,?,?,?,curdate())");
$bind->bind_param('ssis',$name,$Topic,$no,$in);
?>
