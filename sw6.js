function reverse_a_string(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_string("bahay kubo"));