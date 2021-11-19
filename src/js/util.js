const Evoke = require('evoke.js').default
const { getText } = require('./scenes/intro-text')
const { getEncounterText } = require('./scenes/encounters-text')

const generateText = (id, player, encounter = false, encId ) => {
  let text = []
  if(!encounter) {
    text = getText(player)
  }
  else {
    text = getEncounterText(player)[encId]
  }
  const choiceDivInd = []
  const root = Evoke.create('section', 'body', 'newContext', undefined, 'theme-dark', undefined, {style: 'display: flex; flex-direction: column; justify-content: space-between;'})

  const screenDiv = Evoke.create('div', root, 'newContext', 'screenDiv', 'theme-dark', undefined, {style: 'display: flex; flex-direction: row; justify-content: center;'})

  const screenParagraph = Evoke.create('p', screenDiv, 'newContext', 'screenParagraph', ['no-margin', 'p-2', 'col-md-12'], text[id][0]())

  const choiceDiv = Evoke.create('div', root, 'newContext', 'choiceDiv', 'theme-dark', undefined, {style: 'display: flex; flex-direction: column;'})
  for (let i = 0; i < text[id][1]().length; i++) {
    choiceDivInd[i] = Evoke.create('p', choiceDiv, 'newContext', undefined, ['no-margin', 'p-2', 'col-md-12'], undefined, {style: 'display: flex; flex-direction: row; justify-content: center;'})
    Evoke.create('p', choiceDivInd[i], 'newContext', undefined, ['no-margin', 'p-2', 'col-md-12'], text[id][1]()[i][1], {style: 'display: flex; flex-direction: row; justify-content: center;'})
  }
}

const getResponseId = (choice, currentNodeId, player, encounter = false, encId) => {
  if(!encounter) {
    const text = getText(player)
    return text[currentNodeId][1]()[choice][0]
  }
  else {
    const text = getEncounterText(player)[encId]
    return text[currentNodeId][1]()[choice][0]
  }
}

const getResponseNumber = (currentNodeId, player, encounter = false, encId) => {
  if(!encounter) {
    const text = getText(player)
    return text[currentNodeId][1]().length
  }
  else {
    const text = getEncounterText(player)[encId]
    return text[currentNodeId][1]().length
  }
}

const exeChoiceFunction = (choice, currentNodeId, player, encounter = false, encId) => {
  if(!encounter) {
    const text = getText(player)
    if (typeof text[currentNodeId][2] === "function" ) {
      return text[currentNodeId][2](choice)
    }
  }
  else {
    const text = getEncounterText(player)[encId]
    if (typeof text[currentNodeId][2] === "function" ) {
      return text[currentNodeId][2](choice)
    }
  }
}

const clearText = _ => {
  Evoke.deleteContext('newContext')
}

module.exports = { generateText, clearText, getResponseId, getResponseNumber, exeChoiceFunction }
