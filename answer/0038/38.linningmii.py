class Solution:
    def countAndSay(self, n):
        """
        :type n: int
        :rtype: str
        """

        answer = "1"

        for i in range(0, n - 1):
            answer = self.say(answer)

        return answer

    def say(self, string):
        group = []

        for i in range(len(string)):
            if i == 0:
                group.append(string[i])
                continue

            if string[i] == string[i - 1]:
                group[-1] += string[i]
            else:
                group.append(string[i])

        answer = ''

        for part in group:
            answer += str(len(part)) + str(part[0])

        return answer


solution = Solution()

print(solution.countAndSay(1))  # "1"
print(solution.countAndSay(4))  # "1211"
print(solution.countAndSay(5))  # "111221"
print(solution.countAndSay(6))  # "312211"
