import { Icon } from "@iconify-icon/react/dist/iconify.js"
import "./About.css"
import { useEffect } from "react";


const About = ({setBgClass}) => {
    useEffect(() => {
        setBgClass("default");
    }, [])

    return (
        <div className="about">
            <section className="card">
                <div className="card__header">
                    <h1 className="card__title text-dg-primary">Sobre Nosotros</h1>
                </div>
                <div className="card__body">
                    <article className="article">
                        <h2 className="article__title">Consigna</h2>
                        <p className="article__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi blanditiis nostrum obcaecati rem in enim ullam sequi fugit ducimus nulla mollitia repudiandae ipsam cupiditate odio cumque, nisi, expedita voluptatibus facilis!</p>
                    </article>
                    <article className="article">
                        <h2 className="article__title">Equipo</h2>
                        <ul className="article__ul">
                            <li className="article__li"><span className="dot">•</span> Cavalli Diego</li>
                            <li className="article__li"><span className="dot">•</span> Derecho Maxi</li>
                            <li className="article__li"><span className="dot">•</span> Macchi Exequiel Lautaro</li>
                            <li className="article__li"><span className="dot">•</span> Martinez Christian Fabian</li>
                        </ul>
                    </article>
                    <article className="article">
                        <a className="article__link--repo" href="https://github.com/exeMacchi/WeatherApp" target="_blank">Repositorio en Github <Icon icon="tabler:brand-github" /></a>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default About