// 리스트 아이템 복사에 필요
// const parent = document.getElementById("list_inner");
// const itemBox_origin = document.getElementById("item");

// 데이터 객체 가져오기
const itemImage = document.querySelectorAll(".item_img");
const itemType = document.querySelectorAll(".item_type");
const itemTitle = document.querySelectorAll(".item_title");
const itemContents = document.querySelectorAll(".item_contents");
const itemRefer = document.querySelectorAll(".item_refer");

// 리스트 아이템 반복 출력
for (let i = 0; i < data.length; i++) {

    itemType.innerText = data[i].type
    itemTitle.innerText = data[i].title
    itemContents.innerText = data[i].contents
    itemRefer.innerText = data[i].refer

    // const itemBox = itemBox_origin.cloneNode(true);
    // parent.appendChild(itemBox);
}

// 탭 기능 구현
// const tab = document.getElementById("tab_inner");
// const tabBtn = tab.getElementsByTagName("a");


// tabBtn[2].addEventListener("click", tabClick);
//     function tabClick() {
//         if (itemTitle.innerText.includes("특집기사") == true) {
//             itemBox_origin.style.display = "none"
//         }

//     }
