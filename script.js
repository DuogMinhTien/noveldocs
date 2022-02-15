//fetch ('Chuong/chuong1.txt')
//   .then(response => response.text()).then(text => console.log(text))
const $ = document.querySelector.bind (document);
const $$ = document.querySelectorAll.bind (document);

const Content = $("#content");
const titleChap = $("#titleChap");

const DSChuong = ["Chương 1: Đấu Với Trời, Kỳ Nhạc Vô Tận",
                "Chương 2: Hảo Vận", 
                "Chương 3:【Đấu Phá Thương Khung】", 
                "Chương 4: Mở Cửa Đại Cát", 
                "Chương 5: Đại Thần Tiếu Thương Thiên Trâu Bò", 
                "Chương 6: Vận Khí Vô Địch!",
            ];

const ChapNext = $$(".ChapNext");
const ChapPre = $$(".ChapPre");

const chooseChap = $("#chooseChap");

var SttNow = 1;

getData ();

chooseChap.insertAdjacentHTML("afterbegin", '<option value="'+(1)+'" selected>'+DSChuong[0]+'</option>');

for (let index=1; index<DSChuong.length; index++) {
    chooseChap.insertAdjacentHTML("afterbegin", '<option value="'+(index+1)+'">'+DSChuong[index]+'</option>');
}

ChapNext.forEach ((item) => {
    item.onclick = function () {
        if (SttNow < DSChuong.length) {
            SttNow++;
            chooseChap.selectedIndex = DSChuong.length - SttNow;
            getData ();
            if (ChapPre[0].classList.contains("BlockMove"))
                ChapPre.forEach ((item) => {
                    item.classList.remove ("BlockMove");
                })
            if (SttNow === DSChuong.length) {
                ChapNext.forEach ((item) => {
                    item.classList.add ("BlockMove");
                })
            }
        }
    };
})
ChapPre.forEach ((item) => {
    item.onclick = function () {
        if (SttNow > 1) {
            SttNow--;
            chooseChap.selectedIndex = DSChuong.length - SttNow;
            getData ();
            if (ChapNext[0].classList.contains("BlockMove"))
                ChapNext.forEach ((item) => {
                    item.classList.remove ("BlockMove");
                })
            if (SttNow === 1) {
                ChapPre.forEach ((item) => {
                    item.classList.add ("BlockMove");
                })
            }
        }
    };
})

var TextNow;

function ScrollToStop () {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
    });
}

function getData () {
    ScrollToStop ();
    fetch ('Chuong/chuong'+SttNow+'.txt')
        .then(response => response.text()).then(text => AddChap(text));
}



function AddChap (text) {
    Content.textContent = text;
    titleChap.textContent = DSChuong[SttNow-1];
}


window.onload = function () {
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);
    document.addEventListener("keydown", function (e) {
        //document.onkeydown = function(e) {
        // "I" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
            disabledEvent(e);
        }
        // "J" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            disabledEvent(e);
        }
        // "S" key + macOS
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            disabledEvent(e);
        }
        // "U" key
        if (e.ctrlKey && e.keyCode == 85) {
            disabledEvent(e);
        }
        // "F12" key
        if (e.keyCode == 123) {
            disabledEvent(e);
        }
    }, false);
    function disabledEvent(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else if (window.event) {
            window.event.cancelBubble = true;
        }
        e.preventDefault();
        return false;
    }
}

chooseChap.onchange = function () {
    let stt = chooseChap.options[chooseChap.selectedIndex].value;
    SttNow = stt;
    if (ChapPre[0].classList.contains ("BlockMove"))
        ChapPre.forEach ((item) => {
            item.classList.remove ("BlockMove");
        })
    if (ChapNext[0].classList.contains ("BlockMove"))
        ChapNext.forEach ((item) => {
            item.classList.remove ("BlockMove");
        })
    if (parseInt (stt) === 1) {
        ChapPre.forEach ((item) => {
            item.classList.add ("BlockMove");
        })
    }
    else if (parseInt (stt) === DSChuong.length) {
        ChapNext.forEach ((item) => {
            item.classList.add ("BlockMove");
        })
    }
    getData ();
};