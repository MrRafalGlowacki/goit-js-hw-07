import { galleryItems } from "./gallery-items.js";
// Change code below this line

const div = document.querySelector(".gallery");

const img = galleryItems
  .map(
    (image) =>
      `<div class="gallery__item">
    <a class="gallery__link" href=${image.original}>
      <img
        class="gallery__image"
        src=${image.preview}
        data-source=${image.original}
        alt="${image.description}"
      />
    </a>
  </div>`
  )
  .join("");
div.insertAdjacentHTML("beforeend", img);
// V.1

// const instance = basicLightbox.create(
//   `
// <div class="modal">
//     <img src="" alt = ""/>
// </div>
// `,
//   {
//     onShow: (instance) => {
//       instance.element().querySelector("img").onclick = instance.close;
//       const closeHandler = (event) => {
//         if (event.key === "Escape")
//           instance.close(),
//             document.removeEventListener("keydown", closeHandler)
//             // ,console.log(event.key)
//             ;
//         return;
//       };
//       document.addEventListener("keydown", closeHandler);
//     },
//   }
// );

// div.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
//   const modal = instance.element();
//   const modalImg = modal.querySelector("img");
//   const alt = event.target.alt;
//   const url = event.target.dataset.source;
//   modalImg.alt = alt;
//   modalImg.src = url;

//   instance.show();
// });

//V.2

// function testFunction(event) {
// 	event.preventDefault();
// 	const basicLightBoxInstance = basicLightbox.create(`
//         <img src="${event.target.getAttribute(
// 			"data-source"
// 		)}" width="800" height="600">
//     `);

// 	const closeHandler = (event) => {
// 		if (event.key === "Escape")
// 			basicLightBoxInstance.close(),
// 				document.removeEventListener("keydown", closeHandler);
// 		return;
// 	};
// 	document.addEventListener("keydown", closeHandler);

// 	basicLightBoxInstance.show();
// }
// div.addEventListener("click", testFunction);


// V.3
const lightbox = (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();
  const basicLightBoxInstance = basicLightbox.create(
    `
        <img src="${event.target.getAttribute("data-source")}" 
        alt = "${event.target.getAttribute("alt")}"/>
    `
  );
  const closeHandler = (event) => {
    if (event.key === "Escape")
      basicLightBoxInstance.close(),
        document.removeEventListener("keydown", closeHandler);
    return;
  };
  document.addEventListener("keydown", closeHandler);
  basicLightBoxInstance.show();
};
div.addEventListener("click", lightbox);
