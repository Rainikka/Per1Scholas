const contacts2 = ["ID", "Name", "Occupation", "Age", "\n", 42, "Bruce", "Knight", 41, "\n", 57, "Bob", "Fry Cook", 19, "\n", 63, "Blaine", "Quiz Master", 58, "\n", 98, "Bill", "Doctor\'s Assistant", 26];;

const activeassignedtickets = []
const activeunassignedtickets = []

for (let i = 0; i < contacts2.length; i++) {
  (contacts2[i].assigned_to === "\n")
    ?activeunassignedtickets.push(contacts2[i]) 
    :activeassignedtickets.push(contacts2[i])
  }

console.log(activeassignedtickets, activeunassignedtickets)

const contacts2 = ["ID", "Name", "Occupation", "Age", "\n", 42, "Bruce", "Knight", 41, "\n", 57, "Bob", "Fry Cook", 19, "\n", 63, "Blaine", "Quiz Master", 58, "\n", 98, "Bill", "Doctor\'s Assistant", 26];