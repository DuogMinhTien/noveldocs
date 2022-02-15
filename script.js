//fetch ('Chuong/chuong1.txt')
//   .then(response => response.text()).then(text => console.log(text))
const $ = document.querySelector.bind (document);
const $$ = document.querySelectorAll.bind (document);

const Content = $("#content");
const titleChap = $("#titleChap");
const countWord = $("#countWord");

const DSChuong = ["Chương 1: Đấu Với Trời, Kỳ Nhạc Vô Tận",
                "Chương 2: Hảo Vận", 
                "Chương 3:【Đấu Phá Thương Khung】", 
                "Chương 4: Mở Cửa Đại Cát", 
                "Chương 5: Đại Thần Tiếu Thương Thiên Trâu Bò", 
                "Chương 6: Vận Khí Vô Địch!",
                "Chương 7: Vạn Sự Thuận Lợi! Thoải Mái!",
                "Chương 8: Hơn 3000 Tấm Hình",
                "Chương 9: Bản Thảo【Thôn Phệ Tinh Không】",
                "Chương 10: 4 Tệ Mua 12 Chai Bia",
                "Chương 11: Dự Định Xông Bảng",
                "Chương 12: Phi Thường Không May",
                "Chương 13: Việc Này Có Quỷ Dị",
                "Chương 14: Cái Kịch Bản Này Không Đúng Rồi!",
                "Chương 15: Uy Lực Chân Chính Của Phi Thường Không May!",
                "Chương 16: Giá Trị!",
                "Chương 17: Gặp Lại Người Quen",
                "Chương 18: Nhâm Tính Có Tiền",
                "Chương 19: Hạo Ca! Thu Tiểu Đệ Được Không?!",
                "Chương 20: Người Đây Là Nghĩ Đi Đâu Vậy?!",
                "Chương 21: Nữ Nhân Này Đến Cùng Là Có Lai Lịch Gì?",
                "Chương 22: Người Máy Quản Gia",
                "Chương 23: Vẫn Chưa Thỏa Mãn Nha!",
                "Chương 24: Siêu Cấp Thần Cơ Bảy Sao",
                "Chương 25: Tạ Ơn Nhật Thiên Ca!",
                "Chương 26: Cái Này Gay Cấn!",
                "Chương 27: Thân Phận Chân Chính Của Nữ Nhân Kia!",
                "Chương 28: Đến Trước Mặt Ta Tỏ Ra Ưu Tú Siêu Việt?",
                "Chương 29: Kịch Bản Của Thế Giới Này Làm Ta Cảm Thấy Lo Lắng!",
                "Chương 30: Cực Phẩm Kịch Bản",
                "Chương 31: Đến Thời Điểm Ca Đăng Tràng!",
                "Chương 32: Nhịn Không Được!",
                "Chương 33: Thoải Mái, Thật Sự Là Thoải Mái Ah!",
                "Chương 34: Chuyện Này Làm Sao Cho Tốt Đây?",
                "Chương 35: Đàn Ông Điển Hình, Khuôn Mẫu Phụ Nữ Ước Ao!",
                "Chương 36: Phía Sau Đâm Một Đao Thật Tốt!",
                "Chương 37: Hạo Ca Giảng Kịch Bản",
                "Chương 38: Tiểu Lý Phi Đao",
                "Chương 39: Nhân Vật Giống Như Một Cơn Ác Mộng",
                "Chương 40: Ông Chủ, Ca Lại Tới!",
                "Chương 41: Sách Này Của Ngươi Khẳng Định Rất Hot!",
                "Chương 42: Như Vậy Cũng Được Sao?!",
                "Chương 43: Đại Thần, Đại Thần Hiểu Chưa?",
                "Chương 44: May Mắn Ca Hôm Qua Có Làm Qua Chuẩn Bị!",
                "Chương 45: Cùng Ca Lăn Lộn Bảo Đảm Ngươi Ăn Ngon Uống Sướng!",
                "Chương 46: Mua Tên Sách Đấu Phá Thương Khung?",
                "Chương 47: 【Vũ Phá Thương Khung】",
                "Chương 48: Chiến Đấu Đến Cùng!",
                "Chương 49: Ai Mới Không Cần Mặt?",
                "Chương 50: Chờ Ngày Ca Đạt Được Hảo Vận, Cũng Chính Là Thời Điểm Ngươi Bị Vùi Dập Giữa Chợ!",
                "Chương 51: Nhìn Xem Người Ta Rất Biết Điều Nha!",
                "Chương 52: Rất Có Khí Chất!",
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
    countWord.innerHTML = "Số chữ: " + text.split(" ").length;
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