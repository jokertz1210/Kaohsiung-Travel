var dataAddress = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97'
// 以上資料位置

new Vue({
  el: '.app',
  data() {
    return{
      areas: [
        '左營區', '鳳山區', '鼓山區', '三民區', '前鎮區',
        '大樹區', '美濃區', '旗津區', '岡山區', '桃源區',
        '新興區', '六龜區', '苓雅區', '內門區', '永安區',
        '杉林區', '前金區', '楠梓區', '小港區', '仁武區',
        '茂林區', '田寮區', '茄萣區', '梓官區', '甲仙區',
      ],
      areasData: [],
      nowAreas:'左營區'
    }
  },
  methods:{
    areasClick(e){
      let vm = this;
      vm.nowAreas = e.target.textContent
    // 以上選取位置
    }
  },
  mounted() {
    axios.get(dataAddress).then((res)=>{
      let vm = this;
      vm.areasData = res.data.result.records
    })
  }
})
// 以上抓資料回來並儲存


// let list = document.getElementById('cardList');
// let areas = document.querySelector('.areasLi');
// let areaName = document.querySelector('.areaName');

// let areasData;
// let xhr = new XMLHttpRequest();
// xhr.open('get', 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97', true);
// xhr.send(null);
// xhr.onload = function () {
//   areasData = JSON.parse(xhr.responseText);
//   areasData = areasData.result.records;
// }

// // 執行程式
// areas.addEventListener('click', areasClick, false);



// // 點擊選取當前位置
// function areasClick(e) {
//   let nowAreas = e.target.textContent
//   console.log(nowAreas);
//   upData(nowAreas);
  

// }


// // 顯示資料
// function upData(nowAreas) {
  // let len = areasData.length;
  // let str = '';
  // for (let i = 0; i < len; i++) {
  //   if (nowAreas == areasData[i].Zone) {
  //     let picture = areasData[i].Picture1;
  //     let name = areasData[i].Name;
  //     let zone = areasData[i].Zone;
  //     let opentime = areasData[i].Opentime;
  //     let add = areasData[i].Add;
  //     let tel = areasData[i].Tel;
  //     let ticketinfo = areasData[i].Ticketinfo;
  //     areaName.textContent = nowAreas;

//       str += `
    //   <div class="col-sm-12 col-lg-6">
    //   <div class="card text-white bg-dark mb-3">
    //   <div class="card-header d-flex justify-content-between"><span class="mr-auto">${name}</span><span class="mr-3 sapn-color">${ticketinfo}</span><img src="images/icons_tag.png"></div>
    //   <img class="card-img-top crad-size" src="${picture}" alt="Card image cap">

    //   <div class="card-body">
    //     <img class="pr-3" src="images/icons_clock.png"><p class="card-text mb-2">${opentime}</p>
    //     <img class="pr-3" src="images/icons_pin.png"><p class="card-text mb-2">${add}</p>
    //     <img class="pr-3" src="images/icons_phone.png"><p class="card-text">${tel}</p>
    //   </div>
    // </div>
    // </div>
// //       `;
// //       list.innerHTML = str;
// //     }
// //   }
// // }





// let len = this.areasData.length;
// for (let i = 0; i < len; i++) {
//   if (nowAreas == this.areasData[i].Zone){
//     this.chooseDatas = [
//       picture = this.areasData[i].Picture1,
//       name = this.areasData[i].Name,
//       zone = this.areasData[i].Zone,
//       opentime = this.areasData[i].Opentime,
//       add = this.areasData[i].Add,
//       tel = this.areasData[i].Tel,
//       ticketinfo = this.areasData[i].Ticketinfo,
//     ] 
//   }
// }