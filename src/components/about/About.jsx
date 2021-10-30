import "./about.css"
import Award from "./img/award.png";
import Oi from "./img/oi.png";

const About = () => {
    return
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Oi}
                    alt=""
                    className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">Um pouco sobre mim</h1>
            <p className="a-sub">
                Me considero um desenvolvedor de Front-end web e mobile Júnior extremamente imerso no universo
                da programação, desde que descobri essse universo nunca mais deixei de aprender um único dia e espero
                nunca deixar de aprender pois aprendi a gostar disso e não quero ficar sem!!!
            </p>
            <p className="a-desc">
                Durante esse tempo tenho feito cursos na Rocketseat, Fabrica de Aplicativos e Sujeito Programador,
                além de alguns projetos pessoais.
                Formado em Língua Inglesa e uma boa comunicação, não haverá ruidos na comunicação, além disso
                sou extremamente focado e dedicado.
            </p>
            <div className="a-award">
                <img src={Award}
                    alt=""
                    className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">Vocação</h4>
                    <p className="a-award-desc">Repetição</p>
                </div>
            </div>
        </div>
    </div>;
};

export default About;