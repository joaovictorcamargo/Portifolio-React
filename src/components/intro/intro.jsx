import "intro";

const Intro = () => {
    return (
        <div className="i">
            <div className="i-lef">
                <div className="i-left-wraper">
                    <h2 className="i-intro">Opaa, eu sou o</h2>
                    <h1 className="i-name">João</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Desenvolvedor Web e Mobile</div>
                            <div className="i-title-item">JavaScript</div>
                            <div className="i-title-item">Reactjs</div>
                            <div className="i-title-item">React Native</div>
                            <div className="i-title-item">TypeScript</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        Desenvolvedor focado no desenvolvimento de soluções web e
                        mobile customizadas!
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src="https://github.com/joaovictorcamargo.png"
                    alt=""
                    className="i-img" />
            </div>
        </div>

    )
}

export default Intro