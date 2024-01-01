let adjective1 = prompt('Enter an adjective:');
let noun2 = prompt('Enter an noun:');
let verb3 = prompt('Enter an verb ending in -ing:');
let pluralnoun4 = prompt('Enter an plural noun:');
let adverb5 = prompt('Enter an adverb:');
let adjective6 = prompt('Enter an adjective:');
let verb7 = prompt('Enter an verb ending in -ing:');
let noun8 = prompt('Enter an noun:');
let adjective9 = prompt('Enter an adjective:');
let pluralnoun10 = prompt('Enter an plural noun:');
let verb11 = prompt('Enter an verb ending in -ing:');
let adjective12 = prompt('Enter an adjective:');
let noun13 = prompt('Enter an noun:');
let verb14 = prompt('Enter an verb ending in -ing:');
let adjective15 = prompt('Enter an adjective:');
let pluralnoun16 = prompt('Enter an plural noun:');
let verb17 = prompt('Enter an verb ending in -ing:');
let noun18 = prompt('Enter an noun:');
let verb19 = prompt('Enter an verb ending in -ing:');
let adjective20 = prompt('Enter an adjective:');
let adjective21 = prompt('Enter another adjective:');
let verb22 = prompt('Enter an verb ending in -ing:');
let adverb23 = prompt('Enter an adverb:');

let story = `In a ${adjective1} winter wonderland, the ${noun2} trees were ${verb3} with sparkling lights, and the ${pluralnoun4} were busy building snowcastles. Snowflakes fell ${adverb5}, turning the landscape into a ${adjective6} dream.

As I ${verb7} through the snow, I discovered a hidden ${noun8} with a ${adjective9} entrance guarded by talking ${pluralnoun10}. The ${pluralnoun10} challenged me to a ${verb11} contest, but my ${adjective12} belly-flopping skills proved victorious!

After our ${noun13} competition, I followed a ${verb14} path that led to a ${adjective15} clearing where magical creatures were ${pluralnoun16} and playing games. I joined in on the ${verb17} activities and even danced with a ${noun18} of talking snowflakes.

As the day unfolded, a group of ${verb19} arrived, and we all embarked on a ${adjective20} adventure. We sledded down hills, built snowmen with ${adjective21} noses, and had a ${verb22} snowball fight that echoed ${adverb23} through the enchanted valley.

In this ${adjective1} winter wonderland, every moment was filled with ${adjective6}, joy, and ${verb22} memories. As the sun set, the sky painted itself in hues of pink and orange, creating a ${adjective6} scene that would forever remain etched in my ${noun13} memory.

And so, in this ${noun2} wonderland, the magic of winter brought together friends, laughter, and the ${adjective15} beauty of the snowy landscape.`

let madLibOutputDiv = document.querySelector('#madLibOutput');

madLibOutputDiv.innerHTML = `<p>${story}</p>`