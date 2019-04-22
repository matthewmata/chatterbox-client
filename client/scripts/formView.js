let FormView = {

  $form: $('form'),

  initialize: () => {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: (event) => {
    // Stop the browser from submitting the form
    event.preventDefault();
    
    console.log('click!');
  },

  setStatus: (active) => {
    let status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};