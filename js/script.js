// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tymofii
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates Area Of Trapezoid
 */
function calculateAreaOfTrapezoid() {
  // input
  const aBase = parseInt(document.getElementById('a-base').value)
  const bBase = parseInt(document.getElementById('b-base').value)
  const height = parseInt(document.getElementById('height-mm').value)


  // process
  const AreaOfTrapezoid = [(aBase + bBase) / 2] * height

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + AreaOfTrapezoid + ' mm²'
}
