@pause
@echo off
color 5
cd ../server
@echo on
START /B npm run server
@pause
@echo off
color 5
cd ../app
@echo on
START /B npm run start
@pause
@echo off
color 5
cd ../radar
@echo on
START /B electron .
@pause