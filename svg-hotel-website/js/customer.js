// xmlhttp = new XMLHttpRequest();
//     xmlhttp.open("GET", "./custom.xml", false)
//     xmlhttp.send();
//     xmlDoc = xmlhttp.responseXML;
//     // console.log(xmlDoc);
//     cardsData = document.getElementById("custum-box");
//     for (i = 0; i < xmlDoc.getElementsByTagName("cus").length; i++) {
//         cardsData.innerHTML += cardsFun(i);
//     }
//     function cardsFun(i) {
//         return ` <div class="cus-box">
//                         <div class="customers-box">
//                             <div class="customers-detail">
//                                 <div class="rating">
//                                     <span> <i class="fa fa-star"></i></span>
//                                     <span> <i class="fa fa-star"></i></span>
//                                     <span> <i class="fa fa-star"></i></span>
//                                     <span> <i class="fa fa-star"></i></span>
//                                     <span> <i class="fa fa-star-o"></i></span>
//                                 </div>
//                                 <h2><strong id="head_1">${xmlDoc.getElementsByTagName('head')[i].childNodes[0].nodeValue}</strong></h2>
//                             <h4 id="discription_1">${xmlDoc.getElementsByTagName('discription')[i].childNodes[0].nodeValue}</h4>
//                             <img id="img_1" src="${xmlDoc.getElementsByTagName('img')[i].childNodes[0].nodeValue}" alt="">
//                             <h3 id="name_1">${xmlDoc.getElementsByTagName('name')[i].childNodes[0].nodeValue}</h3>
//                             </div>
//                         </div>
//                     </div>`
//     }
    


$.ajax({
    type: "GET",
    url: "./custom.xml",
    // data: "xml",
    dataType: "xml",
    success: function (xml) {
        arr = $(xml).find('cus');
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            // console.log(element);
            $('#custum-box').append(`
            <div class="customers-box">
            <div class="customers-detail">
                <div class="rating">
                    <span> <i class="fa fa-star"></i></span>
                    <span> <i class="fa fa-star"></i></span>
                    <span> <i class="fa fa-star"></i></span>
                    <span> <i class="fa fa-star"></i></span>
                    <span> <i class="fa fa-star-o"></i></span>
                </div>
                <h2><strong id="head_1">${$(element.getElementsByTagName('head')).text()}</strong></h2>
                <h4 id="discription_1">${$(element.getElementsByTagName('discription')).text()}</h4>
                <img id="img_1" src="${$(element.getElementsByTagName('img')).text()}" alt="">
                <h3 id="name_1">${$(element.getElementsByTagName('name')).text()}</h3>
            </div>
        </div>
            `);
        }
    }
});