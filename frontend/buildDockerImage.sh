#!/bin/sh
npm run build && docker build -t shoppingcart:frontend .
