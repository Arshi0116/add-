const h=document.querySelector('h1')
const container=document.querySelector('.container')
const img=document.createElement('img')

for(let i=1;i<=100;i++)
{
    container.appendChild(img)
    img.classList.add("image") 
    const newImg=img.cloneNode(true)
    img.src=`https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/${i}.png`
    container.appendChild(newImg)
    
}