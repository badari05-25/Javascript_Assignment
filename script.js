var img;

function generatecard() {
  let floatingName = document.querySelector("#floatingName");
  let floatingcollegeName = document.querySelector("#floatingcollegeName");
  let floatingLocation = document.querySelector("#floatingLocation");

  let fname = document.querySelector("#fname");
  let clgname = document.querySelector("#clgname");
  let locat = document.querySelector("#locat");

  fname.innerHTML = floatingName.value;
  clgname.innerHTML = floatingcollegeName.value;
  locat.innerHTML = floatingLocation.value;
  document.getElementById("image").src = img;

}

function loadImage(event) {
  img = URL.createObjectURL(event.target.files[0]);
};

const image_input = document.querySelector("#image_input");
var uploaded_image = "";

image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
  })
  reader.readAsDataURL(this.files[0]);
})