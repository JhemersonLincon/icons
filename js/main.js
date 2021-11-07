
const btnCloseModal = document.querySelector(".btn-Closemodal");
const modal = document.querySelector(".modal")
let btnOpenmodal = document.querySelector('.btnOpenModal')

//Open Modal
btnOpenmodal.onclick = ()=>{
  modal.classList.toggle("active")
  const padlock = document.querySelector(".btnOpenModal > i")
  padlock.classList.toggle("fa-lock-open")
}

//close modal
modal.onclick = (e)=>{
  if(e.target == modal || e.target == btnCloseModal){
    modal.classList.remove("active")
    document.querySelector(".btnOpenModal > i").classList.remove("fa-lock-open")
  }
}