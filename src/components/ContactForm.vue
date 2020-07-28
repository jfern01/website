<template>
    <section class="section contact-form-area">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="section-title">Contact Info</h2>
                </div>
                <div class="col-lg-8 mx-auto">
                    <div class="bg-white rounded text-center p-5 shadow-down">
                        <h4 class="mb-80">Contact Form</h4>
                        <form name="contact" method="post" class="row" data-netlify="true" data-netlify-honeypot="bot-field">
                            <input type="hidden" name="form-name" value="contact-form" />
                            <p hidden>
                                <label>Don’t fill this out: <input name="bot-field" /></label>
                            </p>
                            <div class="col-md-6">
                                <input type="text" name="name" placeholder="Full Name" class="form-control px-0 mb-4" required>
                            </div>
                            <div class="col-md-6">
                                <input type="email" name="email" placeholder="Email Address" class="form-control px-0 mb-4" required>
                            </div>
                            <div class="col-12">
                                <textarea name="message" class="form-control px-0 mb-4" placeholder="Type Message Here" required></textarea>
                            </div>
                            <div class="col-lg-6 col-10 mx-auto">
                                <button class="btn btn-primary w-100">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ContactForm',
    data () {
        return {};
    },
    methods: {}
};
</script>

<style scoped lang="scss">
section {
	background-image: url('../assets/images/backgrounds/bg-dots.png');
	margin-bottom: -250px;
}
</style>