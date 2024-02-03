<?php

     echo "hello world";

     $name = "maung maung";
     $age = 25;

     echo $name;
     echo $age;

     /*
          openweathermap vs randomuser

          api key security         freely available by everyone
          * It integrate secirity code to their api

          -----------------------------------------------------
          Secirity Policy
          
          check the reques origin
          -file path
          -virtual host (localhost,liveserver)
          -XMLHttpRequest
          
          -http://
          -https://
          -https://abc.com
               If the request is made even from https, API key can be seen from viw page source. Everyone can access and apply the key. It is not resonable.
               One more restriction can be set, response will only return to the request from specific domain.

          *Live Server imitate in local pc for those reasons.
          


     */
?>
