
set back=%cd%
for /d %%a in (./apps/*) do (
cd %back%
cd apps/%%a
cd
yarn
echo installed yarn on %cd% == %back%
)
cd %back%
yarn