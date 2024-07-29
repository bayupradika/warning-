const body = document.querySelector("body");const swalst = Swal.mixin({timer: 2300, allowOutsideClick: false, showConfirmButton: false, timerProgressBar: true, imageHeight: 90,}); audio = new Audio('' + linkmp3.src); ftganti=0;fungsi=0;fungsiAwal=0;deffotostiker=fotostiker.src;function berjatuhan() {const heart = document.createElement("div"); heart.className = "fas fa-snowflake"; heart.style.left = (Math.random() * 90)+"vw"; heart.style.animationDuration = (Math.random()*3)+2+"s"; body.appendChild(heart);} setInterval(function name(params) {var heartArr = document.querySelectorAll(".fa-snowflake"); if (heartArr.length > 100) {heartArr[0].remove()}},100);Content.style = "opacity:1;margin-top:16vh"; const swals = Swal.mixin({allowOutsideClick: false, cancelButtonColor: '#FF0040', imageHeight: 80,}); 
  
  document.getElementById("kadoIn").onclick = function() {if(fungsiAwal==0){audio.play();fungsiAwal=1;kadoIn.style="transition:all .8s ease;transform:scale(10);opacity:0";wallpaper.style="transform: scale(1.5);";ket.style="display:none";setTimeout(initengahan,300);setTimeout(inipesan,500)}}
  
  async function inipesan(){
    var { value: nama } = await swals.fire({
           title: 'Masukin Nama Kamu', input: 'text',
       });
       if(nama && nama.length < 11){
         window.nama = nama;
         vketikhalo="Hai, " + nama + " ✨";
         mulainama();
         } else {
           await swals.fire('Ups!', 'Nama tidak boleh kosong atau lebih dari 10 karakter, ya!');inipesan();
    }
  }

  var tanya = 'Mau Kado Gak Nih? 😶❤️';
  var opstanya = 'Ayo jawab 😆';
  var tompositif = 'Mau';
  var tomnegatif = 'Engga';
    
    async function menuju(){pesanwhatsapp = "Makasii udah ngucapin " + nama + " ultah ><";await swals.fire('OK!', 'Kirim jawabannya ke Email aku, ya!', 'success');window.location = "mailto:bayupradika244@gmail.com?subject=Subjek%20Pesan&body=" + encodeURIComponent(pesanwhatsapp);}