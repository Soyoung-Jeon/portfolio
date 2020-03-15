// 아이템 복사에 필요
const itemList = document.querySelector(".list_inner");
const itembox_origin = document.querySelector(".item_btn");

let result = [];

// 아이템 복사, 데이터 넣기
for (let i = 0; i < data.length; i++) {
  const itembox = itembox_origin.cloneNode(true);
  itembox.classList.add(tabType(data[i].type));

  let itemLink = itembox;
  let itemImage = itembox.querySelector(".item_img > img");
  let itemType = itembox.querySelector(".item_type");
  let itemTitle = itembox.querySelector(".item_title");
  let itemContents = itembox.querySelector(".item_contents");
  let itemRefer = itembox.querySelector(".item_refer");

  itemLink.setAttribute("href", data[i].href);
  itemImage.setAttribute("src", data[i].src);
  itemType.innerText = data[i].type;
  itemTitle.innerText = data[i].title;
  itemContents.innerText = data[i].contents;
  itemRefer.innerText = data[i].refer;

  result.push(itembox);
  itemList.appendChild(itembox);
}


// 탭 타입 구분
function tabType(type) {
  let result = "";
  if (type == "웹사이트") {
    result = "web";
  } else if (type == "특집기사") {
    result = "news";
  } else {
    result = "etc";
  }
  return result;
}

// 탭 클릭 이벤트
const tabBtn = document.getElementsByClassName("tab_btn");
Array.from(tabBtn).forEach(button => {
  button.addEventListener('click', tabSelected)
});


function tabSelected(event) {
  let itembox_all = document.querySelectorAll(".item_btn");

  if (event.target.id == "") {
    return;
  }
  if (event.target.id == "all") {
    setElementsDisplay(itembox_all, "block");
  } else {
    let selected_elements = document.querySelectorAll(".item_btn." + event.target.id);
    setElementsDisplay(itembox_all, "none");
    setElementsDisplay(selected_elements, "block");
  }

  function setElementsDisplay(elements, value) {
    for (let k = 0; k < elements.length; k++) {
      elements[k].style.display = value;
    }
  }

  document.querySelectorAll(".tab_btn").forEach(el => {
      el.style.fontWeight = 300;
  });
  event.target.style.fontWeight = "900";
}

