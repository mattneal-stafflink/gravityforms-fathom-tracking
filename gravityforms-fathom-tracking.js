/**
 * Add Fathom Analytics Tracking to each form submit action.
 */
document.addEventListener('DOMContentLoaded', function( event ) { 
    /**
     * Track form submissions with Fathom Analytics.
     */
    (() => {
        const forms = document.querySelectorAll('.gform_wrapper form');

        if ( forms.length === 0 ) {
            return;
        }

        const button = document.querySelector('[data-fathom]');
        console.log(button);
        const formName = button.dataset.fathom;
    
        forms.forEach( function( form ) {
            form.addEventListener('submit', function() {
                if ( window.fathom ) {
                    window.fathom.trackEvent('Form Submission: ' + formName, { _value: 500000 });
                }
            });
        });
    })();
});