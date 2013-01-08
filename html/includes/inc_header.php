<?php include('functions.php');?>
<!doctype html>
<html class="js-false" lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">

    <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title><?php echo $title ?></title>

    <meta name="description" content="">
    <meta name="author" content="">

    <link rel="stylesheet" href="../css/screen.css">


    <script>
        // déclarations de points de rupture propre au site

        var oBreakPoints = { width : [1350,1230,1024,800], height : [900,800,700]},
            head_conf = {
                width: oBreakPoints.width,
                widthCss  : { "gt": true, "gte": true, "lt": true, "lte": true, "eq": true },
                height: oBreakPoints.height,
                heightCss : { "gt": true, "gte": true, "lt": true, "lte": true, "eq": true },
                browsers  : [
                    { ie     : { min: 6, max:  10 } }
                    //,{ chrome : { min: 8, max: 24 } }
                    //,{ ff     : { min: 3, max: 19 } }
                    //,{ ios    : { min: 3, max:  6 } }
                    //,{ android: { min: 2, max:  4 } }
                    //,{ webkit : { min: 9, max: 12 } }
                    //,{ opera  : { min: 9, max: 12 } }
                ],
                browserCss: { "gt": true, "gte": true, "lt": true, "lte": true, "eq": true }
            };
    </script>

    <script src="../js/libs/head.extended.js"></script><!--Version etendue de head.js avec + d options : syntaxe legerement differente -->

    <script>
        // déclarations des variables statiques à la façon Drupal
        var settingsGlobal = settingsGlobal|| {
            sTemplatePath : '../' // chemin du template en absolue
        }
    </script>
</head>
<body>