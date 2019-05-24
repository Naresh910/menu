function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  var v=document.getElementById('menu');
  if(v.style.visibility=='visible'){
    v.style.visibility='hidden';
  }
}

// function posted_by(){
//   document.getElementById("posted").classList.toggle("show");
// }
function allfield() {
  document.getElementById("all_my").classList.toggle("show");
}
function bedroom() {
  document.getElementById("bedroom").classList.toggle("show");
}
function budget() {
  document.getElementById("budget").classList.toggle("show");
}

function openMenu(){
  document.getElementById('menu').style.visibility='visible';  
}

var store1="min";
var store2="max";
function setdata(data){
  var n=document.getElementById("amount");
  var nd=document.getElementById("bd");
  n.innerHTML=data.value;
  store1=data.value;
  var s=store1+"-"+store2;
  nd.innerHTML=s;
  console.log("data",s);
}

function setdata1(data){
  var n=document.getElementById("max_amount");
  n.innerHTML=data.value;
  var nd=document.getElementById("bd");
  store2=data.value;
  var s=store1+"-"+store2;
  nd.innerHTML=s;
  console.log("se",s);
}

// ===========================check box================
function checkdata(){
  var arr=[];
  var checkedValue = null; 
  var inputElements = document.getElementsByClassName('messageCheckbox');
  var r=document.getElementById("room");
  for(var i=0; inputElements[i]; ++i){
    if(inputElements[i].checked===true){

      checkedValue = inputElements[i].value ;
      arr.push(checkedValue)
      r.innerHTML=arr;
      console.log("dataof check =",arr);
    }
  }
}
// ==============================property pype================
function propertyData(){
  var arr=[];
  var checkedValue = null; 
  var inputElements = document.getElementsByClassName('pr');
  var r=document.getElementById("property");
  for(var i=0; inputElements[i]; ++i){
    if(inputElements[i].checked===true){
      checkedValue = inputElements[i].value ;
      arr.push(checkedValue)
      r.innerHTML=arr;
      console.log("dataof check =",arr);
    }
  }
}
// ==================get value of posted by====================
// function p_posted_by(){
//   var arr=[];
//   var checkedValue = null; 
//   var inputElements = document.getElementsByClassName('getv');
//   var r=document.getElementById("ps");
//   alert('yes');
//   for(var i=0; inputElements[i]; ++i){
//         if(inputElements[i].checked===true){

//           checkedValue = inputElements[i].value ;
//           arr.push(checkedValue)
//           r.innerHTML=arr;
//           console.log("dataof check =",arr);
//         }
//     }
// }
// ====================hide of all=======================================
const $menu = $('.drop_all');
$(document).mouseup(function (e) {
  if (!$menu.is(e.target)
  && $menu.has(e.target).length === 0) 
  {
   $menu.removeClass('show');
  }
});
$('.toggle').on('click', () => {
  $menu.toggleClass('show');
});

// budget=================================================================
const $menu_budget = $('.bud');
$(document).mouseup(function (e) {
  if (!$menu_budget.is(e.target)
  && $menu_budget.has(e.target).length === 0) 
  {
    $menu_budget.removeClass('show');
  }
});
$('.toggle').on('click', () => {
  $menu_budget.toggleClass('show');
});
//bedroom==================================================================
const $menu_bed = $('.bed');
$(document).mouseup(function (e) {
 if (!$menu_bed.is(e.target)
 && $menu_bed.has(e.target).length === 0) 
 {
   $menu_bed.removeClass('show');
 }
});
$('.toggle').on('click', () => {
  $menu_bed.toggleClass('show');
});
//=======dropdown-content==========================================================
const $menu_pro = $('.dropdown-content');
$(document).mouseup(function (e) {
 if (!$menu_pro.is(e.target)
 && $menu_pro.has(e.target).length === 0) 
 {
   $menu_pro.removeClass('show');
 }
});
$('.toggle').on('click', () => {
  $menu_pro.toggleClass('show');
});

//==============post============================

const $menu_post = $('.post');
$(document).mouseup(function (e) {
 if (!$menu_post.is(e.target)
 && $menu_post.has(e.target).length === 0) 
 {
   $menu_post.removeClass('show');
 }
});
$('.toggle').on('click', () => {
  $menu_post.toggleClass('show');
});


$("#search_id").click(function(e){
    $(".hide").show();
     e.stopPropagation();
});

$(".hide").click(function(e){
    e.stopPropagation();
});
$(document).click(function(){
    $(".hide").hide('slow');
});