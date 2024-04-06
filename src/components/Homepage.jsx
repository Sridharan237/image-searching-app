import React, { useState } from 'react'

export default function Homepage() {
  const [searchTerm, setSearchTerm] = useState('');

  const imageArray = [
    {
      id:1,
      name:"megaladon",
      imageUrl:"https://tse3.mm.bing.net/th?id=OIP.CQD7jLXmNabzM--eh2T-AgHaE8&pid=Api&P=0&h=180"
    },
    {
      id:2,
      name:"Anaconda",
      imageUrl:"https://tse4.mm.bing.net/th?id=OIP.dXLwSgy_UAN0NNwIT31FVQHaE9&pid=Api&P=0&h=180"
    },
    {
      id:3,
      name:"Giant Crab",
      imageUrl:"https://i.pinimg.com/originals/9e/ee/76/9eee763f00bef3b7fea6ac45934aa2d6.jpg"
    },
    {
      id:4,
      name:"Blue Whale",
      imageUrl:"https://static.tildacdn.com/tild6165-3633-4166-b834-376430323932/IMG_6966.jpg"
    },
    {
      id:5,
      name:"Giant Turtle",
      imageUrl:"https://tse4.mm.bing.net/th?id=OIP.ueNStOunvnq-zaRgLD7npAHaEr&pid=Api&P=0&h=180"
    },
    {
      id:6,
      name:"mermaid",
      imageUrl:"https://tse1.mm.bing.net/th?id=OIP.d_lOzJxgYQRD-rgicEjb2QHaEK&pid=Api&P=0&h=180"
    },
    {
      id: 7,
      name: "Lion",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/49/Male_Lion_on_Rock.jpg"
    },
    {
      id: 8,
      name: "Tiger",
      imageUrl: "https://images.saymedia-content.com/.image/t_share/MTc0NjQ1MzkyMTM3MzMyNDk1/save-the-tigers-2014.jpg"
    },
    {
      id: 9,
      name: "Elephant",
      imageUrl: "https://www.cbc.ca/natureofthings/content/images/episodes/howtobeawildelephant_1280.jpg"
    },
    {
      id: 10,
      name: "Giraffe",
      imageUrl: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dpcmFmZmUtc3BvdHMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0="
    },
    {
      id: 11,
      name: "Panda",
      imageUrl: "https://i.redd.it/z91osjdq1j811.jpg"
    },{
      id: 12,
      name: "Polar Bear",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg"
    },
    {
      id: 13,
      name: "Kangaroo",
      imageUrl: "https://t4.ftcdn.net/jpg/02/73/14/01/360_F_273140104_8jSzl5bg8TCzCcOFM5HPhjjHinFw7gQ5.jpg"
    },
    {
      id: 14,
      name: "Leopard",
      imageUrl: "https://tse2.mm.bing.net/th?id=OIP.CAss0IVIGi-gWOfXc5rGywHaFS&pid=Api&P=0&h=180"
    },
    {
      id: 15,
      name: "Eagle",
      imageUrl: "https://kitchenerbaptist.org/wp-content/uploads/2019/05/Beautiful-Bald-Eagle-Flying-HD-Image.jpg"
    },
  ]

  const filterSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredImages = imageArray.filter(image => image.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <div id="search-box">
        <input type="text" name="searchName" placeholder='Enter the animal name' onChange={filterSearch} />
      </div>

        <h1>Animals:</h1>
        {
          filteredImages.map((image) => (
            <div id="each-image" key={image.id}>
              <h1>{image.name}</h1>
              <img src={image.imageUrl} alt={image.name} width="300px" height="300px"/>
            </div>
          ))
        }
    </div>
  )
}
