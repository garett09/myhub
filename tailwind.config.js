module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'ub-grey': '#111111',
        'ub-warm-grey': "#AEA79F",
        'ub-cool-grey': "#333333",
        'ub-orange': "#E95420",
        'ub-lite-abrgn': "#77216F",
        'ub-med-abrgn': "#5E2750",
        'ub-drk-abrgn': "#2C001E",
        'ub-window-title': "#201f1f",
      }),
      textColor: theme => ({
        ...theme('colors'),
        'ubt-grey': '#F6F6F5',
        'ubt-warm-grey': "#AEA79F",
        'ubt-cool-grey': "#333333",
      }),

      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      
      extend: {
        zIndex: {
          '-10': '-10',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }