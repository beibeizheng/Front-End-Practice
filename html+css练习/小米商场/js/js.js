window.onload = function () {
    var allA = document.getElementsByClassName("change-picture");
    var img = document.getElementById("banner-pic");
    var imgArr = ["./img/banner1.jpg", "./img/banner2.jpg", "./img/banner3.jpg", "./img/banner4.jpg", "./img/banner5.jpg"];
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var index = 0;
    //设置默认选中的效果
    allA[index].style.backgroundColor = "rgba(255, 255, 255, .4)";
    allA[index].style.borderColor = "rgba(0, 0, 0, .4)";

    for (var i = 0; i < allA.length; i++) {
        allA[i].num = i;
        allA[i].onclick = function () {
            index = this.num;
            if (index > imgArr.length - 1) {
                index = 0;
            }
            img.src = imgArr[index];
            setA();

        }

    };

    prev.onclick = function () {
        index--;
        if (index < 0) {
            index = imgArr.length - 1;
        }

        img.src = imgArr[index];
        setA();
    };

    next.onclick = function () {
        index++;
        if (index > imgArr.length - 1) {
            index = 0;
        }

        img.src = imgArr[index];
        setA();
    };


    function setA() {

        for (var i = 0; i < allA.length; i++) {
            allA[i].style.backgroundColor = "rgba(0, 0, 0, .4)";
            allA[i].style.borderColor = " rgba(255, 255, 255, .4)";

        }
        //将选中的a设置为白色
        allA[index].style.backgroundColor = "rgba(255, 255, 255, .4)";
        allA[index].style.borderColor = "rgba(0, 0, 0, .4)";
    }

}
