import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Main from '../components/Main'

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <div className="ts-page-wrapper" id="page-top">
        <Header />
        <Main />
        <Footer />
      </div>
      <div className="modal fade" id="modalCourse" tabIndex={-1} role="dialog" aria-labelledby="modalCourse" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content border-0 ts-shadow__lg">
            <div className="modal-header position-relative flex-column border-0 text-white p-5 ts-z-index__1">
              <h4 className="pb-5">Join the Course</h4>
              <h2>Become a New Person</h2>
              <h5 className="mb-0">10.05.2018</h5>
              <button type="button" className="close position-absolute ts-top__0 ts-right__0 m-2" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" className="text-white">×</span>
              </button>
              <div className="ts-background" data-bg-color="#000">
                <div className="ts-background-image ts-opacity__40" data-bg-image="assets/img/img-girl-field.jpg" />
              </div>
            </div>
            <div className="modal-body pb-2 pt-5 px-5">
              <h5>About The Course</h5>
              <p>
                Sed sollicitudin sodales vulputate. Aenean ornare eleifend erat non tristique. Etiam ut dolor risus.
                Morbi vel aliquet magna. Nulla eget mauris tempor, dapibus dui sed, porta quam. Donec sodales nulla
                sed dapibus suscipit. Vivamus nec placerat velit. Cras vehicula justo nunc, quis viverra nunc auctor
                in. Suspendisse potenti. Curabitur rutrum imperdiet felis sed scelerisque.
              </p>
            </div>
            <div className="modal-footer border-0 px-5 pb-5 pt-0 justify-content-between w-100">
              <span className="h5">$49</span>
              <button type="button" className="btn btn-primary">Join the Course</button>
            </div>
          </div>
        </div>
      </div>
      <script src="assets/js/custom.hero.js"></script>
      <script src="assets/js/jquery-3.3.1.min.js"></script>
      <script src="assets/js/popper.min.js"></script>
      <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        <script src="assets/js/imagesloaded.pkgd.min.js"></script>
        <script src="http://maps.google.com/maps/api/js?key=AIzaSyBEDfNcQRmKQEyulDN8nGWjLYPm8s4YB58"></script>
      <script src="assets/js/isInViewport.jquery.js"></script>
      <script src="assets/js/jquery.magnific-popup.min.js"></script>
      <script src="assets/js/owl.carousel.min.js"></script>
      <script src="assets/js/scrolla.jquery.min.js"></script>
      <script src="assets/js/jquery.validate.min.js"></script>
      <script src="assets/js/jquery-validate.bootstrap-tooltip.min.js"></script>
        <script src="assets/js/custom.js"></script>
    </Layout>
  )
}