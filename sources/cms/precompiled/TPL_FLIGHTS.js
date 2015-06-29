// This file was automatically generated from search.soy.
// Please don't edit this file by hand.

goog.provide('flights.template.search');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


flights.template.search.searchForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  /** @desc Ida y Vuelta */
  var MSG_UNNAMED_1952 = goog.getMsg('Ida y Vuelta');
  /** @desc Solo Ida */
  var MSG_UNNAMED_1954 = goog.getMsg('Solo Ida');
  /** @desc Múltiples Destinos */
  var MSG_UNNAMED_1956 = goog.getMsg('Múltiples Destinos');
  /** @desc Resultados */
  var MSG_UNNAMED_1958 = goog.getMsg('Origen');
  /** @desc Destino */
  var MSG_UNNAMED_1960 = goog.getMsg('Destino');
  /** @desc Ciudad de Origen */
  var MSG_UNNAMED_1962 = goog.getMsg('Ciudad de Origen');
  /** @desc Ciudad de Destino */
  var MSG_UNNAMED_1964 = goog.getMsg('Ciudad de Destino');
  /** @desc Fecha de Salida */
  var MSG_UNNAMED_1966 = goog.getMsg('Fecha de Salida');
  /** @desc Fecha de Regreso */
  var MSG_UNNAMED_1968 = goog.getMsg('Fecha de Regreso');
  /** @desc Adultos */
  var MSG_UNNAMED_1970 = goog.getMsg('Adultos');
  /** @desc Ninos */
  var MSG_UNNAMED_1972 = goog.getMsg('Ninos');
  /** @desc Infantes */
  var MSG_UNNAMED_1974 = goog.getMsg('Infantes');
  /** @desc anios */
  var MSG_UNNAMED_1976 = goog.getMsg('anios');
  /** @desc meses */
  var MSG_UNNAMED_1978 = goog.getMsg('meses');
  /** @desc iniciar busqueda */
  var MSG_UNNAMED_1980 = goog.getMsg('iniciar busqueda ');
  output.append('<div class="', goog.getCssName('tab-container'), '"><ul class="', goog.getCssName('tab-header-search'), '"><li class=\'', goog.getCssName('colorBackground-tab1-li'), ' ', goog.getCssName('background-color'), '\' id=\'', soy.$$escapeHtml(opt_data.ids.livuelos), '\'></li></ul><div class="', goog.getCssName('panel-container'), '"><div id="', soy.$$escapeHtml(opt_data.ids.vuelos), '" class="', goog.getCssName('background-color'), '"><div class="', goog.getCssName('boxMargin-10'), ' ', goog.getCssName('frame-1-1'), '"><form id="', soy.$$escapeHtml(opt_data.ids.frmAir), '" action="/" method="post"><table id="', soy.$$escapeHtml(opt_data.ids.modal_vuelos), '" style="width: 100%;"><tr><td><input id="', soy.$$escapeHtml(opt_data.ids.modal_vuelos_0), '" type="radio" name="', soy.$$escapeHtml(opt_data.ids.modal_vuelos), '" value="0" checked="checked" /><label for="', soy.$$escapeHtml(opt_data.ids.modal_vuelos_0), '" class="', goog.getCssName('text-color'), '">', MSG_UNNAMED_1952, '</label></td><td><input id="', soy.$$escapeHtml(opt_data.ids.modal_vuelos_1), '" type="radio" name="', soy.$$escapeHtml(opt_data.ids.modal_vuelos), '" value="1" /><label for="', soy.$$escapeHtml(opt_data.ids.modal_vuelos_1), '" class="', goog.getCssName('text-color'), '">', MSG_UNNAMED_1954, '</label></td><td style="display: none;"><input id="', soy.$$escapeHtml(opt_data.ids.modal_vuelos_2), '" type="radio" name="', soy.$$escapeHtml(opt_data.ids.modal_vuelos), '" value="2" /><label for="', soy.$$escapeHtml(opt_data.ids.modal_vuelos_2), '" class="', goog.getCssName('text-color'), '">', MSG_UNNAMED_1956, '</label></td></tr></table><div id="', soy.$$escapeHtml(opt_data.ids.vuelos_solo_ida), '" class="', goog.getCssName('frame-1-1'), '"><div class="', goog.getCssName('frame-1-1'), ' ', goog.getCssName('boxMargin-10-t'), ' ', goog.getCssName('text-color'), '"><div class="', goog.getCssName('frame-1-2'), '"><div class="', goog.getCssName('boxMargin-10-r'), ' ', goog.getCssName('text-color'), '">', MSG_UNNAMED_1958, '</div></div><div class="', goog.getCssName('frame-1-2'), '"><div class="', goog.getCssName('boxMargin-10-r'), ' ', goog.getCssName('text-color'), '">', MSG_UNNAMED_1960, '</div></div></div><div class="', goog.getCssName('frame-1-1'), ' ', goog.getCssName('boxMargin-5-t'), '"><div class="', goog.getCssName('frame-1-2'), '"><div class="', goog.getCssName('boxMargin-10-r'), '"><input name="', soy.$$escapeHtml(opt_data.ids.txtMultiO1), '" autocomplete="off" type="text" id="', soy.$$escapeHtml(opt_data.ids.txtMultiO1), '" class="', goog.getCssName('controlRound'), ' ', goog.getCssName('text-color'), '" placeholder=\'', MSG_UNNAMED_1962, '\' /></div></div><div class="', goog.getCssName('frame-1-2'), '"><div class="', goog.getCssName('boxMargin-10-l'), '"><input name="', soy.$$escapeHtml(opt_data.ids.txtMultiD1), '" autocomplete="off" type="text" id="', soy.$$escapeHtml(opt_data.ids.txtMultiD1), '" class="', goog.getCssName('controlRound'), ' ', goog.getCssName('text-color'), '" placeholder=\'', MSG_UNNAMED_1964, '\' /></div></div></div><div class="', goog.getCssName('frame-1-1'), ' ', goog.getCssName('boxMargin-10-t'), '"><div class="', goog.getCssName('frame-1-2'), '"><div class="', goog.getCssName('boxMargin-10-r'), ' ', goog.getCssName('text-color'), '">', MSG_UNNAMED_1966, '</div></div><div class="', goog.getCssName('frame-1-2'), '"><div class="', goog.getCssName('boxMargin-10-l'), ' ', goog.getCssName('text-color'), '" id="', soy.$$escapeHtml(opt_data.ids.vuelos_ida_vuelta), '">', MSG_UNNAMED_1968, '</div></div></div><div class="', goog.getCssName('frame-1-1'), ' ', goog.getCssName('boxMargin-5-t'), '"><div class="', goog.getCssName('frame-1-2'), '"><div class="', goog.getCssName('boxMargin-10-r'), '"><input name="', soy.$$escapeHtml(opt_data.ids.txtDateMultiO1), '" autocomplete="off" type="text" id="', soy.$$escapeHtml(opt_data.ids.txtDateMultiO1), '" class="', goog.getCssName('calendarIcon'), ' ', goog.getCssName('controlRound'), ' ', goog.getCssName('text-color'), '" placeholder="Fecha de Salida" /></div></div><div class="', goog.getCssName('frame-1-2'), '"><div class="', goog.getCssName('boxMargin-10-l'), '" id="', soy.$$escapeHtml(opt_data.ids.vuelos_ida_vuelta_t), '"><input name="', soy.$$escapeHtml(opt_data.ids.txtVDateMultiD1), '" autocomplete="off" type="text" id="', soy.$$escapeHtml(opt_data.ids.txtVDateMultiD1), '" class=" ', goog.getCssName('calendarIcon'), ' ', goog.getCssName('controlRound'), ' ', goog.getCssName('text-color'), '" placeholder="Fecha" /></div></div></div></div><div id="', soy.$$escapeHtml(opt_data.ids.vuelos_ida_vuelta1), '" class="', goog.getCssName('frame-1-1'), '"></div><div id="', soy.$$escapeHtml(opt_data.ids.tblPax), '" class="', goog.getCssName('frame-1-1'), '"><div class="', goog.getCssName('frame-1-1'), ' ', goog.getCssName('boxMargin-10-t'), '"><div class="', goog.getCssName('frame-1-3'), '"><div class="', goog.getCssName('boxMargin-10-r'), ' ', goog.getCssName('text-color'), '">', MSG_UNNAMED_1970, '</div></div><div class="', goog.getCssName('frame-1-3'), '"><div class="', goog.getCssName('boxMargin-5-v'), ' ', goog.getCssName('text-color'), '">', MSG_UNNAMED_1972, '</div></div><div class="', goog.getCssName('frame-1-3'), '"><div class="', goog.getCssName('boxMargin-10-l'), ' ', goog.getCssName('text-color'), '">', MSG_UNNAMED_1974, '</div></div></div><div class="', goog.getCssName('frame-1-1'), ' ', goog.getCssName('boxMargin-5-t'), '"><div class="', goog.getCssName('frame-1-3'), '"><div class="', goog.getCssName('boxMargin-10-r'), '"><select name="', soy.$$escapeHtml(opt_data.ids.ddlMultiAdults), '" id="', soy.$$escapeHtml(opt_data.ids.ddlMultiAdults), '" class="', goog.getCssName('controlRound'), ' ', goog.getCssName('text-color'), '"><option selected="selected" value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select></div></div><div class="', goog.getCssName('frame-1-3'), '"><div class="', goog.getCssName('boxMargin-5-v'), '"><select name="', soy.$$escapeHtml(opt_data.ids.ddlMultiChildren), '" id="', soy.$$escapeHtml(opt_data.ids.ddlMultiChildren), '" class="', goog.getCssName('controlRound'), ' ', goog.getCssName('text-color'), ' "><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select></div><div class="', goog.getCssName('ageChilds'), '"></div></div><div class="', goog.getCssName('frame-1-3'), '"><div class="', goog.getCssName('boxMargin-10-l'), '"><select name="', soy.$$escapeHtml(opt_data.ids.ddlMultiInfants), '" id="', soy.$$escapeHtml(opt_data.ids.ddlMultiInfants), '" class="', goog.getCssName('controlRound'), ' ', goog.getCssName('text-color'), '"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select></div><div class="', goog.getCssName('ageInfants'), '"></div></div></div></div><div class="', goog.getCssName('frame-1-1'), '"><table width="100%" id="', soy.$$escapeHtml(opt_data.ids.tblEdades), '" border="0" class="', goog.getCssName('boxMargin-5-t'), ' ', goog.getCssName('text-color'), '"><tr><td width="34%"></td><td width="33%"><div class="', goog.getCssName('boxMargin-5-v'), ' ', goog.getCssName('text-color'), '">2-11 ', MSG_UNNAMED_1976, '</div></td><td width="33%"><div class="', goog.getCssName('boxMargin-10-l'), ' ', goog.getCssName('text-color'), '">0-23 ', MSG_UNNAMED_1978, '</div></td></tr></table></div><div class="', goog.getCssName('textAlingcenter'), ' ', goog.getCssName('boxMargin-10-t'), ' ', goog.getCssName('frame-1-1'), ' ', goog.getCssName('content-button'), '"><input type="button" name="', soy.$$escapeHtml(opt_data.ids.lbMultidestino), '" value=\'', MSG_UNNAMED_1980, '\' id="', soy.$$escapeHtml(opt_data.ids.lbMultidestino), '" class="', goog.getCssName('buttonRound'), '" /></div></form></div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


flights.template.search.renderAgeChilds = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="', goog.getCssName('row'), '"><div class="', goog.getCssName('col-xs-12'), ' ', goog.getCssName('col-sm-12'), ' ', goog.getCssName('col-md-12'), ' ', goog.getCssName('col-lg-12'), '"><select class="', goog.getCssName('form-control'), '"><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option></select></div></div>');
  return opt_sb ? '' : output.toString();
};


flights.template.search.renderMonthInfants = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="', goog.getCssName('row'), '"><div class="', goog.getCssName('col-xs-12'), ' ', goog.getCssName('col-sm-12'), ' ', goog.getCssName('col-md-12'), ' ', goog.getCssName('col-lg-12'), '"><select class="', goog.getCssName('form-control'), '"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option></select></div></div>');
  return opt_sb ? '' : output.toString();
};


flights.template.search.dialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="', goog.getCssName('dialogo'), '" style="display: none;"><div class="', goog.getCssName('ui-widget-overlay'), '" style="display: block;"><div class="css ui-dialog;" style="display: block;"></div></div><img id="img_cortinilla"></div>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from register.soy.
// Please don't edit this file by hand.

goog.provide('flights.template.register');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


flights.template.register.register = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  /** @desc Volver a resultados */
  var MSG_UNNAMED_1982 = goog.getMsg('Volver a resultados');
  /** @desc Resultados */
  var MSG_UNNAMED_1984 = goog.getMsg('Resultados');
  /** @desc Solicitar */
  var MSG_UNNAMED_1986 = goog.getMsg('Solicitar');
  /** @desc Comprar */
  var MSG_UNNAMED_1988 = goog.getMsg('Comprar');
  /** @desc Valor total a pagar */
  var MSG_UNNAMED_1990 = goog.getMsg('Valor total a pagar');
  /** @desc Valor por un */
  var MSG_UNNAMED_1992 = goog.getMsg('Valor por un');
  /** @desc Adulto */
  var MSG_UNNAMED_1994 = goog.getMsg('Adulto');
  /** @desc TUS VUELOS */
  var MSG_UNNAMED_1996 = goog.getMsg('TUS VUELOS');
  /** @desc Aerolinea */
  var MSG_UNNAMED_1998 = goog.getMsg('Aerolinea');
  /** @desc Hora de salida */
  var MSG_UNNAMED_2000 = goog.getMsg('Hora de salida');
  /** @desc Hora de llegada */
  var MSG_UNNAMED_2002 = goog.getMsg('Hora de llegada');
  /** @desc Vuelo */
  var MSG_UNNAMED_2004 = goog.getMsg('Vuelo');
  /** @desc Paradas */
  var MSG_UNNAMED_2006 = goog.getMsg('Paradas');
  /** @desc Tiempo de vuelo */
  var MSG_UNNAMED_2008 = goog.getMsg('Tiempo de vuelo');
  /** @desc Impuestos incluidos  */
  var MSG_UNNAMED_2010 = goog.getMsg('Impuestos incluidos');
  /** @desc INFORMACION DE PASAJERO */
  var MSG_UNNAMED_2012 = goog.getMsg('INFORMACION DE PASAJERO');
  /** @desc  Datos obligatorios */
  var MSG_UNNAMED_2014 = goog.getMsg('Datos obligatorios');
  /** @desc DATOS DE CONTACTO */
  var MSG_UNNAMED_2016 = goog.getMsg('DATOS DE CONTACTO');
  /** @desc Correo electronico */
  var MSG_UNNAMED_2018 = goog.getMsg('Correo electronico');
  /** @desc Telefono Fijo */
  var MSG_UNNAMED_2020 = goog.getMsg('Telefono Fijo');
  /** @desc Ciudad */
  var MSG_UNNAMED_2022 = goog.getMsg('Ciudad');
  /** @desc Celular */
  var MSG_UNNAMED_2024 = goog.getMsg('Celular');
  /** @desc Politica de tuagencia S.A. para el tratamiento de informacion de los usuarios */
  var MSG_UNNAMED_2026 = goog.getMsg('Politica de tuagencia S.A. para el tratamiento de informacion de los usuarios');
  /** @desc Condiciones de la reserva y tarifa  */
  var MSG_UNNAMED_2028 = goog.getMsg('Condiciones de la reserva y tarifa');
  /** @desc Confirmo datos de los pasajeros y acepto los terminos y condiciones de reserva y tarifas */
  var MSG_UNNAMED_2030 = goog.getMsg('Confirmo datos de los pasajeros y acepto los terminos y condiciones de reserva y tarifas');
  /** @desc RESERVAR */
  var MSG_UNNAMED_2032 = goog.getMsg('RESERVAR');
  output.append('<div class="', goog.getCssName('reserva-container'), '"><div class="', goog.getCssName('contresultuno'), '"><div class="', goog.getCssName('contresultunoi'), '"><div><a class="', goog.getCssName('btnreturnresults'), ' ', goog.getCssName('background-color'), ' ', goog.getCssName('border-color'), ' ', goog.getCssName('text-color'), '" href="javascript:void(0);">', MSG_UNNAMED_1982, '</a></div><div><a class="', goog.getCssName('guidesteps11'), '" href="javascript:void(0);">1  ', MSG_UNNAMED_1984, '</a></div><div><a class="', goog.getCssName('guidesteps22'), ' ', goog.getCssName('background-color'), ' ', goog.getCssName('border-color'), ' ', goog.getCssName('text-color'), '" href="javascript:void(0);">2  ', MSG_UNNAMED_1986, '</a></div><div><a class="', goog.getCssName('guidesteps33'), '" href="javascript:void(0);">3 ', MSG_UNNAMED_1988, '</a></div></div></div><div class="', goog.getCssName('row-col'), '"><div class="', goog.getCssName('col4'), ' ', goog.getCssName('push8'), ' ', goog.getCssName('col5-medium'), ' ', goog.getCssName('push7-medium'), ' ', goog.getCssName('col12-small'), ' ', goog.getCssName('push0-small'), ' ', goog.getCssName('purchase-info'), '"><div class="', goog.getCssName('panelDerechoReservaVuelos'), ' ', goog.getCssName('border-color'), '"><div class="', goog.getCssName('reservaTituloVuelosTarjeta300Naranja'), ' ', goog.getCssName('border-color'), ' ', goog.getCssName('background-color'), '"><span class="', goog.getCssName('text-color'), '" style="float: left;">', MSG_UNNAMED_1990, ': &nbsp;</span><span class="', goog.getCssName('text-color'), '" style="float: left;">', soy.$$escapeHtml(opt_data.segmentSelected['currencyCodeLocalField']), '&nbsp; ', soy.$$escapeHtml(opt_data.segmentSelected['amountCurrencyShowField']), '</span></div><div class="', goog.getCssName('reservaTarifasVuelosTarjeta'), '"><div class="', goog.getCssName('detalleTarifaVuelosTarjeta'), '"><div class="', goog.getCssName('renglonValorPorPasajero'), '"><div style="float: left; width: 160px; text-align: left;"><span style="float: left;">', MSG_UNNAMED_1992, '&nbsp;</span><span style="float: left;">', MSG_UNNAMED_1994, '&nbsp;</span></div>');
  var tcPassengerTypeFieldList427 = opt_data.segmentSelected['tcPassengerTypeField'];
  var tcPassengerTypeFieldListLen427 = tcPassengerTypeFieldList427.length;
  for (var tcPassengerTypeFieldIndex427 = 0; tcPassengerTypeFieldIndex427 < tcPassengerTypeFieldListLen427; tcPassengerTypeFieldIndex427++) {
    var tcPassengerTypeFieldData427 = tcPassengerTypeFieldList427[tcPassengerTypeFieldIndex427];
    output.append('<a class="', goog.getCssName('impuestosVuelos'), '" href="#this" style="float: left; padding: 0; width: auto;"><span class="', goog.getCssName('valorTarifaVuelosTarjeta'), '" style="float: left; text-align: left; width: 85px;"><span>', soy.$$escapeHtml(tcPassengerTypeFieldData427['currencyCodeShowField']), '&nbsp;', soy.$$escapeHtml(tcPassengerTypeFieldData427['passengerPriceShowField']), '</span></span></a>');
  }
  output.append('</div></div><div class="', goog.getCssName('divisorAzul300'), '"></div></div><div class="', goog.getCssName('reservaTituloVuelosTarjeta300'), '"><span>', MSG_UNNAMED_1996, '</span></div><div class="', goog.getCssName('reservaResumen300'), '">');
  var tcAirRouteFieldList448 = opt_data.segmentSelected['tcAirRouteField'];
  var tcAirRouteFieldListLen448 = tcAirRouteFieldList448.length;
  for (var tcAirRouteFieldIndex448 = 0; tcAirRouteFieldIndex448 < tcAirRouteFieldListLen448; tcAirRouteFieldIndex448++) {
    var tcAirRouteFieldData448 = tcAirRouteFieldList448[tcAirRouteFieldIndex448];
    var tcAirItineraryFieldList449 = tcAirRouteFieldData448['tcAirItineraryField'];
    var tcAirItineraryFieldListLen449 = tcAirItineraryFieldList449.length;
    for (var tcAirItineraryFieldIndex449 = 0; tcAirItineraryFieldIndex449 < tcAirItineraryFieldListLen449; tcAirItineraryFieldIndex449++) {
      var tcAirItineraryFieldData449 = tcAirItineraryFieldList449[tcAirItineraryFieldIndex449];
      var tcFlightSegmentFieldList450 = tcAirItineraryFieldData449['tcFlightSegmentField'];
      var tcFlightSegmentFieldListLen450 = tcFlightSegmentFieldList450.length;
      for (var tcFlightSegmentFieldIndex450 = 0; tcFlightSegmentFieldIndex450 < tcFlightSegmentFieldListLen450; tcFlightSegmentFieldIndex450++) {
        var tcFlightSegmentFieldData450 = tcFlightSegmentFieldList450[tcFlightSegmentFieldIndex450];
        output.append('<div class="', goog.getCssName('detalleVuelo300'), '"><div class="', goog.getCssName('trayectoVueloTarjeta'), '"><div class="', goog.getCssName('detalleVuelo300'), '"><span class="', goog.getCssName('ciudadLlegadaVuelosTarjeta'), '">', soy.$$escapeHtml(tcFlightSegmentFieldData450['departureCityField']), ' ', soy.$$escapeHtml(tcFlightSegmentFieldData450['departureAirportNameField']), '</span><span class="', goog.getCssName('ciudadSalidaVuelosTarjeta'), '">', soy.$$escapeHtml(tcFlightSegmentFieldData450['arrivalCityNameField']), ' ', soy.$$escapeHtml(tcFlightSegmentFieldData450['arrivalAirPortNameField']), '</span></div><div class="', goog.getCssName('detalleVuelo300'), '" style="margin-bottom: 10px;"><span class="', goog.getCssName('fechaLlegadaVuelosTarjeta'), '">', soy.$$escapeHtml(tcFlightSegmentFieldData450['departureDateField']), '</span><span class="', goog.getCssName('fechaSalidaVuelosTarjeta'), '">', soy.$$escapeHtml(tcFlightSegmentFieldData450['arrivalDateField']), '</span></div><div class="', goog.getCssName('logoAerolineaVueloTarjeta'), '"><img src="http://co.staticontent.com/img-versioned/1.23.47/common/airlines/25x25/', soy.$$escapeHtml(tcFlightSegmentFieldData450['airLineOperatedField']), '.png" style="border-width: 0px;"></div><div class="', goog.getCssName('renglonTrayectoVueloTarjeta'), '"><div class="', goog.getCssName('divi195'), '"><div class="', goog.getCssName('labelItemsVueloTarjeta'), '">', MSG_UNNAMED_1998, ':&nbsp;&nbsp;</div><span class="', goog.getCssName('valorItemsVueloTarjeta'), '">', soy.$$escapeHtml(tcFlightSegmentFieldData450['airLineOperatedField']), '</span></div><div class="', goog.getCssName('divi195'), '"><div class="', goog.getCssName('labelItemsVueloTarjeta'), '">', MSG_UNNAMED_2000, ':&nbsp;&nbsp;</div><span class="', goog.getCssName('valorItemsVueloTarjeta'), '">', soy.$$escapeHtml(tcFlightSegmentFieldData450['departureTimeField']), '</span></div><div class="', goog.getCssName('divi195'), '"><div class="', goog.getCssName('labelItemsVueloTarjeta'), '">', MSG_UNNAMED_2002, ':&nbsp;&nbsp;</div><span class="', goog.getCssName('valorItemsVueloTarjeta'), '">', soy.$$escapeHtml(tcFlightSegmentFieldData450['arrivalTimeField']), '</span></div><div class="', goog.getCssName('divi195'), '"><div class="', goog.getCssName('labelItemsVueloTarjeta'), '">', MSG_UNNAMED_2004, ':&nbsp;&nbsp;</div><span class="', goog.getCssName('valorItemsVueloTarjeta'), '">', soy.$$escapeHtml(tcFlightSegmentFieldData450['numberFlightField']), '</span></div><div class="', goog.getCssName('divi195'), '"><span class="', goog.getCssName('labelItemsVueloTarjeta'), '">', MSG_UNNAMED_2006, ': &nbsp;&nbsp;</span><span class="', goog.getCssName('valorItemsVueloTarjeta'), '">', soy.$$escapeHtml(tcAirItineraryFieldData449['stopNameField']), '</span></div><div class="', goog.getCssName('divi195'), '"><span class="', goog.getCssName('labelItemsVueloTarjeta'), '">', MSG_UNNAMED_2008, ': &nbsp;&nbsp;</span><span class="', goog.getCssName('valorItemsVueloTarjeta'), '">', soy.$$escapeHtml(tcFlightSegmentFieldData450['estimatedTimeField']), '</span></div></div></div><div class="', goog.getCssName('divisorAzul300'), '"></div></div>');
      }
    }
  }
  output.append('</div><span style="font-size: 10px; display: none;">', MSG_UNNAMED_2010, '</span><p><span class="', goog.getCssName('reservaTarifasNaranja'), '"></span></p><div style="text-align: center; background-color: rgb(255, 255, 255); width: 280px; height: 100px; padding: 20px; color: rgb(0, 0, 0); display: none; position: fixed; z-index: 100001; background-position: initial initial; background-repeat: initial initial;"><span></span>&nbsp;<br><span style="color: Red; font-size: 20px; padding: 5px; text-align: center; padding-bottom: 10px;"></span><br><br><br><br><input type="submit" name="ucReservaVuelosbtnContinuar" value="Finalizar" class="', goog.getCssName('botonBuscador'), '" style="padding: 5px; margin: 20px;"></div><div class="', goog.getCssName('ui-widget-shadow'), '" style="display: none; position: fixed; left: 0px; top: 0px; z-index: 10000;"></div></div></div><div class="', goog.getCssName('col8'), ' ', goog.getCssName('pull4'), ' ', goog.getCssName('col7-medium'), ' ', goog.getCssName('pull5-medium'), ' ', goog.getCssName('col12-small'), ' ', goog.getCssName('pull0-small'), ' ', goog.getCssName('first-small'), ' ', goog.getCssName('purchase-form'), '"><div class="', goog.getCssName('panelIzquierdoReservaVuelos'), ' ', goog.getCssName('border-color'), '"><div class="', goog.getCssName('reservaTituloVuelosTarjeta'), '"><span class="', goog.getCssName('titleRegister'), '">', MSG_UNNAMED_2012, '</span><div style="float: right; line-height: 30px; padding-right: 15px; color: #5a5a5a; font-size: 11px; text-transform: none;">(*)', MSG_UNNAMED_2014, '</div></div><div class="', goog.getCssName('reservaDatosPasajero'), '"></div><div class="', goog.getCssName('divisorAzul580'), '"></div><!--- datos del pasajero --><div class="', goog.getCssName('reservaTituloVuelosTarjeta'), '"><span>', MSG_UNNAMED_2016, '</span></div><div class="', goog.getCssName('reservaRegistroVuelosTarjeta'), '"><!--- registro --><table cellpadding="2" cellspacing="1" class="', goog.getCssName('tablaPasajeros'), '"><tbody><tr class="', goog.getCssName('txt12azul'), '"><td><span>', MSG_UNNAMED_2018, '</span><span>(*)</span><br><input class="', goog.getCssName('txtMailPersonal'), '" type="text" style="width: 160px;"><span class="', goog.getCssName('Error'), '" style="color: Maroon;"></span></td><td><span>', MSG_UNNAMED_2020, '</span><br><input class="', goog.getCssName('txtTelefono'), '" type="text" style="width: 90px;"></td><td><span>', MSG_UNNAMED_2022, '</span><span>(*)</span><br><input class="', goog.getCssName('txtCiudad'), '" type="text" style="width: 150px;"></td><td><span>', MSG_UNNAMED_2024, '</span><span>(*)</span><br><input class="', goog.getCssName('txtCelular'), '" type="text" style="width: 90px;"></td></tr><tr><td><div class="', goog.getCssName('alineacionCentro'), '"></div></td></tr><tr><td><span style="font-size: 13px; font-weight: bold; color: #186e9b"><span></span></span></td></tr></tbody></table></div><div class="', goog.getCssName('divisorAzul580'), '"></div><!-- CONFIRMACION --><div class="', goog.getCssName('contenedorCondicionesVuelosTarjeta'), '"><img src="http://tutiquete.com/Pagina/App_Themes/Imagenes/warningCondiciones.jpg" style="width: 40px; float: left;"><a href="javascript:void(0);" style="float: left; width: 490px; margin-left: 10px; margin-bottom: 5px; font-size: 14px; color: #319fda;">', MSG_UNNAMED_2026, '</a><a href="javascript:void(0);" style="float: left; width: 490px; margin-left: 10px; margin-bottom: 10px; font-size: 14px; color: #319fda;">', MSG_UNNAMED_2028, '</a><div style="clear: both;"></div><div><span class="', goog.getCssName('labelCondicionesVuelosTarjeta'), '" style="color: #FF9900; font-size: X-Small; margin-left: 10px; margin-top: 2px;"><input id="tc_ReservaVuelos_cbAcepto" type="checkbox" class="', goog.getCssName('ReservaVuelos_cbAcepto'), '"></span><label for="tc_ReservaVuelos_cbAcepto"><span style="float: left; width: 490px; margin-left: 20px;">', MSG_UNNAMED_2030, '</span></label><div style="float: left; width: 100%; margin-top: 20px;"><input type="button" value=\' ', MSG_UNNAMED_2032, '\' class="', goog.getCssName('btnSiguienteVuelosTarjeta'), ' ', goog.getCssName('background-color'), ' ', goog.getCssName('border-color'), ' ', goog.getCssName('text-color'), '" style="float: right;"></div><div class="', goog.getCssName('mensajeError'), '"></div></div></div><!-----------------------------></div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


flights.template.register.passenger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  /** @desc Nombres */
  var MSG_UNNAMED_2034 = goog.getMsg('Nombres');
  /** @desc Nombres */
  var MSG_UNNAMED_2036 = goog.getMsg('Apellidos');
  /** @desc Fecha nacimiento */
  var MSG_UNNAMED_2038 = goog.getMsg('Fecha nacimiento');
  /** @desc Genero  */
  var MSG_UNNAMED_2040 = goog.getMsg('Genero');
  /** @desc Masculino */
  var MSG_UNNAMED_2042 = goog.getMsg('Masculino');
  /** @desc Femenino */
  var MSG_UNNAMED_2044 = goog.getMsg('Femenino');
  /** @desc Tipo documento */
  var MSG_UNNAMED_2046 = goog.getMsg('Tipo documento');
  /** @desc Cedula Ciudadania */
  var MSG_UNNAMED_2048 = goog.getMsg('Cedula Ciudadania');
  /** @desc Pasaporte */
  var MSG_UNNAMED_2050 = goog.getMsg('Pasaporte');
  /** @desc Registro Civil */
  var MSG_UNNAMED_2052 = goog.getMsg('Registro Civil');
  /** @desc Tarjeta de identidad */
  var MSG_UNNAMED_2054 = goog.getMsg('Tarjeta de identidad');
  /** @desc NIUP */
  var MSG_UNNAMED_2056 = goog.getMsg('NIUP');
  /** @desc No.documento  */
  var MSG_UNNAMED_2058 = goog.getMsg('No.documento');
  /** @desc Pasajero frecuente */
  var MSG_UNNAMED_2060 = goog.getMsg('Pasajero frecuente');
  var passengerList667 = opt_data.passenger;
  var passengerListLen667 = passengerList667.length;
  for (var passengerIndex667 = 0; passengerIndex667 < passengerListLen667; passengerIndex667++) {
    var passengerData667 = passengerList667[passengerIndex667];
    output.append('<table id="', soy.$$escapeHtml(passengerData667.PassengerInfoId), '" cellspacing="0" border="0" style="width: 103%; border-collapse: collapse;"><tbody><tr><td><div style="float: left; width: 100%; height: 1px; background: #CCC; margin-bottom: 15px;"></div><div class="', goog.getCssName('renglonDatosVuelosTarjeta'), '"><div class="', goog.getCssName('tipoPasajeroVuelosTarjeta'), '"><p class="', goog.getCssName('labelTipoPasajeroVuelosTarjeta'), '">', soy.$$escapeHtml(passengerData667.TypeDesc), '</p></div><div class="', goog.getCssName('datosPasajeroVuelosTarjeta'), '"><div class="', goog.getCssName('lineaDatosVuelosTarjeta'), '"><div class="', goog.getCssName('celdaDatosVuelosTarjeta'), '"><span class="', goog.getCssName('labelDatosVuelosTarjeta'), '">', MSG_UNNAMED_2034, ' (*)</span><input id="', soy.$$escapeHtml(passengerData667.FirstNameId), '" type="text" style="width: 90%;"></div><div class="', goog.getCssName('celdaDatosVuelosTarjeta'), '"><span class="', goog.getCssName('labelDatosVuelosTarjeta'), '">', MSG_UNNAMED_2036, '(*)</span><input id="', soy.$$escapeHtml(passengerData667.LastNameId), '" type="text" style="width: 90%;"></div><div class="', goog.getCssName('celdaDatosVuelosTarjeta'), '"><span class="', goog.getCssName('labelDatosVuelosTarjeta'), '">', MSG_UNNAMED_2038, '</span><select id="', soy.$$escapeHtml(passengerData667.DayId), '" class="', goog.getCssName('selects'), '"><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select><select id="', soy.$$escapeHtml(passengerData667.MonthId), '" class="', goog.getCssName('selects'), '"><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select><select id="', soy.$$escapeHtml(passengerData667.YearId), '" class="', goog.getCssName('selects'), '"><option value="1914">1914</option><option value="1915">1915</option><option value="1916">1916</option><option value="1917">1917</option><option value="1918">1918</option><option value="1919">1919</option><option value="1920">1920</option><option value="1921">1921</option><option value="1922">1922</option><option value="1923">1923</option><option value="1924">1924</option><option value="1925">1925</option><option value="1926">1926</option><option value="1927">1927</option><option value="1928">1928</option><option value="1929">1929</option><option value="1930">1930</option><option value="1931">1931</option><option value="1932">1932</option><option value="1933">1933</option><option value="1934">1934</option><option value="1935">1935</option><option value="1936">1936</option><option value="1937">1937</option><option value="1938">1938</option><option value="1939">1939</option><option value="1940">1940</option><option value="1941">1941</option><option value="1942">1942</option><option value="1943">1943</option><option value="1944">1944</option><option value="1945">1945</option><option value="1946">1946</option><option value="1947">1947</option><option value="1948">1948</option><option value="1949">1949</option><option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option></select><span style="color: #186E9B;"></span></div><div class="', goog.getCssName('celdaDatosVuelosTarjeta'), '"><span class="', goog.getCssName('labelDatosVuelosTarjeta'), '">', MSG_UNNAMED_2040, '(*)</span><div style="float: left; width: 150px;"><select id="', soy.$$escapeHtml(passengerData667.GenreId), '" style="width: 90%;"><option selected="selected" value="1">', MSG_UNNAMED_2042, '</option><option value="2">', MSG_UNNAMED_2044, '</option></select></div></div></div><div class="', goog.getCssName('lineaDatosVuelosTarjeta'), '"><div class="', goog.getCssName('celdaDatosVuelosTarjeta'), '"><span class="', goog.getCssName('labelDatosVuelosTarjeta'), '">', MSG_UNNAMED_2046, '</span><div style="float: left; width: 150px;"><select id="', soy.$$escapeHtml(passengerData667.DocumentTypeId), '" style="width: 90%;"><option value="1">', MSG_UNNAMED_2048, '</option><option value="2">', MSG_UNNAMED_2050, '</option><option value="3">', MSG_UNNAMED_2052, '</option><option value="7">', MSG_UNNAMED_2054, '</option><option value="8">', MSG_UNNAMED_2056, '</option></select></div></div><div class="', goog.getCssName('celdaDatosVuelosTarjeta'), '"><span class="', goog.getCssName('labelDatosVuelosTarjeta'), '">', MSG_UNNAMED_2058, '(*)</span><input id="', soy.$$escapeHtml(passengerData667.DocumentNumberId), '" type="text" style="width: 80%;"></div><div class="', goog.getCssName('celdaDatosVuelosTarjeta'), '"><span class="', goog.getCssName('labelDatosVuelosTarjeta'), '">', MSG_UNNAMED_2060, '</span><input id="', soy.$$escapeHtml(passengerData667.FrequentPassenger), '" type="text" style="width: 80%;"></div></div></div></div></td></tr></tbody></table><div><span style="color: Red; font-weight: bold;"></span></div>');
  }
  return opt_sb ? '' : output.toString();
};


flights.template.register.buttonspayandcancel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  /** @desc Pagar */
  var MSG_UNNAMED_2062 = goog.getMsg('Pagar');
  /** @desc Cancelar */
  var MSG_UNNAMED_2064 = goog.getMsg('Cancelar');
  output.append('<div><input type="button" name="btnOfertas" value=\'', MSG_UNNAMED_2062, '\' id="btnPay" class="', goog.getCssName('botonImprimirCotizar'), '"><input type="button" name="btnContinuar" value=\'', MSG_UNNAMED_2064, '\' id="btnCancel" class="', goog.getCssName('botonImprimirCotizar'), '"></div>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from results.soy.
// Please don't edit this file by hand.

goog.provide('flights.template.results');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


flights.template.results.results = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  /** @desc Volver a buscar */
  var MSG_UNNAMED_2066 = goog.getMsg('Volver a buscar');
  /** @desc Resultados  */
  var MSG_UNNAMED_2068 = goog.getMsg('Resultados');
  /** @desc Solicitar */
  var MSG_UNNAMED_2070 = goog.getMsg('Solicitar');
  /** @desc Comprar */
  var MSG_UNNAMED_2072 = goog.getMsg('Comprar');
  output.append('<div class="', goog.getCssName('co'), ' ', goog.getCssName('flightscontainer'), '"><div class="', goog.getCssName('ux-flights-results'), '"><div class="', goog.getCssName('ux-common-grid-row'), '"><div class="', goog.getCssName('ux-common-grid-col3'), '"><a class="', goog.getCssName('btnreturnsearch'), ' ', goog.getCssName('background-color'), ' ', goog.getCssName('border-color'), ' ', goog.getCssName('text-color'), '" href="javascript:void(0);">', MSG_UNNAMED_2066, '</a></div><div class="', goog.getCssName('ux-common-grid-col3'), '"><a class="', goog.getCssName('guidesteps'), ' ', goog.getCssName('background-color'), ' ', goog.getCssName('border-color'), ' ', goog.getCssName('text-color'), '" href="javascript:void(0);">1 ', MSG_UNNAMED_2068, '</a></div><div class="', goog.getCssName('ux-common-grid-col3'), '"><a class="', goog.getCssName('guidesteps'), '  ', goog.getCssName('border-color'), ' ', goog.getCssName('guidestepsdisable'), '" href="javascript:void(0);">2 ', MSG_UNNAMED_2070, '</a></div><div class="', goog.getCssName('ux-common-grid-col3'), '"><a class="', goog.getCssName('guidesteps'), '  ', goog.getCssName('border-color'), ' ', goog.getCssName('text-color'), ' ', goog.getCssName('guidestepsdisable'), '" href="javascript:void(0);">3 ', MSG_UNNAMED_2072, '</a></div></div><div class="', goog.getCssName('ux-common-grid-row'), '"><div class="', goog.getCssName('ux-common-grid-col3'), ' ', goog.getCssName('results-left-grid-row'), ' ', goog.getCssName('filters'), '"></div><div class="', goog.getCssName('ux-common-grid-col9'), ' ', goog.getCssName('results-content-container'), '"><div class="', goog.getCssName('ux-common-grid-row'), '"><div class="', goog.getCssName('ux-common-grid-col12'), '"></div></div><div class="', goog.getCssName('results-content-wrapper'), ' ', goog.getCssName('flights-results-content-wrapper'), '"><div class="', goog.getCssName('clusters'), '"></div></div></div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


flights.template.results.filters = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="', goog.getCssName('search'), '"></div><div class="', goog.getCssName('filters-container'), '"><div class="', goog.getCssName('active-filters'), '" style="display:none;"></div><div class="', goog.getCssName('ux-common-filters'), ' ', goog.getCssName('ux-flights-filters'), ' ', goog.getCssName('border-color'), '"></div></div>');
  return opt_sb ? '' : output.toString();
};


flights.template.results.currentFilters = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  /** @desc Filtros Activos */
  var MSG_UNNAMED_2074 = goog.getMsg('Filtros Activos');
  output.append('<div class="', goog.getCssName('ux-common-filter-section'), '"><div class="', goog.getCssName('ux-common-filter-header'), '" tabindex="0" role="tab" aria-expanded="true"><h4>', MSG_UNNAMED_2074, '</h4></div><div><div class="', goog.getCssName('ux-common-filter-body'), '">');
  var filterTypeList900 = opt_data.currentFilters;
  var filterTypeListLen900 = filterTypeList900.length;
  for (var filterTypeIndex900 = 0; filterTypeIndex900 < filterTypeListLen900; filterTypeIndex900++) {
    var filterTypeData900 = filterTypeList900[filterTypeIndex900];
    output.append('<ul class="', goog.getCssName('ux-common-filter-options'), ' ', goog.getCssName('items'), ' ', goog.getCssName('accordion-content'), '"><li class="', goog.getCssName('item'), ' ', goog.getCssName('stops-all'), '"><label for="scales-all" class="', goog.getCssName('ux-common-filter-all'), ' ', goog.getCssName('ux-common-filter-disabled'), ' ', goog.getCssName('selected'), ' ', goog.getCssName('ux-common-filter-selected'), '">');
    var valueList920 = filterTypeData900.values;
    var valueListLen920 = valueList920.length;
    for (var valueIndex920 = 0; valueIndex920 < valueListLen920; valueIndex920++) {
      var valueData920 = valueList920[valueIndex920];
      output.append('<a data-type="', soy.$$escapeHtml(filterTypeData900.type), '" data-value="', soy.$$escapeHtml(valueData920.value), '" href="javascript:void(0);" class="', goog.getCssName('btn-remove-filter'), ' ', goog.getCssName('buy'), ' ', goog.getCssName('btn-buy'), ' ', goog.getCssName('flights-button'), ' ', goog.getCssName('background-color'), ' ', goog.getCssName('border-color'), '"><span class="', goog.getCssName('background-color'), ' ', goog.getCssName('border-color'), ' ', goog.getCssName('text-color'), '">', soy.$$escapeHtml(valueData920.label), '</span></a>');
    }
    output.append('</label></li></ul>');
  }
  output.append('</div></div></div>');
  return opt_sb ? '' : output.toString();
};


flights.template.results.filterCheckbox = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  /** @desc Todas las */
  var MSG_UNNAMED_2076 = goog.getMsg('Todas las');
  output.append('<div class="', goog.getCssName('ux-common-filter-section'), '" id="filter_', soy.$$escapeHtml(opt_data.filterObject.type), '"><div class="', goog.getCssName('ux-common-filter-header'), '"><h4>', soy.$$escapeHtml(opt_data.filterObject.title), '</h4><span class="', goog.getCssName('ux-common-filter-toggle'), '"></span></div><div class="', goog.getCssName('ux-common-filter-body'), '"><ul class="', goog.getCssName('ux-common-filter-options'), ' ', goog.getCssName('items'), ' ', goog.getCssName('accordion-content'), '"><li class="', goog.getCssName('item'), ' ', goog.getCssName('stops-all'), '" style=""><label for="', soy.$$escapeHtml(opt_data.filterObject.type), '-all" class="', goog.getCssName('ux-common-filter-all'), ' ', goog.getCssName('ux-common-filter-disabled selected'), ' ', goog.getCssName('ux-common-filter-selected'), '"><input id="', soy.$$escapeHtml(opt_data.filterObject.type), '-all" type="checkbox" name="stops" value="*" checked="" data-type="', soy.$$escapeHtml(opt_data.filterObject.type), '" disabled="" class="', goog.getCssName('ux-common-filter-disabled'), ' ', goog.getCssName('all-input'), '"><span class="', goog.getCssName('label'), '">', MSG_UNNAMED_2076, ' ', soy.$$escapeHtml(opt_data.filterObject.title), '</span><span class="', goog.getCssName('total'), ' ', goog.getCssName('ux-common-filter-total'), ' ', goog.getCssName('background-color'), ' ', goog.getCssName('text-color'), '">', soy.$$escapeHtml(opt_data.filterObject.count), '</span></label></li>');
  var filterList1007 = opt_data.filterObject.values;
  var filterListLen1007 = filterList1007.length;
  for (var filterIndex1007 = 0; filterIndex1007 < filterListLen1007; filterIndex1007++) {
    var filterData1007 = filterList1007[filterIndex1007];
    output.append('<li class="', goog.getCssName('item'), ' ', goog.getCssName('stops'), '-', soy.$$escapeHtml(filterData1007.value), '" style=""><label for="', soy.$$escapeHtml(opt_data.filterObject.type), '-', soy.$$escapeHtml(filterData1007.value), '" class="', goog.getCssName('ux-common-filter-disabled'), '">', (filterData1007.checked == true && filterData1007.disabled == true) ? '<input id="' + soy.$$escapeHtml(opt_data.filterObject.type) + '-' + soy.$$escapeHtml(filterData1007.value) + '" checked disabled type="checkbox" data-type="' + soy.$$escapeHtml(opt_data.filterObject.type) + '" value="' + soy.$$escapeHtml(filterData1007.value) + '" class="' + goog.getCssName('NONE') + ' ' + goog.getCssName('ux-common-filter-disabled') + ' ' + goog.getCssName('input-filter') + '" />' : '<input id="' + soy.$$escapeHtml(opt_data.filterObject.type) + '-' + soy.$$escapeHtml(filterData1007.value) + '" type="checkbox" data-type="' + soy.$$escapeHtml(opt_data.filterObject.type) + '" value="' + soy.$$escapeHtml(filterData1007.value) + '" class="' + goog.getCssName('NONE') + ' ' + goog.getCssName('ux-common-filter-disabled') + ' ' + goog.getCssName('input-filter') + '" />', (opt_data.filterObject.type != 'airLines') ? '<span class="' + goog.getCssName('label') + '">' + soy.$$escapeHtml(filterData1007.label) + '</span>' : '<img src="http://co.staticontent.com/img-versioned/1.23.47/common/airlines/25x25/' + soy.$$escapeHtml(filterData1007.value) + '.png" title="' + soy.$$escapeHtml(filterData1007.value) + '" onerror="this.src=\'http://search.technocloud.com.co/static/images/airline/00.gif\'" alt="' + soy.$$escapeHtml(filterData1007.value) + '">', '<span id="count_', soy.$$escapeHtml(filterData1007.value), '" class="', goog.getCssName('total'), ' ', goog.getCssName('ux-common-filter-suboptions'), ' ', goog.getCssName('ux-common-filter-total'), '">', soy.$$escapeHtml(filterData1007.count), '</span></label></li>');
  }
  output.append('</ul></div></div>');
  return opt_sb ? '' : output.toString();
};


flights.template.results.filterSlider = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  /** @desc Todas las */
  var MSG_UNNAMED_2078 = goog.getMsg('Todas las');
  /** @desc Filtrar */
  var MSG_UNNAMED_2080 = goog.getMsg('Filtrar');
  /** @desc Remover Filtro */
  var MSG_UNNAMED_2082 = goog.getMsg('Remover Filtro');
  output.append('<div id="filter_', soy.$$escapeHtml(opt_data.filterObject.type), '" class="', goog.getCssName('ux-common-filter-section'), '"><div class="', goog.getCssName('ux-common-filter-header'), '"><h4>', soy.$$escapeHtml(opt_data.filterObject.title), '</h4></div><div class="', goog.getCssName('ux-common-filter-body'), '"><ul class="', goog.getCssName('ux-common-filter-options'), ' ', goog.getCssName('items'), ' ', goog.getCssName('accordion-content'), '"><li class="', goog.getCssName('item'), ' ', goog.getCssName('stops-all'), '" style=""><label for="', soy.$$escapeHtml(opt_data.filterObject.type), '-all" class="', goog.getCssName('ux-common-filter-all'), ' ', goog.getCssName('ux-common-filter-disabled selected'), ' ', goog.getCssName('ux-common-filter-selected'), '"><input id="', soy.$$escapeHtml(opt_data.filterObject.type), '-all" type="checkbox" name="stops" value="*" checked="" data-type="', soy.$$escapeHtml(opt_data.filterObject.type), '" disabled="" class="', goog.getCssName('ux-common-filter-disabled'), ' ', goog.getCssName('all-input'), '"><span class="', goog.getCssName('label'), '">', MSG_UNNAMED_2078, '  ', soy.$$escapeHtml(opt_data.filterObject.title), '</span><span class="', goog.getCssName('total'), ' ', goog.getCssName('ux-common-filter-total'), ' ', goog.getCssName('background-color'), ' ', goog.getCssName('text-color'), '">', soy.$$escapeHtml(opt_data.filterObject.count), '</span></label></li><li class="', goog.getCssName('item'), ' ', goog.getCssName('stops-all'), '" style=""><label for="', soy.$$escapeHtml(opt_data.filterObject.type), '-all" class="', goog.getCssName('ux-common-filter-all'), ' ', goog.getCssName('ux-common-filter-disabled selected'), ' ', goog.getCssName('ux-common-filter-selected'), '"><h4 class="', goog.getCssName('display-label'), '"></h4></label></li><li class="', goog.getCssName('item'), ' ', goog.getCssName('alliances-all'), '" style=""><label for="alliances" class=""><div class="', goog.getCssName('goog-twothumbslider'), '" style="width: 100%; height: 22px"><div style="position: absolute; width: 100%; top: 9px; border: 1px solid rgb(12, 167, 198); overflow: hidden; height: 0;"></div><div class="', goog.getCssName('goog-twothumbslider-value-thumb'), ' ', goog.getCssName('background-color'), ' ', goog.getCssName('border-color'), '"></div><div class="', goog.getCssName('goog-twothumbslider-extent-thumb'), ' ', goog.getCssName('background-color'), ' ', goog.getCssName('border-color'), '"></div></div></label></li><li class="', goog.getCssName('item'), ' ', goog.getCssName('alliances-all'), '" style=""><label><input type="button" data-type="', soy.$$escapeHtml(opt_data.filterObject.type), '" class="', goog.getCssName('filter-apply'), ' ', goog.getCssName('buy'), ' ', goog.getCssName('flights-button'), ' ', goog.getCssName('background-color'), ' ', goog.getCssName('border-color'), ' ', goog.getCssName('text-color'), '" value=\'', MSG_UNNAMED_2080, '\' /><input type="button" data-type="', soy.$$escapeHtml(opt_data.filterObject.type), '" style="display: none;" class="', goog.getCssName('filter-remove'), ' ', goog.getCssName('buy'), ' ', goog.getCssName('flights-button'), ' ', goog.getCssName('background-color'), ' ', goog.getCssName('border-color'), ' ', goog.getCssName('text-color'), '" value=\'', MSG_UNNAMED_2082, '\' /></label></li></ul></div></div>');
  return opt_sb ? '' : output.toString();
};


flights.template.results.flights = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  /** @desc Precio por adulto */
  var MSG_UNNAMED_2084 = goog.getMsg('Total');
  /** @desc Seleccionar */
  var MSG_UNNAMED_2094 = goog.getMsg('Seleccionar');
  /** @desc A */
  var MSG_UNNAMED_2100 = goog.getMsg('A');
  output.append('<div id="', soy.$$escapeHtml(opt_data.tcAirSearchRSField['id']), '" class="', goog.getCssName('cluster'), ' ', goog.getCssName('newCluster'), '"><div class="', goog.getCssName('cluster-content'), ' ', goog.getCssName('border-color'), '"><div class="', goog.getCssName('fare-container'), '"><div class="', goog.getCssName('fare-detail'), '"><div class="', goog.getCssName('fare-detail-base'), '"><span class="', goog.getCssName('fare-description'), '">', MSG_UNNAMED_2084, '</span><span class="', goog.getCssName('fare'), '"><span class="', goog.getCssName('price-currency'), ' ', goog.getCssName('COP'), '" style=""><em><span class="', goog.getCssName('currency'), ' ', goog.getCssName('price-mask'), '">', soy.$$escapeHtml(opt_data.tcAirSearchRSField['currencyCodeShowField']), '</span><a class="', goog.getCssName('amount'), ' ', goog.getCssName('price-amount'), '">', soy.$$escapeHtml(opt_data.tcAirSearchRSField['amountCurrencyShowField']), '</a></em></span></span></div>');
  var tcPassengerTypeFieldList1248 = opt_data.tcAirSearchRSField['tcPassengerTypeField'];
  var tcPassengerTypeFieldListLen1248 = tcPassengerTypeFieldList1248.length;
  for (var tcPassengerTypeFieldIndex1248 = 0; tcPassengerTypeFieldIndex1248 < tcPassengerTypeFieldListLen1248; tcPassengerTypeFieldIndex1248++) {
    var tcPassengerTypeFieldData1248 = tcPassengerTypeFieldList1248[tcPassengerTypeFieldIndex1248];
    output.append('<ul class="', goog.getCssName('fare-detail-items'), '"><li class="', goog.getCssName('fare-detail-items-passenger'), '">');
    if (tcPassengerTypeFieldData1248['typeGenField'] == '0') {
      /** @desc Adulto */
      var MSG_UNNAMED_2086 = goog.getMsg('Adulto');
      output.append('<span class="', goog.getCssName('item-detail'), '">', soy.$$escapeHtml(tcPassengerTypeFieldData1248['quantityField']), MSG_UNNAMED_2086, ' ', (tcPassengerTypeFieldData1248['quantityField'] != '1') ? 's' : '', '</span>');
    } else if (tcPassengerTypeFieldData1248['typeGenField'] == '1') {
      /** @desc Nino */
      var MSG_UNNAMED_2088 = goog.getMsg('Nino');
      output.append('<span class="', goog.getCssName('item-detail'), '">', soy.$$escapeHtml(tcPassengerTypeFieldData1248['quantityField']), MSG_UNNAMED_2088, (tcPassengerTypeFieldData1248['quantityField'] != '1') ? 's' : '', '</span>');
    } else if (tcPassengerTypeFieldData1248['typeGenField'] == '2') {
      /** @desc Infante */
      var MSG_UNNAMED_2090 = goog.getMsg('Infante');
      output.append('<span class="', goog.getCssName('item-detail'), '">', soy.$$escapeHtml(tcPassengerTypeFieldData1248['quantityField']), ' ', MSG_UNNAMED_2090, (tcPassengerTypeFieldData1248['quantityField'] != '1') ? 's' : '', '</span>');
    } else {
      /** @desc Otro */
      var MSG_UNNAMED_2092 = goog.getMsg('Otro');
      output.append('<span class="', goog.getCssName('item-detail'), '">1 ', MSG_UNNAMED_2092, '</span>');
    }
    output.append('<span class="', goog.getCssName('item-price'), '"><span class="', goog.getCssName('price-currency'), ' ', goog.getCssName('COP'), '" style=""><em><span class="', goog.getCssName('currency'), ' ', goog.getCssName('price-mask'), '"> ', soy.$$escapeHtml(tcPassengerTypeFieldData1248['currencyCodeShowField']), '&nbsp;</span><span data-passenger-type="', soy.$$escapeHtml(tcPassengerTypeFieldIndex1248), '" data-id-itinerary="', soy.$$escapeHtml(opt_data.tcAirSearchRSField['id']), '" class="', goog.getCssName('amount'), ' ', goog.getCssName('price-amount'), ' ', goog.getCssName('price-passenger'), '">', soy.$$escapeHtml(tcPassengerTypeFieldData1248['passengerFareTotalShowField']), '</span></em></span></span></li></ul>');
  }
  output.append('<a data="', soy.$$escapeHtml(opt_data.tcAirSearchRSField['id']), '" href="javascript:void(0);" class="', goog.getCssName('buy'), ' ', goog.getCssName('btn-buy'), ' ', goog.getCssName('flights-button'), ' ', goog.getCssName('background-color'), ' ', goog.getCssName('border-color'), '"><span class="', goog.getCssName('background-color'), ' ', goog.getCssName('border-color'), ' ', goog.getCssName('text-color'), '">', MSG_UNNAMED_2094, '</span></a></div></div><div class="', goog.getCssName('itineraries'), '"><div class="', goog.getCssName('itineraries-container'), '">');
  var tcAirRouteFieldList1349 = opt_data.tcAirSearchRSField['tcAirRouteField'];
  var tcAirRouteFieldListLen1349 = tcAirRouteFieldList1349.length;
  for (var tcAirRouteFieldIndex1349 = 0; tcAirRouteFieldIndex1349 < tcAirRouteFieldListLen1349; tcAirRouteFieldIndex1349++) {
    var tcAirRouteFieldData1349 = tcAirRouteFieldList1349[tcAirRouteFieldIndex1349];
    var tcAirItineraryFieldList1350 = tcAirRouteFieldData1349['tcAirItineraryField'];
    var tcAirItineraryFieldListLen1350 = tcAirItineraryFieldList1350.length;
    for (var tcAirItineraryFieldIndex1350 = 0; tcAirItineraryFieldIndex1350 < tcAirItineraryFieldListLen1350; tcAirItineraryFieldIndex1350++) {
      var tcAirItineraryFieldData1350 = tcAirItineraryFieldList1350[tcAirItineraryFieldIndex1350];
      output.append('<div class="', goog.getCssName('sub-cluster'), ' ', goog.getCssName('outbound'), '"><div class="', goog.getCssName('item'), ' ', goog.getCssName('data'), '"><span class="', goog.getCssName('route-type'), '"><span class="', goog.getCssName('route-info-item'), ' ', goog.getCssName('type-icon'), '"><span class="', goog.getCssName('main-sprite'), ' ', goog.getCssName('icon-plane-outbound'), '"></span></span><span class="', goog.getCssName('route-info-item'), ' ', goog.getCssName('type'), '">');
      if (! (tcAirRouteFieldIndex1349 == 0)) {
        /** @desc Vuelta */
        var MSG_UNNAMED_2096 = goog.getMsg('Vuelta');
        output.append('<span class="', goog.getCssName('itemiconoVuelta'), '">', MSG_UNNAMED_2096, '</span>');
      } else {
        /** @desc Ida */
        var MSG_UNNAMED_2098 = goog.getMsg('Ida');
        output.append('<span class="', goog.getCssName('itemiconoIda'), '">', MSG_UNNAMED_2098, '</span>');
      }
      output.append('</span></span><span class="', goog.getCssName('route-info'), '"><span class="', goog.getCssName('route-info-wrapper'), '"><span class="', goog.getCssName('route'), '"><span class="', goog.getCssName('route-info-item'), ' ', goog.getCssName('city-departure'), '">', soy.$$escapeHtml(tcAirRouteFieldData1349['cityField']), ',</span><span class="', goog.getCssName('route-info-item'), ' ', goog.getCssName('airport'), '"><span>', soy.$$escapeHtml(tcAirRouteFieldData1349['airportNameField']), '</span></span><span class="', goog.getCssName('route-info-item'), ' ', goog.getCssName('arrow'), '"><span class="', goog.getCssName('main-sprite'), ' ', goog.getCssName('icon-arrow'), '">', MSG_UNNAMED_2100, '</span></span><span class="', goog.getCssName('route-info-item'), ' ', goog.getCssName('city-arrival'), '">', soy.$$escapeHtml(tcAirRouteFieldData1349['cityDestField']), ',</span><span class="', goog.getCssName('route-info-item'), ' ', goog.getCssName('airport'), '"><span>', soy.$$escapeHtml(tcAirRouteFieldData1349['airportNameDestField']), '</span></span></span><span class="', goog.getCssName('route-info-item'), ' ', goog.getCssName('date'), '"><span>', soy.$$escapeHtml(tcAirRouteFieldData1349['dateField']), '</span></span></span></span></div>');
      var tcFlightSegmentFieldList1437 = tcAirItineraryFieldData1350['tcFlightSegmentField'];
      var tcFlightSegmentFieldListLen1437 = tcFlightSegmentFieldList1437.length;
      for (var tcFlightSegmentFieldIndex1437 = 0; tcFlightSegmentFieldIndex1437 < tcFlightSegmentFieldListLen1437; tcFlightSegmentFieldIndex1437++) {
        var tcFlightSegmentFieldData1437 = tcFlightSegmentFieldList1437[tcFlightSegmentFieldIndex1437];
        if (tcFlightSegmentFieldIndex1437 == 0 == true) {
          /** @desc Sale */
          var MSG_UNNAMED_2102 = goog.getMsg('Sale');
          /** @desc Llega */
          var MSG_UNNAMED_2104 = goog.getMsg('Llega');
          /** @desc Duracion */
          var MSG_UNNAMED_2106 = goog.getMsg('Duracion');
          output.append('<ul class="', goog.getCssName('itineraries-group'), ' ', goog.getCssName('cluster-items-list'), '"><li class="', goog.getCssName('item'), '  ', goog.getCssName('itinerary'), ' ', goog.getCssName('cluster-item'), '"><label for="1-outbound-', soy.$$escapeHtml(tcFlightSegmentFieldData1437['rPHField']), '"><ul><li class="', goog.getCssName('radio'), '"><input type="radio" name="radio_item_', soy.$$escapeHtml(opt_data.tcAirSearchRSField['id']), '_', soy.$$escapeHtml(tcAirRouteFieldIndex1349), '" checked="checked" value="', soy.$$escapeHtml(tcAirItineraryFieldData1350['rPHField']), '"></li><li class="', goog.getCssName('leave'), '"><span class="', goog.getCssName('hour-text'), '">', MSG_UNNAMED_2102, ':</span><span class="', goog.getCssName('hour'), '">', soy.$$escapeHtml(tcFlightSegmentFieldData1437['departureTimeField']), '</span></li><li class="', goog.getCssName('route-arrow'), '">›</li><li class="', goog.getCssName('arrive'), '"><span class="', goog.getCssName('hour-text'), '">', MSG_UNNAMED_2104, ':</span><span class="', goog.getCssName('hour'), '">', soy.$$escapeHtml(tcFlightSegmentFieldData1437['arrivalTimeField']), '</span></li><li class="', goog.getCssName('time'), '"><span class="', goog.getCssName('hour-text'), '">', MSG_UNNAMED_2106, ':</span><span>', soy.$$escapeHtml(tcFlightSegmentFieldData1437['estimatedTimeField']), '</span></li><li class="', goog.getCssName('stops'), '"><span class="', goog.getCssName('text'), '"><a rph="', soy.$$escapeHtml(opt_data.tcAirSearchRSField['id']), '" tcairroutefieldindex="', soy.$$escapeHtml(tcAirRouteFieldIndex1349), '" tcflightsegmentfieldindex="', soy.$$escapeHtml(tcFlightSegmentFieldIndex1437), '" class="', goog.getCssName('stops-link'), '" href="javascript:void(0);">', soy.$$escapeHtml(tcAirItineraryFieldData1350['stopNameField']), '</a></span></li><li class="', goog.getCssName('airlines'), '"><span class="', goog.getCssName('airlines-container'), '"><span class="', goog.getCssName('airline-container'), '"><span class="', goog.getCssName('image'), ' ', goog.getCssName('flights-title-tooltip'), '"><img src="http://co.staticontent.com/img-versioned/1.23.47/common/airlines/25x25/', soy.$$escapeHtml(tcFlightSegmentFieldData1437['airLineOperatedField']), '.png" onerror="this.src=\'http://search.technocloud.com.co/static/images/airline/00.gif\'" alt="Avianca"></span></span></span></li></ul></label></li></ul>');
        } else {
        }
      }
      output.append('</div>');
    }
  }
  output.append('</div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


flights.template.results.tooltipPrices = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var tcPassengerFareFieldList1527 = opt_data.tcPassengerTypeField['tcPassengerFareField'];
  var tcPassengerFareFieldListLen1527 = tcPassengerFareFieldList1527.length;
  for (var tcPassengerFareFieldIndex1527 = 0; tcPassengerFareFieldIndex1527 < tcPassengerFareFieldListLen1527; tcPassengerFareFieldIndex1527++) {
    var tcPassengerFareFieldData1527 = tcPassengerFareFieldList1527[tcPassengerFareFieldIndex1527];
    if (tcPassengerFareFieldData1527['passengerFareShowField'] != null == true) {
      /** @desc Tarifa */
      var MSG_UNNAMED_2108 = goog.getMsg('Tarifa');
      output.append('<div class="', goog.getCssName('ux-common-grid-row'), '"><div class="', goog.getCssName('ux-common-grid-col9'), '">', MSG_UNNAMED_2108, '</div><div class="', goog.getCssName('ux-common-grid-col3'), '">', soy.$$escapeHtml(tcPassengerFareFieldData1527['passengerFareShowField']), '</div></div>');
    }
  }
  var tcPassengerFareFieldList1543 = opt_data.tcPassengerTypeField['tcPassengerFareField'];
  var tcPassengerFareFieldListLen1543 = tcPassengerFareFieldList1543.length;
  for (var tcPassengerFareFieldIndex1543 = 0; tcPassengerFareFieldIndex1543 < tcPassengerFareFieldListLen1543; tcPassengerFareFieldIndex1543++) {
    var tcPassengerFareFieldData1543 = tcPassengerFareFieldList1543[tcPassengerFareFieldIndex1543];
    if (tcPassengerFareFieldData1543['passengerIvaShowField'] != null == true) {
      /** @desc Iva de la tarifa  */
      var MSG_UNNAMED_2110 = goog.getMsg('Iva de la tarifa');
      output.append('<div class="', goog.getCssName('ux-common-grid-row'), '"><div class="', goog.getCssName('ux-common-grid-col9'), '">', MSG_UNNAMED_2110, '</div><div class="', goog.getCssName('ux-common-grid-col3'), '">', soy.$$escapeHtml(tcPassengerFareFieldData1543['passengerIvaShowField']), '</div></div>');
    }
  }
  var tcPassengerFareFieldList1559 = opt_data.tcPassengerTypeField['tcPassengerFareField'];
  var tcPassengerFareFieldListLen1559 = tcPassengerFareFieldList1559.length;
  for (var tcPassengerFareFieldIndex1559 = 0; tcPassengerFareFieldIndex1559 < tcPassengerFareFieldListLen1559; tcPassengerFareFieldIndex1559++) {
    var tcPassengerFareFieldData1559 = tcPassengerFareFieldList1559[tcPassengerFareFieldIndex1559];
    if (tcPassengerFareFieldData1559['passengerTaShowField'] != null == true) {
      /** @desc Tarifa Administrativa */
      var MSG_UNNAMED_2112 = goog.getMsg('Tarifa Administrativa');
      output.append('<div class="', goog.getCssName('ux-common-grid-row'), '"><div class="', goog.getCssName('ux-common-grid-col9'), '">', MSG_UNNAMED_2112, '</div><div class="', goog.getCssName('ux-common-grid-col3'), '">', soy.$$escapeHtml(tcPassengerFareFieldData1559['passengerTaShowField']), '</div></div>');
    }
  }
  var tcPassengerFareFieldList1575 = opt_data.tcPassengerTypeField['tcPassengerFareField'];
  var tcPassengerFareFieldListLen1575 = tcPassengerFareFieldList1575.length;
  for (var tcPassengerFareFieldIndex1575 = 0; tcPassengerFareFieldIndex1575 < tcPassengerFareFieldListLen1575; tcPassengerFareFieldIndex1575++) {
    var tcPassengerFareFieldData1575 = tcPassengerFareFieldList1575[tcPassengerFareFieldIndex1575];
    if (tcPassengerFareFieldData1575['passengerIvaTaShowField'] != null == true) {
      /** @desc Iva Tarifa Administrativa */
      var MSG_UNNAMED_2114 = goog.getMsg('Iva Tarifa Administrativa');
      output.append('<div class="', goog.getCssName('ux-common-grid-row'), '"><div class="', goog.getCssName('ux-common-grid-col9'), '">', MSG_UNNAMED_2114, '</div><div class="', goog.getCssName('ux-common-grid-col3'), '">', soy.$$escapeHtml(tcPassengerFareFieldData1575['passengerIvaTaShowField']), '</div></div>');
    }
  }
  var tcPassengerFareFieldList1591 = opt_data.tcPassengerTypeField['tcPassengerFareField'];
  var tcPassengerFareFieldListLen1591 = tcPassengerFareFieldList1591.length;
  for (var tcPassengerFareFieldIndex1591 = 0; tcPassengerFareFieldIndex1591 < tcPassengerFareFieldListLen1591; tcPassengerFareFieldIndex1591++) {
    var tcPassengerFareFieldData1591 = tcPassengerFareFieldList1591[tcPassengerFareFieldIndex1591];
    if (tcPassengerFareFieldData1591['passengerTaxAirportShowField'] != null == true) {
      /** @desc Tasa Aeroportuaria */
      var MSG_UNNAMED_2116 = goog.getMsg('Tasa Aeroportuaria');
      output.append('<div class="', goog.getCssName('ux-common-grid-row'), '"><div class="', goog.getCssName('ux-common-grid-col9'), '">', MSG_UNNAMED_2116, '</div><div class="', goog.getCssName('ux-common-grid-col3'), '">', soy.$$escapeHtml(tcPassengerFareFieldData1591['passengerTaxAirportShowField']), '</div></div>');
    }
  }
  var tcPassengerFareFieldList1607 = opt_data.tcPassengerTypeField['tcPassengerFareField'];
  var tcPassengerFareFieldListLen1607 = tcPassengerFareFieldList1607.length;
  for (var tcPassengerFareFieldIndex1607 = 0; tcPassengerFareFieldIndex1607 < tcPassengerFareFieldListLen1607; tcPassengerFareFieldIndex1607++) {
    var tcPassengerFareFieldData1607 = tcPassengerFareFieldList1607[tcPassengerFareFieldIndex1607];
    if (tcPassengerFareFieldData1607['passengerOtherShowField'] != null == true) {
      /** @desc Otros impuestos */
      var MSG_UNNAMED_2118 = goog.getMsg('Otros impuestos');
      output.append('<div class="', goog.getCssName('ux-common-grid-row'), '"><div class="', goog.getCssName('ux-common-grid-col9'), '">', MSG_UNNAMED_2118, '</div><div class="', goog.getCssName('ux-common-grid-col3'), '">', soy.$$escapeHtml(tcPassengerFareFieldData1607['passengerOtherShowField']), '</div></div>');
    }
  }
  return opt_sb ? '' : output.toString();
};


flights.template.results.popup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  /** @desc Detalle del Vuelo */
  var MSG_UNNAMED_2120 = goog.getMsg('Detalle del Vuelo');
  output.append('<div class="', goog.getCssName('ui-widget-overlay-popup'), '" style="display: none;"><div class="', goog.getCssName('flights-popup'), ' ', goog.getCssName('popup-detail'), '  ', goog.getCssName('flights-popup-bottom'), ' ', goog.getCssName('background-color'), '"><div class="', goog.getCssName('popup-border'), '"></div><div class="', goog.getCssName('popup-container'), '"><div class="', goog.getCssName('popup-wrapper'), '"><div class="', goog.getCssName('popup-content'), '"><div class="', goog.getCssName('detailPopup'), '"><div class="', goog.getCssName('clusterPopup2'), ' ', goog.getCssName('newClusterPopup2'), '"><div class="', goog.getCssName('cluster-contentPopup'), ' ', goog.getCssName('flights-clusterPopup'), '"><div class="', goog.getCssName('itinerariesPopup'), '"><div class="', goog.getCssName('itineraries-containerPopup'), '"><div class="', goog.getCssName('sub-clusterPopup'), ' ', goog.getCssName('outboundPopup'), '"><div class="', goog.getCssName('itemPopup'), ' ', goog.getCssName('dataPopup'), '"><div class="', goog.getCssName('popup-header'), '"><span class="', goog.getCssName('cityPopupTitle'), '">', MSG_UNNAMED_2120, '</span></div></div><div class="', goog.getCssName('popup-inner-content'), '"></div></div></div></div></div></div></div></div></div></div><span class="', goog.getCssName('popup-close-button'), ' ', goog.getCssName('popup-close'), '">×</span></div></div>');
  return opt_sb ? '' : output.toString();
};


flights.template.results.popupContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  /** @desc Aerolinea */
  var MSG_UNNAMED_2122 = goog.getMsg('Aerolinea');
  /** @desc Vuelo */
  var MSG_UNNAMED_2124 = goog.getMsg('Vuelo');
  /** @desc Paradas */
  var MSG_UNNAMED_2126 = goog.getMsg('Paradas');
  /** @desc SinParada */
  var MSG_UNNAMED_2128 = goog.getMsg('SinParada');
  /** @desc Tiempo de vuelo */
  var MSG_UNNAMED_2130 = goog.getMsg('Tiempo de vuelo');
  /** @desc Sale de */
  var MSG_UNNAMED_2132 = goog.getMsg('Sale de');
  /** @desc  Llega a */
  var MSG_UNNAMED_2134 = goog.getMsg('Llega a');
  /** @desc Hora de salida */
  var MSG_UNNAMED_2136 = goog.getMsg('Hora de salida');
  /** @desc Hora de llegada */
  var MSG_UNNAMED_2138 = goog.getMsg('Hora de llegada');
  /** @desc Horarios en hora local de cada ciudad */
  var MSG_UNNAMED_2140 = goog.getMsg('Horarios en hora local de cada ciudad');
  var tcFlightSegmentFieldList1679 = opt_data.tcAirItineraryField['tcFlightSegmentField'];
  var tcFlightSegmentFieldListLen1679 = tcFlightSegmentFieldList1679.length;
  for (var tcFlightSegmentFieldIndex1679 = 0; tcFlightSegmentFieldIndex1679 < tcFlightSegmentFieldListLen1679; tcFlightSegmentFieldIndex1679++) {
    var tcFlightSegmentFieldData1679 = tcFlightSegmentFieldList1679[tcFlightSegmentFieldIndex1679];
    output.append('<div class="', goog.getCssName('popup-content'), '"><div class="', goog.getCssName('detail'), '"><div class="', goog.getCssName('segment'), '"><ul class="', goog.getCssName('detail-info'), '"><li class="', goog.getCssName('itinerary'), '"><span class="', goog.getCssName('location'), '">', MSG_UNNAMED_2122, ':<span class="', goog.getCssName('bold'), '">', soy.$$escapeHtml(tcFlightSegmentFieldData1679['airLineOperatedField']), '</span>&nbsp;|&nbsp;', MSG_UNNAMED_2124, ': <span class="', goog.getCssName('number'), '"><span class="', goog.getCssName('bold'), '">', soy.$$escapeHtml(tcFlightSegmentFieldData1679['numberFlightField']), '</span></span></span></li><li class="', goog.getCssName('data'), '"><span class="', goog.getCssName('name'), '"><span class="', goog.getCssName('bold'), '">', MSG_UNNAMED_2126, '</span><span class="', goog.getCssName('bold'), '">', MSG_UNNAMED_2128, '</span><br></span></li><li class="', goog.getCssName('data'), '"><span class="', goog.getCssName('name'), '"><span class="', goog.getCssName('bold'), '">', MSG_UNNAMED_2130, '</span><span>', soy.$$escapeHtml(tcFlightSegmentFieldData1679['estimatedTimeField']), '</span></span><span class="', goog.getCssName('airline'), '"><span class="', goog.getCssName('logoPequeño'), '"></span><img src="http://co.staticontent.com/img-versioned/1.23.47/common/airlines/25x25/', soy.$$escapeHtml(tcFlightSegmentFieldData1679['airLineOperatedField']), '.png" onerror="this.src=\'http://search.technocloud.com.co/static/images/airline/00.gif\'" alt="Avianca"></span></li><li class="', goog.getCssName('itinerary'), '"><span class="', goog.getCssName('location'), '">', MSG_UNNAMED_2132, '<span class="', goog.getCssName('bold'), '">', soy.$$escapeHtml(tcFlightSegmentFieldData1679['departureCityField']), '</span>-<span class="', goog.getCssName('bold'), '">', soy.$$escapeHtml(tcFlightSegmentFieldData1679['departureAirportNameField']), '</span></span><span class="', goog.getCssName('date'), '"><span>', soy.$$escapeHtml(tcFlightSegmentFieldData1679['departureDateField']), '</span></span></li><li class="', goog.getCssName('itinerary'), '"><span class="', goog.getCssName('location'), '">', MSG_UNNAMED_2134, '<span class="', goog.getCssName('bold'), '">', soy.$$escapeHtml(tcFlightSegmentFieldData1679['arrivalCityNameField']), '</span>-<span class="', goog.getCssName('bold'), '">', soy.$$escapeHtml(tcFlightSegmentFieldData1679['arrivalAirPortNameField']), '</span></span><span class="', goog.getCssName('date'), '"><span>', soy.$$escapeHtml(tcFlightSegmentFieldData1679['arrivalDateField']), '</span></span></li></ul></div><span class="', goog.getCssName('time'), '">', MSG_UNNAMED_2136, ':<span class="', goog.getCssName('bold'), '">', soy.$$escapeHtml(tcFlightSegmentFieldData1679['departureTimeField']), '</span>&nbsp;|&nbsp;', MSG_UNNAMED_2138, ':<span class="', goog.getCssName('bold'), '">', soy.$$escapeHtml(tcFlightSegmentFieldData1679['arrivalTimeField']), '</span></span><div class="', goog.getCssName('detail-footer'), '"><div class="', goog.getCssName('bottom-box'), '"><span class="', goog.getCssName('detail-local-hour'), '">', MSG_UNNAMED_2140, '</span><div class="', goog.getCssName('baggage'), '"></div></div></div></div></div>');
  }
  return opt_sb ? '' : output.toString();
};
