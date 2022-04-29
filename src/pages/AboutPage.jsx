import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/about.jpg'

const AboutPage = () => {
  return <main>
    <PageHero title="About"/>
    <Wrapper className='page section section-center'>
        <img loading="lazy" src={aboutImg} alt="nice day"/>
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="unerline"></div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex maiores sint alias nobis quisquam quia illum laudantium, corrupti possimus voluptas minima cumque? Deserunt, vel sit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, harum voluptatum. Iusto, earum possimus. Libero repellendus dignissimos possimus ex eius, ipsa fugit. Harum odio libero at possimus beatae inventore maxime?</p>
        </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
