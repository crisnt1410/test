// Đặt tên cho biến
let a1; let a2;let a3;let a4;let a5; let a6;let a7
let b1;let b2; let b3;let b4;let b5;let b6;let b7
let c1;let c2;let c3;let c4;let c5;let c6;let c7
// Chức năng
document.getElementById("submit1").onclick = function(){
    a1 = document.getElementById("hdt1_a").value;
    a1 = Number(a1);

    b1 = document.getElementById("hdt1_b").value;
    b1 = Number(b1);

    c1 = Math.pow((a1+b1),2)
    document.getElementById("ketqua1").innerHTML = "Kết quả: " + c1;
}

document.getElementById("submit2").onclick = function(){
    a2 = document.getElementById("hdt2_a").value;
    a2 = Number(a2);

    b2 = document.getElementById("hdt2_b").value;
    b2 = Number(b2);

    c2 = Math.pow((a2-b2),2)
    document.getElementById("ketqua2").innerHTML = "Kết quả: " + c2;
}

document.getElementById("submit3").onclick = function(){
    a3 = document.getElementById("hdt3_a").value;
    a3 = Number(a3);

    b3 = document.getElementById("hdt3_b").value;
    b3 = Number(b3);

    c3 = (Math.pow(a3,2)) - (Math.pow(b3,2))
    document.getElementById("ketqua3").innerHTML = "Kết quả: " + c3;
}

document.getElementById("submit4").onclick = function(){
    a4 = document.getElementById("hdt4_a").value;
    a4 = Number(a4);

    b4 = document.getElementById("hdt4_b").value;
    b4 = Number(b4);

    c4 = Math.pow((a4 + b4),3)
    document.getElementById("ketqua4").innerHTML = "Kết quả: " + c4;
}

document.getElementById("submit5").onclick = function(){
    a5 = document.getElementById("hdt5_a").value;
    a5 = Number(a5);

    b5 = document.getElementById("hdt5_b").value;
    b5 = Number(b5);

    c5 = Math.pow((a5 - b5),3)
    document.getElementById("ketqua5").innerHTML = "Kết quả: " + c5;
}

document.getElementById("submit6").onclick = function(){
    a6 = document.getElementById("hdt6_a").value;
    a6 = Number(a6);

    b6 = document.getElementById("hdt6_b").value;
    b6 = Number(b6);

    c6 = Math.pow(a6,3) + Math.pow(b6,3)
    document.getElementById("ketqua6").innerHTML = "Kết quả: " + c6;
}

document.getElementById("submit7").onclick = function(){
    a7 = document.getElementById("hdt7_a").value;
    a7 = Number(a7);

    b7 = document.getElementById("hdt7_b").value;
    b7 = Number(b7);

    c7 = Math.pow(a7,3) - Math.pow(b7,3)
    document.getElementById("ketqua7").innerHTML = "Kết quả: " + c7;
}