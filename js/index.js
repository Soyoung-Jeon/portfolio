// 데이터 객체 가져오기
const itemImage = document.querySelector(".item_img");
const itemType = document.querySelector(".item_type");
const itemTitle = document.querySelector(".item_title");
const itemContents = document.querySelector(".item_contents");
const itemRefer = document.querySelector(".item_refer");

let result = [];

// 아이템 복사에 필요
const itemList = document.querySelector(".list_inner");
const itembox_origin = document.querySelector(".item_btn");
itembox_origin.parentNode.removeChild(itembox_origin);

// 아이템 복사, 데이터 넣기
for (let i = 0; i < data.length; i++) {

    const itembox = itembox_origin.cloneNode(true);
    itemList.appendChild(itembox);

    console.log(itembox)

    itemType.innerText = data[i].type;
    itemTitle.innerText = data[i].title;
    itemContents.innerText = data[i].contents;
    itemRefer.innerText = data[i].refer;
    
    result.push(itembox);
}





    const tab = document.querySelectorAll(".tab_inner > li > a");
    const filter = data.filter(function(item){    
        return item.type === "웹사이트";
    }); 

    
    
    for (let j = 0; j < 4; j++) {
        tab[j].addEventListener('click', tabSelected);
    }

    function tabSelected(event){

        const itembox_all = document.querySelectorAll(".item_btn");
        const allhide = () => {
            for (let k = 0; k < itembox_all.length; k++) {
                itembox_all[k].style.display = "none";
            }   
        }
        switch(event.target.id){
            
            case 'all':
                for (let k = 0; k < itembox_all.length; k++) {
                    itembox_all[k].style.display = "block";
                }  
                break;
            case 'web':
                allhide();
                

                for (let m = 0; m < filter.length; m++) {
                    filter[m].style.display = "block";
                } 

                break;
            case 'news':
                allhide();
                break;
            case 'toy':
                allhide();
                break;
        }
    }
    
    

