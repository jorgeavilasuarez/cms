java -jar "..\..\tools\compilers\XtbGenerator\XtbGenerator.jar"  ^
--lang %1 ^
--translations_file ..\translations\%1\messages.xtb ^
--xtb_output_file ..\translations\%1\messages.xtb ^
--js ..\precompiled\TPL_FLIGHTS.js ^
--js ..\js\search.js ^
--js ..\js\results.js ^
--js ..\js\register.js 