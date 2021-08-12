export default {
    formatMiles: function(val: number) { 
      return 'Gs. ' + val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
     }
  }