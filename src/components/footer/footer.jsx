import { AiFillSafetyCertificate } from 'react-icons/ai'

export default function Footer() {

    return (

        <>

            <section className="py-20">
                <div className="container">
                    <div className="row justify-content-between pb-6 pb-md-12 border-bottom">
                        <div className="col-12 col-lg-auto">
                            <a className="d-inline-block mb-8 mb-lg-0 navbar-brand" href="#">
                                <div className="d-flex align-items-center" style={{ fontSize: "32px" }}>
                                    <b>
                                        <span className="font-weight-bold text-black mr-3" style={{ color: "#006251" }}><AiFillSafetyCertificate /></span>
                                        <span className="font-weight-bold text-black"><span style={{ color: "#006251" }}>Edu</span><span style={{ color: "#FBDC8E" }}>-Verify</span></span>
                                    </b>
                                </div>
                            </a>
                        </div>
                        
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-center pt-12">
                        <p className="small mb-6 mb-sm-0">All rights reserved © Edu-Verify 2023</p>
                        <div>
                            <a className="link-dark text-decoration-none me-4" href="#">
                                <img src="https://shuffle.dev/cronos-assets/logos/brands/facebook.svg" alt="" />
                            </a>
                            <a className="link-dark text-decoration-none me-4" href="#">
                                <img src="https://shuffle.dev/cronos-assets/logos/brands/twitter.svg" alt="" />
                            </a>
                            <a className="link-dark text-decoration-none me-4" href="#">
                                <img src="https://shuffle.dev/cronos-assets/logos/brands/Instagram.svg" alt="" />
                            </a>
                            <a className="link-dark text-decoration-none me-4" href="#">
                                <img src="https://shuffle.dev/cronos-assets/logos/brands/github.svg" alt="" />
                            </a>
                            <a className="link-dark text-decoration-none me-4" href="#">
                                <img src="https://shuffle.dev/cronos-assets/logos/brands/LinkedIn.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )

}