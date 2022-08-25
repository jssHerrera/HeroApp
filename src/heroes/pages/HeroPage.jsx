import { useMemo } from 'react';
import {Navigate, Link , useParams, useNavigate } from 'react-router-dom';
import { getHeroById} from '../helpers';
import './styles.css'

export const HeroPage = () => {
  const { heroId } = useParams()
  const navigate = useNavigate()

// ------------------------------------------
  const hero = useMemo(() => getHeroById(heroId), [heroId])
  if (!hero) {
    return <Navigate to='/marvel' />
  }
// ------------------------------------------
  const handleClick = () =>{
    navigate(-1)
  }
// ------------------------------------------
  const { id, superhero, publisher, alter_ego, first_appearance } = hero
  const type = publisher.slice(0, publisher.indexOf(' '));

  const imgPhat =`public/img/${heroId}.jpg`

  return (
    <section className='info'>
      <div className='info__container container '>

        <div className='info__img-bg '>
          <img src={imgPhat} alt={imgPhat} className="info__img animate__animated animate__fadeInLeft" />
        </div>

        <div className="info__social animate__animated animate__fadeIn">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="info__social-link"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            className="info__social-link"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="info__social-link"
          >
            Instagram
          </a>
        </div>

        <div className="info__data animate__animated animate__fadeIn">
          <h1 className="info__title">
            {type} <br />
            {superhero}
          </h1>
          <p className="info__description">
            {alter_ego}
          </p>
          <p className="info__description">
            {first_appearance}
          </p>
          <span className="info__price">$1245</span>

          <div className="info__btns animate__animated animate__bounceInUp">
            <Link to='#' className="button button--gray button--small" onClick={handleClick} >
            <i className='bx bx-arrow-from-right'></i>
            </Link>

            <button className="button info__button">ADD TO CART</button>
          </div>
        </div>
      </div>
    </section>
  )
}


