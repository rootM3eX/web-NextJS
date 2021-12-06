export default function Main() {
    return (
        <main id="ts-content">
        {/*HOW CAN I HELP YOU ************************************************************************************/}
        <section id="how-can-i-help-you" className="ts-block ts-xs-text-center text-center">
          <div className="container">
            <div className="ts-title pt-3">
              <h2>How Can I Help You</h2>
              <h3 className="ts-opacity__30">We can discuss your problems</h3>
            </div>
            {/*end ts-title*/}
            <div className="row">
              <div className="col-sm-6 col-md-4 col-xl-4">
                <div className="ts-item" data-animate="ts-fadeInUp">
                  <div className="ts-item-content">
                    <div className="ts-item-header">
                      <figure className="icon">
                        <img src="assets/img/icon-head-question.png" alt="" />
                      </figure>
                      {/*end icon*/}
                    </div>
                    {/*end ts-item-header*/}
                    <div className="ts-item-body">
                      <h4>Don’t Know Where to Go?</h4>
                      <p className="mb-0">
                        Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis
                      </p>
                    </div>
                    {/*end ts-item-body*/}
                  </div>
                  {/*end ts-item-content*/}
                </div>
                {/*end ts-item*/}
              </div>
              {/*end col-xl-4*/}
              <div className="col-sm-6 col-md-4 col-xl-4">
                <div className="ts-item" data-animate="ts-fadeInUp" data-delay="0.1s">
                  <div className="ts-item-content">
                    <div className="ts-item-header">
                      <figure className="icon">
                        <img src="assets/img/icon-sitting.png" alt="" />
                      </figure>
                      {/*end icon*/}
                    </div>
                    {/*end ts-item-header*/}
                    <div className="ts-item-body">
                      <h4>We’ll Sit and Talk</h4>
                      <p className="mb-0">
                        Suspendisse eget semper justo, a laoreet sapien. Ut a est vitae
                      </p>
                    </div>
                    {/*end ts-item-body*/}
                  </div>
                  {/*end ts-item-content*/}
                </div>
                {/*end ts-item*/}
              </div>
              {/*end col-xl-4*/}
              <div className="col-sm-6 offset-sm-4 col-md-4 offset-md-0 col-xl-4">
                <div className="ts-item" data-animate="ts-fadeInUp" data-delay="0.2s">
                  <div className="ts-item-content">
                    <div className="ts-item-header">
                      <figure className="icon">
                        <img src="assets/img/icon-hands-heart.png" alt="" />
                      </figure>
                      {/*end icon*/}
                    </div>
                    {/*end ts-item-header*/}
                    <div className="ts-item-body">
                      <h4>And Find The Solution</h4>
                      <p className="mb-0">
                        In non turpis convallis nunc fermentum porttitor sed quis sapien. Etiam et neque
                      </p>
                    </div>
                    {/*end ts-item-body*/}
                  </div>
                  {/*end ts-item-content*/}
                </div>
                {/*end ts-item*/}
              </div>
              {/*end col-xl-4*/}
            </div>
            {/*end row*/}
          </div>
          {/*end container*/}
        </section>
        {/*END HOW CAN I HELP YOU *******************************************************************************/}
        {/*ABOUT ME *********************************************************************************************/}
        <section id="about-me" data-bg-color="#faf9f6">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="ts-block pr-3">
                  <div className="ts-title">
                    <h2>About Me</h2>
                  </div>
                  {/*end ts-title*/}
                  <p>
                    Vivamus fermentum magna non faucibus dignissim. Sed a venenatis mi, vel tempus neque.
                    Fusce pharetra, diam in hendrerit facilisis, enim diam cursus augue.
                  </p>
                  <div className="list-group list-group-flush mb-5">
                    <a href="#collapseOne" className="list-group-item list-group-item-action border-top-0 pl-0 font-weight-bold bg-transparent" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseOne">Our Mission</a>
                    <div className="collapse" id="collapseOne">
                      <p className="pt-3 small">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                      </p>
                    </div>
                    <a href="#collapseTwo" className="list-group-item list-group-item-action pl-0 font-weight-bold bg-transparent" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseTwo">We Love Our Clients</a>
                    <div className="collapse" id="collapseTwo">
                      <p className="pt-3 small">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                      </p>
                    </div>
                    <a href="#collapseThree" className="list-group-item list-group-item-action pl-0 font-weight-bold bg-transparent" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseThree">Awards and Wins</a>
                    <div className="collapse" id="collapseThree">
                      <p className="pt-3 small">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                      </p>
                    </div>
                  </div>
                  <div className="text-center text-sm-left">
                    <a href="#" className="btn btn-primary mr-3 my-2">Contact Me</a>
                    <a href="#" className="btn btn-outline-dark ts-btn-border-muted my-2">Get an Appointment</a>
                  </div>
                </div>
              </div>
              {/*end col-md-6*/}
              <div className="col-sm-6">
                <div className="d-flex h-100 align-items-end">
                  <img src="assets/img/img-woman-pointing.png" alt="" className="w-100" />
                </div>
              </div>
            </div>
            {/*end row*/}
          </div>
          {/*end container*/}
        </section>
        {/*END ABOUT Me *****************************************************************************************/}
        {/*NUMBERS **********************************************************************************************/}
        <section id="numbers" className="ts-block ts-separate-bg-element py-5 ts-xs-text-center" data-bg-image="assets/img/bg-field.jpg" data-bg-image-opacity=".1" data-bg-color="#eeeeee" data-bg-parallax="scroll" data-bg-parallax-speed={3}>
          <div className="container">
            <div className="ts-promo-numbers py-5">
              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <div className="ts-promo-number">
                    <h2 className="ts-opacity__60">140+</h2>
                    <h5 className="mb-0 ts-opacity__30">Happy Clients</h5>
                  </div>
                  {/*end ts-promo-number*/}
                </div>
                {/*end col-sm-3*/}
                <div className="col-sm-6 col-md-3">
                  <div className="ts-promo-number">
                    <h2 className="ts-opacity__60">280+</h2>
                    <h5 className="mb-0 ts-opacity__30">Cases Done</h5>
                  </div>
                  {/*end ts-promo-number*/}
                </div>
                {/*end col-sm-3*/}
                <div className="col-sm-6 col-md-3">
                  <div className="ts-promo-number">
                    <h2 className="ts-opacity__60">24+</h2>
                    <h5 className="mb-0 ts-opacity__30">Years Experience</h5>
                  </div>
                  {/*end ts-promo-number*/}
                </div>
                {/*end col-sm-3*/}
                <div className="col-sm-6 col-md-3">
                  <div className="ts-promo-number">
                    <h2 className="ts-opacity__60">18</h2>
                    <h5 className="mb-0 ts-opacity__30">Branches Worldwide</h5>
                  </div>
                  {/*end ts-promo-number*/}
                </div>
                {/*end col-sm-3*/}
              </div>
              {/*end row*/}
            </div>
            {/*end ts-promo-numbers*/}
          </div>
          {/*end container*/}
        </section>
        {/*END NUMBERS ******************************************************************************************/}
        {/*LATEST COURSES ***************************************************************************************/}
        <section id="latest-courses" className="ts-block pb-0" data-bg-color="#faf9f6">
          <div className="container">
            <div className="ts-title text-center">
              <h2>Latest Courses</h2>
            </div>
            {/*end ts-title*/}
            <div className="row">
              <div className="col-md-4">
                <div className="card ts-border-radius__lg" data-animate="ts-fadeInUp">
                  <div className="card-img ts-height__300px" data-bg-image="assets/img/img-girl-field.jpg" />
                  <div className="card-body">
                    <strong className="ts-opacity__50">10.05.2018</strong>
                    <h4 className="mt-3">Become a Whole New Person</h4>
                    <p>Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor </p>
                    <a href="#" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalCourse">Join Course</a>
                    {/*end ts-story*/}
                  </div>
                </div>
              </div>
              {/*end col-md-4*/}
              <div className="col-md-4">
                <div className="card ts-border-radius__lg" data-animate="ts-fadeInUp" data-delay=".1s">
                  <div className="card-img ts-height__300px" data-bg-image="assets/img/img-girl-smiling.jpg" />
                  <div className="card-body">
                    <strong className="ts-opacity__50">18.05.2018</strong>
                    <h4 className="mt-3">Learn Easy How To Learn Easy</h4>
                    <p>Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor </p>
                    <a href="#" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalCourse">Join Course</a>
                    {/*end ts-story*/}
                  </div>
                </div>
              </div>
              {/*end col-md-4*/}
              <div className="col-md-4">
                <div className="card ts-border-radius__lg" data-animate="ts-fadeInUp" data-delay=".2s">
                  <div className="card-img ts-height__300px" data-bg-image="assets/img/img-family.jpg" />
                  <div className="card-body">
                    <strong className="ts-opacity__50">18.05.2018</strong>
                    <h4 className="mt-3">How To Be a Better Parent</h4>
                    <p>Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor </p>
                    <a href="#" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalCourse">Join Course</a>
                    {/*end ts-story*/}
                  </div>
                </div>
              </div>
              {/*end col-md-4*/}
            </div>
            {/*end row*/}
          </div>
          {/*end container*/}
        </section>
        {/*END LATEST COURSES**** *******************************************************************************/}
        {/*SUCCESSFUL STORIES ***********************************************************************************/}
        <div id="successful-stories" className="ts-block" data-bg-color="#faf9f6">
          <div className="container">
            <div className="ts-title text-center">
              <h2>Successful Stories</h2>
            </div>
            <div className="card-columns ts-column-count-sm-2 ts-column-count-md-2 ts-column-count-lg-3 ts-column-count-xl-4">
              <div className="card" data-animate="ts-fadeInUp">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <figure className="ts-circle__xs ts-shadow__sm mr-3" data-bg-image="assets/img/person-sm-01.jpg" />
                    <h5>Edward Montanez</h5>
                  </div>
                  <p className="mb-0">
                    Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh
                    posuere. Aenean sagittis nisl. Sapien urna, sagittis a magna in, malesuada.
                  </p>
                </div>
                {/*end card-body*/}
              </div>
              {/*end card*/}
              <div className="card" data-animate="ts-fadeInUp" data-delay=".2s">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <figure className="ts-circle__xs ts-shadow__sm mr-3" data-bg-image="assets/img/person-sm-02.jpg" />
                    <h5>Anita Matthews</h5>
                  </div>
                  <p className="mb-0">
                    Suspendisse tempor turpis mattis nibh posuere, in iaculis sem efficitur. Ut sapien
                    urna, sagittis a magna in, malesuada ornare massa. Pellentesque id ligula est.
                  </p>
                </div>
                {/*end card-body*/}
              </div>
              {/*end card*/}
              <div className="card" data-animate="ts-fadeInUp" data-delay=".3s">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <figure className="ts-circle__xs ts-shadow__sm mr-3" data-bg-image="assets/img/person-sm-03.jpg" />
                    <h5>Lisa Haley</h5>
                  </div>
                  <p className="mb-0">
                    Ut sapien urna, sagittis a magna in, malesuada ornare massa. Pellentesque id ligula est.
                  </p>
                </div>
                {/*end card-body*/}
              </div>
              {/*end card*/}
              <div className="card" data-animate="ts-fadeInUp" data-delay=".4s">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <figure className="ts-circle__xs ts-shadow__sm mr-3" data-bg-image="assets/img/person-sm-04.jpg" />
                    <h5>Levi Masters</h5>
                  </div>
                  <p className="mb-0">
                    Phasellus in iaculis ante. Fusce odio justo, pulvinar sit amet nisl sed, lacinia laoreet
                    augue. Integer eu ultrices lacus, at laoreet nunc.  Pellentesque id
                  </p>
                </div>
                {/*end card-body*/}
              </div>
              {/*end card*/}
              <div className="card" data-animate="ts-fadeInUp" data-delay=".5s">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <figure className="ts-circle__xs ts-shadow__sm mr-3" data-bg-image="assets/img/person-sm-05.jpg" />
                    <h5>Tierra F. Lane</h5>
                  </div>
                  <p className="mb-0">
                    Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh
                    posuere. Aenean sagittis nisl.
                  </p>
                </div>
                {/*end card-body*/}
              </div>
              {/*end card*/}
              <div className="card" data-animate="ts-fadeInUp" data-delay=".6s">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <figure className="ts-circle__xs ts-shadow__sm mr-3" data-bg-image="assets/img/person-sm-06.jpg" />
                    <h5>Harold Williamson</h5>
                  </div>
                  <p className="mb-0">
                    Fusce tincidunt turpis a dui pulvinar venenatis. Sed elementum sollicitudin euismod.
                    Phasellus elementum nunc ac quam gravida interdum. Ut vitae ex est. Suspendisse ut
                    congue arcu. Cras sit amet condimentum arcu. Ut tortor odio, elementum quis tellus
                    vel, finibus semper turpis. Nunc eget dui leo.
                  </p>
                </div>
                {/*end card-body*/}
              </div>
              {/*end card*/}
              <div className="card" data-animate="ts-fadeInUp" data-delay=".7s">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <figure className="ts-circle__xs ts-shadow__sm mr-3" data-bg-image="assets/img/person-sm-07.jpg" />
                    <h5>Anna Huynh</h5>
                  </div>
                  <p className="mb-0">
                    Sed elementum sollicitudin euismod.
                    Phasellus elementum nunc ac quam gravida interdum. Ut vitae ex est. Suspendisse ut
                    congue arcu. Cras sit amet condimentum arcu.
                  </p>
                </div>
                {/*end card-body*/}
              </div>
              {/*end card*/}
              <div className="card" data-animate="ts-fadeInUp" data-delay=".8s">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <figure className="ts-circle__xs ts-shadow__sm mr-3" data-bg-image="assets/img/person-sm-08.jpg" />
                    <h5>Billy Ware</h5>
                  </div>
                  <p className="mb-0">
                    Phasellus in iaculis ante. Fusce odio justo, pulvinar sit amet nisl sed, lacinia laoreet
                    augue. Integer eu ultrices lacus, at laoreet nunc.  Pellentesque id
                  </p>
                </div>
                {/*end card-body*/}
              </div>
              {/*end card*/}
            </div>
            {/*end card-columns*/}
            <div className="text-center mt-5">
              <a href="#" className="btn btn-outline-primary">Show More</a>
            </div>
          </div>
          {/*end container*/}
        </div>
        {/*END SUCCESSFUL STORIES *******************************************************************************/}
        <section className="text-center my-5 py-5">
          <div className="ts-title mb-5">
            <h3 className="mb-1">Still Not Decided?</h3>
            <h4 className="font-weight-normal ts-opacity__50 mb-5">Individual consultation is right for you</h4>
          </div>
          <a href="#" className="btn btn-primary btn-lg">Ask for Individual Consultation</a>
        </section>
        <hr />
        {/*FREE VIDEOS ******************************************************************************************/}
        <section id="free-videos" className="ts-block pt-5 pb-5">
          <div className="container">
            <div className="ts-title text-center">
              <h2>Free Videos</h2>
              <h3 className="ts-opacity__30">Selected Videos From Previous Seminars</h3>
            </div>
            {/*end ts-title*/}
            <div className="owl-carousel" data-owl-dots={1}>
              <div className="card">
                <img src="assets/img/img-woman-standing.jpg" className="card-img" alt="" />
                <div className="card-img-overlay text-white" data-bg-color="rgba(0,0,0,.5)">
                  <div className="d-flex justify-content-center align-items-center h-100 w-100">
                    <a href="https://www.youtube.com/watch?v=y2X7c9TUQJ8" className="ts-circle__sm bg-white video-popup">
                      <i className="fa fa-play text-dark" />
                    </a>
                  </div>
                  <div className="position-absolute ts-bottom__0 ts-left__0 p-4">
                    <h4 className="card-title mb-1">Build Your Career From Scratch</h4>
                    <p className="card-text text-white">03.03.2018</p>
                  </div>
                </div>
              </div>
              {/*end card*/}
              <div className="card">
                <img src="assets/img/img-male-mentoring.jpg" className="card-img" alt="" />
                <div className="card-img-overlay text-white" data-bg-color="rgba(0,0,0,.5)">
                  <div className="d-flex justify-content-center align-items-center h-100 w-100">
                    <a href="https://www.youtube.com/watch?v=y2X7c9TUQJ8" className="ts-circle__sm bg-white video-popup">
                      <i className="fa fa-play text-dark" />
                    </a>
                  </div>
                  <div className="position-absolute ts-bottom__0 ts-left__0 p-4">
                    <h4 className="card-title mb-1">How To Draw Realistic</h4>
                    <p className="card-text text-white">03.03.2018</p>
                  </div>
                </div>
              </div>
              {/*end card*/}
              <div className="card">
                <img src="assets/img/img-couple-yacht.jpg" className="card-img" alt="" />
                <div className="card-img-overlay text-white" data-bg-color="rgba(0,0,0,.5)">
                  <div className="d-flex justify-content-center align-items-center h-100 w-100">
                    <a href="https://www.youtube.com/watch?v=y2X7c9TUQJ8" className="ts-circle__sm bg-white video-popup">
                      <i className="fa fa-play text-dark" />
                    </a>
                  </div>
                  <div className="position-absolute ts-bottom__0 ts-left__0 p-4">
                    <h4 className="card-title mb-1">Your Dreams Can Are Real</h4>
                    <p className="card-text text-white">03.03.2018</p>
                  </div>
                </div>
              </div>
              {/*end card*/}
            </div>
            {/*end owl-carousel*/}
          </div>
          {/*end container*/}
        </section>
        {/*END FREE VIDEOS **************************************************************************************/}
        {/*SUBSCRIBE ********************************************************************************************/}
        <section id="subscribe" className="ts-block ts-separate-bg-element ts-background-repeat py-5" data-bg-image="assets/img/pattern-topo.png" data-bg-image-opacity=".05" data-bg-color="#faf9f6">
          <div className="container py-2">
            <div className="offset-lg-1 col-lg-10">
              <h3>Subscribe For The Latest News!</h3>
              <form className="ts-form ts-form-email" data-php-path="assets/php/email.php">
                <div className="row">
                  <div className="col-md-10">
                    <div className="form-group mb-0">
                      <input type="email" className="form-control ts-border-radius__pill" id="email-subscribe" aria-describedby="subscribe" name="email" placeholder="Email Address" required />
                      <small className="form-text mt-2 ts-opacity__50">*You’ll get only relevant news once a week</small>
                    </div>
                    {/*end form-group*/}
                  </div>
                  {/*end col-md-10*/}
                  <div className="col-md-2">
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                  </div>
                  {/*end col-md-2*/}
                </div>
                {/*end row*/}
              </form>
              {/*end ts-form*/}
            </div>
          </div>
          {/*end container*/}
        </section>
        {/*END SUBSCRIBE ****************************************************************************************/}
        {/*ONLINE WEBINARS ***************************************************************************************/}
        <section id="online-webinars" className="ts-block pt-5 pb-0">
          <div className="container pt-3">
            <div className="ts-title text-center">
              <h2>Online Webinars</h2>
            </div>
            {/*end ts-title*/}
            <div className="row ts-cards-same-height">
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="ts-card__image ts-img-into-bg">
                    <img className="card-img-top" src="assets/img/img-success.jpg" alt="Card image cap" />
                  </div>
                  {/*end ts-card__image*/}
                  <div className="card-body">
                    <h4 className="mb-2">Short Path To Successful Life</h4>
                    <small className="ts-opacity__50">14.08.2018</small>
                  </div>
                  {/*end card-body*/}
                  <div className="card-footer bg-white text-center">
                    <a href="#" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#modalCourse">Join Webinar</a>
                  </div>
                  {/*end card-footer*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col-md-3*/}
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="ts-card__image ts-img-into-bg">
                    <img className="card-img-top" src="assets/img/img-boss.jpg" alt="Card image cap" />
                  </div>
                  {/*end ts-card__image*/}
                  <div className="card-body">
                    <h4 className="mb-2">What to Tell For Better Salary</h4>
                    <small className="ts-opacity__50">30.08.2018</small>
                  </div>
                  {/*end card-body*/}
                  <div className="card-footer bg-white text-center">
                    <a href="#" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#modalCourse">Join Webinar</a>
                  </div>
                  {/*end card-footer*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col-md-3*/}
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="ts-card__image ts-img-into-bg">
                    <img className="card-img-top" src="assets/img/img-meeting.jpg" alt="Card image cap" />
                  </div>
                  {/*end ts-card__image*/}
                  <div className="card-body">
                    <h4 className="mb-2">Meet New People And Opportunities</h4>
                    <small className="ts-opacity__50">06.09.2018</small>
                  </div>
                  {/*end card-body*/}
                  <div className="card-footer bg-white text-center">
                    <a href="#" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#modalCourse">Join Webinar</a>
                  </div>
                  {/*end card-footer*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col-md-3*/}
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="ts-card__image ts-img-into-bg">
                    <img className="card-img-top" src="assets/img/img-stucked.jpg" alt="Card image cap" />
                  </div>
                  {/*end ts-card__image*/}
                  <div className="card-body">
                    <h4 className="mb-2">When You Have Stucked in Your Life</h4>
                    <small className="ts-opacity__50">24.09.2018</small>
                  </div>
                  {/*end card-body*/}
                  <div className="card-footer bg-white text-center">
                    <a href="#" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#modalCourse">Join Webinar</a>
                  </div>
                  {/*end card-footer*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col-md-3*/}
            </div>
            {/*end row*/}
          </div>
          {/*end container*/}
        </section>
        {/*END OUR TEAM *****************************************************************************************/}
        {/*PARTNERS *********************************************************************************************/}
        <section id="partners" className="ts-block py-4">
          {/*container*/}
          <div className="container">
            {/*block of logos*/}
            <div className="d-block d-md-flex justify-content-between align-items-center text-center ts-partners py-3">
              <a href="#">
                <img src="assets/img/logo-01.png" alt="" />
              </a>
              <a href="#">
                <img src="assets/img/logo-02.png" alt="" />
              </a>
              <a href="#">
                <img src="assets/img/logo-03.png" alt="" />
              </a>
              <a href="#">
                <img src="assets/img/logo-04.png" alt="" />
              </a>
              <a href="#">
                <img src="assets/img/logo-05.png" alt="" />
              </a>
            </div>
            {/*end logos*/}
          </div>
          {/*end container*/}
        </section>
        {/*END PARTNERS *****************************************************************************************/}
        {/*BUY NOW **********************************************************************************************/}
        <section id="buy-now" className="ts-block text-center py-5">
          <div className="container">
            <div className="ts-title mb-3">
              <h2 className="mb-0">Buy The LifeCoach Now!</h2>
            </div>
            {/*end ts-title*/}
            <a href="#" className="btn btn-primary">Buy Now!</a>
          </div>
          <div className="ts-background">
            <div className="ts-background-image ts-opacity__10" data-bg-image="assets/img/bg-clouds-short.jpg" />
          </div>
        </section>
        {/*END BUY NOW ******************************************************************************************/}
      </main>
    )
}