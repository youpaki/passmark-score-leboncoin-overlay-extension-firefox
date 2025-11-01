@echo off
echo ========================================
echo PassMark Extension - Setup Helper
echo ========================================
echo.
echo IMPORTANT: For PERMANENT installation:
echo   1. Download Firefox Developer Edition
echo   2. Visit: https://www.mozilla.org/firefox/developer/
echo   3. It's free and runs alongside regular Firefox
echo   4. Extensions stay active after browser restarts!
echo.
echo Read PERMANENT-INSTALL.md for detailed instructions.
echo.
echo Press any key to continue with setup...
pause >nul
cls
echo.
echo Step 1: Generate Icons
echo Opening icon-converter.html in your default browser...
echo.
start "" "icon-converter.html"
timeout /t 3 >nul
echo.
echo Step 2: After downloading icons, press any key to open Firefox
pause >nul
echo.
echo Which Firefox do you want to use?
echo   [1] Firefox Developer Edition (PERMANENT - Recommended)
echo   [2] Regular Firefox (Temporary - Resets on close)
echo.
set /p choice="Enter 1 or 2: "

if "%choice%"=="1" (
    echo.
    echo Opening Firefox Developer Edition debugging page...
    start firefox-developer "about:debugging#/runtime/this-firefox"
    echo.
    echo TIP: If Developer Edition doesn't open, download it first:
    echo https://www.mozilla.org/firefox/developer/
) else (
    echo.
    echo Opening regular Firefox debugging page...
    echo NOTE: Extension will be removed when you close Firefox
    start firefox "about:debugging#/runtime/this-firefox"
)

timeout /t 2 >nul
echo.
echo Step 3: In Firefox:
echo   1. Click "Load Temporary Add-on..."
echo   2. Select the manifest.json file from this folder
echo   3. The extension will be loaded!
echo.
echo Step 4: Test the extension
echo Press any key to open the test page...
pause >nul

if "%choice%"=="1" (
    start firefox-developer "test-page.html"
) else (
    start firefox "test-page.html"
)

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
if "%choice%"=="1" (
    echo Extension installed in Firefox Developer Edition
    echo It will stay active permanently!
) else (
    echo Extension installed in regular Firefox
    echo NOTE: It will be removed when Firefox closes
    echo.
    echo For permanent installation:
    echo - Download Firefox Developer Edition
    echo - Or read PERMANENT-INSTALL.md
)
echo.
echo Go to leboncoin.fr and search for hardware!
echo.
pause
