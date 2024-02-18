boolRoll = false;
      boolCNIC = false;
      boolLandline = false;
      boolMobile = false;
      boolEmail = false;
      boolName = false;
      boolCourses = false;
   function checkRollNo() {
        value = document.getElementById("rollno").value;
        length = value.length;

        if (length == 8) {
          if (
            !isNaN(value.charAt(0)) &&
            !isNaN(value.charAt(1)) &&
            value.charAt(2) == "F" &&
            value.charAt(3) == "-" &&
            !isNaN(value.charAt(4)) &&
            !isNaN(value.charAt(5)) &&
            !isNaN(value.charAt(6)) &&
            !isNaN(value.charAt(7))
          ) {
              boolRoll=true;
            document.getElementById("error1").innerHTML = "";
          } else {
            document.getElementById("error1").innerHTML = "Invalid Format!";
          }
        } else {
          document.getElementById("error1").innerHTML = "Invalid Format!";
        }

        if (value == "") {
          document.getElementById("error1").innerHTML = "";
        }
      }

      function checkName() {
        value = document.getElementById("name").value;
        length = value.length;

        for (let i = 0; i < length; i++) {
          if (isNaN(value.charAt(i))) {
            boolName = true;
            document.getElementById("error2").innerHTML = "";
          } else {
            document.getElementById("error2").innerHTML =
              "Name cannot contain Numbers";
          }
        }

        if (value == "") {
          document.getElementById("error2").innerHTML = "";
        }
      }

      function checkCNIC() {
        value = document.getElementById("CNIC").value;

        if (value.length == 15) {
          if (
            !isNaN(value.charAt(0)) &&
            !isNaN(value.charAt(1)) &&
            !isNaN(value.charAt(2)) &&
            !isNaN(value.charAt(3)) &&
            !isNaN(value.charAt(4)) &&
            value.charAt(5) == "-" &&
            !isNaN(value.charAt(6)) &&
            !isNaN(value.charAt(7)) &&
            !isNaN(value.charAt(8)) &&
            !isNaN(value.charAt(9)) &&
            !isNaN(value.charAt(10)) &&
            !isNaN(value.charAt(11)) &&
            !isNaN(value.charAt(12)) &&
            value.charAt(13) == "-" &&
            !isNaN(value.charAt(14))
          ) {
            boolCNIC = true;
            document.getElementById("error3").innerHTML = "";
          } else if (value.charAt(3) != " ") {
            document.getElementById("error3").innerHTML =
              "Invalid Format! or Space Issue! ";
          }
        } else {
          document.getElementById("error3").innerHTML =
            "Invalid Format! or Space Issue! ";
        }
      }

      function checkMobNo() {
        value = document.getElementById("mobileNo").value;

        if (value.length == 14) {
          if (
            value.charAt(0) == "+" &&
            value.charAt(1) == "9" &&
            value.charAt(2) == "2" &&
            value.charAt(3) == " " &&
            !isNaN(value.charAt(4)) &&
            !isNaN(value.charAt(5)) &&
            !isNaN(value.charAt(6)) &&
            !isNaN(value.charAt(7)) &&
            !isNaN(value.charAt(8)) &&
            !isNaN(value.charAt(9)) &&
            !isNaN(value.charAt(10)) &&
            !isNaN(value.charAt(11)) &&
            !isNaN(value.charAt(12)) &&
            !isNaN(value.charAt(13))
          ) {
            boolMobile = true;
            document.getElementById("error4").innerHTML = "";
          } else if (value.charAt(3) != " ") {
            document.getElementById("error4").innerHTML =
              "Invalid Format! or Space Issue! ";
          }
        } else {
          document.getElementById("error4").innerHTML =
            "Invalid Format! or Space Issue! ";
        }
      
        if (value == "") {
          document.getElementById("mobileNo").value = "+92 ";
        }
      }

      function checkLandline() {
        value = document.getElementById("landline").value;

        if (value.length == 13) {
          if (
            value.charAt(0) == "+" &&
            value.charAt(1) == "4" &&
            value.charAt(2) == "1" &&
            value.charAt(3) == " " &&
            !isNaN(value.charAt(4)) &&
            !isNaN(value.charAt(5)) &&
            !isNaN(value.charAt(6)) &&
            !isNaN(value.charAt(7)) &&
            !isNaN(value.charAt(8)) &&
            !isNaN(value.charAt(9)) &&
            !isNaN(value.charAt(10)) &&
            !isNaN(value.charAt(11)) &&
            !isNaN(value.charAt(12))
          ) {
            boolLandline = true;
            document.getElementById("error5").innerHTML = "";
          } else if (value.charAt(3) != " ") {
            document.getElementById("error5").innerHTML =
              "Invalid Format! or Space Issue! ";
          }
        } else {
          document.getElementById("error5").innerHTML =
            "Invalid Format! or Space Issue! ";
        }

        if (value == "") {
          document.getElementById("landline").value = "+41 ";
        }
      }

      
      function checkEmail() {
        value = document.getElementById("email").value;
        if (value.includes("@nu.edu.pk") || value.includes("@cfd.nu.edu.pk")) {
          boolEmail = true;
          document.getElementById("error6").innerHTML = "";
        } else {
          document.getElementById("error6").innerHTML =
            "@nu.edu.pk or @cfd.nu.edu.pk";
        }
      }
     
      function checkCourse() {
        value = document.getElementById("courses").value;
        console.log(value);

        if (value < 3) {
          document.getElementById("error7").innerHTML =
            "Courses Cannot be Less Than 3!";
        } else if (value > 5) {
          document.getElementById("error7").innerHTML =
            "Courses Cannot be More Than 5!";
        } else {
          boolCourses = true;
        }
        if (value == "") {
          document.getElementById("error7").innerHTML = "";
        }
      }

      function checkFinal() {
        if (
          boolRoll == true &&
          boolCNIC == true &&
          boolLandline == true &&
          boolMobile == true &&
          boolEmail == true &&
          boolName == true &&
          boolCourses == true
        ) {
          alert("Congratulations! Your Data has been Submitted!");
        } else {
          document.getElementById("error8").innerHTML =
            "Resolve all Errors and Empty Fields!";
        }
      }
      