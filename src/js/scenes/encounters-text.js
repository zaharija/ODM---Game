const getEncounterText = player => {
  return text = [
    [
      [
        function() {
          return "A Starved Coyote..."
        },
        function() {
          return [
            [1, ""],
            [1, ""],
            [1, ""]
          ]
        },
        function() {
          return true
        }
      ],
      [
        function() {
          return "The rode you travel is not well maintaind. The bones of the unfortunate beasts decorate the dry earth. As they break beneath your feet, you hear a melancholic whine... It is a loathsome best. Judging by it's sluggish movements and prominent bones, this coyote didn't taste flesh in a long time."
        },
        function() {
          return [
            [12, "1.) >Avoid the coyote and continue.", "environment"],
            [2, "2.) The ground around you.", "environment"],
            [6, "3.) Yhe coyote.", "environment"],
          ]
        },
        function() {
          return true
        }
      ],
      [
        function() {
          if(!player.getActiveTag("animal bone")) {
            return "The ground around you is dead and dry. Bone of some dead animal extrudes from one of the cracks in the road. Living tend to avoid this place."
          }
          else {
            return "The ground around you is dead and dry. Living tend to avoid this place."
          }
        },
        function() {
          if(!player.getActiveTag("animal bone")) {
            return [
              [12, "1.) >Avoid the coyote and continue.", "environment"],
              [3, "2.) The bone", "environment"],
              [6, "3.) Yhe coyote.", "environment"],
            ]
          }
          else {
            return [
              [12, "1.) >Avoid the coyote and continue.", "environment"],
              [6, "2.) Yhe coyote.", "environment"],
            ]
          }
        },
        function() {
          return true
        }
      ],
      [
        function() {
          return "You inspect the dirty bone. There is still some meat left on it."
        },
        function() {
          return [
            [4, "1.) >Pick up the animal's bone. (Gain Trait)", "environment"],
            [5, "2.) >Feast on the flesh. (Gain Trait)", "environment"],
            [1, "3.) >Drop the bone.", "environment"],
          ]
        },
        function(choice) {
          if(choice === 0) {
            player.addTag("animal bone")
          }
          else if(choice === 1) {
            player.addTag("diseased")
          }
          return true
        }
      ],
      [
        function() {
          return "You pick up the rotten bone. You newer know where it might prove usefull."
        },
        function() {
          return [
            [1, "", "environment"],
            [1, "", "environment"],
            [1, "", "environment"],
          ]
        },
        function() {
          return true
        }
      ],
      [
        function() {
          return "You bite in the rotting flesh. The horrid taste overwhelms you. You hold your breath and force yourself to swallow the odious supstance. You are now diseased..."
        },
        function() {
          return [
            [12, "1.) >Avoid the coyote and continue.", "environment"],
            [6, "2.) Yhe coyote.", "environment"],
          ]
        },
        function() {
          return true
        }
      ],
      [
        function() {
          if(player.getActiveTag("wounded")) {
            return "You approach the starving beast. It emits a hungry growl and begins to drool. It looks at you with glimmer in its eyes."
          }
          else {
            return "You approach the hungry beast. It emmits a thretening growl, warning you to not get closer."
          }
        },
        function() {
          const r = [
            [1, "1.) Get away from the coyote.", "environment"],
            [7, "2.) Pet the coyote."],
          ]
          let n = 3
          if(player.getActiveTag("animal bone")) {
            r.push([11, `${n}.) Give coyote the bone. (Animal Bone) (Remove Card) (Add Card)`, "card"])
            n++
          }
          if(player.getActiveTag("silver revolver")) {
            r.push([9, `${n}.) Shoot at the coyote. (Silver Revolver) `, "card"])
            n++
          }
          if(player.getActiveTag("ornate knife")) {
            r.push([10, `${n}.) Slice at the coyote. (Ornate Knife) `, "card"])
            n++
          }
          return r
        },
        function() {
          return true
        }
      ],
      [
        function() {
          let text = "You hold your hand to pet the beast. Sudenly it snaps and bites your hand..."
          if(player.getActiveTag("wounded")) {
            text = "You hold your hand to pet the beast. The coyote looks at you with a horrid grin. It bites in your flesh. Exosted from your previous wound, you are unable to resit the attack from the hunhry beast. You die."
          }
          return text
        },
        function() {
          if(player.getActiveTag("wounded")) {
            return [
              [0, ""],
              [0, ""],
              [0, ""],
            ]
          }
          const r = [
            [8, "1.) Try to get away."],
          ]
          let n = 2
          if(player.getActiveTag("silver revolver")) {
            r.push([9, `${n}.) Shoot at the coyote. (Silver Revolver) `, "card"])
            n++
          }
          if(player.getActiveTag("ornate knife")) {
            r.push([10, `${n}.) Slice at the coyote. (Ornate Knife) `, "card"])
            n++
          }
        },
        function() {
          return true
        }
      ],
      [
        function() {
          let text = "You turn to run away. The coyote, frenzied by the sweet taste of blood, bites into your leg. You fall, and feel the sharp teeth sunk into your back as you bleed to death."
          return text
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
      [
        function() {
          let text = "You take out your revolver and shoot the coyote. It takes one bullet to kill the poor beast. With it's last breath, it cries out the final whine. It's a sigh of relief."
          return text
        },
        function() {
          return [
            [12, "1.) >Continue your jurney.", "environment"]
          ]
        },
        function() {
          return true
        }
      ],
      [
        function() {
          let text = "You take out your dagger and slice at the coyote. The beasts are most deadly when they are atarved. It takes few stabs till thhe beast stops moving. You won't leve this struggle uscared tho. Your arms sufferd deep cuts from the coyotes jaws."
          if ("wounded") {
            text = "You take out your dagger and slice at the coyote. The beasts are most deadly when they are atarved. You stab the coyote mustiple times, but the beast is persistant. It bit's into your existing wound and pulls out a chunk of your flesh. You scream as it jumps on your upper torso, biting into your neck as you fall on the ground; dead."
          }
          return text
        },
        function() {
          if(player.getActiveTag("wounded")) {
            return [
              [0, ""],
              [0, ""],
              [0, ""],
            ]
          }
          else {
            return [
              [12, "1.) >Continue your jurney.", "environment"]
            ]
          }
        },
        function() {
          return true
        }
      ],
      [
        function() {
          let text = "You give the coyote the dusty bone. It scrowls at first, but then hastly grabs the bone from your hand. It quckly bites into a small pece of meet left on it's end. It looks at you with thankfool look and carefully walk away."
          return text
        },
        function() {
          if(player.getActiveTag("wounded")) {
            return [
              [0, ""],
              [0, ""],
              [0, ""],
            ]
          }
          else {
            return [
              [12, "1.) >Continue your jurney.", "environment"]
            ]
          }
        },
        function() {
          return true
        }
      ],
      [
        function() {
          let text = "You continue your jurney..."
          return text
        },
        function() {
          return [
            [0, ""],
            [0, ""],
            [0, ""],
          ]
        },
        function() {
          return 'last'
        }
      ],
    ],
    [
      [
        function() {
          let text = "A deserted ditch..."
          return text
        },
        function() {
          return [
            [1, "1"],
            [1, "2"],
            [1, "3"],
          ]
        },
        function() {
          return true
        }
      ],
      [
        function() {
          let text = "Ditch 2"
          return text
        },
        function() {
          return [
            [0, ""],
            [0, ""],
            [0, ""],
          ]
        },
        function() {
          return 'last'
        }
      ],
    ]
  ]
}

//player.getActiveTabs()[0]
module.exports = { getEncounterText }
