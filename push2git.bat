@echo off
set root=C:\Users\nilanjan.chakraborty\Desktop\GIT
set msg="Change commit done on %date% at %time% IST"
cd /d %root%
git add *
git commit -m %msg%
git push