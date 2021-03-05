
<?php
// header("Access-Control-Allow-Origin: *");
class Product {
  // Properties
      private $weight;
      private $height;
      private $width;
      private $length;
      private $name;

            // Get and set name
      function set_name($name) {
            $this->name = $name;
      }
      function get_name() {
            return $this->name;
      }

      // Get and set weight
      function set_weight($weight) {
            $this->weight = $weight;
      }
      function get_weight() {
            return $this->weight;
      }

            // Get and set height
      function set_height($height) {
            $this->height = $height;
      }
      function get_height() {
            return $this->height;
      }

            // Get and set width
      function set_width($width) {
            $this->width = $width;
      }
      function get_width() {
            return $this->width;
      }

            // Get and set length
      function set_length($length) {
            $this->length = $length;
      }
      function get_length() {
            return $this->length;
      }
}

$product_one = new Product();
echo "sadsa";
// ! check exist post method
// if(isset($_POST['name']) && isset($_POST['height']) && isset($_POST['weight']) && isset($_POST['length']) && isset($_POST['width']) ){
//       $product_one->set_name($_POST['name']);
//       $product_one->set_height($_POST['height']);
//       $product_one->set_weight($_POST['weight']);
//       $product_one->set_length($_POST['length']);
//       $product_one->set_width($_POST['width']);

//       echo $product_one->get_name() .":". $product_one->get_weight()."kg,".$product_one->get_length()."cm x ".$product_one->get_width()."cm x ".$product_one->get_height()."cm";
// }else{
//       echo "POST method got issue";
// }





