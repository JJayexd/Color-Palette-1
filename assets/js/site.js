// const baseColors = [ 
//     '#9e0142',
//     '#d53e4f',
//     '#f46d43',
//     '#fdae61',
//     '#fee08b',
//     '#abdda4',
//     '#66c2a5',
//     '#3288bd',
//     '#5e4fa2'
//   ];



//     createTiles()

// function createTiles() {

//     const mySection = document.getElementById('main')
    
//     const myHeader = document.createElement('h1')
//     myHeader.innerText = 'Color Palette'
//     mySection.appendChild(myHeader)

//     const myColor = document.createElement('section')
//     myColor.id='colors'


//     mySection.appendChild(myColor)

//     baseColors.forEach(color => {

//         const colorTile = document.createElement('div')
//         colorTile.classList.add('color-tile')
//         colorTile.style.backgroundColor = color
//         colorTile.textContent = color
//         myColor.appendChild(colorTile)
      
//     });


// }

const baseColors = [ 
    '#9e0142',
    '#d53e4f',
    '#f46d43',
    '#fdae61',
    '#fee08b',
    '#abdda4',
    '#66c2a5',
    '#3288bd',
    '#5e4fa2'
  ];



  createTiles()

function createTiles(){

    let mySection= document.createElement('section')
    document.body.appendChild(mySection)

    baseColors.forEach(color => {

    console.log(color)
    
        let myElement= document.createElement('div')
        myElement.style.backgroundColor = color
        mySection.appendChild(myElement)
        myElement.innerText = (color)
        myElement.classList.add('color-tile')

    });
  }