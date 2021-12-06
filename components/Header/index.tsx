import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header id="ts-hero" className="ts-full-screen ts-separate-bg-element">
        {/*NAVIGATION *******************************************************************************************/}
        <nav className="navbar navbar-expand-lg navbar-light fixed-top ts-separate-bg-element">
          <div className="container">
            <a className="navbar-brand" href="#page-top">
              <img src="assets/img/logo.png" alt="" />
            </a>
            {/*end navbar-brand*/}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            {/*end navbar-toggler*/}
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav d-block d-lg-flex ml-auto text-right">
                <a className="nav-item nav-link active ts-scroll" href="#page-top">Home <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link ts-scroll" href="#how-can-i-help-you">Help For You</a>
                <a className="nav-item nav-link ts-scroll" href="#about-me">About Me</a>
                <a className="nav-item nav-link ts-scroll" href="#latest-courses">Courses</a>
                <a className="nav-item nav-link ts-scroll" href="#successful-stories">Stories</a>
                <a className="nav-item nav-link ts-scroll" href="#online-webinars">Webinars</a>
                <a className="nav-item nav-link ts-scroll mr-2" href="#form-contact">Contact</a>
                <a className="ts-scroll btn btn-primary btn-sm m-1 px-3 " href="#form-contact">Meet Me</a>
              </div>
              {/*end navbar-nav*/}
            </div>
            {/*end collapse*/}
          </div>
          {/*end container*/}
          <div className="ts-background ts-shadow__md" data-bg-color="#fff" />
        </nav>
        {/*end navbar*/}
        {/*HERO CONTENT *****************************************************************************************/}
        <div className="container align-self-center align-items-center">
          <div className="row">
            <div className="col-md-6">
              <h1 data-animate="ts-fadeInUp">Push Your Life<br /> To a New Level</h1>
              <div data-animate="ts-fadeInUp" data-delay=".1s">
                <p className="w-75 mb-5 ts-opacity__50">Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis</p>
              </div>
              <a href="#how-can-i-help-you" className="btn btn-primary btn-lg ts-scroll mr-4" data-animate="ts-fadeInUp" data-delay=".2s">
                Learn More
                <i className="fa fa-arrow-right small ml-3 ts-opacity__50" />
              </a>
              <a href="#form-contact" className="btn-link text-dark d-inline-block" data-animate="ts-fadeInUp" data-delay=".1s">
                <strong>Meet Me</strong>
              </a>
            </div>
            {/*end col-md-7*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
        {/*END HERO CONTENT *************************************************************************************/}
        {/*HERO BACKGROUND **************************************************************************************/}
        <div className="ts-background" data-bg-color="#faf9f6" data-bg-parallax="scroll" data-bg-parallax-speed={3}>
          <div className="ts-background-image ts-parallax-element ts-z-index__1" data-bg-image="assets/img/bg-woman.png" data-animate="ts-fadeInUp" />
          <div className="ts-background-image ts-parallax-element position-absolute ts-top__0 ts-left__0 ts-z-index__0" data-bg-image="assets/img/bg-shape-top-left.png" data-animate="ts-fadeInLeft" data-delay=".1s" />
          <div className="ts-background-image ts-parallax-element position-absolute ts-top__0 ts-left__0 ts-z-index__-1" data-bg-image="assets/img/bg-shape-bottom-right.png" data-animate="ts-fadeInRight" data-delay=".2s" />
        </div>
        {/*END HERO BACKGROUND **********************************************************************************/}
      </header>
    )
}