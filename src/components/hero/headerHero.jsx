export default function HeaderHero() {

    return (

        <>

            <div className="container mt-8">
                <div className="row align-items-center mb-12">
                    <div className="col-12 col-lg-6 mb-20 mb-lg-0">
                        <div className="mw-lg-md">
                            <h2 className="mb-5 text-primary"> Blockchain-Powered Credential Verification.</h2>
                            <p className="lead text-muted lh-lg mb-6">
                                Whether you are a student, an employer, or an
                                institution seeking to streamline your verification processes or certify and validate credentials, our
                                platform offers an efficient, Blockchain-Powered secure, and seamless experience.

                            </p>
                            <a className="btn btn-primary d-block d-md-inline-block mb-2 mb-md-0 mb-lg-0 me-md-4" href="#">Get Started</a><a className="btn btn-dark d-block d-md-inline-block" href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 ms-auto">
                        <img className="img-fluid" src="https://shuffle.dev/cronos-assets/images/example-scene.png" alt="" />
                    </div>
                </div>
                <div className="text-center">
                    <a className="text-decoration-none text-muted small" href="#">
                        <svg className="text-secondary mb-2" width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 10.2929L8.14645 7.14645C8.34171 6.95118 8.65829 6.95118 8.85355 7.14645C9.04882 7.34171 9.04882 7.65829 8.85355 7.85355L4.85355 11.8536C4.65829 12.0488 4.34171 12.0488 4.14645 11.8536L0.146447 7.85355C-0.0488155 7.65829 -0.0488155 7.34171 0.146447 7.14645C0.341709 6.95118 0.658291 6.95118 0.853553 7.14645L4 10.2929V0.5C4 0.223858 4.22386 0 4.5 0C4.77614 0 5 0.223858 5 0.5V10.2929Z" fill="currentColor"></path>
                        </svg>
                        <span className="d-block text-secondary">Scroll to see benefits</span>
                    </a>
                </div>
            </div>


        </>

    )

}