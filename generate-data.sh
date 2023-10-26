#!/bin/sh

cd ./flisa-mat-dataset
python3 ./generate_general_dataset.py
mv ./generated/resturants_flisa.json ../data

cd ..

