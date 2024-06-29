var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_WILAYAHKETINGGIAN_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "WILAYAH KETINGGIAN",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WILAYAHKETINGGIAN_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12226412.734333, 134755.377770, 12250251.969210, 153089.773643]
                            })
                        });
var lyr_Slope_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Slope",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Slope_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12226412.734333, 134755.377771, 12250251.969210, 153089.773643]
                            })
                        });
var format_POLARUANGRDTR2019_4 = new ol.format.GeoJSON();
var features_POLARUANGRDTR2019_4 = format_POLARUANGRDTR2019_4.readFeatures(json_POLARUANGRDTR2019_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLARUANGRDTR2019_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLARUANGRDTR2019_4.addFeatures(features_POLARUANGRDTR2019_4);
var lyr_POLARUANGRDTR2019_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLARUANGRDTR2019_4, 
                style: style_POLARUANGRDTR2019_4,
                interactive: true,
    title: 'POLA RUANG RDTR 2019<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_0.png" /> Badan Air<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_1.png" /> Hutan Kota<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_2.png" /> Jalan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_3.png" /> Pemakaman<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_4.png" /> Perdagangan & Jasa Skala BWP<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_5.png" /> Perdagangan & Jasa Skala Kota<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_6.png" /> Perdagangan & Jasa Skala Sub-BWP<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_7.png" /> Perkebunan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_8.png" /> Pertanian Tanaman Pangan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_9.png" /> Pos Lintas Batas Negara<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_10.png" /> RTH Lainnya<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_11.png" /> Sentra Industri Kecil dan Menengah<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_12.png" /> SPU Kesehatan Skala Kecamatan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_13.png" /> SPU Kesehatan Skala RW<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_14.png" /> SPU Olahraga Skala RW<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_15.png" /> SPU Pendidikan Skala Kecamatan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_16.png" /> SPU Pendidikan Skala Kelurahan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_17.png" /> SPU Pendidikan Skala Kota<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_18.png" /> SPU Pendidikan Skala RW<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_19.png" /> SPU Peribadatan Skala Kecamatan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_20.png" /> SPU Peribadatan Skala Kelurahan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_21.png" /> SPU Peribadatan Skala RW<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_22.png" /> SPU Sosial Budaya Skala Kelurahan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_23.png" /> SPU Transportasi Skala Kota<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_24.png" /> Sungai<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_25.png" /> Taman Kecamatan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_26.png" /> Taman Kelurahan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_27.png" /> Taman Kota<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_28.png" /> Zona Pariwisata<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_29.png" /> Zona Perkantoran<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_30.png" /> Zona Pertahanan dan Keamanan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_31.png" /> Zona Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_32.png" /> Zona Perumahan Kepadatan Sedang<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_33.png" /> Zona Sekitar Danau atau Waduk<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_34.png" /> Zona Sempadan Sungai<br />'
        });
var format_POLARUANG_RTRWP_5 = new ol.format.GeoJSON();
var features_POLARUANG_RTRWP_5 = format_POLARUANG_RTRWP_5.readFeatures(json_POLARUANG_RTRWP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLARUANG_RTRWP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLARUANG_RTRWP_5.addFeatures(features_POLARUANG_RTRWP_5);
var lyr_POLARUANG_RTRWP_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLARUANG_RTRWP_5, 
                style: style_POLARUANG_RTRWP_5,
                interactive: true,
    title: 'POLARUANG_RTRWP<br />\
    <img src="styles/legend/POLARUANG_RTRWP_5_0.png" /> Badan Air<br />\
    <img src="styles/legend/POLARUANG_RTRWP_5_1.png" /> Kawasan Hutan Adat<br />\
    <img src="styles/legend/POLARUANG_RTRWP_5_2.png" /> Kawasan Hutan Produksi<br />\
    <img src="styles/legend/POLARUANG_RTRWP_5_3.png" /> Kawasan Konservasi<br />\
    <img src="styles/legend/POLARUANG_RTRWP_5_4.png" /> Kawasan Permukiman<br />\
    <img src="styles/legend/POLARUANG_RTRWP_5_5.png" /> Kawasan Pertahanan dan Keamanan<br />\
    <img src="styles/legend/POLARUANG_RTRWP_5_6.png" /> Kawasan Pertanian<br />\
    <img src="styles/legend/POLARUANG_RTRWP_5_7.png" /> Kawasan yang Memberikan Perlindungan terhadap Kawasan Bawahannya<br />'
        });
var format_KawasanHutan_6 = new ol.format.GeoJSON();
var features_KawasanHutan_6 = format_KawasanHutan_6.readFeatures(json_KawasanHutan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanHutan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanHutan_6.addFeatures(features_KawasanHutan_6);
var lyr_KawasanHutan_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KawasanHutan_6, 
                style: style_KawasanHutan_6,
                interactive: true,
    title: 'Kawasan Hutan<br />\
    <img src="styles/legend/KawasanHutan_6_0.png" /> Hutan Lindung<br />\
    <img src="styles/legend/KawasanHutan_6_1.png" /> Kawasan Hutan Produksi Terbatas<br />\
    <img src="styles/legend/KawasanHutan_6_2.png" /> Kawasan Hutan Produksi yang dapat di Konversi<br />'
        });
var format_Alternatif3_7 = new ol.format.GeoJSON();
var features_Alternatif3_7 = format_Alternatif3_7.readFeatures(json_Alternatif3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alternatif3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alternatif3_7.addFeatures(features_Alternatif3_7);
var lyr_Alternatif3_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Alternatif3_7, 
                style: style_Alternatif3_7,
                interactive: true,
                title: '<img src="styles/legend/Alternatif3_7.png" /> Alternatif 3'
            });
var format_Alternatif2_8 = new ol.format.GeoJSON();
var features_Alternatif2_8 = format_Alternatif2_8.readFeatures(json_Alternatif2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alternatif2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alternatif2_8.addFeatures(features_Alternatif2_8);
var lyr_Alternatif2_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Alternatif2_8, 
                style: style_Alternatif2_8,
                interactive: true,
                title: '<img src="styles/legend/Alternatif2_8.png" /> Alternatif 2'
            });
var format_Alternatif1_9 = new ol.format.GeoJSON();
var features_Alternatif1_9 = format_Alternatif1_9.readFeatures(json_Alternatif1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alternatif1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alternatif1_9.addFeatures(features_Alternatif1_9);
var lyr_Alternatif1_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Alternatif1_9, 
                style: style_Alternatif1_9,
                interactive: true,
                title: '<img src="styles/legend/Alternatif1_9.png" /> Alternatif 1'
            });
var format_BatasDesa_10 = new ol.format.GeoJSON();
var features_BatasDesa_10 = format_BatasDesa_10.readFeatures(json_BatasDesa_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesa_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_10.addFeatures(features_BatasDesa_10);
var lyr_BatasDesa_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasDesa_10, 
                style: style_BatasDesa_10,
                interactive: true,
                title: '<img src="styles/legend/BatasDesa_10.png" /> Batas Desa'
            });
var format_batas_indonesia_malaysia_11 = new ol.format.GeoJSON();
var features_batas_indonesia_malaysia_11 = format_batas_indonesia_malaysia_11.readFeatures(json_batas_indonesia_malaysia_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_indonesia_malaysia_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_indonesia_malaysia_11.addFeatures(features_batas_indonesia_malaysia_11);
var lyr_batas_indonesia_malaysia_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_indonesia_malaysia_11, 
                style: style_batas_indonesia_malaysia_11,
                interactive: true,
                title: '<img src="styles/legend/batas_indonesia_malaysia_11.png" /> batas_indonesia_malaysia'
            });
var format_PT_SR_PUSATPERMUKIMAN_12 = new ol.format.GeoJSON();
var features_PT_SR_PUSATPERMUKIMAN_12 = format_PT_SR_PUSATPERMUKIMAN_12.readFeatures(json_PT_SR_PUSATPERMUKIMAN_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PT_SR_PUSATPERMUKIMAN_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PT_SR_PUSATPERMUKIMAN_12.addFeatures(features_PT_SR_PUSATPERMUKIMAN_12);
var lyr_PT_SR_PUSATPERMUKIMAN_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PT_SR_PUSATPERMUKIMAN_12, 
                style: style_PT_SR_PUSATPERMUKIMAN_12,
                interactive: true,
    title: 'PT_SR_PUSATPERMUKIMAN<br />\
    <img src="styles/legend/PT_SR_PUSATPERMUKIMAN_12_0.png" /> Pusat Kegiatan Lokal (PKL)<br />\
    <img src="styles/legend/PT_SR_PUSATPERMUKIMAN_12_1.png" /> Pusat Kegiatan Nasional (PKN)<br />\
    <img src="styles/legend/PT_SR_PUSATPERMUKIMAN_12_2.png" /> Pusat Kegiatan Strategis Nasional (PKSN)<br />\
    <img src="styles/legend/PT_SR_PUSATPERMUKIMAN_12_3.png" /> Pusat Kegiatan Wilayah (PKW)<br />'
        });
var format_HGU_13 = new ol.format.GeoJSON();
var features_HGU_13 = format_HGU_13.readFeatures(json_HGU_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HGU_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HGU_13.addFeatures(features_HGU_13);
var lyr_HGU_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HGU_13, 
                style: style_HGU_13,
                interactive: true,
                title: '<img src="styles/legend/HGU_13.png" /> HGU'
            });
var format_PT_SR_ENERGI_14 = new ol.format.GeoJSON();
var features_PT_SR_ENERGI_14 = format_PT_SR_ENERGI_14.readFeatures(json_PT_SR_ENERGI_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PT_SR_ENERGI_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PT_SR_ENERGI_14.addFeatures(features_PT_SR_ENERGI_14);
var lyr_PT_SR_ENERGI_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PT_SR_ENERGI_14, 
                style: style_PT_SR_ENERGI_14,
                interactive: true,
                title: '<img src="styles/legend/PT_SR_ENERGI_14.png" /> PT_SR_ENERGI'
            });
var format_LN_SR_TELEKOMUNIKASI_15 = new ol.format.GeoJSON();
var features_LN_SR_TELEKOMUNIKASI_15 = format_LN_SR_TELEKOMUNIKASI_15.readFeatures(json_LN_SR_TELEKOMUNIKASI_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LN_SR_TELEKOMUNIKASI_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LN_SR_TELEKOMUNIKASI_15.addFeatures(features_LN_SR_TELEKOMUNIKASI_15);
var lyr_LN_SR_TELEKOMUNIKASI_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LN_SR_TELEKOMUNIKASI_15, 
                style: style_LN_SR_TELEKOMUNIKASI_15,
                interactive: true,
                title: '<img src="styles/legend/LN_SR_TELEKOMUNIKASI_15.png" /> LN_SR_TELEKOMUNIKASI'
            });
var format_ENERGI_16 = new ol.format.GeoJSON();
var features_ENERGI_16 = format_ENERGI_16.readFeatures(json_ENERGI_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ENERGI_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENERGI_16.addFeatures(features_ENERGI_16);
var lyr_ENERGI_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ENERGI_16, 
                style: style_ENERGI_16,
                interactive: true,
                title: '<img src="styles/legend/ENERGI_16.png" /> ENERGI'
            });
var format_PRASARANALAIN_17 = new ol.format.GeoJSON();
var features_PRASARANALAIN_17 = format_PRASARANALAIN_17.readFeatures(json_PRASARANALAIN_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRASARANALAIN_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRASARANALAIN_17.addFeatures(features_PRASARANALAIN_17);
var lyr_PRASARANALAIN_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PRASARANALAIN_17, 
                style: style_PRASARANALAIN_17,
                interactive: true,
    title: 'PRASARANALAIN<br />\
    <img src="styles/legend/PRASARANALAIN_17_0.png" /> Infrastruktur Sistem Pengelolaan Air Limbah (SPAL)<br />\
    <img src="styles/legend/PRASARANALAIN_17_1.png" /> Infrastruktur Sistem Penyediaan Air Minum (SPAM)<br />\
    <img src="styles/legend/PRASARANALAIN_17_2.png" /> Sistem Jaringan Persampahan<br />\
    <img src="styles/legend/PRASARANALAIN_17_3.png" /> Sistem Pengelolaan Limbah Bahan Berbahaya dan Beracun (B3)<br />'
        });
var format_JaringanJalan_18 = new ol.format.GeoJSON();
var features_JaringanJalan_18 = format_JaringanJalan_18.readFeatures(json_JaringanJalan_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_18.addFeatures(features_JaringanJalan_18);
var lyr_JaringanJalan_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanJalan_18, 
                style: style_JaringanJalan_18,
                interactive: true,
    title: 'Jaringan Jalan<br />\
    <img src="styles/legend/JaringanJalan_18_0.png" /> Arteri<br />\
    <img src="styles/legend/JaringanJalan_18_1.png" /> Kolektor<br />\
    <img src="styles/legend/JaringanJalan_18_2.png" /> lokal<br />'
        });
var format_JalanPerbatasanKalimantan_19 = new ol.format.GeoJSON();
var features_JalanPerbatasanKalimantan_19 = format_JalanPerbatasanKalimantan_19.readFeatures(json_JalanPerbatasanKalimantan_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanPerbatasanKalimantan_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanPerbatasanKalimantan_19.addFeatures(features_JalanPerbatasanKalimantan_19);
var lyr_JalanPerbatasanKalimantan_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanPerbatasanKalimantan_19, 
                style: style_JalanPerbatasanKalimantan_19,
                interactive: true,
                title: '<img src="styles/legend/JalanPerbatasanKalimantan_19.png" /> Jalan Perbatasan Kalimantan'
            });
var format_FungsiPendidikan_20 = new ol.format.GeoJSON();
var features_FungsiPendidikan_20 = format_FungsiPendidikan_20.readFeatures(json_FungsiPendidikan_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FungsiPendidikan_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FungsiPendidikan_20.addFeatures(features_FungsiPendidikan_20);
var lyr_FungsiPendidikan_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FungsiPendidikan_20, 
                style: style_FungsiPendidikan_20,
                interactive: true,
                title: '<img src="styles/legend/FungsiPendidikan_20.png" /> Fungsi Pendidikan'
            });
var format_FungsiPertahananKeamanan_21 = new ol.format.GeoJSON();
var features_FungsiPertahananKeamanan_21 = format_FungsiPertahananKeamanan_21.readFeatures(json_FungsiPertahananKeamanan_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FungsiPertahananKeamanan_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FungsiPertahananKeamanan_21.addFeatures(features_FungsiPertahananKeamanan_21);
var lyr_FungsiPertahananKeamanan_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FungsiPertahananKeamanan_21, 
                style: style_FungsiPertahananKeamanan_21,
                interactive: true,
                title: '<img src="styles/legend/FungsiPertahananKeamanan_21.png" /> Fungsi Pertahanan Keamanan'
            });
var format_FungsiKesehatan_22 = new ol.format.GeoJSON();
var features_FungsiKesehatan_22 = format_FungsiKesehatan_22.readFeatures(json_FungsiKesehatan_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FungsiKesehatan_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FungsiKesehatan_22.addFeatures(features_FungsiKesehatan_22);
var lyr_FungsiKesehatan_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FungsiKesehatan_22, 
                style: style_FungsiKesehatan_22,
                interactive: true,
                title: '<img src="styles/legend/FungsiKesehatan_22.png" /> Fungsi Kesehatan'
            });
var format_FungsiPemerintahan_23 = new ol.format.GeoJSON();
var features_FungsiPemerintahan_23 = format_FungsiPemerintahan_23.readFeatures(json_FungsiPemerintahan_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FungsiPemerintahan_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FungsiPemerintahan_23.addFeatures(features_FungsiPemerintahan_23);
var lyr_FungsiPemerintahan_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FungsiPemerintahan_23, 
                style: style_FungsiPemerintahan_23,
                interactive: true,
                title: '<img src="styles/legend/FungsiPemerintahan_23.png" /> Fungsi Pemerintahan'
            });
var format_FungsiPerdagangandanJasa_24 = new ol.format.GeoJSON();
var features_FungsiPerdagangandanJasa_24 = format_FungsiPerdagangandanJasa_24.readFeatures(json_FungsiPerdagangandanJasa_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FungsiPerdagangandanJasa_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FungsiPerdagangandanJasa_24.addFeatures(features_FungsiPerdagangandanJasa_24);
var lyr_FungsiPerdagangandanJasa_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FungsiPerdagangandanJasa_24, 
                style: style_FungsiPerdagangandanJasa_24,
                interactive: true,
                title: '<img src="styles/legend/FungsiPerdagangandanJasa_24.png" /> Fungsi Perdagangan dan Jasa'
            });
var format_POI_25 = new ol.format.GeoJSON();
var features_POI_25 = format_POI_25.readFeatures(json_POI_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POI_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POI_25.addFeatures(features_POI_25);
var lyr_POI_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POI_25,
maxResolution:5.600893230452393,
 
                style: style_POI_25,
                interactive: true,
                title: '<img src="styles/legend/POI_25.png" /> POI'
            });
var format_PLBN_26 = new ol.format.GeoJSON();
var features_PLBN_26 = format_PLBN_26.readFeatures(json_PLBN_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLBN_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLBN_26.addFeatures(features_PLBN_26);
var lyr_PLBN_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PLBN_26, 
                style: style_PLBN_26,
                interactive: true,
                title: '<img src="styles/legend/PLBN_26.png" /> PLBN'
            });

lyr_GoogleHybrid_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_WILAYAHKETINGGIAN_2.setVisible(false);lyr_Slope_3.setVisible(false);lyr_POLARUANGRDTR2019_4.setVisible(false);lyr_POLARUANG_RTRWP_5.setVisible(false);lyr_KawasanHutan_6.setVisible(false);lyr_Alternatif3_7.setVisible(true);lyr_Alternatif2_8.setVisible(false);lyr_Alternatif1_9.setVisible(false);lyr_BatasDesa_10.setVisible(true);lyr_batas_indonesia_malaysia_11.setVisible(true);lyr_PT_SR_PUSATPERMUKIMAN_12.setVisible(false);lyr_HGU_13.setVisible(false);lyr_PT_SR_ENERGI_14.setVisible(false);lyr_LN_SR_TELEKOMUNIKASI_15.setVisible(false);lyr_ENERGI_16.setVisible(false);lyr_PRASARANALAIN_17.setVisible(false);lyr_JaringanJalan_18.setVisible(false);lyr_JalanPerbatasanKalimantan_19.setVisible(false);lyr_FungsiPendidikan_20.setVisible(false);lyr_FungsiPertahananKeamanan_21.setVisible(false);lyr_FungsiKesehatan_22.setVisible(false);lyr_FungsiPemerintahan_23.setVisible(false);lyr_FungsiPerdagangandanJasa_24.setVisible(false);lyr_POI_25.setVisible(false);lyr_PLBN_26.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleSatellite_1,lyr_WILAYAHKETINGGIAN_2,lyr_Slope_3,lyr_POLARUANGRDTR2019_4,lyr_POLARUANG_RTRWP_5,lyr_KawasanHutan_6,lyr_Alternatif3_7,lyr_Alternatif2_8,lyr_Alternatif1_9,lyr_BatasDesa_10,lyr_batas_indonesia_malaysia_11,lyr_PT_SR_PUSATPERMUKIMAN_12,lyr_HGU_13,lyr_PT_SR_ENERGI_14,lyr_LN_SR_TELEKOMUNIKASI_15,lyr_ENERGI_16,lyr_PRASARANALAIN_17,lyr_JaringanJalan_18,lyr_JalanPerbatasanKalimantan_19,lyr_FungsiPendidikan_20,lyr_FungsiPertahananKeamanan_21,lyr_FungsiKesehatan_22,lyr_FungsiPemerintahan_23,lyr_FungsiPerdagangandanJasa_24,lyr_POI_25,lyr_PLBN_26];
lyr_POLARUANGRDTR2019_4.set('fieldAliases', {'FID_18_POL': 'FID_18_POL', 'Zona_1': 'Zona_1', 'Zona_2': 'Zona_2', 'Kode_Z2': 'Kode_Z2', 'Zona_3': 'Zona_3', 'Kode_Z3': 'Kode_Z3', 'SUMBER': 'SUMBER', 'luas': 'luas', 'FID_03_BLO': 'FID_03_BLO', 'BWP': 'BWP', 'SBWP': 'SBWP', 'BLOK': 'BLOK', 'Luas_1': 'Luas_1', });
lyr_POLARUANG_RTRWP_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'KODKWS': 'KODKWS', 'JNSRPR': 'JNSRPR', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'KKOP_1': 'KKOP_1', 'KP2B_2': 'KP2B_2', 'KRB_03': 'KRB_03', 'CAGBUD': 'CAGBUD', 'RESAIR': 'RESAIR', 'KSMPDN': 'KSMPDN', 'HANKAM': 'HANKAM', 'KKARST': 'KKARST', 'PTBGMB': 'PTBGMB', 'MGRSAT': 'MGRSAT', 'RDBUMI': 'RDBUMI', 'DLKPEL': 'DLKPEL', 'BPALUR': 'BPALUR', 'KPEKLT': 'KPEKLT', 'APKINT': 'APKINT', 'REMARK': 'REMARK', 'LUASHA': 'LUASHA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KawasanHutan_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'KODKWS': 'KODKWS', 'JNSRPR': 'JNSRPR', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'KKOP_1': 'KKOP_1', 'KP2B_2': 'KP2B_2', 'KRB_03': 'KRB_03', 'CAGBUD': 'CAGBUD', 'RESAIR': 'RESAIR', 'KSMPDN': 'KSMPDN', 'HANKAM': 'HANKAM', 'KKARST': 'KKARST', 'PTBGMB': 'PTBGMB', 'MGRSAT': 'MGRSAT', 'RDBUMI': 'RDBUMI', 'DLKPEL': 'DLKPEL', 'BPALUR': 'BPALUR', 'KPEKLT': 'KPEKLT', 'APKINT': 'APKINT', 'REMARK': 'REMARK', 'LUASHA': 'LUASHA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Alternatif3_7.set('fieldAliases', {});
lyr_Alternatif2_8.set('fieldAliases', {'BWP': 'BWP', 'SBWP': 'SBWP', 'Luas': 'Luas', 'luas_ha_ne': 'luas_ha_ne', });
lyr_Alternatif1_9.set('fieldAliases', {'BWP': 'BWP', 'SBWP': 'SBWP', 'Luas': 'Luas', 'luas_ha_ne': 'luas_ha_ne', });
lyr_BatasDesa_10.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAMOBJ': 'NAMOBJ', 'METADATA': 'METADATA', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', });
lyr_batas_indonesia_malaysia_11.set('fieldAliases', {'FID_Admini': 'FID_Admini', 'keterangan': 'keterangan', });
lyr_PT_SR_PUSATPERMUKIMAN_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_HGU_13.set('fieldAliases', {'objectid_1': 'objectid_1', 'objectid': 'objectid', 'penggunaan': 'penggunaan', 'desa': 'desa', 'kecamatan': 'kecamatan', 'kabupaten': 'kabupaten', 'provinsi': 'provinsi', 'status_1': 'status_1', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_PT_SR_ENERGI_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'X': 'X', 'Y': 'Y', });
lyr_LN_SR_TELEKOMUNIKASI_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'SHAPE_Length': 'SHAPE_Length', });
lyr_ENERGI_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'SHAPE_Length': 'SHAPE_Length', });
lyr_PRASARANALAIN_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_JaringanJalan_18.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'kelas': 'kelas', });
lyr_JalanPerbatasanKalimantan_19.set('fieldAliases', {'objectid': 'objectid', 'uid': 'uid', 'creator': 'creator', 'created': 'created', 'updater': 'updater', 'updated': 'updated', 'nm_balai': 'nm_balai', 'koord_x': 'koord_x', 'koord_y': 'koord_y', 'foto': 'foto', 'data_src': 'data_src', 'last_sync': 'last_sync', 'sync_notes': 'sync_notes', 'linkid': 'linkid', 'link_name': 'link_name', 'start_poin': 'start_poin', 'end_point_': 'end_point_', 'real_lengt': 'real_lengt', 'sk_length': 'sk_length', 'bm_prov_id': 'bm_prov_id', 'road_funct': 'road_funct', 'road_statu': 'road_statu', 'road_class': 'road_class', 'city_regen': 'city_regen', 'mst': 'mst', 'fromdate': 'fromdate', 'todate': 'todate', 'eventid': 'eventid', 'start_date': 'start_date', 'end_date': 'end_date', 'shp_length': 'shp_length', 'mvalue_fro': 'mvalue_fro', 'mvalue_to': 'mvalue_to', 'city_id': 'city_id', 'shape_leng': 'shape_leng', 'provinsi': 'provinsi', 'sta_hibah': 'sta_hibah', 'st_length(': 'st_length(', });
lyr_FungsiPendidikan_20.set('fieldAliases', {'NAME': 'NAME', 'fungsi': 'fungsi', });
lyr_FungsiPertahananKeamanan_21.set('fieldAliases', {'NAME': 'NAME', 'fungsi': 'fungsi', });
lyr_FungsiKesehatan_22.set('fieldAliases', {'NAME': 'NAME', 'fungsi': 'fungsi', });
lyr_FungsiPemerintahan_23.set('fieldAliases', {'NAME': 'NAME', 'fungsi': 'fungsi', });
lyr_FungsiPerdagangandanJasa_24.set('fieldAliases', {'NAME': 'NAME', 'fungsi': 'fungsi', });
lyr_POI_25.set('fieldAliases', {'NAME': 'NAME', 'fungsi': 'fungsi', });
lyr_PLBN_26.set('fieldAliases', {'objectid': 'objectid', 'fid_1': 'fid_1', 'thn_data': 'thn_data', 'koord_x': 'koord_x', 'koord_y': 'koord_y', 'namobj': 'namobj', 'metadata': 'metadata', 'desa_kel': 'desa_kel', 'kab_kot': 'kab_kot', 'propinsi': 'propinsi', 'jns_infr': 'jns_infr', 'kecamatan': 'kecamatan', 'thn_bangun': 'thn_bangun', 'remarks': 'remarks', 'fcode': 'fcode', });
lyr_POLARUANGRDTR2019_4.set('fieldImages', {'FID_18_POL': 'TextEdit', 'Zona_1': 'TextEdit', 'Zona_2': 'TextEdit', 'Kode_Z2': 'TextEdit', 'Zona_3': 'TextEdit', 'Kode_Z3': 'TextEdit', 'SUMBER': 'TextEdit', 'luas': 'TextEdit', 'FID_03_BLO': 'TextEdit', 'BWP': 'TextEdit', 'SBWP': 'TextEdit', 'BLOK': 'TextEdit', 'Luas_1': 'TextEdit', });
lyr_POLARUANG_RTRWP_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'KODKWS': 'TextEdit', 'JNSRPR': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'KKOP_1': 'TextEdit', 'KP2B_2': 'TextEdit', 'KRB_03': 'TextEdit', 'CAGBUD': 'TextEdit', 'RESAIR': 'TextEdit', 'KSMPDN': 'TextEdit', 'HANKAM': 'TextEdit', 'KKARST': 'TextEdit', 'PTBGMB': 'TextEdit', 'MGRSAT': 'TextEdit', 'RDBUMI': 'TextEdit', 'DLKPEL': 'TextEdit', 'BPALUR': 'TextEdit', 'KPEKLT': 'TextEdit', 'APKINT': 'TextEdit', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_KawasanHutan_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'KODKWS': 'TextEdit', 'JNSRPR': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'KKOP_1': 'TextEdit', 'KP2B_2': 'TextEdit', 'KRB_03': 'TextEdit', 'CAGBUD': 'TextEdit', 'RESAIR': 'TextEdit', 'KSMPDN': 'TextEdit', 'HANKAM': 'TextEdit', 'KKARST': 'TextEdit', 'PTBGMB': 'TextEdit', 'MGRSAT': 'TextEdit', 'RDBUMI': 'TextEdit', 'DLKPEL': 'TextEdit', 'BPALUR': 'TextEdit', 'KPEKLT': 'TextEdit', 'APKINT': 'TextEdit', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Alternatif3_7.set('fieldImages', {});
lyr_Alternatif2_8.set('fieldImages', {'BWP': 'TextEdit', 'SBWP': 'TextEdit', 'Luas': 'TextEdit', 'luas_ha_ne': 'TextEdit', });
lyr_Alternatif1_9.set('fieldImages', {'BWP': 'TextEdit', 'SBWP': 'TextEdit', 'Luas': 'TextEdit', 'luas_ha_ne': 'TextEdit', });
lyr_BatasDesa_10.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'NAMOBJ': 'TextEdit', 'METADATA': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_batas_indonesia_malaysia_11.set('fieldImages', {'FID_Admini': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_PT_SR_PUSATPERMUKIMAN_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'ORDE03': 'ValueMap', 'ORDE04': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_HGU_13.set('fieldImages', {'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'penggunaan': 'TextEdit', 'desa': 'TextEdit', 'kecamatan': 'TextEdit', 'kabupaten': 'TextEdit', 'provinsi': 'TextEdit', 'status_1': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_PT_SR_ENERGI_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'ORDE03': 'ValueMap', 'ORDE04': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_LN_SR_TELEKOMUNIKASI_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'ORDE03': 'ValueMap', 'ORDE04': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_ENERGI_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'ORDE03': 'ValueMap', 'ORDE04': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_PRASARANALAIN_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'ORDE03': 'ValueMap', 'ORDE04': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_JaringanJalan_18.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'kelas': 'TextEdit', });
lyr_JalanPerbatasanKalimantan_19.set('fieldImages', {'objectid': 'TextEdit', 'uid': 'TextEdit', 'creator': 'TextEdit', 'created': 'TextEdit', 'updater': 'TextEdit', 'updated': 'TextEdit', 'nm_balai': 'TextEdit', 'koord_x': 'TextEdit', 'koord_y': 'TextEdit', 'foto': 'TextEdit', 'data_src': 'TextEdit', 'last_sync': 'TextEdit', 'sync_notes': 'TextEdit', 'linkid': 'TextEdit', 'link_name': 'TextEdit', 'start_poin': 'TextEdit', 'end_point_': 'TextEdit', 'real_lengt': 'TextEdit', 'sk_length': 'TextEdit', 'bm_prov_id': 'TextEdit', 'road_funct': 'TextEdit', 'road_statu': 'TextEdit', 'road_class': 'TextEdit', 'city_regen': 'TextEdit', 'mst': 'TextEdit', 'fromdate': 'TextEdit', 'todate': 'TextEdit', 'eventid': 'TextEdit', 'start_date': 'TextEdit', 'end_date': 'TextEdit', 'shp_length': 'TextEdit', 'mvalue_fro': 'TextEdit', 'mvalue_to': 'TextEdit', 'city_id': 'TextEdit', 'shape_leng': 'TextEdit', 'provinsi': 'TextEdit', 'sta_hibah': 'TextEdit', 'st_length(': 'TextEdit', });
lyr_FungsiPendidikan_20.set('fieldImages', {'NAME': 'TextEdit', 'fungsi': 'TextEdit', });
lyr_FungsiPertahananKeamanan_21.set('fieldImages', {'NAME': 'TextEdit', 'fungsi': 'TextEdit', });
lyr_FungsiKesehatan_22.set('fieldImages', {'NAME': 'TextEdit', 'fungsi': 'TextEdit', });
lyr_FungsiPemerintahan_23.set('fieldImages', {'NAME': 'TextEdit', 'fungsi': 'TextEdit', });
lyr_FungsiPerdagangandanJasa_24.set('fieldImages', {'NAME': 'TextEdit', 'fungsi': 'TextEdit', });
lyr_POI_25.set('fieldImages', {'NAME': 'TextEdit', 'fungsi': 'TextEdit', });
lyr_PLBN_26.set('fieldImages', {'objectid': 'TextEdit', 'fid_1': '', 'thn_data': 'TextEdit', 'koord_x': 'TextEdit', 'koord_y': 'TextEdit', 'namobj': 'TextEdit', 'metadata': 'TextEdit', 'desa_kel': 'TextEdit', 'kab_kot': 'TextEdit', 'propinsi': 'TextEdit', 'jns_infr': 'TextEdit', 'kecamatan': 'TextEdit', 'thn_bangun': 'TextEdit', 'remarks': 'TextEdit', 'fcode': 'TextEdit', });
lyr_POLARUANGRDTR2019_4.set('fieldLabels', {'FID_18_POL': 'inline label', 'Zona_1': 'inline label', 'Zona_2': 'inline label', 'Kode_Z2': 'inline label', 'Zona_3': 'inline label', 'Kode_Z3': 'inline label', 'SUMBER': 'inline label', 'luas': 'inline label', 'FID_03_BLO': 'inline label', 'BWP': 'inline label', 'SBWP': 'inline label', 'BLOK': 'inline label', 'Luas_1': 'inline label', });
lyr_POLARUANG_RTRWP_5.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'KODKWS': 'inline label', 'JNSRPR': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'KKOP_1': 'inline label', 'KP2B_2': 'inline label', 'KRB_03': 'inline label', 'CAGBUD': 'inline label', 'RESAIR': 'inline label', 'KSMPDN': 'inline label', 'HANKAM': 'inline label', 'KKARST': 'inline label', 'PTBGMB': 'inline label', 'MGRSAT': 'inline label', 'RDBUMI': 'inline label', 'DLKPEL': 'inline label', 'BPALUR': 'inline label', 'KPEKLT': 'inline label', 'APKINT': 'inline label', 'REMARK': 'inline label', 'LUASHA': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', });
lyr_KawasanHutan_6.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'KODKWS': 'inline label', 'JNSRPR': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'KKOP_1': 'inline label', 'KP2B_2': 'inline label', 'KRB_03': 'inline label', 'CAGBUD': 'inline label', 'RESAIR': 'inline label', 'KSMPDN': 'inline label', 'HANKAM': 'inline label', 'KKARST': 'inline label', 'PTBGMB': 'inline label', 'MGRSAT': 'inline label', 'RDBUMI': 'inline label', 'DLKPEL': 'inline label', 'BPALUR': 'inline label', 'KPEKLT': 'inline label', 'APKINT': 'inline label', 'REMARK': 'inline label', 'LUASHA': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', });
lyr_Alternatif3_7.set('fieldLabels', {});
lyr_Alternatif2_8.set('fieldLabels', {'BWP': 'inline label', 'SBWP': 'inline label', 'Luas': 'inline label', 'luas_ha_ne': 'inline label', });
lyr_Alternatif1_9.set('fieldLabels', {'BWP': 'inline label', 'SBWP': 'inline label', 'Luas': 'inline label', 'luas_ha_ne': 'inline label', });
lyr_BatasDesa_10.set('fieldLabels', {'OBJECTID_1': 'inline label', 'NAMOBJ': 'inline label', 'METADATA': 'inline label', 'WADMKC': 'inline label', 'WADMKD': 'inline label', 'WADMKK': 'inline label', });
lyr_batas_indonesia_malaysia_11.set('fieldLabels', {'FID_Admini': 'inline label', 'keterangan': 'inline label', });
lyr_PT_SR_PUSATPERMUKIMAN_12.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'ORDE03': 'inline label', 'ORDE04': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', });
lyr_HGU_13.set('fieldLabels', {'objectid_1': 'inline label', 'objectid': 'inline label', 'penggunaan': 'inline label', 'desa': 'inline label', 'kecamatan': 'inline label', 'kabupaten': 'inline label', 'provinsi': 'inline label', 'status_1': 'inline label', 'st_area_sh': 'inline label', 'st_length_': 'inline label', });
lyr_PT_SR_ENERGI_14.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'ORDE03': 'inline label', 'ORDE04': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', 'X': 'inline label', 'Y': 'inline label', });
lyr_LN_SR_TELEKOMUNIKASI_15.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'ORDE03': 'inline label', 'ORDE04': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', 'SHAPE_Length': 'inline label', });
lyr_ENERGI_16.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'ORDE03': 'inline label', 'ORDE04': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', 'SHAPE_Length': 'inline label', });
lyr_PRASARANALAIN_17.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'ORDE03': 'inline label', 'ORDE04': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', });
lyr_JaringanJalan_18.set('fieldLabels', {'osm_id': 'inline label', 'code': 'inline label', 'fclass': 'inline label', 'name': 'inline label', 'ref': 'inline label', 'oneway': 'inline label', 'maxspeed': 'inline label', 'layer': 'inline label', 'bridge': 'inline label', 'tunnel': 'inline label', 'kelas': 'inline label', });
lyr_JalanPerbatasanKalimantan_19.set('fieldLabels', {'objectid': 'inline label', 'uid': 'inline label', 'creator': 'inline label', 'created': 'inline label', 'updater': 'inline label', 'updated': 'inline label', 'nm_balai': 'inline label', 'koord_x': 'inline label', 'koord_y': 'inline label', 'foto': 'inline label', 'data_src': 'inline label', 'last_sync': 'inline label', 'sync_notes': 'inline label', 'linkid': 'inline label', 'link_name': 'inline label', 'start_poin': 'inline label', 'end_point_': 'inline label', 'real_lengt': 'inline label', 'sk_length': 'inline label', 'bm_prov_id': 'inline label', 'road_funct': 'inline label', 'road_statu': 'inline label', 'road_class': 'inline label', 'city_regen': 'inline label', 'mst': 'inline label', 'fromdate': 'inline label', 'todate': 'inline label', 'eventid': 'inline label', 'start_date': 'inline label', 'end_date': 'inline label', 'shp_length': 'inline label', 'mvalue_fro': 'inline label', 'mvalue_to': 'inline label', 'city_id': 'inline label', 'shape_leng': 'inline label', 'provinsi': 'inline label', 'sta_hibah': 'inline label', 'st_length(': 'inline label', });
lyr_FungsiPendidikan_20.set('fieldLabels', {'NAME': 'inline label', 'fungsi': 'inline label', });
lyr_FungsiPertahananKeamanan_21.set('fieldLabels', {'NAME': 'inline label', 'fungsi': 'inline label', });
lyr_FungsiKesehatan_22.set('fieldLabels', {'NAME': 'inline label', 'fungsi': 'inline label', });
lyr_FungsiPemerintahan_23.set('fieldLabels', {'NAME': 'inline label', 'fungsi': 'inline label', });
lyr_FungsiPerdagangandanJasa_24.set('fieldLabels', {'NAME': 'inline label', 'fungsi': 'inline label', });
lyr_POI_25.set('fieldLabels', {'NAME': 'inline label', 'fungsi': 'inline label', });
lyr_PLBN_26.set('fieldLabels', {'objectid': 'inline label', 'fid_1': 'inline label', 'thn_data': 'inline label', 'koord_x': 'inline label', 'koord_y': 'inline label', 'namobj': 'inline label', 'metadata': 'inline label', 'desa_kel': 'inline label', 'kab_kot': 'inline label', 'propinsi': 'inline label', 'jns_infr': 'inline label', 'kecamatan': 'inline label', 'thn_bangun': 'inline label', 'remarks': 'inline label', 'fcode': 'inline label', });
lyr_PLBN_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});