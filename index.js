function theBeatlesPlay(musicians_array, instruments_array){
	var combined_array = []
	for(var i = 0; i < musicians_array.length; i++){
		combined_array.push(musicians_array[i] + " plays " + instruments_array[i])
	}
	return combined_array
}

function johnLennonFacts(facts_array){
	var i = 0
	while(i < facts_array.length){
		facts_array[i] += '!!!'
		i++
	}
	return facts_array
}

function iLoveTheBeatles(num){
	var array = []
	do {
		array.push("I love the Beatles!")
		num++
	} while(num < 15)
	return array
}