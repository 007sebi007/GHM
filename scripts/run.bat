@echo off
color 5
cd ../server
@echo on
START /B npm run server
@echo off
color 5
cd ../app
@echo on
START /B npm run start
@echo off
color 5
cd ../radar
@echo on
START /B electron .
@echo off
color 5
START /B "" http://localhost:8080/dashboard/live
@echo on