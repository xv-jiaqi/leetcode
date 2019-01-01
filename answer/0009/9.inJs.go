package main

import "fmt"

func reverse(x int) int {
	newX := 0

	for x > 0 {
		remainder := x % 10
		newX *= 10
		newX += remainder
		x /= 10
	}

	return newX
}

func isPalindrome(x int) bool {
	if (x < 0) {
		return false
	}

	if(x < 10) {
		return true
	}

	if (x != reverse(x)) {
		return false
	}

	return true
}

func main() {
	fmt.Println(isPalindrome(10))
}