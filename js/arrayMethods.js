 //toString: nối mảng thành chuỗi, nganh cách nhau bằng dấu ' , '
        //join: giống toString nhưng nganh cách nhau tùy chỉnh
        let fruitsToString = ["banana","Orange","Apple"];
        document.getElementById("toString").innerHTML=fruitsToString.join("-");

        // pop : remove phần tử cuối cùng của mảng
        let arrPop=["hai","Minh","Nguyen"];
        arrPop.pop();
        console.log(arrPop);
        // shift : remove phần tử đầu tiên của mảng
        let arrShift =["Van", "Hai","huyen","Quan"];
        arrShift.shift();
        console.log(arrShift);
         // unshift : add phần tử đầu tiên của mảng
         let arrUnShift =["Van", "Hai","huyen","Quan"];
        arrUnShift.unshift("Hung");
        console.log(arrUnShift);
        // push : add phần tử vào mảng (cuối cùng của mảng)
        let arrPush=["Trang","Hoa","Hanh"];
        arrPush.push("Huyen");
        console.log(arrPush);
        // delete : xóa phần tử của mảng
        const dele=["Binh","Long","Quyet","Dong"];
        delete dele[3];
        console.log(dele);
        // splice() : nối một mảng
        let arrSplice=["Nam","Chuoi","Van","Hai"];
        let startSplice=2;
        let removeSplice=0;
        arrSplice.splice(startSplice,removeSplice,"Kemon","Kiwi");
        console.log(arrSplice);
        let startSplice_line=3;
        let removeSplice_line=3;
        arrSplice.splice(startSplice,removeSplice,"Hung","Huyen");
        console.log(arrSplice);