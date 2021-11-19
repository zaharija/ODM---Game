const { tags } = require('./tags')

class Player {
  constructor() {
    this.tags = [
      [0, "helping hand", ["touch", "diplomatic", "helpful"]],
      [0, "wounded", ["wounded"]],
      [0, "cigars", ["wounded"]],
      [0, "silver revolver", ["wounded"]],
      [0, "ornate knife", ["wounded"]],
      [0, "arcane diary", ["wounded"]],
      [0, "animal bone", ["wounded"]],
      [0, "diseased", ["wounded"]],
    ]
  }
  setGender(gender) {
    if (gender === "f") {
      this.gender = "f"
    } else if (gender === "m") {
      this.gender = "m"
    } else {
      this.gender = "n"
    }
  }
  getGender() {
    return this.gender
  }
  addTag(tag) {
    for (let i = 0; i < this.tags.length; i++) {
      if (this.tags[i][1] === tag) {
        this.tags[i][0] = 1
      }
    }
  }
  removeTag(tag) {
    for (let i = 0; i < this.tags.length; i++) {
      if (this.tags[i][1] === tag) {
        this.tags[i][0] = 0
      }
    }
  }
  clearInventory() {
    for (let i = 0; i < this.tags.length; i++) {
      this.tags[i][0] = 0
    }
  }
  getTagName(id) {
    return this.tags[0][1]
  }
  getActiveTags() {
    const t = []
    for (let i = 0; i < this.tags.length; i++) {
      if (this.tags[i][0] === 1) {
        t.push(this.tags[i])
      }
    }
    return t
  }

  getActiveTag(tagName) {
    for (let i = 0; i < this.tags.length; i++) {
      if(this.tags[i][1] === tagName && this.tags[i][0] === 1) {
        return this.tags[i]
      }
    }
  }
}

module.exports = { Player }
