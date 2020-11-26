document.getElementById("demo").innerHTML = "My  first JavaScript";
        window.alert(5+8);
        alert(6+4);
        console.log(4-1);
        function myFunction(){
            document.getElementById("demo").innerHTML="Paragraph changed."
        }
        document.write(5+6);
        let car ={
            type:"Fiat",
            model:"500",
            color:"white"
        }
        document.getElementById("name").innerHTML="The car model is "+ car.model +""+ car.type;
        //Date
        document.getElementById("date").innerHTML=Date();
        let txt="adkajfhiwurbvxvbgkwhwkffowhtnxcvmxnviufwf";
        // length : tính chiều dài chuỗi
        let sln = txt.length;
        console.log("chiều dài chuỗi là :" + sln);
        // indexOf() : tìm vị trí giá trị trong chuỗi
        let str = "how to find element on automationtest";
        let pos=str.indexOf("element");
        
        console.log("Thứ tự element trong chuỗi là : " + pos);

        //lastIndexOf() : chiều dài chuỗi tính đến element
        let strLast = "how to find xpath element on automationtest";
        let poslast=strLast.lastIndexOf("element");
        console.log("Chiều dài chuỗi tính đến 'element' : " + poslast);
        // Slice(): tìm kiếm chuỗi trong khoảng giới hạn ( starst, end)
        const strSlice="how use xpath when find to element on xpath";
        const posSlice=strSlice.slice(2,14);
        console.log("giá trị trong khoảng tìm kiếm là : " + posSlice);
        // giá trị âm thì bắt đầu tính từ vị trí cuối cùng
        const posSlice1=strSlice.slice(-20);
        console.log(posSlice1);
        //replace(): thay đổi giá trị của chuỗi
        const strReplace = "olala olala baby, go go to home";
        const posReplace =strReplace.replace("home","hotel");
        console.log(posReplace);

        //toFixed(): in ra kết  số chuỗi mong muốn
        let x = 9.323213;
       
        document.getElementById("toFixed").innerHTML= 
        x.toFixed(0) + "<br>"+
        x.toFixed(4) + "<br>"+
        x.toFixed(3);
