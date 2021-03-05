

const handleSubmit = () => {
      event.preventDefault()
      let name = document.getElementById("name").value

      let height = document.getElementById("height").value

      let width = document.getElementById("width").value

      let length = document.getElementById("length").value

      let weight = document.getElementById("weight").value
      // connect PHP here

      // let callGetName = "sjkhfksjd"
      // let callGetHeight = "sjkhfksjd"
      // let callGetWeight = "sjkhfksjd"
      // let callGetWidth = "sjkhfksjd"
      // let callGetLength = "sjkhfksjd"
      // let finalNeedToPrint = `${callGetName} : ${callGetWeight} kg, ${callGetLength} cm x ${callGetWidth} cm x ${callGetHeight} cm`
      let responseServer = connectPhpObject(name,weight,length,width,height)
      printResult(responseServer)

}

const printResult = (result) => {
      let p = document.createElement("h3")
      let content = document.createTextNode(result);
      p.appendChild(content);
      let br = document.createElement("br")
      document.getElementById("result").appendChild(br)
      document.getElementById("result").appendChild(p)
}


const connectPhpObject = (name, weight, length, width, height ) => {
      console.log("inside connect php");
      $.ajax({
              type: "GET",
              url: "object.php",
              dataType: "json",
              data: {name: name, weight: weight,length: length, width:width, height:height},
              success: function(data,status, xhr){
                  console.log("🚀 ~ file: index.js ~ line 42 ~ connectPhpObject ~ data", data)


            //     if(data == 'yes'){



            //     } else if (data =='no'){
            //       $("#logInMessage").html("<div class='alert alert-danger'>User have not signed up yet.Please Sign up ! </div>");

            //     }else {

            //       $("#logInMessage").html("<div class='alert alert-danger'> I dont know what the heck happened </div>");

            //     }
              },

            error: function (exception) {
                console.log('Exception:' + exception);
            }

            })

}

