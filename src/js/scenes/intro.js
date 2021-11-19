const { generateText, clearText, getResponseId, getResponseNumber, exeChoiceFunction } = require('../util')

const intro = player => {
  let nodeId = 0
  let newNodeId = 0
  let enc = false
  let encId = 0
  let lastStoryNodeId = 0
  let newEnc = true
  document.addEventListener('keydown', logKey);

  generateText(nodeId, player)
  function logKey(e) {
    let pressed = e.key
    if(+pressed <= getResponseNumber(nodeId, player, enc, encId) && +pressed > 0 ) {
      pressed = +pressed
      pressed--
      newNodeId = getResponseId(pressed, nodeId, player, enc, encId)
      enc = exeChoiceFunction(pressed, nodeId, player, enc, encId)
      if (enc && newEnc) {
        encId = Math.round(Math.random())
        console.log(encId)
        lastStoryNodeId = newNodeId
        newNodeId = 0
        newEnc = false
      }
      if (enc === 'last') {
        newEnc = trusted
        enc = false
        newNodeId = lastStoryNodeId
      }
      clearText()
      generateText(newNodeId, player, enc, encId)

      nodeId = newNodeId
    }
  }
}

module.exports = intro
