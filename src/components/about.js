import React, {Component} from 'react'

export default class About extends Component {
    render() {
        return(
            <div>
                <section className="colorlib-about" data-section = "about">
                    <div className= "colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>
                                             I am an experienced professional currently pursuing my MSc in Risk and Finance from the University of Southampton. I am a cheerful and hard-working team player.
                                             I was involved in a very large-scale project at Tata Consultancy Services as a Front-End developer. I have enjoyed coding since 2015 when I learned to code in C language and I have continuously developed my skills ever since.
                                             </p>
                                            <p>
                                                Now with the boring stuff aside, I read and I enjoy trekking. I have climbed one of the peaks in the Himalayas as well. I am someone who loves persevering and challenging myself to reach new heights all the time. I am a really out-going and fun-loving person adn I love being with people.
                                            </p>
                                            <p>So that's me, in less than 200 words.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )

    }
}