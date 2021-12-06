export default function Footer() {
    return (
        <footer id="ts-footer">
        <div className="map ts-height__400px" id="map" />
        <section id="contact" className="ts-separate-bg-element" data-bg-image="assets/img/bg-clouds-short.jpg" data-bg-image-opacity=".2" data-bg-color="#e58450">
          <div className="container">
            <div className="ts-box mb-0 p-5 ts-mt__n-10" data-animate="ts-fadeInUp">
              <div className="row">
                <div className="col-md-4">
                  <h3>Contact Us</h3>
                  <address>
                    <figure>
                      2590 Rocky Road
                      Philadelphia, PA 19108
                    </figure>
                    <br />
                    <figure>
                      <div className="font-weight-bold">Email:</div>
                      <a href="#">office@example.com</a>
                    </figure>
                    <figure>
                      <div className="font-weight-bold">Phone:</div>
                      +1 215-606-0391
                    </figure>
                    <div className="font-weight-bold">Skype:</div>
                    LifeCoach
                  </address>
                  {/*end address*/}
                </div>
                {/*end col-md-4*/}
                <div className="col-md-8">
                  <h3>Contact Form</h3>
                  <form id="form-contact" method="post" className="clearfix ts-form ts-form-email ts-inputs__transparent" data-php-path="assets/php/email.php">
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label htmlFor="form-contact-name">Your Name *</label>
                          <input type="text" className="form-control" id="form-contact-name" name="name" placeholder="Your Name" required />
                        </div>
                        {/*end form-group */}
                      </div>
                      {/*end col-md-6 col-sm-6 */}
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <label htmlFor="form-contact-email">Your Email *</label>
                          <input type="email" className="form-control" id="form-contact-email" name="email" placeholder="Your Email" required />
                        </div>
                        {/*end form-group */}
                      </div>
                      {/*end col-md-6 col-sm-6 */}
                    </div>
                    {/*end row */}
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="form-contact-message">Your Message *</label>
                          <textarea className="form-control" id="form-contact-message" rows={5} name="message" placeholder="Your Message" required defaultValue={""} />
                        </div>
                        {/*end form-group */}
                      </div>
                      {/*end col-md-12 */}
                    </div>
                    {/*end row */}
                    <div className="form-group clearfix">
                      <button type="submit" className="btn btn-primary float-right" id="form-contact-submit">Send a Message</button>
                    </div>
                    {/*end form-group */}
                    <div className="form-contact-status" />
                  </form>
                  {/*end form-contact */}
                </div>
              </div>
              {/*end row*/}
            </div>
            {/*end ts-box*/}
            <div className="text-center text-white py-4">
              <small>© 2018 ThemeStarz, All Rights Reserved</small>
            </div>
          </div>
          {/*end container*/}
        </section>
      </footer>
    )
}