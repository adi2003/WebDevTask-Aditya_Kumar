
        let boxfirst = document.getElementById('boxfirst');
        fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
        .then(response => response.json())
        .then(data => {


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
                if(points[j]<points[j+1]){
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

           //PRINTING AT RESPECTIVE POSITION FOR TOP 3 FIXED
           boxfirst.innerHTML += names[0]+"-"+points[0];   
           boxsecond.innerHTML += names[1]+"-"+points[1];
           boxthird.innerHTML += names[2]+"-"+points[2];

           let image1=avatar[0];
           let image2=avatar[1];
           let image3=avatar[2];

           document.getElementById('img1').src = image1;
           document.getElementById('img2').src = image2;
           document.getElementById('img3').src = image3;

           //FOR REST TO CREATE DYNAMIC RENDERING USED LOOPS AND DOM

           for(var i=0;i<n-3;i++){

            //creating div
            
            //boxes
            const box = document.createElement("div");
            box.className = "box"+(i+1).toString();
            box.style.position="absolute";
            box.style.width="100%";
            box.style.height="9.7vh";
            box.style.top=(47+i*11).toString()+"vh";
            box.style.background="#D2D4F2";
            document.body.appendChild(box);
            
            //names
            const namediv = document.createElement("div");
            namediv.className = "rank"+(i).toString()+"name";
            namediv.style.position= "absolute";
            namediv.style.width= "15.8%";
            namediv.style.height= "3.5vh";
            namediv.style.left= "17.7%";
            namediv.style.top=(50+11*i).toString()+"vh";
            namediv.style.fontSize= "3.8vh";
            namediv.style.fontFamily= 'Inter';
            namediv.style.fontStyle= "normal";
            namediv.style.fontWeight= "400";
            namediv.style.color= "#1E1E1E";
            namediv.textContent=names[i+3];
            document.body.appendChild(namediv);
            
            //points
            const pointsdiv = document.createElement("div");
            pointsdiv.className = "rank"+(i+4).toString()+"points";
            pointsdiv.style.position= "absolute";
            pointsdiv.style.width= "15.76%";
            pointsdiv.style.height= "3.5vh";
            pointsdiv.style.left= "85%";
            pointsdiv.style.top= (50.5+11*i).toString()+"vh";
            pointsdiv.style.fontSize= "4.3vh";
            pointsdiv.style.fontFamily= 'Inter';
            pointsdiv.style.fontStyle= "normal";
            pointsdiv.style.fontWeight= "400";
            pointsdiv.style.color= "#000000";
            pointsdiv.textContent=points[i+3];
            document.body.appendChild(pointsdiv);

            //avatar
            const avatardiv = document.createElement("div");
            avatardiv.className = "avatar"+(i+4).toString()+"dash";
            avatardiv.style.position="absolute";
            avatardiv.style.width= "4.2vw";
            avatardiv.style.height= "7.5vh";
            avatardiv.style.borderColor ="#FFFFFF";
            avatardiv.style.left= "8.87%";
            avatardiv.style.top= (47.5+11*i).toString()+"vh";
            avatardiv.style.background= "#BABEFF";
            avatardiv.style.borderRadius= "60%";
            document.body.appendChild(avatardiv);

            //image
            const imgdiv = document.createElement("img");
            imgdiv.src=avatar[i+3];
            imgdiv.style.position="absolute";
            imgdiv.style.width= "4.2vw";
            imgdiv.style.height= "8.3vh";
            imgdiv.style.borderColor ="#FFFFFF";
            imgdiv.style.left= "8.87%";
            imgdiv.style.top= (47.5+11*i).toString()+"vh";
            imgdiv.style.borderRadius= "60%";
            document.body.appendChild(imgdiv);

            //rankdisplay
            const rankdiv = document.createElement("div");
            rankdiv.className = "rank"+(i+4).toString();
            rankdiv.style.position= "absolute";
            rankdiv.style.width= "1.6%";
            rankdiv.style.height= "3.5vh";
            rankdiv.style.left= "2.8%";
            rankdiv.style.top= (50+11*i).toString()+"vh";
            rankdiv.style.fontFamily= 'Inter';
            rankdiv.style.fontStyle= "normal";
            rankdiv.style.fontWeight= "400";
            rankdiv.style.fontSize= "4.5vh";
            rankdiv.style.color= "#1E1E1E";
            rankdiv.textContent=i+4;
            document.body.appendChild(rankdiv);

   }
 } )
     
      
      
   