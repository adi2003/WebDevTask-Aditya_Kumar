
        let boxfirst = document.getElementById('boxfirst');
        fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
        .then(response => response.json())
        .then(data => {
            //method:GET;
            //SEPARATING DATA
           var names=[];
           var points=[];
           var avatar=[];
           for(var i=0;i<data.length;i++){
            names.push(data[i].name);
            points.push(data[i].points);
            avatar.push(data[i].avatar);
           }
           
           //BUBBLE SORT
           n=data.length;
           for(var i=0;i<n-1;i++){
            for(var j=0;j<n;j++){
                if(points[j]>points[j+1]){
                    var k=points[j];
                    points[j]=points[j+1];
                    points[j+1]=k;

                    var k1=names[j];
                    names[j]=names[j+1];
                    names[j+1]=k1;

                    var k2=avatar[j];
                    avatar[j]=avatar[j+1];
                    avatar[j+1]=k2;
                }
            }
           }
           //PRINTING AT RESPECTIVE POSITION
           boxfirst.innerHTML += names[8]+"-"+points[8];   
           boxsecond.innerHTML += names[7]+"-"+points[7];
           boxthird.innerHTML += names[6]+"-"+points[5];
           rank4name.innerHTML += names[5];
           rank4points.innerHTML +=points[5];
           rank5name.innerHTML += names[4];
           rank5points.innerHTML +=points[4];
           rank6name.innerHTML += names[3];
           rank6points.innerHTML +=points[3];
           rank7name.innerHTML += names[2];
           rank7points.innerHTML +=points[2];
           rank8name.innerHTML += names[1];
           rank8points.innerHTML +=points[1];
           rank9name.innerHTML += names[0];
           rank9points.innerHTML +=points[0];
           let image1=avatar[8];
           let image2=avatar[7];
           let image3=avatar[6];
           let image4=avatar[5];
           let image5=avatar[4];
           let image6=avatar[3];
           let image7=avatar[2];
           let image8=avatar[1];
           let image9=avatar[0];
           document.getElementById('img1').src = image1;
           document.getElementById('img2').src = image2;
           document.getElementById('img3').src = image3;
           document.getElementById('img4').src = image4;
           document.getElementById('img5').src = image5;
           document.getElementById('img6').src = image6;
           document.getElementById('img7').src = image7;
           document.getElementById('img8').src = image8;
           document.getElementById('img9').src = image9;
           
         

        })
     
      
      
   