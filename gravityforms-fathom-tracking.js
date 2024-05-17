/**
 * Add Fathom Analytics Tracking to each form submit action.
 */
function gravityformsFathom() {
    const forms = document.querySelectorAll('.gform_wrapper form');
    const button = document.querySelector('[data-fathom]');
    const formName = button.dataset.fathom;

    forms.forEach( function( form ) {
        form.addEventListener('submit', function() {
            if ( window.fathom ) {
                window.fathom.trackEvent('Form Submission', 
                    { 
                        form: form.id,
                        url: window.location.href,
                        form_name: formName
                    }
                );
            }
        });
    });
}