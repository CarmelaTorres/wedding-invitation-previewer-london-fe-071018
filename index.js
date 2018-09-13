 const options = [
   {theme: "gatsby", display: ""},
   {theme: "rustic", display: ""},
   {theme: "retro", display: ""}
];
 const fields = ["first-spouse", "second-spouse", "date", "location"];
 const images = {
  gatsby: "https://i.pinimg.com/originals/f5/c1/ad/f5c1ad960e61feb1ff2b0955875138a8.jpg",
  rustic: "https://image.freepik.com/foto-gratis/bombilla-de-luces-de-navidad-en-la-mesa-de-madera-feliz-navidad-navidad-de-fondo-topview-diseno-de-la-frontera-estilos-rusticos-y-del-vintage_1484-1003.jpg",
  retro: "https://www.ps4wallpapers.com/wp-content/uploads/2017/03/PS4Wallpapers.com_retro-1056x594.png",
 }
 document.addEventListener("DOMContentLoaded", ()=>{
  const optionsContainer = document.getElementsByClassName("options")[0];
  
  const displayTitle = document.getElementById("display-title");
  const previewImage = document.getElementById("preview-img");
  
  const renderCard = theme => {
    displayTitle.innerHTML = `Current Theme: ${theme}`;
    console.log(!previewImage.src);
    if (!previewImage.src) document.getElementsByTagName("form")[0].classList.add("active");
    console.log(document.getElementsByTagName("form")[0].classList);
    previewImage.src = images[theme];
    previewImage.alt = theme;
  }
   options.forEach(option => {
     const button = document.createElement("button");
     button.id = option.theme;
     button.innerHTML = option.theme;
    button.addEventListener("click", () => renderCard(option.theme));
    optionsContainer.appendChild(button);
  })
  
  fields.forEach(field => {
    document.getElementById(field).addEventListener("input", e => {
      console.log(event, e.target, e.target.value)
      document.getElementById(`display-${field}`).innerHTML = e.target.value;
    })
    
  })
});
