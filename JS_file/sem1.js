

      function s2(){
        event.preventDefault()
       let  m1 = document.getElementById("m1").value;
       let  m2 = document.getElementById("m2").value;
       let  m3 = document.getElementById("m3").value;
       let  m4 = document.getElementById("m4").value;
       let  m5 = document.getElementById("m5").value;
       let  m6 = document.getElementById("m6").value;
       let  m7 = document.getElementById("m7").value;
       let  m8 = document.getElementById("m8").value;
        let n;
       function check(n)
        {
            if (n >= 90)
                return 10
            else if ((n < 90) && (n >= 80))
                return 9;
            else if ((n < 80) && (n >= 70))
                return 8;
            else if ((n < 70) && (n >= 60))
                return 7;
            else if ((n < 60) && (n >= 55))
                return 6;
            else if ((n < 55) && (n >= 50))
                return 5;
            else
                return 0;
        }


        let g1 = check(m1)
        let g2 = check(m2)
        let g3 = check(m3)
        let g4 = check(m4)
        let g5 = check(m5)
        let g6 = check(m6)
        let g7 = check(m7)
        let g8 = check(m8)

        let c1 = 3
        let c2 = 3
        let c3 = 4
        let c4 = 4
        let c5 = 3
        let c6 = 3
        let c7 = 1.5
        let c8 = 1.5


        let gpa = ((c1 * g1) + (c2 * g2) + (c3 * g3) + (c4 * g4) + (c5 * g5) + (c6 * g6) + (c7 * g7) + (c8 * g8))/23
        let gpa2 = parseFloat(gpa).toFixed(2)
        document.getElementById("output").innerHTML = "<br/><br/>"+"SGPA is : "+ gpa2;

        // document.getElementById("math").innerHTML = m1;
        // document.getElementById("os").innerHTML = m2;
        // document.getElementById("ds").innerHTML = m3;
        // document.getElementById("cn").innerHTML = m4;
        // document.getElementById("daa").innerHTML = m5;
        // document.getElementById("dslab").innerHTML = m6;
        // document.getElementById("cnlab").innerHTML = m7;
        // document.getElementById("rm").innerHTML = m8;
        
        // document.getElementById("cgpa_form").style.display = "none";
        // document.getElementById("cgpa_template").style.display = "block";
        }

      function s3(){
        event.preventDefault()
       let  m1 = document.getElementById("m1").value;
       let  m2 = document.getElementById("m2").value;
       let  m3 = document.getElementById("m3").value;
       let  m4 = document.getElementById("m4").value;
       let  m5 = document.getElementById("m5").value;
       let  m6 = document.getElementById("m6").value;
       let  m7 = document.getElementById("m7").value;
       let  m8 = document.getElementById("m8").value;
        let n;
       function check(n)
        {
            if (n >= 90)
                return 10
            else if ((n < 90) && (n >= 80))
                return 9;
            else if ((n < 80) && (n >= 70))
                return 8;
            else if ((n < 70) && (n >= 60))
                return 7;
            else if ((n < 60) && (n >= 55))
                return 6;
            else if ((n < 55) && (n >= 50))
                return 5;
            else
                return 0;
        }


        let g1 = check(m1)
        let g2 = check(m2)
        let g3 = check(m3)
        let g4 = check(m4)
        let g5 = check(m5)
        let g6 = check(m6)
        let g7 = check(m7)
        let g8 = check(m8)

        let c1 = 3
        let c2 = 3
        let c3 = 4
        let c4 = 4
        let c5 = 3
        let c6 = 3
        let c7 = 1.5
        let c8 = 1.5


        let gpa = ((c1 * g1) + (c2 * g2) + (c3 * g3) + (c4 * g4) + (c5 * g5) + (c6 * g6) + (c7 * g7) + (c8 * g8))/23
        let gpa2 = parseFloat(gpa).toFixed(2)
        document.getElementById("output").innerHTML = "<br/><br/>"+"SGPA is : "+ gpa2;

        document.getElementById("math").innerHTML = m1;
        document.getElementById("os").innerHTML = m2;
        document.getElementById("ds").innerHTML = m3;
        document.getElementById("cn").innerHTML = m4;
        document.getElementById("daa").innerHTML = m5;
        document.getElementById("dslab").innerHTML = m6;
        document.getElementById("cnlab").innerHTML = m7;
        document.getElementById("rm").innerHTML = m8;
        document.getElementById("totalsgpa").innerHTML = gpa2;

        document.getElementById("cgpa_form").style.display = "none";
        document.getElementById("cgpa_template").style.display = "block";
        }
        
        function printT(){
            window.print();
        }
