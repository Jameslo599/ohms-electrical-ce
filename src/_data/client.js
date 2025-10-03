module.exports = {
  name: 'Ohms Electrical CE',
  email: 'vaderservicesllc@gmail.com',
  phoneForTel: '832-935-1636',
  phoneFormatted: '(832) 935-1636',
  address: {
    lineOne: '6706 Kernel St',
    lineTwo: '',
    city: 'Houston',
    state: 'TX',
    zip: '77087',
    country: 'US',
    mapLink: 'https://maps.app.goo.gl/tTJmc7c95sLZkinv7',
  },
  socials: {
    facebook: 'https://www.facebook.com/groups/251929248168368/',
  },
  //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
  domain: 'https://www.tboohmselectricalce.com',
  // Passing the isProduction variable for use in HTML templates
  isProduction: process.env.ELEVENTY_ENV === 'PROD',
};
