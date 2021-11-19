'use strict';

const { Player } = require('./cards/player')
const intro = require('./scenes/intro')

const player = new Player()

intro(player)
