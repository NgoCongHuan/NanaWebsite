$(document).ready(function() {
    const provinceSelect = $('.select-province');
    const binhduongStore = $('#binhduongStore');
    const dongnaiStore = $('#dongnaiStore');
    const buttonFind = $('.button');
    const mapIframeBD = $('#mapIframeBD');
    const mapIframeDN = $('#mapIframeDN');

    mapIframeBD.hide();

    buttonFind.on('click', function() {
        const selectedValue = provinceSelect.val();
        if (selectedValue === 'binhduong') {
            binhduongStore.show();
            dongnaiStore.hide();
            binhduongStore.css('marginTop', '30px');
            mapIframeBD.show();
            mapIframeDN.hide();
        } else if (selectedValue === 'dongnai') {
            binhduongStore.hide();
            dongnaiStore.show();
            binhduongStore.css('marginTop', '0');
            mapIframeBD.hide();
            mapIframeDN.show();
        } else if (selectedValue === 'all') {
            binhduongStore.show();
            dongnaiStore.show();
            binhduongStore.css('marginTop', '30px');
            mapIframeBD.hide();
            mapIframeDN.show();
        }
    });

    dongnaiStore.on('click', function() {
        mapIframeBD.hide();
        mapIframeDN.show();
    });

    binhduongStore.on('click', function() {
        mapIframeBD.show();
        mapIframeDN.hide();
    });
});

