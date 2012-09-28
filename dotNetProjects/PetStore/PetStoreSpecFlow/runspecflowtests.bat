@echo off
echo [%1] [%2] [%3]
nunit-console %1

echo Nunit Report Generating...
specflow.exe nunitexecutionreport %2 /xmlTestResult:%3

echo Generating stepdefinition report
specflow.exe stepdefinitionreport %2
if NOT %errorlevel% == 0 (
	echo "Error generating report - %errorlevel%"
	GOTO :exit
)
if %errorlevel% ==0 TestResult.html
:exit