//Slider
const countImg = $(".images").length
const widthImg = $(".images").width()
const heightImg = $(".images").height()
const widthTotal = countImg * widthImg

$("#image-slider").css({
    width: widthImg,
    height: heightImg
})


$("#slider").css({
    width: widthTotal,
    marginLeft: -widthImg
})


$(".images:last-child").prependTo("#slider")


$(".left").click(() => {
    $("#slider").animate({
        left: widthImg
    }, 1000, () => {
        $(".images:last-child").prependTo("#slider")
        $("#slider").css("left", "")
    })
})


$(".right").click(() => {
    $("#slider").animate({
        left: -widthImg
    }, 1000, () => {
        $(".images:first-child").appendTo("#slider")
        $("#slider").css("left", "")
    })
    
})

//Validations
function validate(){
    var name = document.forms["Form"]["name"].value;
    var phone = document.forms["Form"]["phone"].value;
    var address = document.forms["Form"]["address"].value;
    var color = document.forms["Form"]["color"];


    if(!numberOnly(phone)){
        alert("Isi hanya dengan angka!");
        return false;
    }
    else if(!validateName(name)){
        alert("Nama tidak boleh kosong!");
        return false;
    }
    else if(!countWord(address)){
        alert("Alamat harus punya lebih dari atau sama dengan 5 kata!");
        return false;
    }
    else if(!validateColor(color)){
        alert("Pilih warna yang diinginkan!");
        return false;
    }
    else if(!wordCount(name)){
        alert("Nama lengkap harus punya lebih dari atau sama dengan 2 kata!")
        return false;
    }

    alert("Pemesanan sukses!");

   return true;
}

function validateName(name){
    if(name==""){
        return false;
    }
    return true;
}

function numberOnly(phone) {
    var num = /^[0-9]+$/;
    if(phone.match(num)) {
    return true;
    }
    return false;
        
    }

function countWord(address){
    var length = address.split(" ").length;
    if(length >= 5){
        return true;
    }
        return false;
}

function validateColor(color){
    if((color[0].checked == false) && (color[1].checked == false) &&
    (color[2].checked == false) && (color[3].checked == false) ){
        return false;
    }
        return true;
       
}

function wordCount(name){
    var length = name.split(" ").length;
    if(length >= 2){
        return true;
    }
        return false;
}