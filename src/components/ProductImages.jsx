import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({images = []}) => {
  const [img,setImg] = useState(images[0])
  return <Wrapper>
    <img loading='lazy' src={img?.url} alt="product" className='main'/>
    <div className="gallery">
      {images.map((image,index)=>{
        return <img loading='lazy' src={image?.url} alt={images?.filename} key={index} onClick={()=>setImg(images[index])} className={`${image.url === img.url?'active':''}`}/>
      })}

    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  .main {
    height: 400px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 1px 1px 1px 3px var(--clr-primary-3);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
