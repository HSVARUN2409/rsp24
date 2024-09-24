
        function s1(){
           event.preventDefault()
         let y1 = document.getElementById("p1").value;
         let y2 = document.getElementById("p2").value;
         let y3 = document.getElementById("p3").value;
         let y4 = document.getElementById("p4").value;  
           
         let c1 = 23;
         let c2 = 23;
         let c3 = 26;
         let c4 = 24;

         let gpa = ((c1 * y1) + (c2 * y2) + (c3 * y3) + (c4 * y4)) / 96;
         let gpa2 = parseFloat(gpa).toFixed(2);
         document.getElementById("output").innerHTML = "<br/><br/>"+"CGPA is : "+ gpa2;  
         document.getElementById("totalcgpa").innerHTML = "<br/><br/>"+"CGPA is : "+ gpa2;  
        

        //  document.getElementById("sem1").innerHTML = y1;
        //  document.getElementById("sem2").innerHTML = y2;
        //  document.getElementById("sem3").innerHTML = y3;
        //  document.getElementById("sem4").innerHTML = y4;


        // document.getElementById("cgpa_form").style.display = "none";
        // document.getElementById("cgpa_template").style.display = "block";
          
        }


        // generate function
        function s2(){
           event.preventDefault()
         let y1 = document.getElementById("p1").value;
         let y2 = document.getElementById("p2").value;
         let y3 = document.getElementById("p3").value;
         let y4 = document.getElementById("p4").value;  
           
         let c1 = 23;
         let c2 = 23;
         let c3 = 26;
         let c4 = 24;

         let gpa = ((c1 * y1) + (c2 * y2) + (c3 * y3) + (c4 * y4)) / 96;
         let gpa2 = parseFloat(gpa).toFixed(2);
         document.getElementById("output").innerHTML = "<br/><br/>"+"CGPA is : "+ gpa2;  
         document.getElementById("totalcgpa").innerHTML = "<br/><br/>"+"CGPA is : "+ gpa2;  
        

         document.getElementById("sem1").innerHTML = y1;
         document.getElementById("sem2").innerHTML = y2;
         document.getElementById("sem3").innerHTML = y3;
         document.getElementById("sem4").innerHTML = y4;


        document.getElementById("cgpa_form").style.display = "none";
        document.getElementById("cgpa_template").style.display = "block";
          
        }

function printT(){
    window.print();
}

        
