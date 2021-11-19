const getText = player => {
  return text = [
    [
      function() {
        return "You wake up in a ditch. Cold air shivers down your spine as you feel warm liquid dripping down your coat. The pain is immense and you hold your hand to a wound... You're in luck. The bullet just grazed you. \"You'll survive...\""
      },
      function() {
        return [
          [1, ""],
          [1, ""],
          [1, ""]
        ]
      },
      function(choice) {
        player.clearInventory()
        player.addTag("wounded")
      }
    ],
    [
      function() {
        return "\"Not a lot of people get up from a fall this long...\" The dark skinned man grins as he gives you his hand. \"Don't know if by luck or the devine intervention, but you lived to see another noon.\" He reaches at you with his hand."
      },
      function() {
        return [
          [5, "1.) >Take his hand. (Gain Trait)", "environment"],
          [2, "2.) The ground around you.", "environment"],
          [3, "3.) Your wound.", "environment"],
          [4, "4.) The man.", "environment"]
        ]
      }
    ],
    [
      function() {
        return "The dirt is rugged and dry. The only life you see are a few strains of grass scattered throughout the dusty horizon. Around you, the crimson red paints the desert ground."
      },
      function() {
        return [
          [5, "1.) >Take his hand. (Gain Trait)", "environment"],
          [3, "2.) Your wound.", "environment"],
          [4, "3.) The man.", "environment"]
        ]
      },
      function(choice) {
        if(choice === 0) {
          player.addTag("helping hand")
        }
      }
    ],
    [
      function() {
        return "The bullet hit your side, the wound is not fatal... though, you are still bleeding. \"Let me help you with this inconvenience friend.\" The man says, still holding his hands towards you."
      },
      function() {
        return [
          [5, "1.) >Take his hand. (Gain Trait)", "environment"],
          [2, "2.) The ground around you.", "environment"],
          [4, "3.) The man.", "environment"]
        ]
      },
      function(choice) {
        if(choice === 0) {
          player.addTag("helping hand")
        }
      }
    ],
    [
      function() {
        return "You look at your new acquaintance. He wears a brown weathered suit over a sleak formal white shirt. \"Don't judge a man by his coat Angel.\" He says. \"The first glance can be deceiving. The shine on my shoes however... or the grip of my hand... The devil is in the details my friend. "
      },
      function() {
        return [
          [5, "1.) >Take his hand. (Gain Trait)", "environment"],
          [3, "2.) Your wound.", "environment"],
          [2, "3.) The ground around you.", "environment"]
        ]
      },
      function(choice) {
        if(choice === 0) {
          player.addTag("helping hand")
        }
      }
    ],
    [// 5
      function() {
        return "You take a man's hand and he helps you get on your feet. \"Six-hundred dollars, so that's how much a persons soul is worth now days.\" He shows you a wanted poster. What does it read? "
      },
      function() {
        return [
          [8, "1.) Angel, wanted dead or alive. Price on her head 600$", "environment"],
          [6, "2.) Next", "environment"],
        ]
      },
      function(choice) {
        if(choice === 0) {
          player.setGender("f")
        }
      }
    ],
    [
      function() {
        return "You take a man's hand and he helps you get on your feet. \"Six-hundred dollars, so that's how much a persons soul is worth now days.\" He shows you a wanted poster. What does it read? "
      },
      function() {
        return [
          [8, "1.) Angel, wanted dead or alive. Price on his head 600$", "environment"],
          [7, "2.) Next", "environment"],
        ]
      },
      function(choice) {
        if(choice === 0) {
          player.setGender("m")
        }
      }
    ],
    [
      function() {
        return "You take a man's hand and he helps you get on your feet. \"Six-hundred dollars, so that's how much a persons soul is worth now days.\" He shows you a wanted poster. What does it read? "
      },
      function() {
        return [
          [8, "1.) Angel, wanted dead or alive. Price on their head 600$", "environment"],
          [5, "2.) Next", "environment"],
        ]
      },
      function(choice) {
        if(choice === 0) {
          player.setGender("n")
        }
      }
    ],
    [
      function() {
        const g = player.getGender()
        if(g === 'f') {
          return "\"Evil... What man do to a woman. And just for a small peace of paper.\" The man smiles. He gazes at the horizon."
        }
        if(g === 'm') {
          return "\"Evil... What man do to a men. And just for a small peace of paper.\" The man smiles. He gazes at the horizon."
        }
        if(g === 'n') {
          return "\"Evil... What man do to a person. And just for a small peace of paper.\" The man smiles. He gazes at the horizon."
        }
      },
      function() {
        return [
          [15, "1.) >The horizon.", "environment"],
          [9, "2.) The man.", "environment"],
          [11, "3.) Your wound (Remove Trait)", "environment"]
        ]
      },
      function(choice) {
        if(choice === 2) {
          player.removeTag("wounded")
        }
      }
    ],
    [
      function() {
        return "\"You must have made something real nasty to make the head honcho this angry.\""
      },
      function() {
        if(player.getActiveTag("wounded") && !player.getActiveTag("cigars")) {
          return [
            [15, "1.) >The horizon.", "environment"],
            [11, "2.) Your wound (Remove Trait)", "tag"],
            [10, "3.) The Head Honcho.", "environment"],
            [12, "4.) Ask him his story.", "environment"],
          ]
        }
        else if(!player.getActiveTag("wounded") && !player.getActiveTag("cigars")) {
          return [
            [15, "1.) >The horizon.", "environment"],
            [10, "2.) The Head Honcho.", "environment"],
            [12, "3.) Ask him his story.", "environment"],
          ]
        }
        else if(!player.getActiveTag("wounded") && player.getActiveTag("cigars")) {
          return [
            [15, "1.) >The horizon.", "environment"],
            [10, "2.) The Head Honcho.", "environment"],
          ]
        }
        else {
          return [
            [15, "1.) >The horizon.", "environment"],
            [11, "2.) Your wound (Remove Trait)", "tag"],
            [10, "3.) The Head Honcho.", "environment"],
          ]
        }
      },
      function(choice) {
        if(choice === 1) {
          player.removeTag("wounded")
        }
      }
    ],
    [// 10 // 10 // 10
      function() {
        return "\"The cheat who ran this town dry.\" The man giggles. \"And speaking of towns, it's that a way.\" He points at the hamlet in the distance."
      },
      function() {
        if(player.getActiveTag("wounded") && !player.getActiveTag("cigars")) {
          return [
            [15, "1.) >The horizon.", "environment"],
            [12, "2.) Ask him his story.", "environment"],
            [11, "3.) Your wound (Remove Trait)", "tag"]
          ]
        }
        else if(player.getActiveTag("wounded") && player.getActiveTag("cigars")) {
          return [
            [15, "1.) >The horizon.", "environment"],
            [11, "2.) Your wound (Remove Trait)", "tag"]
          ]
        }
        else if(!player.getActiveTag("wounded") && !player.getActiveTag("cigars")) {
          return [
            [15, "1.) >The horizon.", "environment"],
            [12, "2.) Ask him his story.", "environment"],
          ]
        }
        else {
          return [
            [15, "1.) >The horizon. (Gain Trait)", "environment"],
          ]
        }
      },
    ],
    [
      function() {
        return "\"Let me help you with that.\" He hands you a bandage that you apply. The bleeding stops completely. \"There... new as a water that drains down a river.\""
      },
      function() {
        return [
          [15, "1.) >The horizon. (Gain Trait)", "environment"],
          [9, "2.) The man.", "environment"]
        ]
      },
      function(choice) {
        player.removeTag("wounded")
      }
    ],
    [
      function() {
        return "\"I am a simple man... trying to do good to this world.\" He spits at the ground. \"Now... I think you sought something to do.\""
      },
      function() {
        if(player.getActiveTag("wounded")) {
          return [
            [15, "1.) >The horizon. (Gain Trait)", "environment"],
            [10, "2.) The Head Honcho.", "environment"],
            [13, "3.) Something to do.", "environment"],
            [11, "4.) Your wound (Remove Trait)", "environment"]
          ]
        }
        else {
          return [
            [15, "1.) >The horizon. (Gain Trait)", "environment"],
            [10, "2.) The Head Honcho.", "environment"],
            [13, "3.) Something to do.", "environment"],
          ]
        }
      },
    ],
    [
      function() {
        return "\"You was the one bleeding in a ditch, my friend.\" He lights a cigar. \"And since you are stuck here... I suggest you clear your bounty as soon as possible.\" He throws you a pack of cigars."
      },
      function() {
        if(player.getActiveTag("wounded")) {
          return [
            [15, "1.) >The horizon. (Gain Trait)", "environment"],
            [14, "2.) The pack of cigars. (Gain Trait)", "environment"],
            [10, "3.) The Head Honcho.", "environment"],
            [11, "4.) Your wound (Remove Trait)", "environment"]
          ]
        }
        else {
          return [
            [15, "1.) >The horizon. (Gain Trait)", "environment"],
            [14, "2.) The pack of cigars. (Gain Trait)", "environment"],
            [10, "3.) The Head Honcho.", "environment"],
          ]
        }
      },
      function(choice) {
        if(choice === 1) {
          player.addTag("cigars")
        }
      }
    ],
    [
      function() {
        player.addTag("cigars")
        return "You catch the pack. 'A Fair Bargain' - the stranger knows his cigars."
      },
      function() {
        if(player.getActiveTag("wounded")) {
          return [
            [15, "1.) >The horizon. (Gain Trait)", "environment"],
            [10, "2.) The Head Honcho.", "environment"],
            [11, "3.) Your wound (Remove Trait)", "environment"]
          ]
        }
        else {
          return [
            [15, "1.) >The horizon. (Gain Trait)", "environment"],
            [10, "2.) The Head Honcho.", "environment"],
          ]
        }
      }
    ],
    [ // 15
      function() {
        player.addTag("helping hand")
        return "You look around and see the mostly empty desert all around There is a mansion on a hill in the distance. Small town is few hours of walking away. Tick fog eminates from the river on the edges of the horizon. It surrounds the area. \"Stick to the road friend, and don't go jupin' in a river.\""
      },
      function() {
        return [
          [0, "1.) >The Town.", "environment"],
          [16, "2.) Your surroundings.", "environment"],
          [18, "3.) The fog.", "environment"]
        ]
      }
    ],
    [ // 16
      function() {
        if(!player.getActiveTag("silver revolver") && !player.getActiveTag("ornate knife") && !player.getActiveTag("arcane diary")) {
          return "You look around ones more and analyze your surroundings. \"I think that's yours.\" The stranger points at the item on the ground. You recognise it as your..."
        }
        else {
          return "The sun is slowly rising. You look around for any clues, but you find nothing else of value."
        }
      },
      function() {
        if(!player.getActiveTag("silver revolver") && !player.getActiveTag("ornate knife") && !player.getActiveTag("arcane diary")) {
          return [
            [17, "1.) >Silver Revolver. (Gain Trait)", "environment"],
            [17, "2.) >Ornate Knife. (Gain Trait)", "environment"],
            [17, "3.) >Arcane Diary (Gain Trait)", "environment"]
          ]
        }
        else {
          return [
            [0, "1.) >The Town.", "environment"],
            [18, "2.) The fog.", "environment"]
          ]
        }
      },
      function(choice) {
        if(!player.getActiveTag("silver revolver") && !player.getActiveTag("ornate knife") && !player.getActiveTag("arcane diary")) {
          if (choice === 0) {
            player.addTag("silver revolver")
          }
          else if (choice === 1) {
            player.addTag("ornate knife")
          }
          else {
            player.addTag("arcane diary")
          }
        }
      }
    ],
    [ // 17
      function() {
        let tags = player.getActiveTags()
        let tool = ''
        let response = ''
        let pronoun = player.getGender()
        if (pronoun === 'f') {
          pronoun = 'her'
        }
        if (pronoun === 'm') {
          pronoun = 'his'
        }
        if (pronoun === 'n') {
          pronoun = 'their'
        }
        for (let i = 0; i < tags.length; i++) {
          if(tags[i][1] === "silver revolver") {
            tool = tags[i][1]
            response = `\"You know what they say. "What's a cowboy without ${pronoun} gun.\" The man grins.`
          }
          if(tags[i][1] === "ornate knife") {
            tool = tags[i][1]
            response = `\"Made for killing and saving. The outlaw must value ${pronoun} blade.\" The man appreciates the detailed carvings on your knife.`
          }
          if(tags[i][1] === "arcane diary") {
            tool = tags[i][1]
            response = `\"What do an angel packing if not ${pronoun} diary.\" The man whispers. \"I'm sure your knowledge will prove useful in your travels friend.\" `
          }
        }
        return `You walk over to your trusted ${tool} and pick it up. ${response}`
      },
      function() {
        return [
          [0, "1.) >The Town.", "environment"],
          [18, "2.) The fog.", "environment"]
        ]
      }
    ],
    [ // 18
      function() {
        return "You turn to the mist in the distance. \"You'll find nothin' but death there... partner.\""
      },
      function() {
        if(player.getActiveTag("arcane diary")) {
          return [
            [21, "1.) >Go towards the fog.", "environment"],
            [0, "2.) >The Town.", "environment"],
            [16, "3.) Your surroundings.", "environment"],
            [19, "4.) The mist.", "environment"],
            [20, "5.) Death (Arcane Diary)", "trait"]
          ]
        }
        else {
          return [
            [21, "1.) >Go towards the fog.", "environment"],
            [0, "2.) >The Town.", "environment"],
            [16, "3.) Your surroundings.", "environment"],
            [19, "4.) The mist.", "environment"],
          ]
        }
      },
    ],
    [ // 19
      function() {
        return "You ask him about the fog. \"No soul can go there intact... No soul can leave this place... And the man in charge wanna' keep it that way.\""
      },
      function() {
        if(player.getActiveTag("arcane diary")) {
          return [
            [21, "1.) >Go towards the fog.", "environment"],
            [0, "2.) >The Town.", "environment"],
            [16, "3.) Your surroundings.", "environment"],
            [20, "4.) Death (Arcane Diary)", "trait"]
          ]
        }
        else {
          return [
            [21, "1.) >Go towards the fog.", "environment"],
            [0, "2.) >The Town.", "environment"],
            [16, "3.) Your surroundings.", "environment"],
          ]
        }
      },
    ],
    [ // 20
      function() {
        return "You go trough your diary to search for a similar spell. You don't have much luck. \"That is not your ordinary chant. This wall dont go down so easy.\" The stranger frowns."
      },
      function() {
        return [
          [21, "1.) >Go towards the fog.", "environment"],
          [0, "2.) >The Town.", "environment"],
          [16, "3.) Your surroundings.", "environment"],
          [19, "4.) The mist.", "environment"],
        ]
      },
    ],
    [ // 21
      function() {
        return "Travelling towards the fog... Dealing a random encounter!"
      },
      function() {
        return [
          [0, ""],
          [0, ""],
          [0, ""],
        ]
      },
      function() {
        return true
      }
    ],
  ]
}

//player.getActiveTabs()[0]
module.exports = { getText }
