<script setup>
</script>
<template>
  <div class="contact mt-100">
    <div class="container">
      <div class="section-header animate__animated animate__fadeInUp">
        <h2>Contact Us</h2>
        <p>
          感谢您对我们感兴趣，我们非常乐意为您提供帮助。如果您有任何问题、建议或需要进一步的信息，请随时通过以下方式与我们联系
        </p>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form">
            <form class="contactForm">
              <div class="form-row">
                <div class="form-group col-sm-6">
                  <input type="text" class="form-control" placeholder="Your Name" />
                </div>
                <div class="form-group col-sm-6">
                  <input type="email" class="form-control" placeholder="Your Email" />
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Subject" />
              </div>
              <div class="form-group">
                <textarea class="form-control" rows="5" placeholder="Message"></textarea>
              </div>
              <div><button class="btn" type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
        <div class="col-md-6">
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26361250.667320687!2d-113.75533773453304!3d36.24128894212527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1574923227698!5m2!1sen!2sbd"
              frameborder="0" style="border: 0" allowfullscreen=""></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>