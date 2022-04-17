export default {
  formatMiles: function (val) {
    if (!val) return '-';
    return val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }
}