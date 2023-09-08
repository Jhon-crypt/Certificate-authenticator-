export default function Footer() {

    return (

        <>

            <section className="py-20">
                <div className="container">
                    <div className="row justify-content-between pb-6 pb-md-12 border-bottom">
                        <div className="col-12 col-lg-auto">
                            <a className="d-inline-block mb-8 mb-lg-0 navbar-brand" href="#">
                                <img src="https://shuffle.dev/cronos-assets/logos/cronos-logo.svg" alt="" width="132"/>
                            </a>
                        </div>
                        <div className="col-12 col-lg-auto">
                            <ul className="list-unstyled d-flex flex-wrap">
                                <li className="me-6 me-md-12 mb-4 mb-lg-0"><a className="small text-decoration-none fw-bold link-dark" href="#">About</a></li>
                                <li className="me-6 me-md-12 mb-4 mb-lg-0"><a className="small text-decoration-none fw-bold link-dark" href="#">Company</a></li>
                                <li className="me-6 me-md-12 mb-4 mb-lg-0"><a className="small text-decoration-none fw-bold link-dark" href="#">Services</a></li>
                                <li><a className="small text-decoration-none fw-bold link-dark" href="#">Testimonials</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-center pt-12">
                        <p className="small mb-6 mb-sm-0">All rights reserved © Cronos 2021</p>
                        <div>
                            <a className="link-dark text-decoration-none me-4" href="#">
                                <img src="https://shuffle.dev/cronos-assets/logos/brands/facebook.svg" alt=""/>
                            </a>
                            <a className="link-dark text-decoration-none me-4" href="#">
                                <img src="https://shuffle.dev/cronos-assets/logos/brands/twitter.svg" alt=""/>
                            </a>
                            <a className="link-dark text-decoration-none me-4" href="#">
                                <img src="https://shuffle.dev/cronos-assets/logos/brands/Instagram.svg" alt=""/>
                            </a>
                            <a className="link-dark text-decoration-none me-4" href="#">
                                <img src="https://shuffle.dev/cronos-assets/logos/brands/github.svg" alt=""/>
                            </a>
                            <a className="link-dark text-decoration-none me-4" href="#">
                                <img src="https://shuffle.dev/cronos-assets/logos/brands/LinkedIn.svg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )

}