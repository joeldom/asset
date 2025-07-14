@echo off
title Cache and Memory Cleanup Script
echo Clearing System Cache and Freeing Memory...

:: Flush DNS Cache
ipconfig /flushdns

:: Clear Temporary Files
del /q /f /s "%TEMP%\*.*"
del /q /f /s "C:\Windows\Temp\*.*"

:: Clear Prefetch Cache
del /q /f /s "C:\Windows\Prefetch\*.*"

:: Stop and Restart Windows Explorer to Free Some Memory
taskkill /f /im explorer.exe
start explorer.exe

:: Clear System File Cache (Requires Admin)
echo Clearing System File Cache...
echo y | cleanmgr /sagerun:1

echo Cleanup Complete!
pause