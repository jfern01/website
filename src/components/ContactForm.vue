<template>
    <section class="section contact-form-area">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="section-title display-4">Contact Info</h2>
                </div>
                <div class="col-lg-8 mx-auto">
                    <div class="bg-white rounded text-center p-5 shadow-down">
                        <h4 class="mb-80">Contact Form</h4>
                        <BAlert
                            variant="success" dismissible v-model="success">
                            Thank you for your interest in my services! I'll be in touch soon.
                        </BAlert>
                        <BAlert
                            variant="danger" dismissible v-model="error">
                            There was an error submitting the form. Try again later.
                        </BAlert>
                        <form name="contact-form" method="post" class="row" ref="form" v-on:submit.prevent="handleSubmit" data-netlify="true" data-netlify-honeypot="bot-field">
                            <input type="hidden" name="form-name" value="contact-form" />
                            <p hidden>
                                <label>Don’t fill this out: <input name="bot-field" /></label>
                            </p>
                            <div class="col-md-6">
                                <input type="text" v-model="formData.name" name="name" placeholder="Full Name" class="form-control px-0 mb-4" required>
                            </div>
                            <div class="col-md-6">
                                <input type="email" v-model="formData.email" name="email" placeholder="Email Address" class="form-control px-0 mb-4" required>
                            </div>
                            <div class="col-12">
                                <textarea v-model="formData.message" name="message" class="form-control px-0 mb-4" placeholder="Type Message Here" required></textarea>
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
import { BAlert } from 'bootstrap-vue';

export default {
    name: 'ContactForm',
    components: {
        BAlert,
    },
    data () {
        return {
            success: false,
            error: false,
            formData: {
                name: '',
                email: '',
                message: '',
                'form-name': 'contact-form'
            },
        };
    },
    methods: {
        handleSubmit: function() {
            this.success = false;
            this.error = false;

            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: this.encodedFormData,
            }).then(() => this.success = true)
                .catch(() => this.error = true)
                .finally(() => this.reset());
        },
        reset: function() {
            this.formData.name = '';
            this.formData.email = '';
            this.formData.message = '';

            /**
             * Reset validation state
             */
            this.$refs.form.reset();
        }
    },
    computed: {
        encodedFormData: function() {
            return Object
                .keys(this.formData)
                .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(this.formData[key]))
                .join('&');
        }
    }
};
</script>

<style scoped lang="scss">
section {
	background-image: url('../assets/images/backgrounds/bg-dots.png');
	margin-bottom: -250px;
}
</style>