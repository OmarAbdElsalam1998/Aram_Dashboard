
window.onload=function(){
  updateOwl();
}
//expand aside button
let expand_btn=document.querySelector("aside.main-menu .expand-aside");
expand_btn.addEventListener("click",function(){
  document.body.classList.toggle("toggle");
  setTimeout(function(){
    updateOwl();        
  },   600)     


 
});
updateOwl = function(){
  $(".owl-carousel").each(function() {
    $(this).data('owl.carousel').onResize();
  });
};






    //Start drop down menu
    $(document).on("click",function(e){
      $(".dropdown").removeClass("active");
   })
  $(".dropdown").on("click",function(e){
      e.stopPropagation();
      console.log("Dddd")
      $(".dropdown").removeClass("active");
      $(this).siblings().removeClass("active");
      $(this).toggleClass("active");

  });
  $(".dropdown-menu").on("click",function(e){
      e.stopPropagation();
      

  });

  $(" .dropdown .dropdown-menu").on("click",function(){
      console.log($(".dropdown.active .dropdown-menu::-webkit-scrollbar-thumb"))
      $(".dropdown.active .dropdown-menu::-webkit-scrollbar-thumb").css({"visibility": "visible"});
      setTimeout(function(){
          $(".dropdown.active .dropdown-menu::-webkit-scrollbar-thumb").css({"visibility": "hidden"})
      },1000)
  
  });





  //add class active to aside item when click on it and go to target page

//   let aside_entry_points=document.querySelectorAll(".main-menu .option");
//   console.log(aside_entry_points)
// ;
//   aside_entry_points.forEach(item=>{
//     item.addEventListener("click",(e)=>{
//       document.querySelector(".main-menu .option.active").classList.remove("active");
//       e.target.classList.add("active");
//       open(e.target.getAttribute("-target"),"_self")
   
//     })

//   })

