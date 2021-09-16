#!/bin/bash
rm -rf $(pwd)/files/*
wget -O $(pwd)/files/$1.$2 "https://i.4cdn.org/$3/$1.$2"
ffmpeg -y -i $(pwd)/files/$1.$2 $(pwd)/files/$1M.mp4
