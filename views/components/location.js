export default function renderLocation(location, isAvailableLocation = true) {
  let attributes;
  if(isAvailableLocation === true){
    attributes = `
      hx-post="/places" 
      hx-vals='{"locationId":"${location.id}"}'
      hx-target="#interesting-locations"
      hx-swap="beforeend"
    `
  }else{
    attributes = `
      hx-delete="/places/${location.id}" 
      hx-target="closest li"
      hx-swap="outerHTML"
      hx-confirm=""Are you sure?"
    `
  }
  return `
    <li class="location-item">
      <button 
        ${attributes}
        >

        <img src="${`/images/${location.image.src}`}" alt="${location.image.alt}" />
        <h3>${location.title}</h3>
      </button>
    </li>
  `;
}
