::TERCERO TODOS
java -jar ..\..\tools\compilers\closure-stylesheets\closure-stylesheets-20111230.jar ^
--allow-unrecognized-functions ^
--allow-unrecognized-properties ^
--output-renaming-map-format CLOSURE_COMPILED ^
--rename CLOSURE ^
--output-renaming-map ..\precompiled\RENAMING_MAP_FLIGHTS.js ^
--output-file ..\www\en\js\STYLES.css ^
..\..\tools\third_party\closure-library\closure\goog\css\autocomplete.css ^
..\..\tools\third_party\closure-library\closure\goog\css\datepicker.css ^
..\..\tools\third_party\closure-library\closure\goog\css\popupdatepicker.css ^
..\css\colors.css ^
..\css\search.css ^
..\css\results.css ^
..\css\register.css
