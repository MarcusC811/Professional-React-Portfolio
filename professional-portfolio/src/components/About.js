import React from 'react';

export default (function About () {
    return(
        <section className="about-section text-center" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="text-white mb-4">Let me introduce myself</h2>
                        <p className="text-white-50">
                            As I child, my mind has always wondered how everything in the world works, who designs them and how you make it better. I set out on my developing journey and I was taken by a storm, in a good way. I finally got to be the one who builds software, makes things "work", and is able to make things better for the world. I have spent the last 7 years of my career working big box retail, climbing the ladder to become an executive manager, developing teams and pushing the limits to achieve success year over year has set me up for path I had no idea was possible. In just 6 short months, I was able to learn how to make Full Stack web apps and I thoroughly enjoy working with HTML, CSS, JavaScript, NodeJS, MongoDB, React and I am actively learning more. I am looking to join a team that will embrace a young developer and allow me to take my software development career and the team around me to heights never seen! 
                        </p>
                    </div>
                </div>
                <img className="img-fluid headshot" src="./marcus.jpg" alt="head shot of Marcus" />
            </div>
        </section>
    )
})