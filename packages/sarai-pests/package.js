Package.describe({
  name: 'sarai:sarai-pests',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  var packages = [
    "sarai:sarai-lib",
    "sarai:sarai-user-data",
    "sarai:sarai-layout",
    "sarai:sarai-pests-data",
    "sarai:sarai-pests-form-data"
  ] 

  api.use(packages)
  api.imply(packages)

  var client = [
    "client/components/sarai-pests/index.html",
    "client/components/sarai-pests/index.js",
    "client/components/sarai-pests/index.less",
    "client/components/sarai-pests/route.js",
    "client/components/sarai-pests/on-created.js",
    "client/components/sarai-pests-lib/index.html",
    "client/components/sarai-pests-lib/index.js",
    "client/components/sarai-pests-lib/index.less",
    "client/components/sarai-pests-lib/route.js",
    "client/components/sarai-pests-lib/on-created.js",
    "client/components/sarai-pests-lib/rice-pests/index.html",
    "client/components/sarai-pests-lib/rice-pests/index.js",
    "client/components/sarai-pests-lib/rice-pests/index.less",
    "client/components/sarai-pests-lib/rice-pests/route.js",
    "client/components/sarai-pests-lib/rice-pests/on-created.js",
    "client/components/sarai-pests-lib/corn-pests/index.html",
    "client/components/sarai-pests-lib/corn-pests/index.js",
    "client/components/sarai-pests-lib/corn-pests/index.less",
    "client/components/sarai-pests-lib/corn-pests/route.js",
    "client/components/sarai-pests-lib/corn-pests/on-created.js",
    "client/components/sarai-pests-id/index.html",
    "client/components/sarai-pests-id/index.js",
    "client/components/sarai-pests-id/index.less",
    "client/components/sarai-pests-id/route.js",
    "client/components/sarai-pests-id/on-created.js",
    "client/components/sarai-pests-id/on-rendered.js",
    "client/components/sarai-pests-monitor/index.html",
    "client/components/sarai-pests-monitor/index.js",
    "client/components/sarai-pests-monitor/index.less",
    "client/components/sarai-pests-monitor/route.js",
    "client/components/sarai-pests-monitor/on-created.js",
    "client/components/sarai-pests-entity-page/index.html",
    "client/components/sarai-pests-entity-page/index.less",
    "client/components/sarai-pests-entity-page/index.js",
    "client/components/sarai-pests-entity-page/route.js",
    "client/components/sarai-pests-entity-page/on-created.js",
    "client/components/sarai-pests-entity-page/on-rendered.js",
    "client/components/sarai-pests-clinic/index.html",
    "client/components/sarai-pests-clinic/index.less",
    "client/components/sarai-pests-clinic/index.js",
    "client/components/sarai-pests-clinic/on-created.js",
    "client/components/sarai-pests-clinic/route.js",
    "client/components/sarai-pests-form/index.html",
    "client/components/sarai-pests-form/index.js",
    "client/components/sarai-pests-form/index.less",
    "client/components/sarai-pests-form/route.js",
    "client/components/sarai-pests-form/on-created.js",
    "client/components/sarai-pests-assistance-page/index.html",
    "client/components/sarai-pests-assistance-page/index.js",
    "client/components/sarai-pests-assistance-page/index.less",
    "client/components/sarai-pests-assistance-page/route.js",
    "client/components/sarai-pests-assistance-page/on-created.js",
    "client/components/sarai-pests-statistics-page/index.html",
    "client/components/sarai-pests-statistics-page/index.js",
    "client/components/sarai-pests-statistics-page/index.less",
    "client/components/sarai-pests-statistics-page/route.js",
    "client/components/sarai-pests-statistics-page/on-created.js",
    "client/components/sarai-pests-assist-result-page/index.html",
    "client/components/sarai-pests-assist-result-page/index.js",
    "client/components/sarai-pests-assist-result-page/index.less",
    "client/components/sarai-pests-assist-result-page/route.js",
    "client/components/sarai-pests-assist-result-page/on-created.js",
    "client/components/sarai-pests-assist-search/index.html",
    "client/components/sarai-pests-assist-search/index.js",
    "client/components/sarai-pests-assist-search/index.less",
    "client/components/sarai-pests-assist-search/route.js",
    "client/components/sarai-pests-assist-search/on-created.js",
    "client/components/sarai-pests-manage-account/index.html",
    "client/components/sarai-pests-manage-account/index.less",
    "client/components/sarai-pests-manage-account/index.js",
    "client/components/sarai-pests-manage-account/route.js",


    "client/components/admin-page/index.js",
    "client/components/admin-page/sarai-pests-assistance/index.html",
    "client/components/admin-page/sarai-pests-assistance/index.js",
    "client/components/admin-page/sarai-pests-assistance/index.less",
    "client/components/admin-page/sarai-pests-assistance/route.js",
    "client/components/admin-page/sarai-pests-assistance/on-created.js",
    "client/components/admin-page/sarai-pests-assistance/on-rendered.js",
    "client/components/admin-page/sarai-pests-form/index.html",
    "client/components/admin-page/sarai-pests-form/index.js",
    "client/components/admin-page/sarai-pests-form/index.less",
    "client/components/admin-page/sarai-pests-form/route.js",
    "client/components/admin-page/sarai-pests-form/on-created.js",
    "client/components/admin-page/sarai-pests-form/on-rendered.js",
    "client/components/admin-page/sarai-pests-report/index.html",
    "client/components/admin-page/sarai-pests-report/index.js",
    "client/components/admin-page/sarai-pests-report/index.less",
    "client/components/admin-page/sarai-pests-report/route.js",
    "client/components/admin-page/sarai-pests-report/on-created.js",
    "client/components/admin-page/sarai-pests-report/on-rendered.js",
    "client/components/admin-page/sarai-pests-experts/index.html",
    "client/components/admin-page/sarai-pests-experts/index.js",
    "client/components/admin-page/sarai-pests-experts/index.less",
    "client/components/admin-page/sarai-pests-experts/route.js",
    "client/components/admin-page/sarai-pests-experts/on-created.js",
    "client/components/admin-page/sarai-pests-experts/on-rendered.js",
    "client/components/admin-page/sarai-pests-pest/index.html",
    "client/components/admin-page/sarai-pests-pest/index.js",
    "client/components/admin-page/sarai-pests-pest/route.js",
    "client/components/admin-page/sarai-pests-pest/on-rendered.js",
    "client/components/admin-page/sarai-pests-train/index.html",
    "client/components/admin-page/sarai-pests-train/index.js",
    "client/components/admin-page/sarai-pests-train/route.js",
    "client/components/admin-page/sarai-pests-train/on-rendered.js",
    "client/components/admin-page/sarai-pests-clinic-update/index.html",
    "client/components/admin-page/sarai-pests-clinic-update/index.js",
    "client/components/admin-page/sarai-pests-clinic-update/index.less",
    "client/components/admin-page/sarai-pests-clinic-update/route.js",
    "client/components/admin-page/sarai-pests-clinic-update/on-created.js",
    "client/components/admin-page/sarai-pests-clinic-update/on-rendered.js",
    "client/components/admin-page/sarai-pests-lib-update/index.html",
    "client/components/admin-page/sarai-pests-lib-update/index.js",
    "client/components/admin-page/sarai-pests-lib-update/index.less",
    "client/components/admin-page/sarai-pests-lib-update/route.js",
    "client/components/admin-page/sarai-pests-lib-update/on-created.js",
    "client/components/admin-page/sarai-pests-lib-update/on-rendered.js",
    "client/components/admin-page/sarai-pests-id-update/index.html",
    "client/components/admin-page/sarai-pests-id-update/index.js",
    "client/components/admin-page/sarai-pests-id-update/index.less",
    "client/components/admin-page/sarai-pests-id-update/route.js",
    "client/components/admin-page/sarai-pests-id-update/on-created.js",
    "client/components/admin-page/sarai-pests-id-update/on-rendered.js",
    "client/components/admin-page/sarai-pests-monitor-update/index.html",
    "client/components/admin-page/sarai-pests-monitor-update/index.js",
    "client/components/admin-page/sarai-pests-monitor-update/index.less",
    "client/components/admin-page/sarai-pests-monitor-update/route.js",
    "client/components/admin-page/sarai-pests-monitor-update/on-created.js",
    "client/components/admin-page/sarai-pests-monitor-update/on-rendered.js",
    "client/components/admin-page/sarai-pests-spid-update/index.html",
    "client/components/admin-page/sarai-pests-spid-update/index.js",
    "client/components/admin-page/sarai-pests-spid-update/index.less",
    "client/components/admin-page/sarai-pests-spid-update/route.js",
    "client/components/admin-page/sarai-pests-spid-update/on-created.js",
    "client/components/admin-page/sarai-pests-spid-update/on-rendered.js"
  ]
  
  api.addFiles(client, "client")

  api.addAssets([
    "public/images/pest_banner.jpg",
    "public/images/banner2.jpg",
    "public/images/lib_banner5.jpg",
    "public/images/id_banner2.jpg",
    "public/images/mon_banner2.jpg",

    "public/images/armyworm.png",
    "public/images/locust.png",
    "public/images/services/pest_clinic_white.png",
    "public/images/services/pest_book_white.png",
    "public/images/services/pest_identification_white.png",
    "public/images/services/alerts_white.png",
    
    "public/images/services/pest_clinic.png",
    "public/images/services/pest_library.png",
    "public/images/services/pest_id.png",
    "public/images/services/pest_monitoring.png",
    
    "public/images/icons/facebook1.png",
    "public/images/icons/twitter1.png",
    "public/images/icons/download1.png",

    "public/PDF/Black Armyworm adult.pdf",

    "public/images/clinic/sarai.jpg",
    "public/images/clinic/sarai_2.jpg",
    "public/images/clinic/sarai_3.jpg",
    "public/images/clinic/rs.jpg",
    "public/images/clinic/bg.jpg",
    "public/images/clinic/bg2.jpg",
    "public/images/clinic/bg3.jpg",
    "public/images/clinic/pest_clinic_banner01.jpg",
    "public/images/clinic/field1.jpg",
    "public/images/clinic/field2.jpg",
    "public/images/clinic/control_black.png",
    "public/images/clinic/control_gray.png",
    "public/images/clinic/control_white.png",
    "public/images/clinic/id_black.png",
    "public/images/clinic/id_gray.png",
    "public/images/clinic/id_white.png",
    "public/images/clinic/comp_black.png",
    "public/images/clinic/comp_gray.png",
    "public/images/clinic/comp_white.png",
    "public/images/clinic/assess_black.png",
    "public/images/clinic/plant_black.png",
    "public/images/clinic/insect_black.png",
    "public/images/clinic/plant_gray.png",
    "public/images/clinic/insect_gray.png",
    "public/images/clinic/plant_green.png",
    "public/images/clinic/insect_green.png",
    "public/images/clinic/micro.png",
    "public/images/clinic/leafhopper.jpg",
    "public/images/clinic/ricehoppers.jpg"
    ], "client")
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sarai:sarai-pests');
});
